[根目录](../CLAUDE.md) > **src**

# src/ - 核心源码模块

本目录包含 ThreeKingdomsStateKit 的全部 TypeScript 源码。除 `ui/` 子目录外，其余模块以平铺方式组织，整体遵循“规则与数据定义 → 命令校验与执行 → 存储与上下文 → 运行时接线”的分层思路。

---

## 模块职责

`src/` 是项目唯一的生产源码目录。

### 主调用链（从常见运行路径看）

```text
rules.ts / commander.ts
        ↓
     state.ts
        ↓
commands.ts    recompute.ts
       ↓        ↗
    executor.ts
       ↓
 protocol.ts
       ↓
context.ts   storage.ts
       ↘      ↙
       bridge.ts
          ↓
macro.ts   runtime.ts
     ↘      ↙
   runtime-auto.ts
          ↓
       index.ts
          ↓
         ui/
```

说明：上图表达的是主调用/协作关系，不表示严格的静态依赖 DAG；阅读源码时以实际 import 为准。

---

## 各文件详解

### `rules.ts` - 游戏规则与计算

**职责**：定义所有枚举、常量表、等级映射与数值计算函数。

关键导出：

| 名称 | 类型 | 说明 |
|---|---|---|
| `枚举` | const 对象 | 所有枚举值数组，同时用于运行时校验 |
| `城池基础` | const 对象 | 各城池等级的税收/产粮/城防上限/驻军上限/防御系数/指令槽基础值 |
| `等级系数` / `军队装备系数` | const 对象 | 军队战力计算系数 |
| `军饷基数` | const 对象 | 各军队等级的每千人月军饷基数 |
| `阵型数据` | const 对象 | 八种阵型的攻防修正 |
| `数值(value, fallback)` | 函数 | 安全转数字，失败回退 |
| `限制数值(value, min, max)` | 函数 | clamp 限制范围 |
| `计算加值(属性值)` | 函数 | 六维属性转属性加值 |
| `属性等级(v)` | 函数 | 六维数值转 `低下 ~ 神话` |
| `计算伤势(当前, 上限)` | 函数 | 返回 `{ _伤势, _伤势减值 }` |
| `声望称号` / `忠诚等级` / `好感等级` / `交情等级` / `外交等级` / `士气等级` / `疲惫等级` 等 | 函数 | 数值转文本等级 |
| `士气系数` / `疲惫系数` / `统率系数` / `兵种适性修正` | 函数 | 军队战力计算中间系数 |
| `汇总装备加值(装备)` | 函数 | 汇总装备栏的攻击/防御/减伤等加值 |

当前枚举共 **23** 组，包含：品质、物品品质、物品类型、属性等级、武技等级、武技类型、剧本、武将性格、武将状态、美人位份、美人性格、美人状态、任务类型、商品分类、任务状态、任务目标类型、任务目标状态、势力规模、城池等级、基础兵种、军队等级、军队装备等级、阵型。

---

### `state.ts` - 数据类型与工厂函数

**职责**：定义游戏实体类型与 `create*` 工厂函数，负责输入清洗、默认值填充与结构合法化。

主要类型：

| 类型 | 说明 |
|---|---|
| `六维` | 武力/智力/统率/政治/魅力/体质 + 对应 `_*加值` / `_*等级` 派生字段 |
| `角色战斗数据` | 六维 + 生命/体力 + 装备栏 + 武技 + 专长 + 状态 + 多个战斗派生字段 |
| `主角` | 继承角色战斗数据，额外含物品栏、兵种适性、声望、金钱、积分、官职、爵位、后宫和谐度 |
| `NPC` | 名称、品质、阵营、定位、所在地、好感、简述、羁绊 + 可选 `角色数据?` / `武将信息?` / `美人属性?` |
| `势力` | 名称、规模、正统性、情报网、金钱、粮草、城池、军队、外交、政策 + 多个派生字段 |
| `城池` | 等级、城防、人口、农业、商业、民心、治安、繁荣度、太守、设施[] + `_*` 派生字段 |
| `军队` | 兵种、等级、兵力、士气、疲惫、装备等级、统属将领、驻扎地、训练进度、阵型 + `_*` 派生字段 |
| `武将信息` | 野心值、性格、官职、当前状态、势力、忠诚、是否已招募、兵种适性、特技 |
| `美人属性` | 依赖度、敏感度、贞洁度、位份、性格、当前状态 + `_*等级` 派生字段 |
| `物品条目` | 名称、品质、类型、描述，以及可选 `装备条目` |
| `状态总表` | 顶层状态根，含 `meta` / 世界 / 主角 / 势力 / NPC / 任务 / 商城 |

