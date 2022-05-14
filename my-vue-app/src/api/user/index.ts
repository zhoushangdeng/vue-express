import request from '@/util/request';

export function getNavList(data: any) {
    return request({
        url: '/user/getNavList',
        method: 'get',
        params: data
    })
}

export function getInfo(params: any) {
    return request({
        url: '/user/getInfo',
        method: 'get',
        params
    })
}
export function insertMenus(data: any) {
    return request({
        url: '/user/insertMenus',
        method: 'post',
        data
    })
}

export function delMenus(data: any) {
    return request({
        url: '/user/delMenus',
        method: 'post',
        data
    })
}

export function updateMenus(data: any) {
    return request({
        url: '/user/updateMenus',
        method: 'post',
        data
    })
}
