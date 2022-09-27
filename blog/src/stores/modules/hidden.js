// 是否隐藏的全局变量
import { defineStore } from 'pinia'

const useHiddenStore = defineStore('hidden', {
  state: () => ({
    isShow: true,
    isShowTop: false
  }),
  actions: {
    monitorScreenChange() {
      this.isShow = false
      this.isShowTop = false
    }
  }
})

export default useHiddenStore