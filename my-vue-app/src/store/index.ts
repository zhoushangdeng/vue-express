import { createStore } from 'vuex'
import { getNavList } from '@/api/user/index'

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
                    children: [

                    ],
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
                data: '123'
            });/* 获取后端返回的路由表 */

            const str = 'Menus';
            //const modules = import.meta.glob('../views/**/**/index.vue'); /* 读取views下面的素有index.vue */
            // console.log('userVuex', userVuex)
            // const modules = import.meta.glob(`../views/${str}/index.vue`); /* 错误写法，没用 */
            // const modules = import.meta.glob('../views/Menus/index.vue'); /* 正确写法 */

            const menusArr = [
                /* 模拟后端返回路由表 */
                {
                    path: '/',
                    name: '用户管理',
                    meta: {
                        title: '用户管理',
                        keepAlive: true,
                    },
                    component: () => import("@/Layout/index.vue"),
                    indexNum: '1',
                    icon: 'el-icon-s-custom',
                    children: [
                        {
                            path: '/Home',
                            name: '首页',
                            meta: {
                                title: '首页',
                                keepAlive: true,
                            },
                            icon: 'el-icon-s-home',
                            component: () => import("../views/Home/index.vue"),
                            children: [

                            ],
                            indexNum: '1'
                        },
                        {
                            path: '/menus',
                            name: '菜单管理',
                            meta: {
                                title: '菜单管理',
                                keepAlive: true,
                            },
                            component: () => import('../views/Menus/index.vue'),
                            icon: 'el-icon-setting',
                            children: [

                            ]
                            , indexNum: '3'
                        }
                    ]
                },
                {
                    path: '/测试',
                    name: '测试',
                    meta: {
                        title: '测试',
                        keepAlive: true,
                    },
                    icon: 'el-icon-menu',
                    indexNum: '4',
                    component: () => import("../views/testTree/index.vue"),
                    children: [
                        {
                            path: '/test/test1',
                            name: 'test1',
                            meta: {
                                title: '测试1',
                                keepAlive: true,
                            },
                            icon: 'el-icon-star-off',
                            component: () => import('../views/testTree/test1/index.vue'),
                            children: [

                            ],
                            indexNum: '4'
                        },
                        {
                            path: '/test/test2',
                            name: 'test2',
                            meta: {
                                title: '测试2',
                                keepAlive: true
                            },
                            component: () => import("../views/testTree/test2/index.vue"),
                            icon: 'el-icon-star-off',
                            children: [

                            ],
                            indexNum: '5'
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