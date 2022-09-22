const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })

const {
  create
} = require('../controller/user.controller')
const {
  verifyUser
} = require('../midddleware/user.middleware')

userRouter.post('/', verifyUser, create)

module.exports = userRouter;