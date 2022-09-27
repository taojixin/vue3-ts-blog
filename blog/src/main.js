import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

// 初始化样式
import 'normalize.css'
import './assets/css/index.css'



createApp(App).use(router).use(pinia).mount('#app')


// 根据屏幕大小控制某些组件的显示与隐藏
import useHiddenStore from '@/stores/modules/hidden'
const hidden = useHiddenStore()
// 判读窗口大小控制menus的显示与隐藏
if (document.documentElement.clientWidth < 700) {
  hidden.isShow = false
}
window.addEventListener('resize', () => {
  let clientWidth = document.documentElement.clientWidth
  if (clientWidth < 700) {
    hidden.monitorScreenChange()
  } else {
    hidden.isShow = true
  }
})
