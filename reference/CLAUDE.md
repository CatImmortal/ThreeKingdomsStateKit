# reference/ — SillyTavern 宿主 API 参考资料目录

## 目录用途

`reference/` 目录存放 SillyTavern + TavernHelper 宿主环境的 API 类型定义、宏文档、斜杠命令参考，以及角色卡/脚本示例文件。

**此目录中的所有文件均不参与构建**（不被 tsup 打包），仅供开发者在编写 `src/` 源码时查阅宿主接口。

---

## 文件结构

```
reference/
├── @types/                  # TavernHelper 宿主 API TypeScript 类型定义
│   ├── function/            # window.TavernHelper.* 函数签名（.d.ts）
│   │   ├── index.d.ts       # TavernHelper 命名空间总入口（聚合所有子模块）
│   │   ├── audio.d.ts       # 音频播放控制
│   │   ├── builtin.d.ts     # 内置工具函数
│   │   ├── character.d.ts   # 角色管理
│   │   ├── chat_message.d.ts       # 聊天消息读写（getChatMessages / setChatMessages）
│   │   ├── displayed_message.d.ts  # 渲染消息操作
│   │   ├── extension.d.ts   # 扩展管理
│   │   ├── generate.d.ts    # AI 生成触发
│   │   ├── global.d.ts      # 全局事件与变量
│   │   ├── import_raw.d.ts  # 原始导入操作
│   │   ├── inject.d.ts      # 提示词注入
│   │   ├── lorebook.d.ts    # 世界书管理
│   │   ├── lorebook_entry.d.ts     # 世界书条目
│   │   ├── macro_like.d.ts  # 自定义宏注册（registerMacroLike）
│   │   ├── preset.d.ts      # 预设管理
│   │   ├── raw_character.d.ts      # 原始角色数据
│   │   ├── script.d.ts      # 脚本执行
│   │   ├── slash.d.ts       # 斜杠命令执行（triggerSlash / executeSlashCommandsWithOptions）
│   │   ├── tavern_regex.d.ts       # 正则替换
│   │   ├── util.d.ts        # 工具函数
│   │   └── variables.d.ts   # 变量读写
│   └── iframe/              # iframe 环境类型定义
│       ├── event.d.ts       # iframe 事件系统
│       ├── exported.ejstemplate.d.ts
│       ├── exported.mvu.d.ts
│       ├── exported.sillytavern.d.ts
│       ├── exported.tavernhelper.d.ts
│       ├── script.d.ts
│       ├── util.d.ts
│       └── variables.d.ts
├── @types.txt               # @types 目录的纯文本快照（备用参考）
├── SillyTavern_Macros.txt   # SillyTavern 内置宏完整文档（{{macro}} 格式）
├── slash_command.txt        # SillyTavern 斜杠命令完整参考（/command 格式）
└── 示例/                    # 角色卡与脚本示例
    ├── 前端界面示例/         # Vue 3 SFC 界面示例（index.html / index.ts / *.vue）
    ├── 流式楼层界面示例/     # 流式渲染楼层界面示例（App.vue / index.ts / *.vue）
    ├── 脚本示例/             # TavernHelper 脚本示例（按功能分类的 .ts 文件）
    └── 角色卡示例/           # 完整角色卡示例（index.yaml / schema.json / 世界书等）
```

---

## 关键文件速查

### 最常用的宿主接口（对应 `src/` 中的调用点）

| 宿主接口 | 类型定义位置 | 项目调用位置 |
|---|---|---|
| `getChatMessages` / `setChatMessages` | `@types/function/chat_message.d.ts` | `src/storage.ts` |
| `eventOn` / `eventRemoveListener` | `@types/function/global.d.ts` | `src/runtime.ts` |
| `registerMacroLike` | `@types/function/macro_like.d.ts` | `src/macro.ts` |
| `triggerSlash` / `executeSlashCommandsWithOptions` | `@types/function/slash.d.ts` | `src/runtime.ts` |
| `getButtonEvent` | `@types/function/global.d.ts` | `src/runtime.ts` |

### 宏参考

`SillyTavern_Macros.txt` 记录了所有内置 `{{macro}}` 的完整说明。
项目自定义宏 `{{sgbz_context}}` 通过 `registerMacroLike` 注册，参见 `src/macro.ts`。

### 斜杠命令参考

`slash_command.txt` 记录了所有 `/command` 的签名与用法，格式为：

```
/command [named=arg]? (positional) // 描述
```

---

## 使用注意事项

1. **类型定义仅供参考**：`@types/` 中的 `.d.ts` 文件描述宿主环境提供的全局接口。项目实际使用的类型声明在根目录 `global.d.ts` 中，通过 duck-typing（`typeof xxx === 'function'`）检测接口是否存在。

2. **版本对应**：这些类型定义对应某一版本的 TavernHelper 插件，实际宿主环境可能有差异，以运行时行为为准。

3. **示例仅作参考**：`示例/` 目录下的代码展示了 TavernHelper 的常见用法模式，不直接被本项目引用。

4. **不参与构建**：此目录中任何文件均不会被 tsup 打包进 `dist/index.js`。
