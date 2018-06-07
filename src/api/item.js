import config from './config'
import request from '@/utils/request'

export function findItem(data) {
  return request({
    url: `${config.host}/weapp/finditem`,
    method: 'post',
    data
  })
}

