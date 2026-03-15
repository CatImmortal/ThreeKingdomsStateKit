[根目录](../../CLAUDE.md) > [src](../CLAUDE.md) > **ui**

# src/ui/ - Vue 系统界面

本目录实现 ThreeKingdomsStateKit 当前唯一的前端可视界面：挂载在宿主页面上的 Vue 浮动系统界面。

它不再向消息正文注入旧 HTML 状态栏；系统界面默认隐藏，通过快速回复按钮 **`系统界面开关`** 手动显示或隐藏。玩家选项与 NPC 详情则以独立浮层形式管理。

---

## 模块职责

在 AI 回复处理完成后，`runtime.ts` 会把最新状态与玩家选项同步到 `src/ui/store.ts`。`src/ui/` 只消费这些响应式数据，不直接参与命令解析、状态持久化或楼层正文改写。

当前目录职责包括：
- 在宿主页面挂载/卸载 Vue 应用
- 维护系统界面、玩家选项悬浮窗、NPC 详情窗的显隐、位置与快照数据
- 渲染正式系统界面、独立玩家选项浮窗与 NPC 详情浮层
- 承接“系统界面默认隐藏、玩家选项自动出现、NPC 可开多详情窗”的交互模型

---

## 入口与启动

```ts
import { mountUnifiedPanelApp, unmountUnifiedPanelApp } from './src/ui/app';

mountUnifiedPanelApp();   // 返回 boolean，表示是否成功挂载
unmountUnifiedPanelApp(); // 卸载 Vue 应用并清理 DOM
```

实际通常由以下入口驱动：
- `runtime.ts` 中的 `toggleVuePanel()`、`确保Vue面板已挂载()`
- `runtime-auto.ts` 自动注册的 `setupVuePanelToggleButtonHook('系统界面开关')`
- `runtime.ts` 在聊天切换或统一 teardown 时调用 `unmountUnifiedPanelApp()`

挂载根节点：
- DOM 根节点：`#tk-vue-root`
- 样式节点：`#tk-vue-root-style`
- 挂载位置：宿主页面 `document.body`
- 样式注入位置：宿主页面 `document.head`
- 宿主文档来源：通过 `src/dom-host.ts` 获取，避免落到 iframe 沙箱里

---

## 文件结构

```text
src/ui/
├── app.ts                                  # Vue 应用挂载/卸载与样式注入
├── SystemUiRoot.vue                        # 根组件，组合三个浮层入口
├── styles.css                              # 样式源码参考（运行时实际由 app.ts 注入）
├── store.ts                                # 响应式共享状态
├── drag.ts                                 # 公共拖拽与默认定位工具
├── views/
│   ├── UnifiedPanel.vue                    # 系统界面主窗
│   ├── PlayerOptionsFloatingPanel.vue      # 玩家选项悬浮窗
│   └── NpcDetailWindows.vue                # NPC 详情窗列表
└── components/
    ├── PlayerOptionsPanel.vue              # 玩家选项按钮列表
    ├── StatusBarPanel.vue                  # 一级页签容器
    └── status/
        ├── qualityStyles.ts                # 品质/等级/伤势文本样式工具
        ├── AptitudeRadarChart.vue          # 兵种适性雷达图
        ├── ArmyPanel.vue                   # 军队页签
        ├── BoundedBar.vue                  # 通用进度条
        ├── CityRadarChart.vue              # 城池属性雷达图
        ├── FactionPanel.vue                # 势力页签
        ├── HeroPanel.vue                   # 主角页签
        ├── NpcDetailPanel.vue              # NPC 详情内容
        ├── NpcPanel.vue                    # NPC 列表页签
        ├── QuestPanel.vue                  # 任务页签
        ├── RadarChart.vue                  # 六维雷达图
        └── ShopPanel.vue                   # 商城页签
```

---

## 对外接口

### `app.ts`

