const app = require('./app')
const config = require('./app/config')
require('./app/database') // 进行数据库连接，同时进行提示数据库是否连接成功

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口启动成功！`);
})