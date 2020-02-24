export default {
  async auth({ commit, state }) {
    const payload = {
      user: { role: 'Admin' }
    }
    commit('SET_USER', payload)
    return state.user
  }
}
