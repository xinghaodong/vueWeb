<template>
  <div :class="{ collapse: isCollapse }" class="menuC">
    <el-scrollbar style="heidth: 100%">
      <!-- default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" -->
      <el-menu
      class="el-menu-vertical-demo"
        style="width: 100%; border: 0px"
        router
        @open="handleOpen"
        @close="handleClose"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 一级菜单下没有菜单的 -->
        <span v-if="!itemsItem.childNode">
          <el-menu-item :index="itemsItem.url">
            <!-- <template slot="title"> -->
              <i
                :class="
                  itemsItem.icon
                    ? 'el-icon-' + itemsItem.icon
                    : 'el-icon-' + 'folder'
                "
              ></i>
              <span slot="title">{{ itemsItem.menu_name }}</span>
            <!-- </template> -->
          </el-menu-item>
        </span>
        <span v-else>
          <!-- 二级级菜单下还有子集(三级)  -->
          <template v-for="item in itemsItem.childNode">
            <el-submenu
              v-if="item.childNode && item.childNode.length > 0"
              :key="item.menu_name"
              :index="item.url + ''"
            >
              <template slot="title">
                <i
                  :class="item.icon ? 'el-icon-' + item.icon : 'el-icon-folder'"
                ></i>
                <span>{{ item.menu_name }}</span>
              </template>
              <!-- 多级级菜单 递归Menu 组件 -->
              <Menu :datas="item.childNode"></Menu>
            </el-submenu>
            <!-- 二级级菜单下没有子集 -->
            <el-menu-item :index="item.url" :key="item.menu_name" v-else>
              <i
                :class="item.icon ? 'el-icon-' + item.icon : 'el-icon-tickets'"
              ></i>
              <span slot="title">{{ item.menu_name }}</span>
            </el-menu-item>
          </template>
        </span>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Menu from "@/components/menu";
import { mapState, mapActions } from "vuex";
// import api from "@/api/api.js";
export default {
  name: "Aside",
  components: {
    Menu,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("admin/menu", ["isCollapse", "activeMenu", "itemsItem"]),
  },
  created() {
    // api.get('/loadDeptManagerLeftTreeJson').then((res)=>{
    //   console.log(res,'菜单')
    // })
  },
  mounted() {},
  methods: {
    ...mapActions("admin/menu", ["setTagsActions"]),
    /**
     * 点击左侧菜单
     */
    // handlePath(item) {
    //   console.log(item,'handlePathhandlePathhandlePathhandlePathhandlePath')
    //   this.setTagsActions(item);
    // },
    /**
     * 获取左侧菜单
     */
    getMenu() {},
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.collapse {
  width: 75px !important;
}
.menuC {
  height: 100%;
  width: 200px;
  overflow-y: auto;
  display: flex;
  background-color: rgb(84, 92, 100);
}
.menuC >>> .el-menu-item-group__title {
  display: none !important;
}
.menuC >>> .el-submenu .el-menu-item {
  min-width: 199px !important;
}
.menuC >>> .el-menu--collapse {
  width: 75px !important;
}
/*隐藏文字*/
.menuC >>> .el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.menuC >>> .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
.menuC >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
.menuC >>> .el-submenu__title :last-child {
  margin-bottom: 25px;
}
.menuC >>> .el-scrollbar {
  width: 100%;
}
.menuC >>> .el-menu--popup {
  padding: 0px !important;
}
</style>