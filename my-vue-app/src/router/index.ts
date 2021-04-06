import { createRouter, createWebHashHistory, RouteRecordRaw, useRouter } from "vue-router";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '../util/auth'
import store from '@/store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    meta: {
      title: "首页",
      keepAlive: true
    },

    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/Home",
        name: "Home",
        meta: {
          title: "首页",
          keepAlive: true,
         
        },
        component: () => import("../views/Home/index.vue"),
      },
      {
        path: "/Menus",
        name: "Menus",
        meta: {
          title: "菜单管理",
          keepAlive: true,
        },
        component: () => import("../views/Menus/index.vue"),
      },
      {
        path: "/Contact",
        name: "Contact",
        meta: {
          title: "Contact",
          keepAlive: true,
          roles: ['admin']  //  editor角色的用户才能访问该页面
        },
        component: () => import("../views/Contact/index.vue"),
      },

    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/Login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {/* 路由守卫 */
  NProgress.start()
  if (getToken().token) {/* token存在则放行 */

    if (store.state.userInfo.userID) {
      next()
    } else {
      /* 如果userID不存在则注册路由，并改变vuex里的userID。防止因为刷新丢失路由问题 */
      store.commit('getUserInfo', getToken().id);
      const Menus = {/* 模拟后端返回的路由表 */
        path: '/hello',
        name: 'hello',
        meta: {
          title: 'hello',
          keepAlive: false,
        },
        component: () => import('@/views/hello/index.vue'),
      };
      router.addRoute('Layout', Menus)/* 给layout添加子路由 */
      next({ ...to, replace: true });
    }
  } else {

    to.path == '/login' ? next() : next('/login')/* token不存在则中断导航，重新加载进入login页面 */
  }
  NProgress.done()
})
export default router;