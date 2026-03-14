[根目录](../CLAUDE.md) > **src**

# src/ - 核心源码模块

本目录包含 ThreeKingdomsStateKit 的全部 TypeScript 源代码，按职责划分为以下子模块。

---

## 模块职责

`src/` 是本项目唯一的源码目录，以单层（除 `ui/` 子目录外）平铺结构组织，各文件职责高度内聚、依赖方向清晰。

### 依赖层次（从底层到顶层）

```
rules.ts
    ↓
state.ts
    ↓
commands.ts  ←  recompute.ts
    ↓               ↓
executor.ts  ←  storage.ts
    ↓
protocol.ts
    ↓
context.ts
    ↓
bridge.ts
    ↓
macro.ts  ←  runtime.ts  ←  runtime-auto.ts
    ↓              ↓
index.ts（入口，全局挂载）
    ↓
ui/（Vue 3 双悬浮窗子系统）  ←  dom-host.ts
```

---

## 各文件详解

### `rules.ts` - 游戏规则与计算

**职责**：定义所有枚举常量、等级表格、数学计算函数。

关键导出：

| 名称 | 类型 | 说明 |
|---|---|---|
| `枚举` | const 对象 | 所有枚举值数组，同时用于运行时类型校验 |
| `城池基础` | const 对象 | 各城池等级的税收/产粮/城防上限/驻军上限等基础值 |
| `等级系数` / `军队装备系数` | const 对象 | 军队战力计算系数 |
| `阵型数据` | const 对象 | 八种阵型的攻击/防御修正系数 |
| `数值(value, fallback)` | 函数 | 安全转换为数字，失败返回 fallback |
| `限制数值(value, min, max)` | 函数 | clamp 限制范围 |
| `计算加值(属性值)` | 函数 | 六维属性转战斗加值（分段线性） |
| `计算伤势(当前, 上限)` | 函数 | 返回 `{_伤势, _战斗减值}` |
| `声望称号` / `忠诚等级` / `好感等级` / `交情等级` / `外交等级` / `士气等级` / `疲惫等级` 等 | 函数 | 数值转文字等级称号 |
| `士气系数` / `疲惫系数` / `统率系数` | 函数 | 军队战力计算中间系数 |
| `汇总装备加值(装备)` | 函数 | 汇总装备栏所有槽位的先攻/攻击/防御DC/减免加值 |

支持的枚举类型（均以 TypeScript 字面量联合类型导出）：品质、装备品质、武技等级、武技类型、剧本、武将性格、武将状态、美人位份、美人性格、美人状态、任务类型、商品分类、任务状态、任务目标类型、任务目标状态、势力规模、城池等级、军队等级、军队装备等级、阵型（共 20 种）。

---

### `state.ts` - 数据类型与工厂函数

**职责**：定义游戏所有实体的 TypeScript 类型，以及对应的工厂函数（负责数据合法性校验与默认值填充）。

主要类型：

| 类型 | 说明 |
|---|---|
| `六维` | 武力/智力/统率/政治/魅力/体质 + 对应 `_*加值` 派生字段 |
| `角色战斗数据` | 六维 + 生命/体力 + 装备 + 武技 + 专长 + 状态 + 多个 `_*` 派生字段 |
| `主角` | 继承 `角色战斗数据`，额外增加物品栏、声望、金钱、积分、官职、爵位、后宫和谐度 |
| `NPC` | 名称、品质、阵营、定位、好感、简述、羁绊 + 可选 `角色数据?`、`武将信息?`、`美人属性?` |
| `势力` | 名称、规模、正统性、情报网、金钱、粮草、城池、军队、外交、政策 + 多个 `_*` 派生字段 |
| `城池` | 等级、城防、人口、农业、商业、民心、治安、繁荣度、太守、设施[] + `_*` 派生字段 |
| `军队` | 兵种、等级、兵力、士气、疲惫、装备等级、统属将领、驻扎地、训练进度、阵型 + `_*` 派生字段 |
| `状态总表` | 顶层状态根，含 meta + 世界 + 主角 + 势力 + NPC + 任务 + 商城 |
| `势力集合` | `Record<string, 势力>`，支持多势力 |

