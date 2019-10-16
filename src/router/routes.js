export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/objects',
    component: () => import(/* webpackChunkName: 'object' */ '@/views/Objects'),
    meta: {
      title: 'Objects',
      authenticationRequired: true
    }
  },
  {
    path: '/objects/:id',
    component: () => import(/* webpackChunkName: 'object' */ '@/views/SingleObject'),
    meta: {
      title: 'Single object',
      authenticationRequired: true
    },
    props: {
      id: this
    }
  },

  {
    path: '/admin/objects',
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
