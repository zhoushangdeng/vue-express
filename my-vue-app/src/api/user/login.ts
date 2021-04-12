import request from '@/util/request';

export function login(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getNavList(data: any) {
    return request({
        url: '/user/getNavList',
        method: 'post',
        data
    })
}

