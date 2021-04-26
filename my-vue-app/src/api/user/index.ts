import request from '@/util/request';

export function getNavList(data: any) {
    return request({
        url: '/user/getNavList',
        method: 'get',
        params: data
    })
}