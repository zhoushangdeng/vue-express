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
export default menusArr
