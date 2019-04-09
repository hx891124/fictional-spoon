const routerMap = {
  path: '/Administrator',
  component: Layout,
  redirect: '/Administrator/index',
  meta: { title: '管理员专属', icon: 'admin', roles: ['5'] },
  children: [
    {
      path: 'admin',
      component: () => import('@/views/administrator/admin'),
      name: 'Admin',
      meta: { title: '表单管理', roles: ['5'] }
    },
    {
      path: 'adminUserManage',
      component: () => import('@/views/administrator/adminUserManage'),
      name: 'AdminUserManage',
      meta: { title: '用户管理', roles: ['5'] }
    }
  ]
};

export default routerMap;