工厂函数（`create*`）：对输入进行枚举校验、数值范围 clamp、类型转换，确保输出合法。

特别说明：`create势力集合` 能自动识别传入的是单势力对象还是势力 Map，实现向后兼容。

---

### `commands.ts` - 命令类型定义与校验

**职责**：定义 AI 可发出的所有状态命令的 TypeScript union type，以及严格的字段白名单校验逻辑。

命令类型列表（共 20 种）：

```
UpdateWorld / AppendRecentEvent / UpdatePlayerBase / AdjustPlayerResource
UpdateFaction / UpsertCity / RemoveCity / AddCityFacility / RemoveCityFacility
UpsertArmy / RemoveArmy / UpdateDiplomacy / UpdatePolicy
UpsertNpc / RemoveNpc / UpdateNpcRelation
UpsertQuest / RemoveQuest / UpdateQuestState
UpsertShopItem / RemoveShopItem
```

关键校验机制：

- **字段白名单**：每种命令类型均有 `命令字段白名单`，多余字段会报错
- **`断言无下划线字段`**：递归检查命令中所有 `_` 前缀字段，防止 AI 修改只读派生字段
- **枚举校验**：枚举类型字段通过 `枚举.*` 数组进行运行时校验

---

### `executor.ts` - 命令执行引擎

**职责**：接收命令列表，逐条修改状态副本，执行完成后调用 `recompute全局` 重算派生字段，返回最终状态。

关键函数：

| 函数 | 说明 |
|---|---|
| `执行命令(state, commandInput)` | 纯内存执行，返回 `{ state, applied }` |
| `执行并保存命令(state, commandInput, messageId)` | 执行后调用 `保存状态` 写入楼层 |

执行流程：克隆状态 → 逐条 switch 应用命令 → `recompute全局` → 返回。

---

### `recompute.ts` - 派生字段重算

**职责**：由基础数值字段计算所有 `_` 前缀只读派生字段。

函数：

| 函数 | 重算内容 |
|---|---|
| `recompute六维` | 六项 `_*加值` |
| `recompute角色战斗数据` | 生命/体力上限、伤势、先攻值、攻击/伤害基础值、防御DC、伤害减免 |
| `recompute美人属性` | 依赖/敏感/贞洁等级 |
| `recomputeNPC` | 忠诚/好感/交情等级（按 NPC 类型分支）|
| `recompute主角` | 继承角色战斗数据重算 + 声望称号 + 和谐等级 + 过滤零数量物品 |
| `recompute城池` | 城防上限、防御系数、月税收、月产粮、指令槽 |
| `recompute军队` | 士气等级、疲惫等级、阵型修正、统率系数、综合/攻击/防御战力 |
| `recompute势力` | 汇总月税收/月产粮、总兵力、总战力、月军饷/粮草估算、外交等级 |
| `recompute势力集合` | 遍历所有势力执行 `recompute势力` |
| `recompute全局` | 按序重算世界、主角、NPC、势力，过滤已完成/失败任务，更新 `meta.updatedAt` |

---

### `protocol.ts` - AI 回复协议解析

**职责**：定义协议标签常量，解析 AI 回复文本中的命令块和玩家选项块。

协议标签：

```
<UpdateVariable> ... </UpdateVariable>   ← 外层包装
<Analysis> ... </Analysis>              ← AI 分析（不处理）
<Commands> [...] </Commands>            ← JSON 命令数组
<PlayerOptions> [...] </PlayerOptions>  ← JSON 玩家选项数组
```

关键函数：

