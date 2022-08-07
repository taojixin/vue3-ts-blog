import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { YNRequestConfig, YNRequestInterceptors } from './type'

class YNRequest {
  instance: AxiosInstance // AxiosInstance为axios的实例类型
  insterceptors?: YNRequestInterceptors // 是否可传入自定义的拦截器

  constructor(config: YNRequestConfig) {
    this.instance = axios.create(config)
    this.insterceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.insterceptors?.requestInterceptor,
      this.insterceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.insterceptors?.responseInterceptor,
      this.insterceptors?.requestInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default YNRequest
