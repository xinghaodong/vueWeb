<template>
  <div class="header">
    <div class="headerLeft" :class="{ collapse: isCollapse }">
      <span v-if="!isCollapse">后台管理系统</span>
      <span v-else>
        <img
          style="height: 50px; padding-right: 10px"
          src="@/assets/img/layout/icon-only.png"
          alt=""
        />
      </span>
      <div class="headerIcon">
        <i
          class="el-icon-s-fold"
          style="cursor: pointer"
          @click="handleClickBack"
        ></i>
      </div>
    </div>
    <div style="flex: 1">
      <!-- 头部菜单 -->
      <el-menu
        style="display: flex"
        :default-active="activeMenu"
        router
        class="el-menu-demo"
        menu-trigger="hover"
        mode="horizontal"
      >
        <!--将子菜单抽取出来，做为一个子组件-->
        <Menu :datas="menuItem" />
      </el-menu>
    </div>
    <div class="headerRight">
      <Full class="right-block" />
      <HeaderSize class="right-block" />
      <el-dropdown>
        <span class="el-dropdown-link" style="cursor: pointer">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleClick">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Menu from "@/components/menu";
import Full from "@/components/full";
import HeaderSize from "@/components/headerSize";
// import Theme from "@/components/theme";
export default {
  components: {
    Menu,
    Full,
    HeaderSize,
    // Theme,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("admin/menu", [
      "isCollapse",
      "userName",
      "activeMenu",
      "menuItem",
    ]),
  },
  created() {
    //设置当前路由
    this.$router.push({
      path: this.activeMenu,
    });
  },
  mounted() {},
  methods: {
    ...mapMutations("admin/menu", ["modification", "logOut"]), //将 `this.modification()` 映射为` this.$store.commit('modification')`
    ...mapActions("admin/menu", ["removeTagsActions"]),
    /**
     * 退出登录
     */
    handleClick() {
      this.logOut(); //重置 state 的值
      localStorage.clear();
      sessionStorage.clear();
      this.$router.push("/Login");
    },
    /**
     * 收回左侧菜单
     */
    handleClickBack() {
      this.modification();
      /**
       * 1、this.$store.commit修改modification方法中的state.isCollapse 的值这种方法就没有用到mapMutations辅助函数
       * 2、或者用在store menu.js中定义一个actions方法可以commit提交mutations中的方法来修改state.isCollapse的值，这样写可以做一些异步操作比如调用ajax等返回值后在用commit提交mutations中的方法
       * 3、或直接使用mapMutations辅助函数调用Mutations中的方法，当前页面就是采用这样的方法
       */
      //this.$store.commit('admin/menu/modification')
    },
  },
};
</script>
<style scoped>
.right-block {
  margin-right: 18px;
  display: inline-block;
}
.addclass {
  background: skyblue !important;
}
.collapse {
  width: 75.5px !important;
  min-width: 75.5px !important;
}
.header {
  height: 56px;
  line-height: 56px;
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid #ebeef5; */
}
.headerLeft {
  position: relative;
  display: flex;
  justify-content: center;
  color: dodgerblue;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  background: rgb(84, 92, 100);
}
.headerIcon {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 6px;
}
.headerRight {
  padding-right: 15px;
}
.tag {
  cursor: pointer;
  margin-left: 5px;
  color: #606266;
  background-color: rgba(0, 0, 0, 0.03);
  border-left-color: #cfd7e5;
}
.el-menu-demo {
  background: #fafbfc;
}
.header >>> .el-menu.el-menu--horizontal {
  border: none;
}
</style>