| 函数 | 说明 |
|---|---|
| `解析命令块(replyText)` | 提取并返回 `{ commandsText, commands, replyText }` |
| `解析玩家选项块(replyText)` | 提取并返回 `玩家选项[]` |
| `移除命令协议块(replyText)` | 从正文中清除 `<UpdateVariable>...</UpdateVariable>` 协议块 |
| `移除玩家选项块(replyText)` | 从正文中清除 PlayerOptions 块（当前运行时显隐判断仍可单独复用） |
| `包装命令块(commands, analysis)` | 生成符合协议格式的字符串（测试/调试用） |

---

### `bridge.ts` - 高阶流程编排

**职责**：将协议解析 → 命令执行 → 状态保存 → 正文清理 → UI 同步 串联为单一高阶 API。

关键函数：

| 函数 | 说明 |
|---|---|
| `handleAssistantReply(replyText, options)` | 主流程入口：加载上一楼层状态 → 提取应用保存命令 → 更新消息正文 |
| `extractAndApplyCommands(replyText, state)` | 仅提取 + 应用，不写存储 |
| `extractApplyAndSaveCommands(...)` | 提取 + 应用 + 保存 + 刷新宏 + 更新消息正文 |
| `buildInjectedContext(state)` | 构建 AI 上下文注入文本 |
| `appendReplyDecorators(...)` | 清理命令协议块，但保留 `<PlayerOptions>` 文本，不再附加旧状态栏 HTML |
| `refreshContextMacro(state, macroKey)` | 刷新宏变量内容 |

说明：当前版本中，assistant 消息正文不再注入 `<StatusBar>` 或 `<PlayerOptionsPanel>`，但会保留原始 `<PlayerOptions>` 文本供宿主外部正则隐藏；前端可视界面由 `src/ui/` Vue 双悬浮窗系统承接。

---

### `storage.ts` - 状态持久化

**职责**：以 SillyTavern 聊天楼层的 `data.sgbz_state` 字段为存储介质，实现状态快照的读写与过期清理。

存储策略：

- 每条 assistant 消息的 `data.sgbz_state` 字段保存当时的完整状态快照
- 最多保留最近 **10 条**快照（`MAX_SAVED_STATE_MESSAGES = 10`），更早的自动清理
- 加载状态时从最新快照往前搜索（`读取原始状态`），找到则 `create初始状态` + `recompute全局`
- 如果用户删除了当前最新楼层，状态恢复会自动回退到上一个仍带有效 `data.sgbz_state` 的 assistant 楼层快照

关键函数：

| 函数 | 说明 |
|---|---|
| `加载状态(截止消息ID?)` | 搜索并加载最近有效快照，缺省返回初始状态 |
| `保存状态(state, messageId)` | 重算后写入楼层 data 字段，并清理过期快照 |
| `更新消息正文(messageId, message)` | 写入楼层正文；当前会清理命令协议块，但保留 `<PlayerOptions>` 文本，不再附加旧状态栏 |
| `初始化状态(seed, messageId)` | 以 seed 创建初始状态并保存 |
| `更新状态(updater, messageId)` | 加载上一楼层状态 → 应用 updater → 保存 |

---

### `context.ts` - 上下文注入构建

**职责**：从完整状态中筛选 AI 需要的信息，构建注入提示词的 JSON 文本。

筛选规则：

- NPC：优先与当前地点相关（驻扎地或简述含地点关键字），最多 8 个
- 任务：仅展示"进行中/可提交/可接取"状态的，最多 8 个
- 商城：最多 12 个条目
- 势力：展示第一个势力（当前势力）

输出格式：`[三国霸主系统状态]\n以下状态为只读上下文...\n{JSON}`

---

### `dom-host.ts` - 宿主文档桥接

**职责**：在 iframe/沙箱运行环境中获取真正可见的宿主 `document` / `window`，确保 Vue UI 的根节点、样式注入和交互访问都落在宿主页面而不是隐藏 iframe。

关键函数：

| 函数 | 说明 |
|---|---|
| `getHostDocument()` | 返回宿主页面 `document` |
| `getHostWindow()` | 返回宿主页面 `window` |

---

### `debug.ts` - 调试日志

**职责**：提供分级日志（log/info 默认关闭，warn/error 始终输出），支持运行时开关。

