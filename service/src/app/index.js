const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const useRoutes = require('../router')

const errorHandler = require('./error-handle')

const app = new Koa()

app.useRoutes = useRoutes
// 用于解析json数据
app.use(bodyParser())
app.useRoutes(); // 动态加载路由
app.on('error', errorHandler)

module.exports = app