补充说明：
- `主角.物品栏` 当前结构为 `Record<string, { 物品, 数量 }>`。
- `商品条目` 当前结构为 `{ 物品, 分类, 价格 }`。
- `create势力集合` 兼容单势力对象与势力映射。
- `create角色战斗数据(data, { 完整: true })` 控制是否补齐武技完整字段。
- `create初始状态` 是顶层入口，`meta.schemaVersion` 固定为 `'three-kingdoms-v1'`。

---

### `commands.ts` - 命令类型定义与校验

**职责**：定义 AI 可发出的状态命令 union type，并执行严格白名单校验。

命令类型列表（共 **20** 种）：

```text
UpdateWorld / AppendRecentEvent / UpdatePlayerBase / AdjustPlayerResource
UpdateFaction / UpsertCity / RemoveCity / AddCityFacility / RemoveCityFacility
UpsertArmy / RemoveArmy / UpdateDiplomacy / UpdatePolicy
UpsertNpc / RemoveNpc / UpdateNpcRelation
UpsertQuest / RemoveQuest / UpdateQuestState
UpsertShopItem / RemoveShopItem
```

关键校验机制：
- **字段白名单**：每种命令均限制可写字段。
- **`断言无下划线字段`**：递归拒绝 AI 修改 `_` 前缀派生字段。
- **枚举校验**：依赖 `rules.ts` 中的 `枚举.*`。
- **改名防护**：阻止通过更新命令偷偷修改实体主键名称。
- `AdjustPlayerResource` 支持 `delta` / `set` 两种模式。
- `UpdateNpcRelation` 也支持 `delta` / `set`，且至少要有 `好感` 或 `羁绊` 之一。

公开导出包括：`状态命令`、`命令输入`、`解析命令输入`、`校验命令`、`断言无下划线字段` 等。

---

### `commander.ts` - 主角统军判断

**职责**：判断某军队的 `统属将领` 是否指向玩家主角，供 `recompute军队` 计算统率加值时分支使用。

关键函数：

| 函数 | 说明 |
|---|---|
| `获取当前用户名()` | 尝试读取 `SillyTavern.getContext().user_name` 或 `SillyTavern.name1` |
| `是否主角统军(统属将领)` | 将领名为 `'主角'` 或等于当前用户名时返回 `true` |

若宿主上下文不可用，则默认视为非主角统军。

---

### `executor.ts` - 命令执行引擎

**职责**：接收命令列表，逐条修改状态副本，最后统一重算派生字段并返回结果；可选写回楼层存储。

关键函数：

| 函数 | 签名 | 说明 |
|---|---|---|
| `执行命令(state, commandInput)` | 同步 | 纯内存执行，返回 `{ state, applied }` |
| `执行并保存命令(state, commandInput, messageId)` | async | 执行后调用 `保存状态` 持久化 |

执行流程：`解析命令输入` → 深拷贝状态 → 逐条应用 → `recompute全局` → 返回。

实现细节：
- 对象合并依赖 `_.mergeWith`，数组字段优先整体覆盖，不做深层拼接。
- 势力/城池/军队/NPC/任务/商品在缺失时，默认允许自动创建（除非 `createIfMissing === false`）。
- 任务状态更新仍会经过合法化工厂与全局重算，但**不再依赖代码自动结算“主要目标完成→已完成”**；该完成态由外部规则/AI 主动写入。

---

### `recompute.ts` - 派生字段重算

**职责**：根据基础字段统一计算所有 `_` 前缀只读派生字段。

| 函数 | 重算内容 |
|---|---|
| `recompute六维` | 六项 `_*加值` 与六项 `_*等级` |
| `recompute角色战斗数据` | 生命/体力上下限、伤势、先攻/攻击/伤害/防御DC/伤害减免等 |
| `recompute美人属性(data, npc好感?)` | 依赖/敏感/贞洁/好感等级 |
| `recomputeNPC` | 角色数据/武将/美人属性联动重算 |
| `recompute主角` | 角色战斗重算 + 物品栏过滤 + 声望称号 + 和谐等级 |
| `recompute城池` | 城防与各类上限、月税收/月产粮、指令槽 |
| `recompute军队(data, state?)` | 士气/疲惫等级、阵型修正、统率系数、综合战力 |
| `recompute势力(data, state?)` | 月税收/月产粮/总兵力/总战力/月军饷/月粮草估算、外交等级 |
| `recompute势力集合` | 遍历所有势力 |
| `recompute全局` | 按序重算世界、主角、NPC、势力集合，并更新 `meta.updatedAt` |

