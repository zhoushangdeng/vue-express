import { createStore } from 'vuex'
const store = createStore({
    state: {
        userInfo: {
            userID: '',
            userName: 'deng',
            Menus: [],
            menusTree: [],
            cachedMenu: [],
            clickRoute: {}/* 当前点击的路由 */
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
        getKeepAliveItem(state, val) {
            state.userInfo.cachedMenu.push(val);
        },
        getclickRoute(state, val) {
            state.userInfo.clickRoute = val;
        }
    },
    actions: {
        asyncClickRoute({ commit }, val) {
            commit("getclickRoute", val)
        },
        asyncGetUserInfo({ commit }, val) {
            commit("getUserInfo", val)
        },
        async asyncGetmenus({ commit }, val) {
            const menusArr = [
                {
                    path: '/',
                    name: '用户管理',
                    meta: {
                        title: 'Layout',
                        keepAlive: true,
                    },
                    component: () => import("@/Layout/index.vue"),
                    children: [
                        {
                            path: '/Home',
                            name: '首页',
                            meta: {
                                title: 'Layout',
                                keepAlive: true,
                            },
                            component: () => import("@/views/Home/index.vue"),
                            children: [

                            ]
                        },
                        {
                            path: '/menus',
                            name: '菜单管理',
                            meta: {
                                title: 'menus',
                                keepAlive: true,
                            },
                            component: () => import("@/views/Menus/index.vue"),
                            children: [

                            ]
                        }
                    ]
                },
                {
                    path: '/test',
                    name: 'test',
                    meta: {
                        title: 'test',
                        keepAlive: true,
                    },
                    component: () => import("@/views/testTree/index.vue"),
                    children: [
                        {
                            path: '/test/test1',
                            name: 'test1',
                            meta: {
                                title: 'test1',
                                keepAlive: true,
                            },
                            component: () => import("@/views/testTree/test1/index.vue"),
                            children: [

                            ],
                        },
                        {
                            path: '/test/test2',
                            name: 'test2',
                            meta: {
                                title: 'test2',
                                keepAlive: true
                            },
                            component: () => import("@/views/testTree/test2/index.vue"),
                            children: [

                            ],
                        }
                    ],
                },
            ]
            const meuns: any = []
            const arrs = (val: any) => {
                val.map((item: any, index: any) => {
                    meuns.push({
                        path: item.path,
                        name: item.name,
                        meta: item.meta,
                        component: item.component
                    })
                    if (item.children.length > 0) {
                        arrs(item.children)
                    }
                })
                return meuns
            }
            await arrs(menusArr)
            console.log('menusArr', menusArr)
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