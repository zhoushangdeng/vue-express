import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
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
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/Home",
        name: "Home",
        meta: {
          title: "首页",
          keepAlive: true
        },
        component: () => import("@/views/Home/index.vue"),
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
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: "注册",
      keepAlive: true
    },
    component: () => import("@/views/register/index.vue"),
  },
  {
    path: '/404',
    name: "404",
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '/logins',
    name: 'logins',
    component: () => import('@/views/Login'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


router.beforeEach(async (to, from, next) => {/* 路由守卫 */
  NProgress.start()
  if (getToken().token) {
    if (store.state.userInfo.userID) {
      if (to.matched.length === 0) {
        const Menus: [] = await store.dispatch('asyncGetmenus', '获取路由表');
        Menus.map((item: any, index: number) => {
          console.log('')
          if (item.path == to.path && index < Menus.length - 1) {
            /* 给Layout页面添加子级路由 */
            router.addRoute('Layout', Menus[index]);
            next({ ...to, replace: true })
          }
          else if (Menus.length - 1 == index) {
            if (item.path == to.path) {
              router.addRoute('Layout', Menus[index]);
              next({ ...to, replace: true })
            } else {
              next('404')
            }
          }
        })
      } else {
        to.path === '/' ? next('Home') : to.path === '/login' ? next('Home') : next()
        NProgress.done()
      }
    } else {
      const Menus: [] = await store.dispatch('asyncGetmenus');
      if (to.path !== '/Home' && to.path !== '/') {
        Menus.map((item) => {
          if (item.path === to.path) {
            store.dispatch('addKeepAlive', item)
          }
        })
      }
      store.commit('getUserInfo', getToken().id);/* 如果userID不存在则注册路由，并改变vuex里的userID。防止因为刷新丢失路由问题 */
      next({ ...to, replace: true });
    }
    return
  }
  if (to.path == '/register' || to.path == '/login') {
    next()
  } else {
    next('/login')
  }
  /* else if (to.path == '/login') {
    next()
  } else if (to.path == '/register') {
    console.log(to.path)
    next()
  } else {
    next('/login')
  } */
  //to.path == '/login' ? next() : next('/login')/* token不存在则中断导航，重新加载进入login页面 */
  NProgress.done()
})
export default router;