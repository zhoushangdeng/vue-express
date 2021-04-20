import request from '@/util/request';

export function login(data: any) {
    return request({
        url: '/login/userLogin',
        method: 'post',
        data
    })
}


