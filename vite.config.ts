import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueEsbuild from 'unplugin-vue/esbuild'
import Components from 'unplugin-vue-components/vite'
import ComponentsEsbuild from 'unplugin-vue-components/esbuild'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Transform } from 'esbuild-plugin-transform'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  legacy: {
    devDepsScanner: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        Transform({
          plugins: [
            VueEsbuild(),
            ComponentsEsbuild({
              resolvers: [ElementPlusResolver()],
            }),
          ],
        }),
      ],
    },
  },
})
