import { defineStore } from 'pinia'

const useNavbarStore = defineStore('navbar', {
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

export default useNavbarStore
