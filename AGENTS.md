# ThreeKingdomsStateKit

## Instruction Priority

When working in this repository, follow instructions in this order:

1. Current user request in the active session
2. The nearest relevant `CLAUDE.md`
3. This root `AGENTS.md`
4. Existing code structure and established project patterns
5. Other supporting reference material

Important repo rule:
- If a directory being edited contains its own `CLAUDE.md`, read and follow that file before making changes in that directory.
- Treat this `AGENTS.md` as the global baseline, and treat nearby `CLAUDE.md` files as higher-priority local guidance.

Known `CLAUDE.md` files currently present:
- `./CLAUDE.md`
- `./src/CLAUDE.md`
- `./src/ui/CLAUDE.md`
- `./reference/CLAUDE.md`

## Core Commands

- Build: `npm run build`
- Type check: `npm run typecheck`
- Default validation order after code changes:
  1. `npm run typecheck`
  2. `npm run build`

## Project Layout

- `src/` contains all source code.
- `src/index.ts` is the public entry and global export surface.
- `src/runtime.ts` and `src/runtime-auto.ts` handle host integration, event hooks, slash/input behavior, and runtime UI wiring.
- `src/bridge.ts` is the main assistant-reply pipeline: parse protocol blocks, apply commands, save state, and rewrite assistant message bodies.
- `src/protocol.ts` defines reply block formats such as `<UpdateVariable>` and `<PlayerOptions>`.
- `src/storage.ts` reads/writes per-message state snapshots and updates assistant message bodies.
- `src/status-panel.ts` renders the message-body status bar fallback.
- `src/ui/` contains the Vue SFC overlay panel and related store/router files.
- `dist/` is generated output only; do not hand-edit it.
- `reference/` is for examples and host reference material, not the primary runtime implementation.

## Architecture Overview

This project is a browser-targeted TypeScript toolkit for a Three Kingdoms roleplay/state system used in a SillyTavern-like host environment.

Main flow:
1. Host runtime receives an assistant message.
2. `bridge.ts` extracts protocol blocks and state commands.
3. Commands are applied and persisted through `executor.ts` and `storage.ts`.
4. The assistant message body is rewritten with cleaned content plus the fallback status bar.
5. Runtime hooks may additionally sync a Vue overlay panel, but the message-body fallback path must remain reliable.

Preserve this separation of concerns:
- protocol parsing in `protocol.ts`
- state mutation and recompute logic in `commands.ts`, `executor.ts`, `recompute.ts`, `state.ts`
- host integration in `runtime.ts`
- rendering in `status-panel.ts`, `player-options.ts`, and `src/ui/`

## Conventions & Patterns

- Match the coding style already used in nearby files.
- Keep user-facing Chinese naming and domain vocabulary consistent.
- Prefer extending existing modules over introducing parallel implementations.
- Avoid `any` unless there is a clear host-integration reason.
- Do not introduce new runtime dependencies unless necessary and justified.
- For protocol changes, make optional-block parsing tolerant when possible so one malformed optional block does not break the full reply pipeline.
- Keep the message-body status bar as the stable fallback even when changing Vue UI behavior.
- Vue/UI work must not break core script initialization or assistant-reply handling.
- Prefer small, explicit helpers over broad rewrites.

## Build & Validation Rules

- Always validate code changes before finishing.
- Minimum required validation in this repository:
  - `npm run typecheck`
  - `npm run build`
- Treat validation failures as blockers.
- If a change touches runtime hooks, protocol parsing, message rewriting, bundling, or Vue integration, be especially careful to verify the fallback path still works.
- If Vue-related dependencies or bundling change, ensure the final `dist/index.js` does not rely on unresolved bare-module imports in the host environment.

## Security & Safety

- Never commit secrets, tokens, or environment-specific credentials.
- Do not log sensitive data.
- Be careful when changing message rewriting logic in `storage.ts` and `bridge.ts`; avoid corrupting unrelated messages.
- Keep slash command execution and DOM input fallback scoped to the host chat UI.

## Git Workflow

- Follow the existing commit style seen in history, such as `feat: ...`, `fix: ...`, `update ...`.
- Keep commits focused and avoid mixing unrelated refactors with behavior changes.
- Before any commit, review staged changes and confirm no generated noise or sensitive data is included.

## Agent Guidance

- Before editing, read the nearest relevant `CLAUDE.md` if one exists.
- For work inside `src/`, read `src/CLAUDE.md` first.
- For work inside `src/ui/`, read `src/ui/CLAUDE.md` first.
- For work inside `reference/`, read `reference/CLAUDE.md` first.
- When the user asks for a new interaction model, clarify whether it affects message-body HTML, Vue overlay UI, runtime hooks, protocol definitions, or some combination of them.
- Do not proactively update any `CLAUDE.md` after finishing development unless the user explicitly asks for documentation updates.
- If code behavior, directory responsibilities, or the build/integration approach changes substantially and the user asks for doc sync, update the nearest relevant `CLAUDE.md` to reflect those concrete changes.
