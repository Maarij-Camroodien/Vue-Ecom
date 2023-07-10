import { createStore } from 'vuex'

export default createStore({
  state: {
    manga: null
  },
  getters: {
  },
  mutations: {
    setManga(state, manga) {
      state.manga = manga;
    },
  },
  actions: {
    async fetchManga(context) {
      try{
        let res = await fetch(dataUrl);
        let {manga} = await res.json();

        context.commit("setManga", manga)
      } catch(e) {
        console.log(e.message)
      }
    },
  },
  modules: {
  }
})
