# JS-Slash-Runner 类型上下文速览

本文件基于 `@types/**` 与 `dist/@types.txt` 汇总，目标是给 AI/脚本快速建立可调用能力、数据结构和运行边界的心智模型。

## 1. 总体定位

- 这是一个面向 SillyTavern 前端环境的类型定义集合。
- `dist/@types.txt` 是聚合后的总导出，内容基本覆盖 `@types/function/*.d.ts` 与 `@types/iframe/*.d.ts`。
- 主要暴露两层能力：
  - `window.TavernHelper` / `TavernHelper`：本扩展提供的高层 API。
  - `SillyTavern`：宿主 SillyTavern 提供的稳定接口。
- 运行环境偏浏览器前端/iframe，而不是 Node.js；大量 API 直接操作当前聊天、角色卡、预设、世界书与前端渲染。

## 2. 入口与全局对象

### 2.1 TavernHelper

主入口是 `window.TavernHelper`，其能力按模块分组：

- audio: 音频播放与播放列表、音量/模式控制
- builtin: 宿主内建能力包装，如 markdown 渲染、刷新 UI、token 估算、promptManager
- character: 角色卡 CRUD 与更新函数
- chat_message: 聊天楼层读取、修改、插入、删除、旋转
- displayed_message: 仅改前端显示、不改持久化消息
- extension: 扩展安装/卸载/更新/状态
- generate: 基于当前预设或原始提示词调用模型生成
- global: 全局对象共享与等待初始化
- import_raw: 原始角色卡/聊天/预设/世界书/正则导入
- inject: 动态注入提示词
- lorebook / lorebook_entry: 旧接口，已逐步被 worldbook 系列取代
- macro_like: 注册自定义宏式替换
- preset: 预设读取、切换、更新
- raw_character: 直接访问角色原始数据
- script: 脚本树与按钮能力
- slash: 执行酒馆 slash command
- tavern_regex: 酒馆正则读写
- util: 宏替换、消息 id、错误包装
- variables: 多作用域变量表管理
- version: 版本信息
- worldbook: 新版世界书 API

### 2.2 SillyTavern

`SillyTavern` 是宿主上下文，重要内容包括：

- 当前聊天与角色：`chat`、`characters`、`characterId`、`chatId`
- 宿主事件系统：`eventSource`、`eventTypes`
- 生成相关：`generate`、`sendStreamingRequest`、`stopGeneration`
- token 与 tokenizer：`getTextTokens`、`getTokenCountAsync`
- 扩展提示词注入：`extensionPrompts`、`setExtensionPrompt`
- slash command / function tool 注册能力
- 世界书、角色、弹窗、国际化、消息渲染等宿主原生能力

AI 在写脚本时可优先用 `TavernHelper`，只有在扩展层没覆盖时再下探到 `SillyTavern`。

## 3. 高频数据模型

### 3.1 Character

`Character` 是扩展层的简化角色卡结构，包含：

- 基本字段：`avatar`、`version`、`creator`、`creator_notes`
- 文本字段：`description`、`first_messages`
- 绑定资源：`worldbook`
- 扩展数据：`extensions.regex_scripts`、`extensions.tavern_helper`

相关 API：

- `getCharacterNames()`
- `getCurrentCharacterName()`
- `getCharacter(name)`
- `createCharacter()` / `createOrReplaceCharacter()`
- `replaceCharacter()`
- `updateCharacterWith()`
- `deleteCharacter()`

模式上优先使用 `updateCharacterWith()` 进行增量修改。

### 3.2 ChatMessage

聊天消息有两种视角：

- `ChatMessage`: 当前被 AI 采用的消息页
- `ChatMessageSwiped`: 包含 swipe 信息的完整楼层视图

关键字段：

- `message_id`
- `role`: `system | assistant | user`
- `is_hidden`
- `message`
- `data` / `extra`
- swipe 模式下额外有 `swipe_id`、`swipes`、`swipes_data`、`swipes_info`

