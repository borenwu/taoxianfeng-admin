import config from './config'
import request from '@/utils/request'

export function signInPlatform(data) {
    return request ({
        url: `${config.host}/weapp/signInPlatform`,
        method: 'post',
        data
    })
}

