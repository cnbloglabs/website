import { defineConfig } from 'vite'
import { presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({

  server: {
    port: 3000,
  },

  plugins: [
    Components({
      dirs: '.vitepress',
      include: [/\.vue/, /\.md/],
      dts: true,
    }),
    Unocss({
      shortcuts: [
        [
          'btn',
          'px-4 py-1 rounded inline-flex justify-center gap-2 text-white leading-30px children:mya !no-underline cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
      ],
      presets: [
        presetUno({
          dark: 'media',
        }),
        // presetAttributify(),  vitepress 无法构建
        presetIcons({ scale: 1.2 }),
      ],
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@iconify-json/carbon',
    ],
  },
})
