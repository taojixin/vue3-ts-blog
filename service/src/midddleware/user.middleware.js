const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

// 验证用户是否注册
const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  const result = await service.getUserByName(name)
  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  await next();
}

// 对密码进行加密
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password)
  await next();
}

module.exports = {
  verifyUser,
  handlePassword
}