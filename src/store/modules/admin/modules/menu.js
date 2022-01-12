import api from "@/api/api";
//这里使用了数据持久化这样就不会因为刷新页面后state里的数据丢失

// 由于换了 Tabs 标签页组件 故这里新写了一个 
function recursion1(data, url) {
  console.log(data, url, 'sdsdadad')
  var result
  if (!data) {
    return;
  }
  // for (var i = 0; i < data.length; i++) {
  //   if (data[i].url == url) {
  //     result = i;
  //     console.log(result, 'resultresultresultresult')
  //     return;
  //   }
  //   console.log("执行了么")
  //   if (data[i].childNode && data[i].childNode.length > 0) {
  //     for (let j = 0; j < data[i].childNode.length; j++) {
  //       if (data[i].childNode[j].url === url) {
  //         result = i;
  //         return;
  //       } else {
  //         recursion1(data[i].childNode[j].childNode, url)
  //       }
  //     }
  //   }
  // }



  for (var i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.url === url) {
      result = i;
      break;
    }
    //二级
    if (item.childNode && item.childNode.length > 0) {
      for (let j = 0; j < item.childNode.length; j++) {
        if (item.childNode[j].url == url) {
          result = i
          break;
        }
        //三级
        if (item.childNode[j].childNode && item.childNode[j].childNode.length > 0) {
          for (let x = 0; x < item.childNode[j].childNode.length; x++) {
            if (item.childNode[j].childNode[x].url == url) {
              result = i
              break;
            }
          }
        }
      }
    }
  }
  return result;
}
export default {
  namespaced: true, //自定义的模块时需要增加该属性
  state: {
    //侧边栏开关
    isCollapse: false,
    //顶部tab选中
    topActive: '首页',
    //当前菜单路由名称
    activeMenu: '/index',
    //登录人名称
    userName: '',
    //次顶部菜单tag列表
    tags: [
      { icon: "user-solid", id: 1, menu_name: "首页", pid: 1, url: "/index" },
    ],
    //当前顶部菜单的下标
    currentMenuIndex: 0,
    //顶部的菜单
    menuItem: [
      {
        menu_name: "首页",
        pid: 0,
        id: 1,
        url: "/index",
        icon: "user-solid"
      },
      {
        menu_name: "菜单一",
        pid: 0,
        id: 29,
        url: "/monitoring",
        icon: "notebook-1",
        childNode: [
          {
            menu_name: "系统管理",
            pid: 29,
            id: 43,
            url: "/controlSupervisor",
            icon: "setting",
            childNode: [
              {
                menu_name: "用户管理",
                pid: 43,
                id: 531,
                icon: "user-solid",
                url: "/home",
              },
            ],
          },
          {
            menu_name: "系统监控",
            pid: 29,
            id: 441,
            url: "#",
            childNode: [
              {
                menu_name: "数据监控",
                pid: 441,
                id: 561,
                url: "/monitor",
              },
              {
                menu_name: "页面测试",
                pid: 441,
                id: 581,
                url: "/text",
              },
            ],
          },
        ],
      },
      {
        menu_name: "日常管理",
        pid: 0,
        id: 31,
        url: "/dailyManagement",
        childNode: [
          {
            menu_name: "巡查管理",
            pid: 31,
            id: 41,
            url: "/patrolManagement",
          },
          {
            menu_name: "消控管理",
            pid: 31,
            id: 43,
            url: "/controlSupervisor",
            childNode: [
              {
                menu_name: "在岗监控",
                pid: 43,
                id: 53,
                url: "/siteMonitoring",
              },
              {
                menu_name: "查岗记录",
                pid: 43,
                id: 54,
                url: "/siteRecord",
              },
              {
                menu_name: "消控值班考勤记录",
                pid: 43,
                id: 55,
                url: "/checkRecord",
              },
            ],
          },
          {
            menu_name: "隐患处理",
            pid: 31,
            id: 44,
            url: "/dangerDeal",
            childNode: [
              {
                menu_name: "消防设备故障",
                pid: 44,
                id: 56,
                url: "/facilitiesTrouble",
              },
              {
                menu_name: "巡查上报隐患",
                pid: 44,
                id: 58,
                url: "/alarmReport",
              },
            ],
          },
        ],
      },
    ],
    //左侧的菜单
    itemsItem: [],
  },
  mutations: {
    /**
     * 设置isCollapse值 
     * @param {*} state 
     */
    modification(state) {
      state.isCollapse = !state.isCollapse
    },
    /**
     * 设置当前菜单名称、路由
     * @param {*} state 
     * @param {*} data 
     */
    setActive1(state, data) {
      if (!data.url) {
        state.activeMenu = data
        let result = recursion1(state.menuItem, data);
        console.log(result, 'result')
        state.currentMenuIndex = result
        state.itemsItem = state.menuItem[state.currentMenuIndex]
        return
      }
      state.activeMenu = data.url
      state.topActive = data.menu_name
    },
    /**
     * 设置当前登录人
     * @param {*} state 
     * @param {*} data 
     */
    setUserName(state, data) {
      state.userName = data.username
    },
    /**
     * 添加次顶层标签
     * @param {*} state 
     * @param {*} data 
     */
    setTags(state, data) {
      //如果顶部栏为空就先添加一个
      if (state.tags.length == 0) {
        state.tags.push(data)
      } else {
        //遍历state.tags 如果有 id 一样的就抛出状态
        let res = state.tags.some(item => {
          if (item.id == data.id) {
            return true
          }
        })
        if (!res) {
          state.tags.push(data);
        }
      }
    },
    /**
     * 移除次顶部标签 自动切换路由、重新选中切换后的路由标签高亮
     * @param {*} state 
     * @param {*} tag 
     */
    removeSwitchingTags(state, targetName) {
      let tabs = state.tags;
      let activeName = state.activeMenu;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          console.log(tab, index)
          if (tab.url === targetName) {
            //下一个
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.url;
            }
          }
        });
      }
      state.activeMenu = activeName;
      state.tags = tabs.filter((tab) => tab.url !== targetName);
    },
    dynamicMenu(state, data) {
      state.currentMenuIndex = data//设置选中顶部菜单的下标
       state.itemsItem = state.menuItem[data]
      // console.log(state.currentMenuIndex,state.itemsItem,'state.itemsItem')
    },
    /**
     * 退出登录/关闭除首页的所有标签页 将 部分 state 值重置 
     * @param {*} state 
     */
    logOut(state) {
      state.topActive = '首页'
      state.activeMenu = '/index'
      state.tags = [{ icon: "user-solid", id: 1, menu_name: "首页", pid: 1, url: "/index" }]
      state.currentMenuIndex = 0
      state.itemsItem = state.menuItem[state.currentMenuIndex]
    },
    /**
     * 关闭除首页外所有次顶级标签
     * 如果mutations 里的方法想要调用无论是否模块下的另一个mutations 里的方法 都的像这么写
     * @param {*} state 
     */
    closeAll() {
      this.commit("admin/menu/logOut")
    },
    /**
     * 关闭左侧
     * 删除数组从第1项开始因为 首页不能被删除
     */
    closeLeft(state, tagUrl) {
      for (let i = 0; i < state.tags.length; i++) {
        if (tagUrl == state.tags[i].url) {
          state.tags.splice(1, i - 1)
          state.activeMenu = tagUrl
        }
      }
    },
    /**
     * 关闭右侧
     * @param {*} state 
     * @param {*} tagUrl 
     */
    closeRight(state, tagUrl) {
      for (let i = 0; i < state.tags.length; i++) {
        if (tagUrl == state.tags[i].url) {
          state.tags.splice(i + 1)
          state.activeMenu = tagUrl
        }
      }
    },
    /**
     * 关闭除了当前激活外的其他标签
     * @param {*} state 
     * @param {*} tagUrl 
     */
    closeOther(state, tagUrl) {
      for (let i = 0; i < state.tags.length; i++) {
        if (tagUrl == state.tags[i].url) {
          state.tags.splice(i + 1) //删除右侧
          state.tags.splice(1, i - 1)//删除左侧侧
          state.activeMenu = tagUrl
        }
      }
    },
    /**
     * 拖拽标签更换位置
     * @param {*} state 
     * @param {*} data 
     */
    openedSort(state, data) {
      function swapArray(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
      }
      swapArray(state.tags, data.oldIndex, data.newIndex)
    },
  },
  actions: {
    /**
     * 点击左侧菜单栏 在次顶部上移除按钮
     * @param {*} param0 
     * @param {*} targetName 
     */
    removeTagsActions({ commit }, targetName) {
      commit("removeSwitchingTags", targetName)
    },

    /**
     * 点击左侧菜单栏 在顶部上新增tab、设置当前路由
     * @param {*} param0 
     * @param {*} data 
     */
    setTagsActions({ commit }, data) {
      commit("setTags", data)
      commit("setActive1", data)
    },
    /**
     * 点击头部菜单设置左侧动态菜单
     * @param {*} param0 
     * @param {*} data 
     */
    setDynamicMenu({ commit }, data) {
      commit("dynamicMenu", data)
    },
    /**
     * 异步修改提交setUserName
     * @param {*} userInfo 
     * @returns 
     */
    Login({ commit }, userInfo) { //这里的commit 是解构写法
      return new Promise((resolve, reject) => { // 这里的Promise 是为了给业务组件调用时可以拿到返回值res或则error
        api.login(userInfo).then((res) => {
          if (res.code == "0") {
            window.localStorage.setItem("userToken", res.token);
            //给userName 赋值
            commit('setUserName', res.data)
            //异步提交mutations 方法 将侧边栏开关isCollapse 改变
            //commit('modification')
          }
          resolve(res);
        }).catch((error) => {
          reject(error)

        });
      })
    }
  }
}