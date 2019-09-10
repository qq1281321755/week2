import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
  },
  mutations: {
    fn(i,w){
      //console.log(123)
      //console.log(i,w)
      alert(i)
      alert(w)
    }
  },
  actions: {

  }
})