相关 API：

- `getChatMessages(range, options)`
- `setChatMessages()`
- `createChatMessages()`
- `deleteChatMessages()`
- `rotateChatMessages()`

注意：

- `range` 支持数字、字符串区间、负数深度索引。
- `refresh` 控制是否刷新受影响消息或整个聊天。

### 3.3 Preset

`Preset` 由两部分组成：

- `settings`: 模型采样、流式、推理、函数调用、图片/视频发送等生成参数
- `prompts` / `prompts_unused`: 提示词定义

`PresetPrompt` 分为三类：

- 普通提示词
- 系统提示词（如 `main` / `nsfw` / `jailbreak`）
- 占位提示词（如 `charDescription` / `chatHistory`）

相关 API：

- `getPresetNames()`
- `getLoadedPresetName()`
- `loadPreset()`
- `getPreset()`
- `createPreset()` / `createOrReplacePreset()`
- `replacePreset()` / `updatePresetWith()` / `setPreset()`
- `deletePreset()` / `renamePreset()`

`'in_use'` 是运行中预设快照，不一定等于磁盘上原始预设。

### 3.4 WorldbookEntry

新版世界书接口语义清晰，`WorldbookEntry` 主要包含：

- `uid`、`name`、`enabled`
- `strategy`: 激活策略（constant/selective/vectorized）与 key 扫描
- `position`: 插入位置、role、depth、order
- `content`
- `probability`
- `recursion`: 递归控制
- `effect`: sticky/cooldown/delay
- `extra`

相关 API：

- `getWorldbookNames()`
- `getGlobalWorldbookNames()` / `rebindGlobalWorldbooks()`
- `getCharWorldbookNames()` / `rebindCharWorldbooks()`
- `getChatWorldbookName()` / `rebindChatWorldbook()`
- `getOrCreateChatWorldbook()`
- `getWorldbook()`
- `createWorldbook()` / `createOrReplaceWorldbook()`
- `replaceWorldbook()` / `updateWorldbookWith()`
- `createWorldbookEntries()` / `deleteWorldbookEntries()`

优先使用 worldbook API，不建议继续围绕 deprecated lorebook API 新开发。

### 3.5 Variables

变量系统按作用域划分：

- `global`
- `preset`
- `chat`
- `character`
- `message`
- `script`
- `extension`

相关 API：

- `getVariables(option)`
- `replaceVariables()`
- `updateVariablesWith()`
- `insertOrAssignVariables()`
- `insertVariables()`
- `deleteVariable()`
- `registerVariableSchema()`

iframe 侧还提供：

- `getAllVariables()`：拿到按上下文合并后的变量视图

适合 AI 的实践：

- 读写前先明确作用域。
- 对单条消息变量可使用 `message_id: -1` 或 `'latest'`。
- 需要保持结构约束时可注册 zod schema，但这只影响 UI 校验，不影响底层存储。

## 4. 生成能力模型

### 4.1 generate / generateRaw

生成主接口：

- `generate(config)`: 基于当前预设生成
- `generateRaw(config)`: 手工指定提示词顺序

`GenerateConfig` 重要字段：

- `generation_id`
- `user_input`
- `image`
- `should_stream`
- `should_silence`
- `overrides`
- `injects`
- `max_chat_history`
- `custom_api`

`GenerateRawConfig` 在此基础上增加：

- `ordered_prompts`: `(BuiltinPrompt | RolePrompt)[]`

### 4.2 提示词拼装

内置提示词标识：

- `world_info_before`
- `persona_description`
- `char_description`
- `char_personality`
- `scenario`
- `world_info_after`
- `dialogue_examples`
- `chat_history`
- `user_input`

可通过：

- `builtin_prompt_default_order`

了解默认顺序。

### 4.3 自定义 API

`CustomApiConfig` 支持：