| 函数 | 签名 | 说明 |
|---|---|---|
| `mountUnifiedPanelApp()` | `() => boolean` | 创建并挂载 Vue 应用；已挂载时直接返回 `true` |
| `unmountUnifiedPanelApp()` | `() => void` | 卸载应用并清理根节点与样式节点 |

内部大致流程：`getHostDocument()` → `ensureStyle(hostDocument)` → `ensureRoot()` → `createApp(SystemUiRoot).mount(root)`。

样式策略：
- `STYLE_TEXT` 为完整内联 CSS 字符串
- 运行时写入 `#tk-vue-root-style`
- 这样可以避免宿主只加载单个 JS 文件时，额外 `index.css` 无法自动加载的问题

---

### `store.ts`

响应式状态根对象：`unifiedPanelState`。

```ts
{
  systemPanel: {
    visible: boolean;
    latestMessageId: number | null;
    state: 状态总表 | null;
    position: PanelPosition;
  };
  playerOptionsPanel: {
    visible: boolean;
    latestMessageId: number | null;
    options: 玩家选项[];
    position: PanelPosition;
  };
  npcDetailWindows: NpcDetailWindowState[];
}
```

相关类型：
- `PanelPosition = { mode: 'default' | 'custom'; left: number; top: number }`
- `NpcDetailWindowState = { id, npcName, latestMessageId, position, zIndex }`

位置持久化：
- 系统界面：`localStorage['tk-system-panel-position']`
- 玩家选项窗：`localStorage['tk-player-options-panel-position']`
- NPC 详情窗当前位置只保存在内存，不写入 `localStorage`

主要状态函数：

| 函数 | 说明 |
|---|---|
| `updateSystemPanelState({ messageId, state })` | 更新系统界面数据，但**不自动显示** |
| `updatePlayerOptionsPanelState({ messageId, options? })` | 更新玩家选项，有内容时自动显示 |
| `setSystemPanelVisible(visible)` | 显式切换系统界面显隐 |
| `setPlayerOptionsPanelVisible(visible)` | 显式切换玩家选项窗显隐 |
| `setSystemPanelPosition(left, top)` | 更新并持久化系统界面位置 |
| `setPlayerOptionsPanelPosition(left, top)` | 更新并持久化玩家选项窗位置 |
| `resetSystemPanelPosition()` | 重置系统界面到默认定位 |
| `resetPlayerOptionsPanelPosition()` | 重置玩家选项窗到默认定位 |
| `openNpcDetailWindow(npcName)` | 打开 NPC 详情窗，成功时返回窗口 id |
| `closeNpcDetailWindow(id)` | 关闭指定 NPC 窗口 |
| `focusNpcDetailWindow(id)` | 提升指定 NPC 窗口 z-index |
| `setNpcDetailWindowPosition(id, left, top)` | 更新 NPC 窗口位置 |
| `resetNpcDetailWindowPosition(id)` | 重置 NPC 窗口到默认堆叠位 |
| `clearUnifiedPanelState()` | 清空全部 UI 状态并隐藏所有浮层 |

关键约束：`updateSystemPanelState()` 不会把 `systemPanel.visible` 改为 `true`。系统界面始终需要手动打开。

---

### `drag.ts`

与 Vue 无关的纯函数工具：

| 函数 | 说明 |
|---|---|
| `clampToViewport(value, min, max)` | 将数值限制在视口合法范围 |
| `computeCenteredPosition(panelWidth, panelHeight, viewportWidth, viewportHeight)` | 计算居中位置 |
| `computeInputAbovePosition(inputRect, panelWidth, panelHeight, viewportWidth, viewportHeight)` | 计算输入框上方的默认位置 |
| `attachDragHandlers({ event, panel, win, onMovePosition })` | 绑定 `pointermove` / `pointerup` 实现拖拽 |

`DragPosition` 类型：`{ left: number; top: number }`。

---

## 组件说明

### `SystemUiRoot.vue`

根组件，只负责组合三个入口：

