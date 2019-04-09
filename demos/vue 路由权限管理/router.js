import Router from 'vue-router';

//初始路由
export const constantRouterMap = [
  // mode: 'history', //后端支持可开
  { path: '/login', component: () => import('@/views/login'), hidden: true },
  {
    path: '/register',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true }
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
