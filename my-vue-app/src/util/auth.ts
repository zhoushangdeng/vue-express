import VueCookies from 'vue-cookies'

const TokenKey: string = 'Token'
const userID: string = 'id'
export function getToken() {
    return VueCookies.get(TokenKey) || { token: '', id: '' };
}

export function setToken(token: string, id: number) {
    return VueCookies.set(TokenKey, { token: token, id: id }, '28800s');
}

export function removeToken() {
    return VueCookies.remove(TokenKey);
}