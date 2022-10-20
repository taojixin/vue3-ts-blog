import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { YNRequestConfig, YNRequestInterceptors } from './type'

class YNRequest {
  instance: AxiosInstance // AxiosInstance为axios的实例类型
  insterceptors?: YNRequestInterceptors // 是否可传入自定义的拦截器

  constructor(config: YNRequestConfig) {
    this.instance = axios.create(config)
    this.insterceptors = config.interceptors

    // 单个实例的拦截器
    this.instance.interceptors.request.use(
      this.insterceptors?.requestInterceptor,
      this.insterceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.insterceptors?.responseInterceptor,
      this.insterceptors?.requestInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器：请求拦截成功')
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器：请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('所有实例都有的拦截器：响应拦截成功')
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器：响应拦截成功')
        return err
      }
    )
  }

  request(config: YNRequestConfig): void {
    // 给某个单独的请求添加拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default YNRequest
