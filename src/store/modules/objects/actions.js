import { Object } from "@/services/api/object";

export default {
  async getObjects({ commit }) {
    commit("SET_OBJECTS", [
      {
        id: 1,
        name: "Object 1"
      },
      {
        id: 2,
        name: "Object 2"
      },
      {
        id: 3,
        name: "Object 3"
      },
      {
        id: 4,
        name: "Object 4"
      },
      {
        id: 5,
        name: "Object 5"
      },
      {
        id: 6,
        name: "Object 6"
      },
      {
        id: 7,
        name: "Object 7"
      },
      {
        id: 8,
        name: "Object 8"
      },
      {
        id: 9,
        name: "Object 9"
      },
      {
        id: 10,
        name: "Object 10"
      }
    ]);
    // commit('LOADING_START')
    // await Object.getAll()
    //   .then(response => {
    //     commit('SET_OBJECTS', response.data)
    //   })
    //   .catch(error => {
    //     commit('SET_ERROR', error.data)
    //   })
    //   .finally(() => {
    //     commit('LOADING_END')
    //   })
  },
  async postObject({ commit }, data) {
    commit("LOADING_START");
    await Object.post(data)
      .then(response => {
        commit("ADD_OBJECT", response.data);
      })
      .catch(error => {
        commit("SET_ERROR", error.data);
      })
      .finally(() => {
        commit("LOADING_END");
      });
  },
  async putObject({ commit }, data) {
    commit("LOADING_START");
    await Object.put(data)
      .then(response => {
        commit("PUT_OBJECT", response.data);
      })
      .catch(error => {
        commit("SET_ERROR", error.data);
      })
      .finally(() => {
        commit("LOADING_END");
      });
  },
  async deleteObject({ commit }, data) {
    commit("LOADING_START");
    await Object.delete(data)
      .then(response => {
        commit("DELETE_OBJECT", response.data);
      })
      .catch(error => {
        commit("SET_ERROR", error.data);
      })
      .finally(() => {
        commit("LOADING_END");
      });
  }
};
