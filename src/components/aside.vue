<template>
  <div :class="{ collapse: isCollapse }" class="menuC">
    <el-scrollbar style="heidth: 100%">
      <el-menu
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
        <div v-if="!itemsItem.childNode">
          <el-menu-item :index="itemsItem.url">
            <i
              :class="
                itemsItem.icon
                  ? 'el-icon-' + itemsItem.icon
                  : 'el-icon-' + 'folder'
              "
            ></i>
            <span v-if="!isCollapse">{{ itemsItem.menu_name }}</span>
          </el-menu-item>
        </div>
        <div
          v-for="(item, itemIndex) in itemsItem.childNode"
          :key="item.menu_name"
        >
          <el-submenu
            v-if="item.childNode && item.childNode.length"
            :index="item.id + ''"
          >
            <template slot="title">
              <i
                :class="
                  item.icon ? 'el-icon-' + item.icon : 'el-icon-' + 'folder'
                "
              ></i>
              <span>{{ item.menu_name }}</span>
            </template>
            <div v-for="i in item.childNode" :key="i.menu_name">
              <el-menu-item :index="i.url" @click="handlePath(i, itemIndex)">
                <i
                  :class="i.icon ? 'el-icon-' + i.icon : 'el-icon-' + 'tickets'"
                ></i>
                <span>{{ i.menu_name }}</span>
              </el-menu-item>
            </div>
          </el-submenu>
          <!-- 二级菜单没有子菜单的 -->
          <el-menu-item
            v-else
            :index="item.url + ''"
            :key="item.menu_name"
            @click="handlePath(item, itemIndex)"
          >
            <i
              :class="
                item.icon ? 'el-icon-' + item.icon : 'el-icon-' + 'tickets'
              "
            ></i>
            <span slot="title">{{ item.menu_name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
// import api from "@/api/api.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("admin/menu", [
      "isCollapse",
      "activeMenu",
      "itemsItem",
    ]),
  },
  created() {
    // api.get('/loadDeptManagerLeftTreeJson').then((res)=>{
    //   console.log(res,'菜单')
    // })
  },
  mounted() {
  },
  methods: {
    ...mapActions("admin/menu", ["setTagsActions"]),
    /**
     * 点击左侧菜单
     */
    handlePath(item) {
      this.setTagsActions(item);
    },
    /**
     * 获取左侧菜单
     */
    getMenu() {
    },
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