补充：`recompute军队` 只有在传入完整 `state` 时，才能正确读取主角/NPC 的统率与兵种适性。

---

### `protocol.ts` - AI 回复协议解析

**职责**：定义协议标签常量，并解析 AI 回复中的命令块与玩家选项块。

协议标签：

```text
<UpdateVariable> ... </UpdateVariable>
<Analysis> ... </Analysis>
<Commands> ... </Commands>
<PlayerOptions> ... </PlayerOptions>
```

关键函数：

| 函数 | 签名 | 说明 |
|---|---|---|
| `解析命令块(replyText)` | `→ 命令块提取结果` | 提取并解析命令 JSON |
| `提取命令块(replyText)` | `→ string \| null` | 仅返回原始命令 JSON 文本 |
| `解析玩家选项块(replyText)` | `→ 玩家选项[]` | 解析玩家选项；失败时静默返回空数组 |
| `提取玩家选项块(replyText)` | `→ string \| null` | 仅返回原始玩家选项 JSON 文本 |
| `移除命令协议块(replyText)` | `→ string` | 移除整段 `<UpdateVariable>` |
| `移除玩家选项块(replyText)` | `→ string` | 移除整段 `<PlayerOptions>` |
| `包装命令块(commands, analysis)` | `→ string` | 生成协议文本（测试/调试用） |

`玩家选项` 类型为：`{ text: string }`。

---

### `bridge.ts` - 高阶流程编排

**职责**：把协议解析、命令执行、状态保存、正文更新与宏刷新串联为统一入口。

关键函数：

| 函数 | 签名 | 说明 |
|---|---|---|
| `handleAssistantReply(replyText, options)` | async | 主流程入口：加载上一楼层状态 → 提取/执行/保存命令 → 更新正文 |
| `extractCommands(replyText)` | 同步 | 仅提取命令与玩家选项 |
| `extractAndApplyCommands(replyText, state)` | 同步 | 提取并应用命令，但不写存储 |
| `extractApplyAndSaveCommands(...)` | async | 提取、应用、保存、更新消息正文、刷新宏 |
| `buildInjectedContext(state)` | 同步 | 代理 `context.ts`，返回注入文本 |
| `buildInjectedView(state)` | 同步 | 返回结构化注入视图 |
| `buildContextMacroText(state)` | 同步 | 返回宏注入文本 |
| `appendReplyDecorators(...)` | 同步 | 当前为空实现，直接返回原正文 |
| `refreshContextMacro(state, macroKey)` | 同步 | 以当前状态刷新上下文宏 |
| `refreshContextMacroFromStorage(messageId?, macroKey)` | 同步 | 从存储加载后刷新宏 |

注意：当前不会再给 assistant 消息正文附加旧状态栏 HTML；消息正文里的 `<PlayerOptions>` 文本会保留，显示与隐藏由宿主或 Vue UI 侧处理。

---

### `storage.ts` - 状态持久化

**职责**：以聊天楼层 `data.sgbz_state` 为介质读写状态快照，并清理过期快照。

重要常量：

| 常量 | 值 | 说明 |
|---|---|---|
| `STATE_ROOT_KEY` | `'sgbz_state'` | 楼层状态键名 |
| `CONTEXT_MACRO_KEY` | `'sgbz_context'` | 宏键名 |
| `MAX_SAVED_STATE_MESSAGES` | `10` | 最多保留的快照数量 |

关键函数：

| 函数 | 签名 | 说明 |
|---|---|---|
| `加载状态(截止消息ID?)` | 同步 | 倒序搜索最近有效快照，缺省返回初始空状态 |
| `保存状态(state, messageId)` | async | 重算后写入当前楼层，并清理旧快照 |
| `更新消息正文(messageId, message)` | async | 更新楼层正文 |
| `初始化状态(seed, messageId)` | async | 基于 seed 创建并保存状态 |
| `更新状态(updater, messageId)` | async | 加载 `messageId-1` 状态 → 应用 updater → 保存 |
| `读取消息(messageId)` | 同步 | 读取单条消息 |
| `读取所有消息(截止消息ID?)` | 同步 | 批量读取消息区间 |
| `读取原始状态(messageId?)` | 同步 | 返回最近一条含 `sgbz_state` 的原始快照 |

宿主接口查找顺序：优先 `globalThis`，次选 `window`，再次选 `TavernHelper`。若缺失必要接口会抛错。

补充：楼层级方案下已**不再持久化上下文宏内容**，`保存上下文宏` 只返回字符串本身。

---

### `context.ts` - 上下文注入构建

**职责**：从完整状态中筛选 AI 需要的信息，构建注入提示词的只读 JSON 文本。

导出常量：

