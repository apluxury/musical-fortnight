import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 创建vuex仓库
export default new Vuex.Store({
  state: {
    city: '北京'
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
