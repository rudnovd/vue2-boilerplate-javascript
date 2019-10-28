import store from '@/store'

export function getLogin (to, from, next) {
  store.dispatch('user/getLogin').then(() => {
    next()
  })
}

export function checkRouteAuth (to, from, next) {
  const authenticationRequired = to.matched.some(record => record.meta.authenticationRequired)
  if (authenticationRequired) {
    if (userLoggedIn()) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
}

export function checkRouteAdminRole (to, from, next) {
  const adminRoleRequired = to.matched.some(record => record.meta.adminRoleRequired)
  if (adminRoleRequired) {
    if (userLoggedIn() && store.getters['user/user'].role === 'Admin') {
      next()
    } else {
      next({ path: '/404' })
    }
  } else {
    next()
  }
}

export function setRouteProps (to, from) {
  const pageTitle = to.matched.find(record => record.meta.title)
  if (pageTitle) {
    document.title = to.meta.title
  }
}

function userLoggedIn () {
  if (store.getters['user/user'].isLoggedIn) {
    return true
  } else {
    return false
  }
}
