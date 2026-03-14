# reference/ — SillyTavern 宿主 API 参考资料目录

## 目录用途

`reference/` 目录存放 SillyTavern + TavernHelper 宿主环境的 API 类型定义、宏文档、斜杠命令参考、提示词模板参考，以及角色卡/脚本示例文件。

**此目录中的所有文件均不参与构建**（不被 tsup 打包），仅供开发者在编写 `src/` 源码时查阅宿主接口。

---

## 文件结构

```
reference/
├── 提示词模板/                  # TavernHelper EJS 提示词模板扩展文档
│   ├── features_cn.md           # EJS 模板扩展功能说明（<% ... %> 语法、执行时机）
│   └── reference_cn.md          # EJS 模板内置函数参考（变量读写、消息过滤等）
├── 酒馆/                        # SillyTavern 原生参考
│   ├── SillyTavern_Macros.txt   # SillyTavern 内置宏完整文档（{{macro}} 格式）
│   └── slash_command.txt        # SillyTavern 斜杠命令完整参考（/command 格式）
└── 酒馆助手/                    # TavernHelper 宿主 API 参考
    ├── @types.txt               # @types 目录的纯文本快照（备用参考）
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
    │   │   ├── global.d.ts      # 全局事件与变量（eventOn / getButtonEvent）
    │   │   ├── import_raw.d.ts  # 原始导入操作
    │   │   ├── inject.d.ts      # 提示词注入
    │   │   ├── lorebook.d.ts    # 世界书条目管理（旧接口）
    │   │   ├── lorebook_entry.d.ts     # 世界书条目详情
    │   │   ├── macro_like.d.ts  # 自定义宏注册（registerMacroLike）
    │   │   ├── preset.d.ts      # 预设管理
    │   │   ├── raw_character.d.ts      # 原始角色数据
    │   │   ├── script.d.ts      # 脚本类型定义（Script 结构）
    │   │   ├── slash.d.ts       # 斜杠命令执行（triggerSlash / executeSlashCommandsWithOptions）
    │   │   ├── tavern_regex.d.ts       # 正则替换
    │   │   ├── util.d.ts        # 工具函数
    │   │   ├── variables.d.ts   # 变量读写
    │   │   ├── version.d.ts     # 版本查询（getTavernHelperVersion / getTavernVersion）
    │   │   └── worldbook.d.ts   # 世界书绑定管理（新接口，含 getWorldbookNames 等）
    │   └── iframe/              # iframe 环境类型定义
    │       ├── event.d.ts       # iframe + 酒馆事件系统（tavern_events / iframe_events）
    │       ├── exported.ejstemplate.d.ts
    │       ├── exported.mvu.d.ts
    │       ├── exported.sillytavern.d.ts
    │       ├── exported.tavernhelper.d.ts
    │       ├── script.d.ts      # 脚本按钮操作（getScriptButtons / replaceScriptButtons）
    │       ├── util.d.ts        # 工具函数（reloadIframe / getIframeName / pagehide 示例）
    │       └── variables.d.ts   # 变量读写
    └── 示例/                    # TavernHelper 场景示例代码
        ├── 前端界面示例/         # Vue 3 SFC 楼层界面示例
        │   ├── index.html / index.ts / 界面.vue / 日记.vue / 选择框.vue
        │   ├── 界面.ts           # 界面挂载控制
        │   └── 加载和卸载时执行函数.ts
        ├── 流式楼层界面示例/     # 流式渲染楼层界面示例
        │   ├── index.ts / App.vue / 分段.vue / 搜索框.vue / 高亮.vue
        ├── 脚本示例/             # TavernHelper 脚本开发示例
        │   ├── index.ts          # 脚本入口
        │   ├── settings.ts       # 设置读写
        │   ├── 加载和卸载时执行函数.ts   # 
        │   ├── 添加按钮和注册按钮事件.ts
        │   ├── 监听消息修改.ts
        │   ├── 聊天文件变更时重载脚本.ts
        │   ├── 调整消息楼层.ts
        │   ├── 设置界面.ts / 设置界面.vue
        └── 角色卡示例/           # 完整角色卡示例
            ├── index.yaml / schema.json / schema.ts
            ├── 世界书/           # 世界书条目示例（交错频道 / 文风 / 立即事件 / 变量 / 角色）
            ├── 界面/状态栏/      # Vue 状态栏界面示例（App.vue + 多个组件）
            ├── 脚本/             # 脚本示例（MVU / 变量结构 / 立即事件）
            └── 第一条消息/       # 第一条消息文本
```

