/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles); // 闭包查找所有该roles下的路由
      }
      res.push(tmp);
    }
  });
  return res;
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers); // 查到的路由存在vuex中
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;
        let accessedRouters;
        if (roles.includes('5')) {
          accessedRouters = asyncRouterMap; // 如果是admin 直接加载所有路由 超级管理员
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles); // 否则根据权限搜索路由
        }
        commit('SET_ROUTERS', accessedRouters); // 保存vuex中
        resolve();
      });
    }
  }
};
