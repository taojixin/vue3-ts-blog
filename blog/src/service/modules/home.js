import ynRequest from '../request/index'

export async function getEntriesLists() {
  return await ynRequest.get({ url: '/article/entries' })
}