import { Object } from '@/js/api/object'

export default {
  async getObjects ({ commit }) {
    commit('LOADING_START')
    await Object.getAll()
      .then(response => {
        commit('SET_OBJECTS', response.data)
      })
      .catch(error => {
        commit('SET_ERROR', error.data)
      })
      .finally(() => {
        commit('LOADING_END')
      })
  },
  async postObject ({ commit }, data) {
    commit('LOADING_START')
    await Object.post(data)
      .then(response => {
        commit('ADD_OBJECT', response.data)
      })
      .catch(error => {
        commit('SET_ERROR', error.data)
      })
      .finally(() => {
        commit('LOADING_END')
      })
  },
  async putObject ({ commit }, data) {
    commit('LOADING_START')
    await Object.put(data)
      .then(response => {
        commit('PUT_OBJECT', response.data)
      })
      .catch(error => {
        commit('SET_ERROR', error.data)
      })
      .finally(() => {
        commit('LOADING_END')
      })
  },
  async deleteObject ({ commit }, data) {
    commit('LOADING_START')
    await Object.delete(data)
      .then(response => {
        commit('DELETE_OBJECT', response.data)
      })
      .catch(error => {
        commit('SET_ERROR', error.data)
      })
      .finally(() => {
        commit('LOADING_END')
      })
  }
}
