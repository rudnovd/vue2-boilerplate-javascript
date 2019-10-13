export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/objects/',
    component: () => import(/* webpackChunkName: 'object' */ '@/views/Object'),
    meta: {
      title: 'Object',
      authenticationRequired: true
    }
    // children: [
    //   {
    //     // if path /objects/:id/info
    //     path: 'info',
    //     component: import(/* webpackChunkName: 'objectInfo' */ '@/views/ObjectInfo'),
    //     meta: {
    //       title: 'Object info',
    //       authenticationRequired: false
    //     }
    //   }
    // ]
  },

  {
    path: '/admin/objects/',
    component: () => import(/* webpackChunkName: 'admin/objects' */ '@/views/admin/Objects'),
    meta: {
      title: 'Objects',
      adminRoleRequired: true
    }
  },

  {
    path: '*',
    component: () => import(/* webpackChunkName: 'error' */ '@/views/Error.vue'),
    meta: {
      title: 'Error'
    }
  }
]
