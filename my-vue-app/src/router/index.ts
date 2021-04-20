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

    component: () => import("@/layout/index.vue"),
    children: []
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
    path: '/404',
    name: "404",
    component: () => import('@/views/error/index.vue')
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
          if (item.path == to.path && index < Menus.length - 1) {
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
  to.path == '/login' ? next() : next('/login')/* token不存在则中断导航，重新加载进入login页面 */
  NProgress.done()
})
export default router;