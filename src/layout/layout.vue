<template>
  <div>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main" style="display: flex; padding: 0px">
        <!-- 左侧菜单 -->
        <Aside />
        <!-- 主体 内容 -->
        <div style="flex: 1; display: flex; flex-flow: column; overflow: auto">
          <Breadcrumb />
          <transition name="el-fade-in-linear">
            <keep-alive> <!-- 目前是将所有的主体 页面都缓存了 -->
              <router-view class="cont transition-box" v-show="show" />
            </keep-alive>
          </transition>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header";
import Aside from "@/components/aside.vue";
import Breadcrumb from "@/components/breadcrumb";
export default {
  components: {
    Header,
    Aside,
    Breadcrumb,
  },
  data() {
    return {
      // transitionName: "",
      show: true,
    };
  },
  watch: {},
};
</script>
<style scoped>
.main {
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  height: calc(100vh - 56px);
}
.cont {
  flex: 1;
  overflow: auto;
  padding: 10px 0px 0px 10px;
  position: inherit;
}
.header {
  padding: 0px !important;
  height: 56px !important;
  background: #fafbfc;
  z-index: 1;
  width: 100%;
  top: 0;
  box-shadow: 0 0.46875rem 2.1875rem rgb(4 9 20 / 0%),
    0 0.9375rem 1.40625rem rgb(4 9 20 / 2%),
    0 0.25rem 0.53125rem rgb(4 9 20 / 3%), 0 0.125rem 0.1875rem rgb(4 9 20 / 2%);
}
</style>