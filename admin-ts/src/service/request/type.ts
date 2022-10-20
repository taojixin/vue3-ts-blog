// AxiosRequestConfig为axios.create()需要传入的配置类型
// AxiosResponse为响应拦截器类型
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YNRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}
export interface YNRequestConfig extends AxiosRequestConfig {
  interceptors?: YNRequestInterceptors
}
