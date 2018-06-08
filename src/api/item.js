import config from './config'
import request from '@/utils/request'

export function addItem (data) {
    return request ({
        url: `${config.host}/weapp/additem`,
        method: 'post',
        data
    })
}

export function findItem (data) {
    return request ({
        url: `${config.host}/weapp/finditem`,
        method: 'post',
        data
    })
}

export function removeItem (data) {
    return request ({
        url: `${config.host}/weapp/removeitem`,
        method: 'post',
        data
    })
}

export function updateItem (data) {
    return request ({
        url: `${config.host}/weapp/updateitem`,
        method: 'post',
        data
    })
}