| 常量 | 值 | 说明 |
|---|---|---|
| `MAX_CONTEXT_NPCS` | `8` | 最多注入 NPC 数 |
| `MAX_CONTEXT_QUESTS` | `8` | 最多注入任务数 |
| `MAX_CONTEXT_SHOP_ITEMS` | `12` | 最多注入商城条目数 |

筛选规则：
- **NPC**：优先与当前地点相关，最多 8 个；无匹配则退回前 8 个。
- **任务**：仅注入 `可接取` / `进行中`。
- **商城**：最多 12 个条目。
- `_伤势减值` 会在注入时被过滤。

输出前缀格式：

```text
[三国霸主系统状态]
以下状态为只读上下文；下划线字段代表只读派生字段，AI 不可直接修改。
{JSON}
```

---

### `dom-host.ts` - 宿主文档桥接

**职责**：在 iframe/沙箱环境中优先拿到真正可见的宿主 `document` / `window`。

| 函数 | 签名 | 说明 |
|---|---|---|
| `getHostDocument()` | `→ Document` | 优先 `parent.document`，失败时回退当前 `document` |
| `getHostWindow()` | `→ Window \| typeof globalThis` | 优先 `parent`，失败时回退 `globalThis` |

---

### `debug.ts` - 调试日志

**职责**：提供分级日志与运行时开关，并对短时间重复日志做折叠。

关键函数：

| 函数 | 说明 |
|---|---|
| `setDebugEnabled(enabled)` | 开关 `log/info` 输出，并清空折叠缓存 |
| `getDebugEnabled()` | 读取当前 debug 开关 |
| `debugLog(scope, message, payload?)` | `console.log`，仅 debug 开启时输出 |
| `debugInfo(scope, message, payload?)` | `console.info`，仅 debug 开启时输出 |
| `debugWarn(scope, message, payload?)` | `console.warn`，始终输出 |
| `debugError(scope, message, error?)` | `console.error`，始终输出 |
| `summarizeState(state)` | 返回状态摘要 |
| `summarizeValue(value)` | 返回值的简要摘要 |

当前内置约 600ms 窗口的重复日志折叠。

---

### `macro.ts` - 宏注册

**职责**：向宿主注册 `{{sgbz_context}}` 宏。

| 函数 | 说明 |
|---|---|
| `registerSgbzMacros()` | 先卸载再重新注册 `{{sgbz_context}}` |
| `unregisterSgbzMacros()` | 卸载已注册的宏 |
| `renderSgbzContextMacro(messageId?)` | 读取对应楼层状态并返回注入文本 |

宏接口获取顺序：优先 `globalThis.registerMacroLike`，否则尝试 `window.TavernHelper.registerMacroLike`。

---

### `runtime-auto.ts` - 自动接线入口

**职责**：模块加载时自动注册运行时钩子；所有步骤均用 try-catch 包裹，失败不阻断脚本主体。

当前自动注册顺序：
1. `setupAssistantReplyHook()`
2. `setupChatChangedHook()`
3. `setupMessageSentHook()`
4. `setupMessageDeletedHook()`
5. `setupDebugParseButtonHook('解析命令')`
6. `setupDebugLogToggleButtonHook('日志开关')`
7. `setupVuePanelToggleButtonHook('系统界面开关')`
8. `setupPageHideHook()`
9. `scheduleRestoreRuntimeStateFromCurrentChat('runtime-init')`

---

### `runtime.ts` - SillyTavern 运行时接线

**职责**：处理宿主事件订阅、Vue 浮层挂载、玩家选项点击、聊天切换清理与状态恢复。

模块级状态：
- 多组事件/按钮钩子注册记录
- `最近处理记录: { chatId, messageId, message }`
- `Vue面板已启用`
- `恢复状态定时器` / `恢复状态令牌`

关键公开函数：

