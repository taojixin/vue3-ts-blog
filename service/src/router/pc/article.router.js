const Router = require('koa-router')
const articleRouter = new Router({ prefix: '/article' })

const {
  getEntriesLists
} = require('../../controller/article.controller')

articleRouter.get('/entries', getEntriesLists)


module.exports = articleRouter