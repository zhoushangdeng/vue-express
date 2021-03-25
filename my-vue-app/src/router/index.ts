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
          keepAlive: true
        },
        component: () => import("../views/Home/index.vue"),
      },
      {
        path: "/Contact",
        name: "Contact",
        meta: {
          title: "Contact",
          keepAlive: true
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
  {
    path: "/selectUser",
    name: "selectUser",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/selectUser/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

/* 路由守卫 */
router.beforeEach((to, from) => {
  NProgress.start()
  if (!getToken().token && to.fullPath != '/login') {
    router.push('/login')
  } else if (getToken().token && to.fullPath === '/login') {
    router.push('/')
  }
  NProgress.done()
})
export default router;