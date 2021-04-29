import { createStore } from 'vuex'
import { getNavList } from '@/api/user/index'
import getMenusArr from '@/router/menusArr'
const store = createStore({
    state: {
        userInfo: {
            userID: '',
            userName: 'deng',
            Menus: [],
            menusTree: [],
            cachedMenu: [
                {
                    path: '/Home',
                    name: '首页',
                    meta: {
                        title: '首页',
                        keepAlive: true,
                    },
                    component: () => import("../views/Home/index.vue"),
                    children: [],
                    indexNum: '1'
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
        getUserMenus(state, meuns) {
            state.userInfo.Menus = meuns
        },
        getMenusTree(state, menusTree) {
            state.userInfo.menusTree = menusTree
        },
        getKeepAliveItem(state, val: any) {
            state.userInfo.cachedMenu.push(val);
        },
        getclickRoute(state, val) {
            state.userInfo.clickRoute = val;
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
        asyncGetUserInfo({ commit }, val) {
            commit("getUserInfo", val)
        },
        async asyncGetmenus({ commit }, val) {

            const { data } = await getNavList({
                data: ''
            });/*模拟 获取后端返回的路由表 */
            const menusArr = getMenusArr;
            const meuns: any = []
            const arrs = (val: any) => {
                val.map((item: any, index: any) => {
                    meuns.push({
                        path: item.path,
                        name: item.name,
                        meta: item.meta,
                        component: item.component,
                        indexNum: item.indexNum
                    })
                    if (item.children.length > 0) {
                        arrs(item.children)
                    }
                })
                return meuns
            }
            await arrs(menusArr)
            commit("getMenusTree", menusArr)
            commit("getUserMenus", meuns);
            return meuns
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