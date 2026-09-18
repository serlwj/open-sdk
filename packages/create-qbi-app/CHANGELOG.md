# create-qbi-app

## 1.0.10

### Patch Changes

- bfed09c: AI 图表模板（react-ts / vanilla-ts）迁移到自定义组件新协议：meta 改用 `{ schema, uiSchema }`（`schema.properties.encoding` 数据槽位 + `schema.properties.options` 样式叶子 + `uiSchema.options` 控件提示）；组件保持开箱即用的空架子，仅以注释说明运行时契约（`fields` / `options` / `utils.format_value` / `page_config` / `dispatch`）；SDK 依赖对齐 registry 最新发布版（`@quickbi/bi-open-react-sdk@3.0.9`、`@quickbi/bi-open-sdk@4.0.8`、`@quickbi/bi-open-vue-sdk@1.0.9`、`@quickbi/bi-open-menu-sdk@1.0.8`）。

## 1.0.9

### Patch Changes

- e941279: Fix Cross Domain Error

## 1.0.8

### Patch Changes

- 8e64f26: verify beta release pipeline with OIDC trusted publishing
- fcf1019: Add ai custom component templates

## 1.0.8-beta.0

### Patch Changes

- 8e64f26: verify beta release pipeline with OIDC trusted publishing

## 1.0.7

### Patch Changes

- d5c9caf: migrate lint and format toolchain from ESLint/Prettier to oxlint/oxfmt, upgrade rspack to v2, bump template TypeScript to v7 with src/env.d.ts module declarations

## 1.0.6

### Patch Changes

- 587186c: feat: optimize template code & fix bundle error

## 1.0.5

### Patch Changes

- d24ba2d: fix chart menu creation failure

## 1.0.4

### Patch Changes

- faa753a: update dependencies

  | before            | after                      |
  | ----------------- | -------------------------- |
  | bi-open           | @quickbi/bi-open           |
  | bi-open-sdk       | @quickbi/bi-open-sdk       |
  | bi-open-react-sdk | @quickbi/bi-open-react-sdk |
  | bi-open-vue-sdk   | @quickbi/bi-open-vue-sdk   |
  | bi-open-menu-sdk  | @quickbi/bi-open-menu-sdk  |

## 1.0.3

### Patch Changes

- e3b940b: feat: add custom page template

## 1.0.2

### Patch Changes

- ef74ef0: Fixed: Fixed the startup error on Windows

## 1.0.1

### Patch Changes

- 6ddb0a3: Fixed: Fixed prompt message text

## 1.0.0

### Major Changes

- c127072: Refactor and migrate to new a repo
