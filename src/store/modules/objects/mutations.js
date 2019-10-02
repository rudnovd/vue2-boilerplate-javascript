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

  SET_OBJECTS (state, objects) {
    state.objects = objects
  },
  ADD_OBJECT (state, object) {
    state.objects.push(object)
  },
  PUT_OBJECT (state, object) {
    state.objects.forEach(singleObject => {
      if (singleObject.id === object.id) {
        singleObject = object
      }
    })
  },
  DELETE_OBJECT (state, object) {
    state.objects.forEach((singleObject, index) => {
      if (singleObject.id === object.id) {
        state.category.splice(index, 1)
      }
    })
  }
}
