export default {
  SET_OBJECTS(state, { objects }) {
    state.objects = objects
  },
  ADD_OBJECT(state, { object }) {
    state.objects.push(object)
  },
  EDIT_OBJECT(state, { object }) {
    const objectIndex = state.objects.findIndex(o => o.id === object.id)
    state.objects.splice(objectIndex, 1, object)
  },
  DELETE_OBJECT(state, { object }) {
    const objectIndex = state.objects.findIndex(o => o.id === object.id)
    state.objects.splice(objectIndex, 1)
  }
}
