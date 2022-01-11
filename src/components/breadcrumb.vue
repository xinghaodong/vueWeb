<template>
  <div class="tag1" style="padding: 1px 0px 0px 1px">
    <!-- 这里放路由标签 之后将 面包屑功能去掉 -->
    <div style="flex: 1">
      <!-- <el-tag
        class="tag"
        v-for="(item, index) in tags"
        :key="item.menu_name"
        :class="topActive == item.menu_name ? 'addclass' : ''"
        :closable="tags.length > 1"
        :type="item.type"
        @click="handleclickTag(item, index)"
        @close="handleClose(item, tags, index)"
      >
        {{ item.menu_name }}
      </el-tag> -->
      <div>
        <Contextmenu
          :visible.sync="contextmenuFlag"
          :contentmenuX="contentmenuX"
          :contentmenuY="contentmenuY"
          :tagName="tagName"
        />
        <el-tabs
          v-model="activeMenu"
          class="multiple-page-sort"
          type="card"
          :before-leave="beforeLeave"
          @tab-remove="removeTab"
          @contextmenu.native="handleContextmenu"
        >
          <el-tab-pane
            :key="item.url"
            v-for="item in tags"
            :closable="item.menu_name != '首页'"
            :label="item.menu_name"
            :name="item.url"
          >
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Contextmenu from "../components/contextmenu.vue";
import Sortable from "sortablejs";
export default {
  components: {
    Contextmenu,
  },
  data() {
    return {
      contextmenuFlag: false,
      contentmenuX: 0,
      contentmenuY: 0,
      tagName: "/index",
    };
  },
  mounted() {
    //拖拽标签
    const el = document.querySelectorAll(
      ".multiple-page-sort .el-tabs__nav"
    )[0];
    this.$nextTick(() => {
      Sortable.create(el, {
        //draggable 指定样式类的元素才允许拖动
        draggable: ".is-closable",
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          this.openedSort({ oldIndex, newIndex });
        },
      });
    });
  },

  computed: {
    ...mapState("admin/menu", ["tags", "topActive", "activeMenu"]),
    activeMenu: {
      //如果组件使用v-model双向绑定并且是存在vuex中的是需要这样写才需要这么写
      get: function () {
        return this.$store.state.admin.menu.activeMenu;
      },
      set: function (val) {
        this.setActive1(val);
      },
    },
  },
  methods: {
    ...mapMutations("admin/menu", [
      "modification",
      "logOut",
      "setActive1",
      "openedSort",
    ]), //将 `this.modification()` 映射为` this.$store.commit('modification')`
    ...mapActions("admin/menu", ["removeTagsActions"]),
    /**
     * 移除菜单 换了标签 作废了
     */
    // handleClose(item, tags, index) {
    //   const luyou = this.$router;
    //   this.removeTagsActions({ item, tags, index, luyou }); //以对象的方式传参
    // },
    beforeLeave(tagname) {
      this.setActive1(tagname);
      this.$router.push({ path: this.activeMenu });
    },
    removeTab(targetName) {
      this.removeTagsActions(targetName);
      this.$router.push({ path: this.activeMenu });
    },
    /**
     * 鼠标右键点击标签
     */
    handleContextmenu(event) {
      let target = event.target;
      let flag = false;
      if (target.className.indexOf("el-tabs__item") > -1) flag = true;
      else if (target.parentNode.className.indexOf("el-tabs__item") > -1) {
        target = target.parentNode;
        flag = true;
      }
      if (flag) {
        event.preventDefault();
        event.stopPropagation();
        this.contentmenuX = event.clientX;
        this.contentmenuY = event.clientY;
        this.tagName = target.getAttribute("aria-controls").slice(5); //获取当前点击标签的属性
        this.contextmenuFlag = true;
      }
    },
    /**
     * 点击顶部标签
     */
    // handleclickTag(item) {
    //   console.log(item, "item");
    //   this.setActiveActions(item);
    //   this.$router.push(item.url);
    // },
  },
};
</script>

<style scoped>
.tag {
  cursor: pointer;
  margin-left: 5px;
  color: #606266;
  background-color: rgba(0, 0, 0, 0.05);
  border-left-color: #cfd7e5;
}
.addclass {
  background: skyblue !important;
}

.tag1 >>> .el-tabs--card > .el-tabs__header {
  border: 1px solid #cfd7e5;
  border-color: #cfd7e5;
  border-left: none;
  border-top: none;
  border-right: 0px;
}
.tag1 >>> .el-tabs--card > .el-tabs__header .el-tabs__item {
  color: #606266;
  background-color: rgba(0, 0, 0, 0.03);
}
.tag1 >>> .el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover{
    background: #fff;
}
.tag1 >>> .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background: #fff;
  color: #2f74ff;
}
.tag1 >>> .el-tabs__nav {
  z-index: 0;
}
.tag1 >>> .el-tabs__header {
  margin: 0px;
}
.close {
  cursor: pointer;
  padding: 0px 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: rgb(48, 49, 51);
  position: relative;
  bottom: -1px;
  border-bottom: 1px solid rgb(207, 215, 229);
  border-top: 1px solid rgb(207, 215, 229);
  border-right: 1px solid rgb(207, 215, 229);
  border-left: 1px solid rgb(207, 215, 229);
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>