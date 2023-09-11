import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //这个path用到了上面安装的@types/node
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import postcssPresetEnv from 'postcss-preset-env'
import legacy from '@vitejs/plugin-legacy'
// import Components from 'unplugin-vue-components/vite'
// import {
//   // ElementPlusResolver,
//   // AntDesignVueResolver,
//   VantResolver
//   // HeadlessUiResolver,
//   // ElementUiResolver
// } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    visualizer(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        'vue',
        'vue-router',
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true
        }
      ],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: './auto-import.d.ts',
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
    // Components({
    //   dirs: ['src/components'], // 目标文件夹
    //   extensions: ['vue', 'jsx'], // 文件类型
    //   dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
    //   // ui库解析器，也可以自定义，需要安装相关UI库
    //   resolvers: [
    //     VantResolver()
    //     // ElementPlusResolver(),
    //     // AntDesignVueResolver(),
    //     // HeadlessUiResolver(),
    //     // ElementUiResolver()
    //   ]
    // })
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': path.resolve('./src'), // @代替src
      '#': path.resolve('./types') // #代替types
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // 展示处理之后的key,
      scopeBehaviour: 'local', // 配置的模块化还是全局还是局部
      generateScopedName: '[name]_[local]_[hash:5]', // 类名生成规则
      globalModulePaths: [] // 不想参与css格式化的文件路径
    },
    postcss: {
      //  postcssPresetEnv插件可以帮我们实现自动补全，语法降级等功能
      plugins: [postcssPresetEnv()]
      // 关于postcss文章请查看https://github.com/postcss/postcss/blob/main/docs/README-cn.md
    }
  },
  build: {
    sourcemap: false,
    reportCompressedSize: false,
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 让每个插件都打包成独立的文件
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  }
})