- `proxy_preset`
- `apiurl`
- `key`
- `model`
- `source`
- 常见采样参数覆盖（如 `max_tokens`、`temperature`、`top_p` 等）

用户前文提到的 BYOK/provider 问题就落在这层：模型名和 provider/source 需要匹配宿主预期。

### 4.4 生成事件

生成期间会与 iframe 事件系统配合：

- `iframe_events.GENERATION_STARTED`
- `iframe_events.STREAM_TOKEN_RECEIVED_FULLY`
- `iframe_events.STREAM_TOKEN_RECEIVED_INCREMENTALLY`
- `iframe_events.GENERATION_ENDED`

并可通过：

- `stopGenerationById(generation_id)`
- `stopAllGeneration()`

中断请求。

## 5. 提示词注入与事件驱动

### 5.1 注入提示词

注入类型：`InjectionPrompt`

关键字段：

- `id`
- `position: 'in_chat' | 'none'`
- `depth`
- `role`
- `content`
- `filter`
- `should_scan`

相关 API：

- `injectPrompts(prompts, { once? })`
- `uninjectPrompts(ids)`

适合：

- 在生成前临时补 system/user prompt
- 用 `position: 'none'` 仅参与世界书扫描

### 5.2 事件系统

iframe 层事件 API：

- `eventOn()`
- `eventOnce()`
- `eventMakeFirst()` / `eventMakeLast()`
- `eventEmit()` / `eventEmitAndWait()`
- `eventRemoveListener()`
- `eventClearEvent()` / `eventClearListener()` / `eventClearAll()`

事件来源分三类：

- `iframe_events`: 本扩展 iframe 生命周期与生成事件
- `tavern_events`: 宿主 SillyTavern 事件
- 自定义字符串事件

高频宿主事件包括：

- `CHAT_CHANGED`
- `MESSAGE_RECEIVED` / `MESSAGE_UPDATED` / `MESSAGE_DELETED`
- `GENERATION_STARTED` / `GENERATION_ENDED`
- `USER_MESSAGE_RENDERED` / `CHARACTER_MESSAGE_RENDERED`
- `PRESET_CHANGED`
- `WORLDINFO_UPDATED`

## 6. UI/显示与脚本运行边界

### 6.1 仅影响显示的 API

- `retrieveDisplayedMessage(message_id)`
- `formatAsDisplayedMessage(text, { message_id? })`
- `refreshOneMessage(message_id, $mes?)`

这些适合做临时前端增强，不会自动持久化到聊天文件；需要真正改数据时应使用 `setChatMessages()`。

### 6.2 脚本内专属 API

仅在脚本环境中可用：

- `getButtonEvent(button_name)`
- `getScriptButtons()`
- `replaceScriptButtons()`
- `updateScriptButtonsWith()`
- `appendInexistentScriptButtons()`
- `getScriptName()`
- `getScriptInfo()`
- `replaceScriptInfo()`
- `getScriptId()`

### 6.3 iframe 工具函数

- `reloadIframe()`
- `getIframeName()`
- `getCurrentMessageId()`
- `getScriptId()`

说明：

- `reloadIframe()` 相当于整个 iframe 刷新，会让共享到全局的对象失效。
- 需要可恢复生命周期时，更适合自行写 initialize/destroy/reload 逻辑。

## 7. 音频、扩展、导入与辅助工具

### 7.1 Audio

- `playAudio(type, audio)`
- `pauseAudio(type)`
- `getAudioList(type)`
- `replaceAudioList(type, list)`
- `appendAudioList(type, list)`
- `getAudioSettings(type)`
- `setAudioSettings(type, partialSettings)`

`type` 为 `bgm | ambient`。

### 7.2 Extension

- `isAdmin()`
- `getTavernHelperExtensionId()`
- `getExtensionType(id)`
- `getExtensionInstallationInfo(id)`
- `isInstalledExtension(id)`
- `installExtension(url, type)`
- `uninstallExtension(id)`
- `reinstallExtension(id)`
- `updateExtension(id)`

