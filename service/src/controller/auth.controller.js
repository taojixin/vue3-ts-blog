const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class AuthController {
  // 登录颁发token
  async login(ctx, next) {
    console.log(ctx.user);
    const { id, name } = ctx.user
    // 颁发token
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, // 过期时间
      algorithm: 'RS256'  // 加密方式：非对称加密
    })

    ctx.body = {
      id,
      name,
      token
    }
  }

  async success(ctx, next) {
    ctx.body = "验证成功"
  }
}

module.exports = new AuthController