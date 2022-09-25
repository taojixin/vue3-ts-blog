const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })

const {
  create
} = require('../../controller/user.controller')
const {
  verifyUser,
  handlePassword
} = require('../../midddleware/user.middleware')

userRouter.post('/', verifyUser, handlePassword, create)

module.exports = userRouter;