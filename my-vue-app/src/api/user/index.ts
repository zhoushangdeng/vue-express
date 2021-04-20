import request from '@/util/request';

export function getNavList() {
    return request({
        url: '/user/getNavList',
        method: 'get',
        
    })
}