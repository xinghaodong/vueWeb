import Vue from 'vue'
import router from "vue-router"
import Layout from "@/layout/layout.vue"
Vue.use(router)

//获取原型对象上的push函数 解决路由重复报红的问题
const originalPush = router.prototype.push
//修改原型对象中的push方法
router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new router({
  mode: 'hash',
  routes: [
    //默认路径下显示该路由
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: "/index",
      meta: {
        title: "首页"
      },
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import("@/views/index.vue"),
          meta: {
            title: "首页"
          }
        },
        {
          path: 'home',
          name: 'home',
          component: () => import("@/views/home.vue"),
          meta: {
            title: "用户管理"
          }
        },
        {
          path: "monitor",
          name: "monitor",
          component: () => import("@/views/monitor.vue"),
          meta: {
            title: "数据监控"
          }
        },
        {
          path: "text",
          name: "text",
          component: () => import("@/views/text.vue"),
          meta: {
            title: "测试页面",
          }
        },
        {
          path: "patrolManagement",
          name: "patrolManagement",
          component: () => import("@/views/dailyMonitoring/patrolManagement.vue"),
          meta: {
            title: "巡查监控",
          }
        },
        {
          path: "siteMonitoring",
          name: "siteMonitoring",
          component: () => import("@/views/dailyMonitoring/siteMonitoring.vue"),
          meta: {
            title: "在岗监控",
          }
        },
        {
          path: "siteRecord",
          name: "siteRecord",
          component: () => import("@/views/dailyMonitoring/siteRecord.vue"),
          meta: {
            title: "查岗记录",
          }
        },
        {
          path: "checkRecord",
          name: "checkRecord",
          component: () => import("@/views/dailyMonitoring/checkRecord.vue"),
          meta: {
            title: "消控值班考勤记录",
          }
        },
        {
          path: "facilitiesTrouble",
          name: "facilitiesTrouble",
          component: () => import("@/views/dailyMonitoring/facilitiesTrouble.vue"),
          meta: {
            title: "消防设备故障",
          }
        },
        {
          path: "alarmReport",
          name: "alarmReport",
          component: () => import("@/views/dailyMonitoring/alarmReport.vue"),
          meta: {
            title: "查询设备隐患",
          }
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import("@/views/login.vue")
    },
  ]
})


