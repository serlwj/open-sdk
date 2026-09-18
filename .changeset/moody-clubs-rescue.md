---
'create-qbi-app': patch
---

AI 图表模板（react-ts / vanilla-ts）迁移到自定义组件新协议：meta 改用 `{ schema, uiSchema }`（`schema.properties.encoding` 数据槽位 + `schema.properties.options` 样式叶子 + `uiSchema.options` 控件提示）；组件保持开箱即用的空架子，仅以注释说明运行时契约（`fields` / `options` / `utils.format_value` / `page_config` / `dispatch`）；SDK 依赖对齐 registry 最新发布版（`@quickbi/bi-open-react-sdk@3.0.9`、`@quickbi/bi-open-sdk@4.0.8`、`@quickbi/bi-open-vue-sdk@1.0.9`、`@quickbi/bi-open-menu-sdk@1.0.8`）。