```typescript
setDebugEnabled(true)   // 开启 log/info 输出
setDebugEnabled(false)  // 关闭 log/info 输出（warn/error 不受影响）
```

辅助函数：`summarizeState(state)` 返回状态摘要对象，`summarizeValue(value)` 返回值的简要描述。

---

### `macro.ts` - 宏注册

**职责**：向 SillyTavern 的 `registerMacroLike` 注册 `{{sgbz_context}}` 宏。

宏被触发时调用 `buildInjectedContext(加载状态(messageId))`，将当前状态注入到提示词。

---

### `runtime-auto.ts` - 自动接线入口

**职责**：库加载时自动注册运行时钩子，所有注册均以 try-catch 包裹，失败不影响库其他功能。

自动注册：

1. `setupAssistantReplyHook()` - 订阅 `MESSAGE_RECEIVED` 事件
2. `setupMessageSentHook()` - 订阅 `MESSAGE_SENT`，用户发言后按最新楼层刷新玩家选项窗
3. `setupMessageDeletedHook()` - 订阅 `MESSAGE_DELETED`，删除楼层后按最新楼层刷新玩家选项窗
4. `setupDebugParseButtonHook('解析命令')` - 注册"解析命令"快速回复按钮
5. `setupDebugLogToggleButtonHook('日志开关')` - 注册"日志开关"按钮
6. `setupVuePanelToggleButtonHook('系统界面开关')` - 注册系统界面开关按钮
7. `setupChatChangedHook()` - 订阅 `CHAT_CHANGED`，聊天切换时清理双悬浮窗
8. `setupCharacterPageLoadedHook()` - 订阅 `CHARACTER_PAGE_LOADED`，角色卡切换完成后按 `characterId` 兜底销毁全部 Vue 界面

---

### `runtime.ts` - SillyTavern 运行时接线

**职责**：与宿主 SillyTavern 环境交互的所有逻辑，包括事件订阅、Vue 双悬浮窗挂载、玩家选项处理与聊天切换清理。

关键公开函数：

| 函数 | 说明 |
|---|---|
| `setupAssistantReplyHook(options)` | 订阅 `MESSAGE_RECEIVED`，自动处理 AI 回复 |
| `teardownAssistantReplyHook()` | 取消订阅 |
| `setupMessageSentHook()` / `teardownMessageSentHook()` | 监听 `MESSAGE_SENT`，按当前最新楼层刷新玩家选项窗 |
| `setupMessageDeletedHook()` / `teardownMessageDeletedHook()` | 监听 `MESSAGE_DELETED`，按当前最新楼层刷新玩家选项窗 |
| `setupDebugParseButtonHook(buttonName)` | 注册调试按钮（手动触发解析） |
| `setupDebugLogToggleButtonHook(buttonName)` | 注册日志开关按钮 |
| `setupVuePanelToggleButtonHook(buttonName)` | 注册系统界面开关按钮并确保 Vue UI 可挂载 |
| `toggleVuePanel()` | 切换系统界面显示/隐藏 |
| `teardownVuePanelToggleButtonHook()` | 卸载系统界面按钮逻辑并清理挂载 |
| `setupChatChangedHook()` | 订阅 `CHAT_CHANGED`，聊天切换时清理双悬浮窗 |
| `teardownChatChangedHook()` | 取消聊天切换钩子 |
| `setupCharacterPageLoadedHook()` / `teardownCharacterPageLoadedHook()` | 监听 `CHARACTER_PAGE_LOADED`，角色卡切换完成后按 `characterId` 兜底销毁全部 Vue 界面 |
| `handlePlayerOptionClick(messageId, optionText)` | 处理玩家选项点击，填充输入框 |
| `updatePlayerOptionsView(messageId, options)` | 触发基于最新楼层的玩家选项窗刷新 |
| `clearPlayerOptionsView()` | 清理独立玩家选项悬浮窗 |

