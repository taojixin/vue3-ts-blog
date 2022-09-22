const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const errorHandler = require('./error-handle')

const app = new Koa()

// 用于解析json数据
app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.on('error', errorHandler)

module.exports = app