```html
<UnifiedPanel />
<PlayerOptionsFloatingPanel />
<NpcDetailWindows />
```

自身几乎不包含业务逻辑，完全依赖 `unifiedPanelState` 驱动显隐与数据传递。

---

### `views/UnifiedPanel.vue`

系统界面主窗。

职责：
- 根据 `unifiedPanelState.systemPanel.visible` 控制显示
- 标题栏展示世界摘要（时间 / 地点 / 天气 / 剧本）
- 提供重置位置和关闭按钮
- 默认使用 `computeCenteredPosition` 定位
- 承载 `StatusBarPanel.vue` 作为主内容区
- 支持拖拽，结束时持久化位置

---

### `views/PlayerOptionsFloatingPanel.vue`

玩家选项悬浮窗。

职责：
- 根据 `unifiedPanelState.playerOptionsPanel.visible` 控制显示
- 默认定位在输入框上方
- 承载 `PlayerOptionsPanel.vue`
- 支持拖拽与位置重置

---

### `views/NpcDetailWindows.vue`

NPC 详情浮层列表，支持多窗口并发。

职责：
- 遍历 `npcDetailWindows` 渲染多个独立窗口
- 通过 `zIndex` 管理层叠关系
- 点击窗口时调用 `focusNpcDetailWindow()` 提升层级
- 每个窗口都可独立拖拽、重置位置、关闭
- 内容由 `NpcDetailPanel.vue` 承载

---

### `components/PlayerOptionsPanel.vue`

职责：
- 渲染玩家选项按钮列表
- 点击后调用 `handlePlayerOptionClick(latestMessageId, option.text)`
- 无选项时显示空状态文案

---

### `components/StatusBarPanel.vue`

系统信息一级页签容器。

当前一级页签：
- 主角
- 当前地点 NPC
- 任务
- 商城
- 军队
- 势力

其中：
- 主角页签承载属性、装备、背包、武技、专长、后宫、武将等二级内容
- NPC 页签可点击打开独立 NPC 详情窗
- 任务与商城页签会按类型/分类生成二级切换

---

### `components/status/qualityStyles.ts`

纯工具模块，用于生成文字或 SVG 的内联样式。

| 函数 | 适用对象 |
|---|---|
| `品质文本样式(品质?)` | NPC 品质 |
| `物品品质文本样式(品质?)` | 物品品质 |
| `属性等级文本样式(等级?)` | 六维与专长等级 |
| `属性等级SVG文本样式(等级?)` | SVG 中使用 `fill` 的属性等级 |
| `武技等级文本样式(等级?)` | 武技等级 |
| `伤势文本样式(伤势?)` | 完好 / 轻伤 / 中伤 / 重伤 / 濒死 |

颜色策略大致为：低档偏冷/中性，高档偏暖金；伤势越重越偏深红。

---

### `components/status/RadarChart.vue` / `AptitudeRadarChart.vue` / `CityRadarChart.vue`

三个 SVG 雷达图组件：
- `RadarChart.vue`：六维属性，显示属性名、数值/加值、等级
- `AptitudeRadarChart.vue`：兵种适性雷达图
- `CityRadarChart.vue`：城池农业/商业/民心/治安/繁荣度雷达图

共同特点：
- 预留底部空间，避免标签裁切
- 填充区使用半透明褐金色
- 兼顾宿主页面中的窄屏显示

---

### `components/status/BoundedBar.vue`

通用有界进度条组件，接收 `current`、`max`、`colorClass` 等 props，渲染一行带颜色语义的进度条。

常见颜色类：`is-hp`、`is-sp`、`is-morale`、`is-fatigue`、`is-gold`、`is-green`、`is-cyan`、`is-purple`、`is-rose`。

---

## 样式与宿主集成

当前宿主环境只稳定加载单个 JS 产物，因此 UI 样式由 `app.ts` 运行时直接注入宿主 `document.head`。

