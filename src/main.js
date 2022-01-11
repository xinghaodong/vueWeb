import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from "qs"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// nprogress样式文件
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象 
Vue.prototype.$qs = qs
Vue.use(router).use(ElementUI, { size: store.state.admin.size.size, zIndex: 3000 })//设置了按钮大小
Vue.config.productionTip = false
//路由守卫 没有token 就跳转到login页
router.beforeEach((to, from, next) => {
  NProgress.start();//开启路由动画
  if (to.fullPath == "/Login") {
    next()
  } else {
    const token = localStorage.getItem("userToken")
    if (!token) {
      next("/Login")
    }
  }
  next()
});
router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
