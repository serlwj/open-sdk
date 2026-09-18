import type { Interfaces } from '@quickbi/bi-open-sdk';
import { defineMeta } from '@quickbi/bi-open-sdk';

export default defineMeta<Interfaces.AIComponentMeta>({
  schema: {
    type: 'object',
    properties: {
      encoding: {
        type: 'object',
        title: '数据',
        properties: {
          category: {
            type: 'string',
            title: '维度',
            description: '分类轴，绑定 1 个维度字段（如地区、订单日期(month)）。',
            'qbi:fieldType': 'dimension',
          },
          value: {
            type: 'array',
            title: '度量',
            description: '数值轴，绑定 1~3 个度量字段（如销售金额、利润金额）。',
            items: { type: 'string' },
            maxItems: 3,
            'qbi:fieldType': 'measure',
          },
        },
        required: ['category', 'value'],
      },
      options: {
        type: 'object',
        title: '样式',
        properties: {
          palette: {
            type: 'string',
            title: '色系',
            description: '图表主色系。',
            oneOf: [
              { const: 'blue', title: '蓝色系' },
              { const: 'green', title: '绿色系' },
              { const: 'orange', title: '橙色系' },
            ],
            default: 'blue',
          },
          show_label: { type: 'boolean', title: '显示数据标签', default: true },
          bar_width: {
            type: 'integer',
            title: '柱宽',
            description: '单位 px，取值 4~48。',
            minimum: 4,
            maximum: 48,
            default: 16,
          },
        },
      },
    },
  },
  uiSchema: {
    options: {
      'ui:order': ['palette', 'show_label', 'bar_width'],
      palette: { 'ui:widget': 'select' },
      show_label: { 'ui:widget': 'checkbox' },
      bar_width: { 'ui:widget': 'number' },
    },
  },
});