扩展安装/更新后通常需要刷新页面生效。

### 7.3 Raw import

- `importRawCharacter()`
- `importRawChat()`
- `importRawPreset()`
- `importRawWorldbook()`
- `importRawTavernRegex()`

适合模拟 UI 导入行为，而不是直接手写宿主底层数据。

### 7.4 Builtin

`builtin` 是宿主常用能力包装，重要成员包括：

- `addOneMessage`
- `copyText`
- `duringGenerating`
- `getImageTokenCost` / `getVideoTokenCost`
- `parseRegexFromString`
- `promptManager`
- `reloadAndRenderChatWithoutEvents`
- `reloadChatWithoutEvents`
- `reloadEditor` / `reloadEditorDebounced`
- `renderMarkdown`
- `renderPromptManager` / `renderPromptManagerDebounced`
- `saveSettings`
- `uuidv4`

## 8. RawCharacter 与 SillyTavern 原始类型

如果高层 API 不够，`RawCharacter` 与 `SillyTavern.v1CharData / v2CharData` 可用于直接处理角色原始结构。

`RawCharacter` 典型能力：

- `RawCharacter.find()`
- `findCharacterIndex()`
- `getChatsFromFiles()`
- `getCardData()`
- `getAvatarId()`
- `getRegexScripts()`
- `getCharacterBook()`
- `getWorldName()`

配套函数：

- `getCharData()`
- `getCharAvatarPath()`
- `getChatHistoryBrief()`
- `getChatHistoryDetail()`

适用于需要兼容宿主原始角色卡结构时。

## 9. Mvu 兼容上下文

`@types/iframe/exported.mvu.d.ts` 表示该项目还考虑与外部 Mvu 变量框架联动。

主能力：

- `waitGlobalInitialized('Mvu')` 后使用 `Mvu`
- `Mvu.getMvuData()` / `Mvu.replaceMvuData()`
- `Mvu.parseMessage()`
- `Mvu.isDuringExtraAnalysis()`
- Mvu 专属事件：变量初始化、命令解析、变量更新前后

这说明 AI 在写变量增强脚本时，应注意可能存在 Mvu 生态，而不是只有本扩展自己的变量层。

## 10. 已弃用接口

以下接口已标记 deprecated，应避免作为新实现首选：

- `lorebook.d.ts` 整套 Lorebook API
- `lorebook_entry.d.ts` 旧世界书条目 API
- `eventOnButton()`

替代方向：

- lorebook -> worldbook
- `eventOnButton()` -> `eventOn(getButtonEvent(name), listener)`

## 11. AI 编码时的实用规则

1. 优先使用 `TavernHelper` 高层 API，不直接篡改宿主内部对象。
2. 涉及聊天持久化时，用 `setChatMessages/createChatMessages/deleteChatMessages`，不要只改显示层。
3. 涉及角色、预设、世界书，优先用 `updateXWith()` 这类增量更新接口。
4. 变量操作前先确认作用域；消息变量和脚本变量最容易混淆。
5. 需要跨 iframe/脚本共享对象时，用 `initializeGlobal()` + `waitGlobalInitialized()`。
6. 需要响应宿主状态变化时，用事件系统而不是轮询。
7. 新实现尽量避开 deprecated lorebook API。
8. 需要兼容脚本按钮/消息 iframe 时，先确认当前运行上下文是否允许调用对应专属函数。

## 12. 一句话总结

这套类型定义的核心价值，是把 SillyTavern 扩展开发抽象成一组前端可调用的高层 API：围绕聊天、角色、预设、世界书、变量、提示词注入、生成与事件驱动展开；AI 在此仓库中写代码时，应把 `TavernHelper` 当作第一入口，把 `SillyTavern` 当作底层宿主上下文。
