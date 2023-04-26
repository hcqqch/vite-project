import { createRouter, createWebHashHistory } from 'vue-router'

// import type { RouterTypes } from '~/basic'
import Layout from '@/layout/index.vue'

export const constantRoutes: any = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect')
  //     }
  //   ]
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', elSvgIcon: 'Fold', affix: true }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/menu1',
    name: 'table',
    meta: {
      title: '表格',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        name: '菜单1',
        component: () => import('@/views/table/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'menu1', elSvgIcon: 'Fold', affix: true }
      },
      {
        path: 'menu2',
        name: '菜单2',
        component: () => import('@/views/table/index2.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'menu2', elSvgIcon: 'Fold', affix: true }
      }
    ]
  }
]

//角色和code数组动态路由
export const roleCodeRoutes: RouterTypes = [

]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTypes = [
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', name: 'CatchAll', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
