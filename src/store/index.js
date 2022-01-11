import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import createPersistedState from 'vuex-persistedstate' //数据持久化工具

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin,
  },
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
    //   storage: window.localStorage,
    //   // 存储的 key 的key值
    //   key: "store",
    //   render(state) {
    //     // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
    //     //若想持久化存储部分数据，请在return的对象中采用key：value键值对的方式进行数据存储，render函数中的参数既为state对象。(很奇怪试了第二种并不行)
    //     return { ...state };
    //   }
     })
  ]
})
