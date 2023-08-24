import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由配置 和以前一样
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/index'),
  },
]

// 此处由【new VueRouter】的方式修改为【createRouter】的方式 其余无变化
const router = createRouter({
  history: createWebHashHistory(), //路由模式的配置采用API调用的方式 不再是之前的字符串 此处采用的hash路由
  routes,
})

export default router
