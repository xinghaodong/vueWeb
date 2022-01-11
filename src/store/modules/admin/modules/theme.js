
export default {
    namespaced: true,
    state: {
        //主题列表

        //当前激活的默认第二个
        activeName: '',
    },
    mutations: {
        mutationHandler(state, data) {
            console.log(state, data, 'state, data')
        },
    },
    actions: {
        actionHandler({ commit }, payload) {
            commit('mutationHandler', payload)
        }
    }
}