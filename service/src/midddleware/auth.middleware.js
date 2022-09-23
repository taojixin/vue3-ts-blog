const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx)
  }
  const result = await service.getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx)
  }


  await next();
}

module.exports = {
  verifyLogin
}