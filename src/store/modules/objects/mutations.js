export default {
  LOADING_START(state) {
    state.state.isLoading = true
  },
  LOADING_END(state) {
    state.state.isLoading = false
  },
  SET_ERROR(state, error) {
    state.state.error = error
  },

  SET_OBJECTS(state, objects) {
    state.data.objects = objects
  },
  ADD_OBJECT(state, object) {
    state.data.objects.push(object)
  },
  PUT_OBJECT(state, object) {
    const objectIndex = state.data.objects.findIndex(singleObject => singleObject._id === object._id)
    state.data.objects.splice(objectIndex, 1, object)
  },
  DELETE_OBJECT(state, object) {
    const objectIndex = state.data.objects.findIndex(singleObject => singleObject._id === object._id)
    state.data.objects.splice(objectIndex, 1)
  }
}
