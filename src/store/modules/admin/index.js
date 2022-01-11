const files = require.context('./modules', false, /\.js$/) //require 是webpack 对象下的属性

const modules = {}
files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default {
    namespaced: true,
    modules
}