| 函数 | 说明 |
|---|---|
| `setupAssistantReplyHook(options)` | 订阅 `MESSAGE_RECEIVED`，自动处理 AI 回复并做防重 |
| `teardownAssistantReplyHook()` | 取消 AI 回复钩子 |
| `setupMessageSentHook()` / `teardownMessageSentHook()` | 监听 `MESSAGE_SENT` |
| `setupMessageDeletedHook()` / `teardownMessageDeletedHook()` | 监听 `MESSAGE_DELETED` |
| `setupChatChangedHook()` / `teardownChatChangedHook()` | 监听 `CHAT_CHANGED`，切换聊天时清理并调度恢复 |
| `setupDebugParseButtonHook(buttonName, options)` | 注册手动解析最新 assistant 的按钮 |
| `setupDebugLogToggleButtonHook(buttonName)` | 注册日志开关按钮 |
| `setupVuePanelToggleButtonHook(buttonName)` | 注册系统界面开关按钮并确保 Vue 可挂载 |
| `toggleVuePanel()` | 切换系统界面显隐，返回当前可见状态 |
| `teardownVuePanelToggleButtonHook()` | 卸载系统界面按钮并清理挂载 |
| `teardownRuntimeHooks(reason?)` | 统一卸载所有钩子、清理 Vue UI 与消息记录 |
| `scheduleRestoreRuntimeStateFromCurrentChat(reason?)` | 延迟从当前聊天恢复状态 |
| `restoreRuntimeStateFromCurrentChat(reason?)` | 立即从最新 assistant 楼层恢复状态 |
| `handlePlayerOptionClick(messageId, optionText)` | 将玩家选项格式化后填入输入框 |
| `updatePlayerOptionsView(messageId, options)` | 触发玩家选项窗刷新 |
| `clearPlayerOptionsView()` | 清空玩家选项窗 |

输入框填充策略：优先 `/setinput` slash，回退到 DOM 操作（`textarea` / `input` / `contenteditable`）。

玩家选项窗显示规则：只要“当前最新楼层”不是带有效 `<PlayerOptions>` 的 assistant 消息，就自动关闭。

---

### `index.ts` - 入口与全局挂载

**职责**：导出运行时核心 API，组装 `ThreeKingdomsStateKit` 对象，挂载到全局，并触发宏注册与自动接线。

当前公开面大致包括：
- `结构`：`create世界`、`create主角`、`createNPC`、`create任务`、`create商品条目`、`create势力`、`create势力集合`、`create城池`、`create军队`、`create政策`、`create初始状态`
- `协议`：`解析命令块`、`解析玩家选项块`、`移除命令协议块`、`移除玩家选项块`、`包装命令块`
- 运行时与调试能力：`handleAssistantReply`、各类 setup/teardown、`toggleVuePanel`、`handlePlayerOptionClick`、`setDebug`、`getDebug`、`registerSgbzMacros`

加载时行为：
1. 挂载 `window.ThreeKingdomsStateKit`
2. 若存在 `initializeGlobal` 则调用
3. 尝试执行 `registerSgbzMacros()`
4. 通过 `import './runtime-auto'` 自动接线

说明：当前入口不再 `export *` 透传完整内部模块，以控制单文件 bundle 体积。

---

## 入口与启动

- 构建入口：`src/index.ts`
- 构建命令：`pnpm build`
- 额外检查：`pnpm typecheck`
- 输出：`dist/index.js`（ESM，浏览器平台，压缩，内联 Vue 运行所需内容）

---

## 关键依赖与配置

| 依赖 | 版本 | 用途 |
|---|---|---|
| `vue` | ^3.5.30 | Vue 3 浮动界面 |
| `tsup` | ^8.5.0 | 打包工具 |
| `unplugin-vue` | ^7.1.1 | Vue SFC 编译支持 |
| `typescript` | ^5.8.2 | TypeScript 编译器 |
| `vue-tsc` | ^3.2.5 | Vue 类型检查 |
| `vite` | ^8.0.0 | 本地预览服务器（`pnpm dev:preview`） |
| `@vitejs/plugin-vue` | ^6.0.5 | Vite 的 Vue 支持 |
| `lodash` | ^4.17.23 | 项目依赖；运行时代码中通过全局 `_` 使用 |
| `@types/lodash` | ^4.17.24 | lodash 类型声明 |

全局约定：
- `global.d.ts` 中声明了 `_` 与 `initializeGlobal`
- 宿主环境通常会提供 `_`；文档与代码应把它视为运行时全局，而不是每个模块自行 import

---

## 相关文件清单

| 文件 | 说明 |
|---|---|
| `src/index.ts` | 打包入口与全局挂载 |
| `src/state.ts` | 类型定义与工厂函数 |
| `src/rules.ts` | 枚举与规则计算 |
| `src/commands.ts` | 命令类型与校验 |
| `src/commander.ts` | 主角统军判断 |
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
| `src/ui/` | Vue 浮动系统界面 |
| `src/preview/` | 本地预览入口与 mock 数据（不参与生产注入） |

---

## 变更记录 (Changelog)

| 时间 | 描述 |
|---|---|
| 2026-03-15 | 同步当前实现：补充 `commander.ts`、preview 入口、runtime 自动恢复与 pagehide 清理；修正文档中的依赖关系、枚举数量、宏/存储/入口公开面描述 |
| 2026-03-14 | 初始化文档，全量扫描 `src/` 生成 |
