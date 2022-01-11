<template>
  <div class="header">
    <!-- 一级菜单 -->
    <el-menu-item
      v-if="!datas.childNode"
      :index="datas.url + ''"
      @click="handlePath(datas)"
      :class="datas.menu_name == '首页' ? 'is50' : ''"
    >
      <template slot="title">
        <i :class="datas.icon ? 'el-icon-' + datas.icon : 'el-icon-folder'"></i>
        <span>{{ datas.menu_name }}</span>
      </template>
    </el-menu-item>
    <!-- 二级菜单 -->
    <el-submenu :index="datas.url + ''" class="sub-menu-item" v-else>
      <template slot="title">
        <i :class="datas.icon ? 'el-icon-' + datas.icon : 'el-icon-folder'"></i>
        <span>{{ datas.menu_name }}</span>
      </template>
      <!-- 多级菜单 -->
      <Menu
        v-for="(childNode, i) in datas.childNode"
        :datas="childNode"
        :key="i"
      />
    </el-submenu>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Menu",
  props: ["datas"],
  data() {
    return {};
  },
  mounted(){
  },
  methods: {
    ...mapActions("admin/menu", ["removeTagsActions", "setTagsActions"]),
    handlePath(item) {
      this.setTagsActions(item);
    },
  },
};
</script>

<style scoped>
.header >>> .el-submenu__title,
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 50px;
  line-height: 50px;
}
.header >>> .el-submenu__title {
  /* width: 145px; */
  min-width: 140px;
}
/* 首页 */
.header >>> .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  background: #fff;
  color: #2f74ff;
}
.header >>> .sub-menu-item.el-submenu.is-active {
  border-bottom: none;
  background: #fff;
  color: #2f74ff;
}
.header >>> .sub-menu-item.el-submenu.is-active .el-submenu__title {
  color: #2f74ff;
}
.header >>> .el-menu.el-menu--horizontal {
  border: none;
}
.header >>> .is50 {
  height: 50px;
  line-height: 50px;
}
.header >>> .el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  color: #2f74ff;
}
</style>