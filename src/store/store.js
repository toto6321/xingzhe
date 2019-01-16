import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// user info store
// TODO

// map config store
const map_config_store = {
  state: {
    markers: []
  },
  mutations: {
    set_markers: (state, markers) => {
      state.markers = markers
    }
  },
  actions: {
    set_markers({commit}, payload) {
      commit('set_markers', payload.markers)
    }
  },
  getters: {
    get_markers: (state) => state.markers
  }

};

const store = new Vuex.Store({
  modules: {
    map_config: map_config_store
  }
});

export {store}