覆盖内容包括：
- 根容器与浮层壳子
- 标题栏、按钮、内容区
- 页签、详情卡片、列表与折叠块
- 雷达图样式
- 多色进度条
- 响应式断点样式

`src/ui/styles.css` 仍可作为样式源码参考，但实际运行以 `app.ts` 中的 `STYLE_TEXT` 为准。

---

## 当前交互模型

1. 系统界面默认隐藏；AI 回复完成后只同步数据，不自动弹出
2. 点击 `系统界面开关` 后显示，再次点击则隐藏
3. 系统界面默认居中，可拖拽，支持一键重置位置
4. 玩家选项窗由 `MESSAGE_SENT`、`MESSAGE_RECEIVED`、`MESSAGE_DELETED`、`CHAT_CHANGED` 驱动刷新
5. 玩家选项窗只有在“当前最新楼层”为带有效 `<PlayerOptions>` 的 assistant 消息时才显示
6. 玩家选项点击后会格式化为 `（选项文本）` 再填入宿主输入框
7. 聊天切换时会清理现有 UI，并调度从新聊天恢复状态
8. NPC 列表支持打开多个独立详情窗，并通过 z-index 管理前后层级
9. `pagehide` 场景下，运行时会执行统一清理，避免 iframe 残留监听

---

## 相关文件清单

| 文件 | 说明 |
|---|---|
| `src/ui/app.ts` | 挂载/卸载逻辑与样式注入 |
| `src/ui/SystemUiRoot.vue` | 根组件 |
| `src/ui/styles.css` | 样式源码参考 |
| `src/ui/store.ts` | 响应式共享状态 |
| `src/ui/drag.ts` | 拖拽与定位工具 |
| `src/ui/views/UnifiedPanel.vue` | 系统界面主窗 |
| `src/ui/views/PlayerOptionsFloatingPanel.vue` | 玩家选项悬浮窗 |
| `src/ui/views/NpcDetailWindows.vue` | NPC 详情窗列表 |
| `src/ui/components/PlayerOptionsPanel.vue` | 玩家选项组件 |
| `src/ui/components/StatusBarPanel.vue` | 一级页签容器 |
| `src/ui/components/status/qualityStyles.ts` | 文本样式工具 |
| `src/ui/components/status/HeroPanel.vue` | 主角页签 |
| `src/ui/components/status/NpcPanel.vue` | NPC 列表页签 |
| `src/ui/components/status/NpcDetailPanel.vue` | NPC 详情内容 |
| `src/ui/components/status/QuestPanel.vue` | 任务页签 |
| `src/ui/components/status/ShopPanel.vue` | 商城页签 |
| `src/ui/components/status/ArmyPanel.vue` | 军队页签 |
| `src/ui/components/status/FactionPanel.vue` | 势力页签 |
| `src/ui/components/status/RadarChart.vue` | 六维雷达图 |
| `src/ui/components/status/AptitudeRadarChart.vue` | 兵种适性雷达图 |
| `src/ui/components/status/CityRadarChart.vue` | 城池属性雷达图 |
| `src/ui/components/status/BoundedBar.vue` | 通用进度条 |

---

## 已删除的旧实现

以下旧实现已经移除，不应再作为当前结构依据：
- `src/status-panel.ts`
- `src/player-options.ts`
- `src/player-options-panel.ts`
- `src/ui/views/UnifiedPanel.ts`
- `src/ui/components/PlayerOptionsPanel.ts`
- `src/ui/components/StatusBarPanel.ts`
- `src/ui/root.ts`
- `src/ui/App.vue`
- `src/ui/router.ts`

---

## 变更记录 (Changelog)

| 时间 | 描述 |
|---|---|
| 2026-03-15 | 同步 NPC 详情多窗口、位置管理、qualityStyles、drag 与 pagehide 清理等当前实现；统一术语与措辞 |
| 2026-03-14 | 初始化文档，切换为正式 Vue 系统界面实现 |
