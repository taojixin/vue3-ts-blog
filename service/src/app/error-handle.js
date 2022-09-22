// 同意处理错误逻辑

const errorType = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message;

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = "用户名或密码不能为空~";
      break;
    case errorType.USER_ALREADY_EXISTS:
      status = 409; // conflit
      message = "用户已经存在~";
      break;
    default:
      status: 404;
      message = "NOT FOUND"
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler