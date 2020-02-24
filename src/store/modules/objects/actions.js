import httpService from '@/services/httpService'

export default {
  async getObjects({ commit, state }) {
    try {
      const response = await httpService.get('https://api.frankfurter.app/latest', {
        amount: 1
      })

      const payload = {
        objects: response.data
      }
      commit('SET_OBJECTS', payload)
      return state.objects
    } catch (error) {
      throw error
    }
  },
  async addObject({ commit, state }, payload) {
    commit('ADD_OBJECT', payload)
    return state.objects
  },
  async editObject({ commit, state }, payload) {
    commit('EDIT_OBJECT', payload)
    return state.objects
  },
  async deleteObject({ commit, state }, payload) {
    commit('DELETE_OBJECT', payload.object)
    return state.objects
  }
}
