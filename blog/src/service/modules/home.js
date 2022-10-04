import ynRequest from '../request/index'

export function getSome() {
  return ynRequest.get({ url: '/home' })
}