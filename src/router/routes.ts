const routes = [
  // {
  //   path: '/login',
  //   component: () => import('@/pages/login.vue') //路由懒加载
  // },
  {
    path: '/',
    component: () => import('@/pages/index')
  }
]

export default routes
