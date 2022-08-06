const path = require('path')

// 这些代码是在node环境下执行的，node默认支持commonjs，所以使用commonjs的方式导出
module.exports = {
  // outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views'
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  // }
}
