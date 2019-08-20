import * as api from '@/js/api/objects'

export default {
  async getObjects ({ commit }) {
    api.getObjects().then(response => {
      if (response.status === 200) {
        commit('SET_OBJECTS', response.data)
      } else {
        return response
      }
    })
  },
  async postObject ({ commit, dispatch }, data) {
    api.postObject(data).then(response => {
      if (response.status === 200) {
        commit('ADD_OBJECT', response.data)
        /*
        OR
        commit('DELETE_OBJECTS')
        dispatch.getObjects()
        */
      } else {
        return response
      }
    })
  },
  async putObject ({ commit }, data) {
    api.putObject(data).then(response => {
      if (response.status === 200) {
        commit('PUT_OBJECT', response.data)
      } else {
        return response
      }
    })
  },
  async deleteObject ({ commit }, data) {
    api.deleteObject(data).then(response => {
      if (response.status === 200) {
        commit('DELETE_OBJECT', response.data)
      } else {
        return response
      }
    })
  }
}
