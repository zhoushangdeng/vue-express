import { createRouter, createWebHashHistory, RouteRecordRaw, useRouter } from "vue-router";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '../util/auth'
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
          roles: ['admin', 'editor'] // 普通的用户角色
        },
        component: () => import("../views/Home/index.vue"),
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
    next()

  } else {

    to.path == '/login' ? next() : next('/login')/* token不存在则中断导航，重新加载进入login页面 */
  }
  NProgress.done()
})
export default router;