输入框填充策略：优先通过 `/setinput` slash 命令，回退到 DOM 操作（兼容 `<textarea>`、`<input>` 和 `contenteditable` 元素）。玩家选项窗显隐现在由 `MESSAGE_SENT / MESSAGE_RECEIVED / MESSAGE_DELETED / CHAT_CHANGED` 触发，并以“当前最新楼层是否为带有效 `<PlayerOptions>` 的 assistant 消息”为准；运行时防重键现已包含 `chatId + messageId + message`，避免跨聊天把新楼层误判成重复消息。

---

### `index.ts` - 入口与全局挂载

**职责**：导出运行时核心 API，组装收缩后的 `ThreeKingdomsStateKit` 命名空间对象，挂载到 `window` 和 `initializeGlobal`，注册宏。

```typescript
window.ThreeKingdomsStateKit = {
  结构: { create世界, create主角, createNPC, ... },
  协议: { 解析命令块, 解析玩家选项块, ... },
  handleAssistantReply,
  setupAssistantReplyHook,
  setupMessageSentHook,
  setupMessageDeletedHook,
  setupChatChangedHook,
  setupCharacterPageLoadedHook,
  setupVuePanelToggleButtonHook,
  toggleVuePanel,
  handlePlayerOptionClick,
  teardownRuntimeHooks,
  setDebug,
  getDebug,
  registerSgbzMacros,
}
```

说明：当前 `src/index.ts` 不再继续 `export *` 透传完整 `rules / commands / storage / executor / context / dom-host / recompute` 模块全集，以降低单个 `dist/index.js` bundle 体积；AI 回复自动解析链路仍通过内部 import 正常工作，不受公开面收缩影响。

---

## 入口与启动

- 构建入口：`src/index.ts`
- 构建命令：`pnpm build`
- 输出：`dist/index.js`（ESM，浏览器平台，压缩产物）
- 加载后自动执行 `runtime-auto.ts` 注册钩子，并尝试注册宏

---

## 关键依赖与配置

| 依赖 | 版本 | 用途 |
|---|---|---|
| `vue` | ^3.5.30 | Vue 3 浮动面板 |
| `tsup` | ^8.5.0 | 打包工具 |
| `unplugin-vue` | ^7.1.1 | Vue SFC 编译 esbuild 插件 |
| `typescript` | ^5.8.2 | TypeScript 编译器 |
| `vue-tsc` | ^3.2.5 | Vue 类型检查 |
| `@types/lodash` | ^4.17.24 | lodash 类型声明（lodash 由宿主注入） |

全局隐式依赖（宿主注入，在 `global.d.ts` 声明）：

- `_`：lodash 实例
- `initializeGlobal(name, value)`：全局对象注册函数（可选）

---

## 相关文件清单

| 文件 | 说明 |
|---|---|
| `src/index.ts` | 打包入口，全局挂载 |
| `src/state.ts` | 类型定义与工厂函数 |
| `src/rules.ts` | 枚举与规则计算 |
| `src/commands.ts` | 命令类型与校验 |
| `src/executor.ts` | 命令执行引擎 |
| `src/recompute.ts` | 派生字段重算 |
| `src/protocol.ts` | AI 协议解析 |
| `src/bridge.ts` | 高阶流程编排 |
| `src/storage.ts` | 状态持久化 |
| `src/context.ts` | 上下文注入构建 |
| `src/runtime.ts` | 运行时接线 |
| `src/runtime-auto.ts` | 自动接线 |
| `src/macro.ts` | 宏注册 |
| `src/dom-host.ts` | 宿主文档桥接 |
| `src/debug.ts` | 调试日志 |
| `src/ui/` | Vue 3 双悬浮窗系统（见子模块文档） |
| `tsup.config.ts` | 构建配置 |
| `tsconfig.json` | TypeScript 编译配置 |
| `global.d.ts` | 全局类型声明 |

---

## 变更记录 (Changelog)

| 时间 | 描述 |
|---|---|
| 2026-03-14 | 初始化文档，全量扫描 src/ 所有文件生成 |
