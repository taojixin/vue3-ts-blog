const fs = require('fs')
const bgRoutes = function () {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return;
    const router = require(`./${file}`)
    // 这里的this指向app
    this.use(router.routes())
    this.use(router.allowedMethods())
  })
}

module.exports = bgRoutes