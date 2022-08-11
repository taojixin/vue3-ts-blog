import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ynRequest from './service'

createApp(App).use(store).use(router).mount('#app')

// ynRequest.request({
//   url: '/api/comment/getcomments',
//   method: 'GET'
// })
ynRequest.request({
  url: '/api/comment/getcomments',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的拦截器')
      return res
    }
  }
})
