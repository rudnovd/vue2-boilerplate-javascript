import Vue from 'vue'

import Router from 'vue-router'

import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
      meta: {
        title: 'Home',
        authenticationRequired: false,
        adminRoleRequired: false
      }
    },
    {
      path: '/objects/:id',
      component: () => import(/* webpackChunkName: 'object' */ '@/views/Object'),
      meta: {
        title: 'Object',
        authenticationRequired: false,
        adminRoleRequired: false
      },
      children: [
        {
          // if path /objects/:id/info
          path: 'info',
          component: import(/* webpackChunkName: 'objectInfo' */ '@/views/ObjectInfo'),
          meta: {
            title: 'Object info',
            authenticationRequired: false,
            adminRoleRequired: false
          }
        }
      ]
    },

    // Admin routes
    {
      path: '/admin/objects/',
      component: () => import(/* webpackChunkName: 'admin/objects' */ '@/views/admin/Objects'),
      meta: {
        title: 'Objects',
        authenticationRequired: true,
        adminRoleRequired: true
      }
    },

    // Error page
    {
      path: '*',
      component: () => import(/* webpackChunkName: 'error' */ '@/views/Error.vue'),
      meta: {
        title: 'Error',
        authenticationRequired: false,
        adminRoleRequired: false
      }
    }
  ]
})

// Do before load router
router.beforeEach((to, from, next) => {
  // Set page title
  document.title = to.meta.title

  next()
})

router.beforeResolve((to, from, next) => {
  if (requireAuthPassed(to) === true) {
    next()
  } else {
    next({ path: '/' })
  }

  if (requireAdminRolePassed(to) === true) {
    next()
  } else {
    next({ path: '/' })
  }
})

function requireAuthPassed (to) {
  if (to.matched.some(record => record.meta.authenticationRequired)) {
    if (store.getters['user/user'].isLoggedIn) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

function requireAdminRolePassed (to) {
  if (to.matched.some(record => record.meta.adminRoleRequired)) {
    if (store.getters['user/user'].role === 'Admin') {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

export default router
