const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const bgRoutes = require('../router/bg')
const pcRoutes = require('../router/pc')

const errorHandler = require('./error-handle')

const app = new Koa()

app.bgRoutes = bgRoutes
app.pcRoutes = pcRoutes
// 用于解析json数据
app.use(bodyParser())
app.bgRoutes(); // 动态加载路由
app.pcRoutes(); // 动态加载路由
app.on('error', errorHandler)

module.exports = app