# ThreeKingdomsStateKit

## 指令优先级

在本仓库中工作时，请按以下顺序理解并遵守指令：

1. 当前会话中用户的明确要求
2. 离正在编辑目录最近的 `CLAUDE.md`
3. 本根目录 `AGENTS.md`
4. 现有代码结构与既有实现模式
5. 其他补充参考材料

重要仓库规则：
- 如果某个目录下存在自己的 `CLAUDE.md`，在修改该目录内容前必须先阅读并遵循它。
- 本 `AGENTS.md` 作为全局基线，优先级低于就近目录的 `CLAUDE.md`。

当前已知的 `CLAUDE.md`：
- `./CLAUDE.md`
- `./src/CLAUDE.md`
- `./src/ui/CLAUDE.md`
- `./reference/CLAUDE.md`

## 核心命令

- 构建：`npm run build`
- 类型检查：`npm run typecheck`
- 本地预览：`npm run dev:preview`
- 完成代码修改后的默认校验顺序：
  1. `npm run typecheck`
  2. `npm run build`

## 项目结构

- `src/`：全部生产源码。
- `src/index.ts`：公开入口与全局导出面。
- `src/runtime.ts` 与 `src/runtime-auto.ts`：宿主接线、事件钩子、输入填充、运行时恢复与 UI 挂载。
- `src/bridge.ts`：AI 回复主流程，负责协议解析、命令应用、状态持久化、上下文宏刷新与消息正文更新。
- `src/protocol.ts`：定义并解析 `<UpdateVariable>` 与 `<PlayerOptions>`。
- `src/storage.ts`：按消息楼层读写状态快照。
- `src/ui/`：Vue 浮动界面实现。
- `src/preview/`：本地预览与 mock 数据，不参与生产注入。
- `dist/`：构建产物目录，禁止手改。
- `reference/`：宿主参考与示例，不是主运行时实现。

## 架构总览

本项目是一个面向浏览器宿主环境的 TypeScript 工具库，用于支撑《三国霸主系统》的状态管理、协议处理与可视化界面。

主流程大致如下：
1. 宿主接收到 assistant 消息。
2. `bridge.ts` 提取协议块与状态命令。
3. 命令经 `commands.ts` 校验后由 `executor.ts` 应用。
4. `storage.ts` 将最新状态快照写回 assistant 楼层的 `data` 字段。
5. `runtime.ts` 把最新状态与玩家选项同步给 Vue UI。

请保持以下职责分离：
- 协议解析放在 `protocol.ts`
- 状态变更与派生字段重算放在 `commands.ts`、`executor.ts`、`recompute.ts`、`state.ts`
- 持久化放在 `storage.ts`
- 宿主接线放在 `runtime.ts`
- UI 渲染放在 `src/ui/`

## 约定与实现模式

- 尽量匹配附近文件的既有代码风格。
- 保持面向用户的中文领域词汇一致。
- 优先扩展现有模块，而不是新增平行实现。
- 除非确有宿主兼容原因，否则避免使用 `any`。
- 不要随意引入新的运行时依赖。
- 协议相关改动应尽量保持可容错，避免单个可选块格式错误导致整个回复链路失败。
- Vue/UI 改动不得破坏运行时初始化、玩家选项处理或聊天切换后的恢复链路。
- 优先使用小而明确的辅助函数，避免大范围重写。

## 构建与校验规则

- 完成改动前必须进行校验。
- 本仓库最低要求：
  - `npm run typecheck`
  - `npm run build`
- 校验失败视为阻塞问题。
- 如果改动涉及 runtime 钩子、协议解析、消息正文写回、打包或 Vue 集成，要特别检查回复处理链路与聊天切换恢复链路。
- 如果改动涉及 Vue 依赖或打包配置，要确认最终 `dist/index.js` 不依赖宿主无法解析的裸模块导入。

## 安全与注意事项

- 不要提交密钥、令牌或环境敏感信息。
- 不要记录敏感数据到日志。
- 修改 `storage.ts` 或 `bridge.ts` 的消息写回逻辑时，要避免误伤无关消息。
- slash 命令执行与 DOM 输入回退逻辑必须限定在宿主聊天输入区域内。

## Git 工作流

- 遵循仓库现有提交风格，如 `feat: ...`、`fix: ...`、`refactor: ...`。
- 保持单次提交聚焦，不要混入无关重构。
- 提交前检查 staged 内容，确认没有生成噪音或敏感信息。

## 对代理的额外要求

- 修改前先读取最近的 `CLAUDE.md`。
- 修改 `src/` 下内容前，先看 `src/CLAUDE.md`。
- 修改 `src/ui/` 下内容前，先看 `src/ui/CLAUDE.md`。
- 修改 `reference/` 下内容前，先看 `reference/CLAUDE.md`。
- 当用户提出新的交互模型时，要先判断它影响的是 runtime 钩子、协议定义、状态存储，还是 Vue UI。
- 不要主动更新各级 `CLAUDE.md`，除非用户明确要求同步文档。
- 如果代码行为、目录职责或构建/集成方式发生明显变化，且用户要求同步文档，应更新离改动最近的 `CLAUDE.md`，确保其反映当前实现。
