export default {
  SET_OBJECTS (state, data) {
    state.objects = data
  },
  ADD_OBJECT (state, data) {
    state.objects.push(data)
  },
  PUT_OBJECT (state, data) {
    state.category.forEach((value, index) => {
      if (value.id === data.id) {
        state.categoru[index] = data
      }
    })
  },
  DELETE_OBJECT (state, data) {
    state.category.forEach((value, index) => {
      if (value.id === data.id) {
        state.category.splice(index, 1)
      }
    })
  }
}
