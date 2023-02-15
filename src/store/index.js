import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {},
  },
  getters: {

  },
  mutations: {
    GET_DATA(state, items) {
      state.items = items
    },
    DELETE_DATA(state, id) {
      const index = state.items.products.findIndex(i => i.id === id);
      console.log(index);
      state.items.products.splice(index, 1);
      // const itemsArray = Object.values(state.items);
      // return itemsArray.filter(item => item.id !== id);
      // state.items = state.items.splice(id, 1);
    },

  },
  actions: {
    async getData({ commit }) {
      await axios.get('https://dummyjson.com/products')
        .then(response => response.data)
        .then(items => {

          commit('GET_DATA', items)
        }).catch((error) => {
          alert(error);
          console.log(error);
        })
    },
    async deleteData({ commit }, id) {
      await axios.delete('https://dummyjson.com/products/' + id)
      commit('DELETE_DATA', id);
    },

  },
  modules: {
  }
})
