// 是否隐藏的全局变量
import { defineStore } from 'pinia'

const useHiddenStore = defineStore('hidden', {
  state: () => ({
    // >700时menu的显示与隐藏
    isShow: true,
    // <700后menu的显示与隐藏
    isShowTop: false,
    // 首页left的显示与隐藏
    isHomeLeft: true
  }),
  actions: {
    monitorScreenChange() {
      this.isShow = false
      this.isShowTop = false
    }
  }
})

export default useHiddenStore