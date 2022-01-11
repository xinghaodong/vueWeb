<template>
  <div v-show="flag" class="contextmenu" :style="style">
    <div class="contentmenu-list">
      <div
        v-for="item in tagName1"
        :key="item.value"
        :data-value="item.value"
        @click="ckickTab(item.value)"
        class="contentmenu-item"
        flex="cross:center main:center"
      >
        <i :class="item.icon"></i>
        <div class="contentmenu-item-title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  inject: ["reload"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    contentmenuX: {
      type: Number,
      default: 0,
    },
    contentmenuY: {
      type: Number,
      default: 0,
    },
    tagName: {
      type: String,
      default: "/index",
    },
  },
  data() {
    return {
      menulist: [
        { icon: "el-icon-refresh", title: "刷新", value: "refresh" },
        { icon: "el-icon-back", title: "关闭左侧", value: "left" },
        { icon: "el-icon-right", title: "关闭右侧", value: "right" },
        { icon: "el-icon-close", title: "关闭其它", value: "other" },
        { icon: "el-icon-circle-close", title: "关闭全部", value: "all" },
      ],
      menulist0: [
        { icon: "el-icon-refresh", title: "刷新", value: "refresh" },
        { icon: "el-icon-right", title: "关闭右侧", value: "right" },
        { icon: "el-icon-close", title: "关闭其它", value: "other" },
        { icon: "el-icon-circle-close", title: "关闭全部", value: "all" },
      ],
    };
  },
  computed: {
    ...mapState("admin/menu", ["activeMenu"]),
    //在对一个 prop 进行“双向绑定,单向修改”的场景下，因为子组件不能直接修改父组件，
    //sync在2.3版本引入，作为一个事件绑定语法糖，利用EventBus，
    //当子组件触发事件时，父组件会响应事件并实现数据更新，避免了子组件直接修改父组件传过来的内容
    flag: {
      get() {
        if (this.visible) {
          // 注册全局监听事件 [ 目前只考虑鼠标解除触发 ] 鼠标左键时触发 将改组件隐藏
          window.addEventListener("mousedown", this.watchContextmenu);
        }
        return this.visible;
      },
      set(newVal) {
        this.$emit("update:visible", newVal);
      },
    },
    style() {
      return {
        left: this.contentmenuX + "px",
        top: this.contentmenuY + "px",
        display: this.visible ? "block" : "none ",
      };
    },
    tagName1() {
      if (this.tagName == "/index") {
        return this.menulist0;
      } else {
        return this.menulist;
      }
    },
  },
  methods: {
    ...mapMutations("admin/menu", [
      "closeLeft",
      "closeRight",
      "closeOther",
      "closeAll",
    ]),

    watchContextmenu(event) {
      if (!this.$el.contains(event.target) || event.button !== 0)
        this.flag = false;
      window.removeEventListener("mousedown", this.watchContextmenu);
    },
    ckickTab(command) {
      this.flag = false;
      switch (command) {
        case "refresh":
          this.reload(); //刷新当前路由
          break;
        case "left":
          this.closeLeft(this.tagName);
          break;
        case "right":
          this.closeRight(this.tagName);
          break;
        case "other":
          this.closeOther(this.tagName);
          break;
        case "all":
          this.closeAll();
          break;
      }
    },
  },
};
</script>
<style scoped>
.contextmenu {
  position: absolute;
  padding: 5px 0;
  z-index: 2018;
  background: #fff;
  border: 1px solid #cfd7e5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.contentmenu-list .contentmenu-item {
  padding: 8px 20px 8px 15px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  display: flex;
  line-height: 15px;
  height: 15px;
}
.contentmenu-list .contentmenu-item:hover {
  background: #ecf5ff;
  color: #66b1ff;
}
.contentmenu-list .contentmenu-item .contentmenu-item-title {
  margin-left: 10px;
}
</style>