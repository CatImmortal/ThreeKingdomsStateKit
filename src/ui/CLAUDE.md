[根目录](../../CLAUDE.md) > [src](../CLAUDE.md) > **ui**

# src/ui/ - Vue 系统界面

本目录实现 ThreeKingdomsStateKit 当前唯一的前端可视界面：**Vue 3 浮动系统界面**。

它不再是消息正文里的内嵌状态栏，而是挂载在宿主页面底部的独立浮层，默认隐藏，通过快速回复按钮 **`系统界面开关`** 手动显示或隐藏。

---

## 模块职责

在 AI 每次回复处理完成后，`runtime.ts` 会把最新状态和玩家选项同步到 `src/ui/store.ts`。Vue 系统界面只消费这些响应式数据，不再向消息正文写回旧 HTML 片段。

当前目录职责包括：

- 在宿主页面挂载/卸载 Vue 应用
- 维护系统界面与玩家选项悬浮窗的显隐状态、位置与最新数据快照
- 渲染正式系统界面与独立玩家选项悬浮窗
- 承接“系统界面默认隐藏、玩家选项有内容时自动出现”的交互模式

---

## 入口与启动

**挂载方式**：

```typescript
import { mountUnifiedPanelApp, unmountUnifiedPanelApp } from './src/ui/app';

mountUnifiedPanelApp();
unmountUnifiedPanelApp();
```

实际使用时通常不直接手动调用，而是由：

- `runtime.ts` 中的 `toggleVuePanel()`
- `runtime-auto.ts` 自动注册的 `setupVuePanelToggleButtonHook('系统界面开关')`
- `runtime.ts` 中的 `setupChatChangedHook()` 会在宿主 `CHAT_CHANGED` 事件触发时自动清理悬浮窗

来驱动。

**挂载根节点**：

- DOM 元素 ID：`tk-vue-root`
- Style 元素 ID：`tk-vue-root-style`
- 挂载位置：宿主页面 `document.body`（通过 `src/dom-host.ts` 获取宿主 document）
- 样式注入位置：宿主页面 `document.head`
- 布局：页面底部居中固定定位

---

## 文件结构

```text
src/ui/
├── app.ts                     # Vue 应用挂载/卸载逻辑
├── SystemUiRoot.vue           # 正式 SFC 根组件，组合系统界面与玩家选项悬浮窗
├── styles.css                 # UI 全局样式资源
├── store.ts                   # 响应式共享状态（双悬浮窗状态）
├── drag.ts                    # 双悬浮窗公共拖拽与默认定位工具
├── views/
│   ├── UnifiedPanel.vue       # 系统界面主窗
│   └── PlayerOptionsFloatingPanel.vue # 玩家选项独立悬浮窗
└── components/
    ├── PlayerOptionsPanel.vue # 玩家选项按钮列表与点击交互
    ├── StatusBarPanel.vue     # 旧状态栏一级页签容器的 Vue 重建版
    └── status/                # 主角/NPC/任务/商城/军队/势力/RadarChart 子组件
```

---

## 对外接口

### `app.ts`

| 函数 | 签名 | 说明 |
|---|---|---|
| `mountUnifiedPanelApp` | `() => boolean` | 创建并挂载 Vue 系统界面 |
| `unmountUnifiedPanelApp` | `() => void` | 卸载系统界面并清理宿主页面 DOM |

### `store.ts`

| 导出 | 类型 | 说明 |
|---|---|---|
| `unifiedPanelState` | `reactive<UnifiedPanelState>` | 双悬浮窗共享状态 |
| `updateUnifiedPanelState(payload)` | 函数 | 同步最新 messageId/state/options；只更新数据，不自动弹出系统界面 |
| `setSystemPanelVisible(visible)` | 函数 | 显式切换系统界面显示/隐藏 |
| `setPlayerOptionsPanelVisible(visible)` | 函数 | 显式切换玩家选项窗显示/隐藏 |
| `setSystemPanelPosition(position)` | 函数 | 更新系统界面位置 |
| `setPlayerOptionsPanelPosition(position)` | 函数 | 更新玩家选项窗位置 |
| `resetSystemPanelPosition()` | 函数 | 重置系统界面默认居中定位 |
| `resetPlayerOptionsPanelPosition()` | 函数 | 重置玩家选项窗到输入框上方默认定位 |
| `clearUnifiedPanelState()` | 函数 | 清空状态并隐藏双悬浮窗 |

`UnifiedPanelState` 结构现包含 `systemPanel` 与 `playerOptionsPanel` 两部分状态，并持久化双窗位置。

注意：`updateUnifiedPanelState()` **不会**自动把系统界面 `visible` 设为 `true`。这是当前“默认隐藏、手动打开”交互模型的关键约束。

---

## 组件说明

### `views/UnifiedPanel.vue`

系统界面主窗组件。

职责：

- 根据 `unifiedPanelState.systemPanel.visible` 控制显示/隐藏
- 显示顶部标题 `系统界面`
- 展示世界摘要（时间 / 地点 / 天气 / 剧本）
- 承载 `StatusBarPanel.vue`
- 提供系统界面拖拽与位置重置

### `components/PlayerOptionsPanel.vue`

正式玩家选项列表组件。

职责：

- 渲染 `unifiedPanelState.playerOptionsPanel.options`
- 以 Vue 按钮列表形式展示可选行动
- 点击后调用 `handlePlayerOptionClick(latestMessageId, option.text)`
- 无选项时显示“当前没有可选行动”

当前版本中，玩家选项存在于**独立玩家选项悬浮窗**里；同时 `<PlayerOptions>` 文本会保留在消息正文中，供宿主外部正则隐藏。运行时不再依赖一次性返回值，而是通过宿主楼层事件动态重解析最新楼层来决定是否显示选项窗。

