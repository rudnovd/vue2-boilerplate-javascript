export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/Login'),
    meta: {
      title: 'Login'
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
