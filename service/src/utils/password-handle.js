// 对密码进行加密
const crypto = require('crypto')

const md5password = (password) => {
  const md5 = crypto.createHash('md5');
  const result = md5.update(password).digest('hex');
  console.log(password);
  return result;
}

module.exports = md5password; 5