---

## 关键文件速查

### 最常用的宿主接口（对应 `src/` 中的调用点）

| 宿主接口 | 类型定义位置 | 项目调用位置 |
|---|---|---|
| `getChatMessages` / `setChatMessages` | `酒馆助手/@types/function/chat_message.d.ts` | `src/storage.ts` |
| `eventOn` / `eventRemoveListener` / `getButtonEvent` | `酒馆助手/@types/function/global.d.ts` | `src/runtime.ts` |
| `registerMacroLike` | `酒馆助手/@types/function/macro_like.d.ts` | `src/macro.ts` |
| `triggerSlash` / `executeSlashCommandsWithOptions` | `酒馆助手/@types/function/slash.d.ts` | `src/runtime.ts` |
| `tavern_events.*` 事件常量 | `酒馆助手/@types/iframe/event.d.ts` | `src/runtime.ts` |
| `getIframeName` / `reloadIframe` / pagehide 模式 | `酒馆助手/@types/iframe/util.d.ts` | `src/runtime-auto.ts`（待实现） |
| `getScriptButtons` / `replaceScriptButtons` | `酒馆助手/@types/iframe/script.d.ts` | — |
| `getTavernHelperVersion` | `酒馆助手/@types/function/version.d.ts` | — |
| `getWorldbookNames` / `rebindCharWorldbooks` | `酒馆助手/@types/function/worldbook.d.ts` | — |

### 生命周期关键参考

`酒馆助手/示例/脚本示例/加载和卸载时执行函数.ts` 展示了 TavernHelper 脚本的标准生命周期模式：

```typescript
// 脚本加载时执行
$(() => { /* 初始化 */ });

// 脚本卸载时执行（切换角色卡、重载脚本等导致 iframe 销毁时触发）
$(window).on('pagehide', () => { /* 清理 */ });
```

### 宏参考

`酒馆/SillyTavern_Macros.txt` 记录了所有内置 `{{macro}}` 的完整说明。
项目自定义宏 `{{sgbz_context}}` 通过 `registerMacroLike` 注册，参见 `src/macro.ts`。

### 斜杠命令参考

`酒馆/slash_command.txt` 记录了所有 `/command` 的签名与用法。

### EJS 提示词模板扩展参考

`提示词模板/features_cn.md` — TavernHelper EJS 扩展的功能说明（`<% ... %>` 语法）。
`提示词模板/reference_cn.md` — EJS 模板中可用的内置函数（变量读写、消息过滤等）。
此功能在**将提示词发送给 LLM** 和**渲染到 SillyTavern** 时执行，与本项目宏注册（`registerMacroLike`）是两套不同机制。

---

## 使用注意事项

1. **类型定义仅供参考**：`酒馆助手/@types/` 中的 `.d.ts` 文件描述宿主环境提供的全局接口。项目实际使用的类型声明在根目录 `global.d.ts` 中，通过 duck-typing（`typeof xxx === 'function'`）检测接口是否存在。

2. **版本对应**：这些类型定义对应某一版本的 TavernHelper 插件，实际宿主环境可能有差异，以运行时行为为准。

3. **示例仅作参考**：`酒馆助手/示例/` 目录下的代码展示了 TavernHelper 的常见用法模式，不直接被本项目引用。

4. **不参与构建**：此目录中任何文件均不会被 tsup 打包进 `dist/index.js`。

5. **脚本只支持单文件**：TavernHelper 脚本系统只加载单个 JS 文件（`content` 字段为纯文本 JS 代码），无法自动加载额外的 CSS、JSON 或其他资源文件。所有资源必须内联到 JS 中。
