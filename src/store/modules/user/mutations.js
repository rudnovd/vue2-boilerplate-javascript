export default {
  LOADING_START (state) {
    state.state.isLoading = true
  },
  LOADING_END (state) {
    state.state.isLoading = false
  },
  SET_ERROR (state, error) {
    state.state.error = error
  },

  SET_USER (state, user) {
    state.data = {
      ...state.data,
      ...user,
      isLoggedIn: true
    }
  },
  DELETE_USER (state) {
    state.data = {
      isLoggedIn: false
    }
  }
}
