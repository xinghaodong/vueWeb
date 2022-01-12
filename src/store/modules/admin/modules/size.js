export default {
    namespaced: true,
    state: {
        size: "small",
    },
    mutations: {
        /**
         * 修改饿了么 按钮等 大小
         * @param {*} state 
         * @param {*} data 
         */
        sizeSet(state, data) {
            state.size = data
        }
    },
    actions:{
        setSize({commit},data){
            commit("sizeSet",data)
        }
    }
}