import { createStore } from 'vuex'
const store = createStore({
    state: {
        userInfo: {
            userID: '',
            userName: 'deng',
            Menus: [],
            menusTree: []
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
            console.log('menusTree', menusTree)
            state.userInfo.menusTree = menusTree
        }
    },
    actions: {
        asyncGetUserInfo({ commit }, val) {
            commit("getUserInfo", val)
        },
        async asyncGetmenus({ commit }, val) {
            const menusArr = [
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
                                keepAlive: true
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
                }
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
            commit("getMenusTree", menusArr)
            commit("getUserMenus", meuns);

            return meuns
        }
    },
    getters: {
        userInfoGetter(state) {
            return state.userInfo.userID
        }
    }
})

export default store