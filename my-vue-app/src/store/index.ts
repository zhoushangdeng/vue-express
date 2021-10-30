import { createStore } from 'vuex'
import { getNavList } from '@/api/user/index'
import { getInfo } from '@/api/user/index'
const store = createStore({
    state: {
        userInfo: {
            userID: '',
            userName: 'deng',
            cachedMenu: [
                {
                    path: "/Home",
                    name: "首页",
                    meta: { title: "首页", keepAlive: true },
                    component: () => import("@/views/Home/index.vue"),
                    id: "1",
                },
            ],
            clickRoute: {},/* 当前点击的路由 */
            defaultActive: '1'
        }
    },
    mutations: {
        getUserInfo(state, userID) {
            state.userInfo.userID = userID
        },
        getKeepAliveItem(state, val: any) {
            state.userInfo.cachedMenu.push(val);
        },
        getclickRoute(state, val) {
            state.userInfo.clickRoute = {
                path: '/' + val.menusName,
                name: val.title,
                meta: { title: val.title, keepAlive: true },
                icon: val.icon,
                component: val.path,
                id: val.id
            };
        },
        getdefaultActive(state, val) {
            state.userInfo.defaultActive = val;
        }
    },
    actions: {
        async asyncgetdefaultActive({ commit }, val) {
            commit("getdefaultActive", val)
        },
        async asyncClickRoute({ commit }, val) {
            commit("getclickRoute", val)
        },
        async asyncGetmenus({ commit }, val) {
            const data = await getInfo({ type: '1' });
            /*模拟 获取后端返回的路由表 */
            const modules = import.meta.glob('/*/views/**/**.vue')
            const menusArr: any = [];
            data.map((item: any) => {
                menusArr.push({
                    path: `/${item.menusName}`,
                    name: `${item.title}`,
                    meta: { title: item.title, keepAlive: true },
                    icon: item.icon,
                    component: modules[`/src/views/system/${item.path}/index.vue`],
                    id: item.id
                })
            })
            return menusArr
        },
        async addKeepAlive({ commit }, val) {
            commit("getKeepAliveItem", val)
        },
    },
    getters: {
        userInfoGetter(state) {
            return state.userInfo.userID
        },
        getclickRoute(state) {
            return state.userInfo.clickRoute
        }
    }
})

export default store