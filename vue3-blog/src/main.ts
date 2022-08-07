import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ynRequest from './service'

createApp(App).use(store).use(router).mount('#app')

ynRequest.request({
  url: '/api/comment/getcomments',
  method: 'GET'
})
