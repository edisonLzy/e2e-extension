import { defineConfig } from 'unocss'
import { presetWind, presetIcons } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      divider: 'rgb(241 245 249)',
    },
  },
  presets: [
    // 支持 tailwindcss 和 windi.css 的语法
    presetWind,
    // 支持图标
    presetIcons
  ],
  rules: [
    ['reset-all', { all: 'unset' }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [/^divider-(\w+)$/, ([_, w], { theme }) => {
      return {
        [`border-${w}`]: `1px solid ${theme.colors.divider}`
      }
    }]
  ]
})