### `views/PlayerOptionsFloatingPanel.vue`

玩家选项独立悬浮窗组件。

职责：

- 根据 `unifiedPanelState.playerOptionsPanel.visible` 控制显示/隐藏
- 默认定位在宿主输入框上方
- 承载 `PlayerOptionsPanel.vue`
- 提供玩家选项窗拖拽与位置重置

### `components/StatusBarPanel.vue`

当前系统信息主体组件。

职责：

- 不再复用旧 `status-panel.ts` 生成 HTML 字符串
- 直接以 Vue 组件树重建旧状态栏的信息架构与视觉
- 恢复旧版 6 个一级页签：
  - 主角
  - 当前地点 NPC
  - 任务
  - 商城
  - 军队
  - 势力
- 恢复旧版二级页签：
  - 主角：属性 / 装备 / 背包 / 武技 / 专长 / 后宫 / 武将
  - 任务：按任务类型动态生成二级页签
  - 商城：按商品分类动态生成二级页签

实现方式：

- `UnifiedPanel.vue` 负责外层系统界面标题与世界摘要
- `StatusBarPanel.vue` 负责内部一级页签容器，避免再次渲染重复面板标题
- 各一级页签拆到 `components/status/*.vue` 子组件
- `RadarChart.vue` 负责六维雷达图，当前以 100 为各轴满值，并预留更高底部空间避免“政治”等底部标签被裁切
- 无状态时显示“当前没有状态数据”

---

## 样式与宿主集成

当前宿主（SillyTavern 助手脚本）只稳定加载单个 JS 产物，因此系统界面样式已恢复为由 `app.ts` 在运行时注入宿主 `document.head`：

- 根容器样式
- 面板外壳样式
- 玩家选项按钮样式
- 系统信息 tab / kv / list 样式
- 响应式布局样式

这样做的原因：

- 避免 `import './styles.css'` 被构建链抽成独立 `dist/index.css` 后无法被宿主自动加载
- 保持系统界面在助手脚本单文件注入模式下可见且带完整样式
- 继续通过 `dom-host.ts` 把样式和挂载点桥接到宿主 document，而不是 iframe 沙箱

如需维护样式源码，可继续参考 `src/ui/styles.css`，但实际运行时以 `app.ts` 注入到宿主页面的样式为准。

---

## 当前交互模型

当前系统界面采用以下固定行为：

1. 系统界面默认隐藏，AI 回复处理完成后只同步数据，不自动弹出
2. 点击 `系统界面开关` 后显示，再次点击后隐藏
3. 系统界面默认定位为视口中央，可拖拽移动，重置后回到中央
4. 玩家选项窗由 `MESSAGE_SENT`、`MESSAGE_RECEIVED`、`MESSAGE_DELETED`、`CHAT_CHANGED` 驱动刷新：仅当当前最新楼层仍是带有效 `<PlayerOptions>` 的 assistant 消息时才显示
5. 玩家选项窗默认定位在输入框上方，可拖拽移动
6. 玩家选项点击后填入宿主输入栏，可手动修改再发送
7. 宿主 `CHAT_CHANGED` 事件触发时，双悬浮窗会自动清理
8. 宿主 `CHAT_CHANGED` 事件触发时，会清理旧聊天遗留 UI，并按新聊天重新恢复状态与玩家选项

这意味着：

- 系统界面是**唯一 UI**
- 消息正文不再承担状态栏或玩家选项展示职责
- 不再需要基于 `<StatusBar>` 的外部清理正则

---

## 相关文件清单

| 文件 | 说明 |
|---|---|
| `src/ui/app.ts` | 挂载/卸载逻辑 |
| `src/ui/SystemUiRoot.vue` | 正式 SFC 根组件 |
| `src/ui/styles.css` | UI 全局样式资源 |
| `src/ui/store.ts` | 系统界面响应式状态 |
| `src/ui/views/UnifiedPanel.vue` | 系统界面主窗 |
| `src/ui/views/PlayerOptionsFloatingPanel.vue` | 玩家选项独立悬浮窗 |
| `src/ui/components/PlayerOptionsPanel.vue` | 玩家选项交互组件 |
| `src/ui/components/StatusBarPanel.vue` | 旧状态栏一级页签容器的 Vue 重建版 |
| `src/ui/components/status/` | 主角/NPC/任务/商城/军队/势力/RadarChart 等状态栏子组件 |
| `src/ui/drag.ts` | 双悬浮窗公共拖拽与默认定位 |
| `src/runtime.ts` | 系统界面的开关、同步、聊天切换清理与输入填充入口 |
| `src/runtime-auto.ts` | 自动注册 `系统界面开关` 按钮与聊天切换钩子 |
| `src/dom-host.ts` | 宿主 document/window 桥接 |

---

## 已删除的旧实现

截至 2026-03-14，以下旧实现已删除：

- `src/status-panel.ts`
- `src/player-options.ts`
- `src/player-options-panel.ts`
- `src/ui/views/UnifiedPanel.ts`
- `src/ui/components/PlayerOptionsPanel.ts`
- `src/ui/components/StatusBarPanel.ts`
- `src/ui/root.ts`
- `src/ui/App.vue`
- `src/ui/router.ts`

因此当前 `src/ui/` 文档只描述正式 Vue 系统界面，不再包含旧 HTML 渲染方案。

---

## 变更记录 (Changelog)

| 时间 | 描述 |
|---|---|
| 2026-03-14 | 更新为正式 Vue 系统界面实现，移除旧 HTML 状态栏/玩家选项方案 |
