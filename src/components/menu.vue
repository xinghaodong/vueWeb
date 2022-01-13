<template>
  <div class="header">
    <template v-for="(item,indexaaa) in datas">
      <!-- 二级级菜单 -->
      <el-submenu
        v-if="item.childNode && item.childNode.length > 0"
        :key="item.menu_name"
        :index="item.url + ''"
      >
        <template slot="title">
          <i :class="item.icon ? 'el-icon-' + item.icon : 'el-icon-folder'"></i>
          <span>{{ item.menu_name }}</span>
        </template>
        <!-- 多级级菜单 递归自己 -->
        <Menu :datas="item.childNode" @click.native="handlePath1(indexaaa)"></Menu>
      </el-submenu>
      <el-menu-item
        v-else
        :key="item.menu_name"
        :index="item.url + ''"
        :class="item.menu_name == '首页' ? 'is50' : ''"
      >
        <template slot="title">
          <i
            :class="item.icon ? 'el-icon-' + item.icon : 'el-icon-tickets'"
          ></i>
          <span>{{ item.menu_name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Menu",
  props: ["datas"],
  data() {
    return {
      indexaaa:0,
    };
  },
  mounted() {},
  methods: {
    handlePath1(index){
      console.log(index,'indexindex')
    },
    ...mapActions("admin/menu", ["removeTagsActions", "setTagsActions"]),
    handlePath(item) {
      console.log(item,'handlePathhandlePathhandlePathhandlePathhandlePath')
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