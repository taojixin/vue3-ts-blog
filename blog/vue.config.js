module.exports = {
  // 跨域代理
  devServer: {
    proxy: {
      '/api': {
        // 本地服务器
        target: 'http://localhost:8888',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 打包不生成map文件
  productionSourceMap: false,
}