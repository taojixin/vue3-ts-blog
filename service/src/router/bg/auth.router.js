const Router = require('koa-router')

const authRouter = new Router()

const {
  login,
  success
} = require('../../controller/auth.controller.js')
const {
  verifyLogin,
  verifyAuth
} = require('../../midddleware/auth.middleware')

authRouter.post('/login', verifyLogin, login)
authRouter.get('/test', verifyAuth, success)

module.exports = authRouter;