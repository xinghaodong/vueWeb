<template>
  <div class="aaa">
    <el-tooltip class="item" effect="dark" content="主题" placement="bottom">
      <i
        class="el-icon-help"
        @click="dialogVisible = true"
        style="font-size: 16px; color: #606266; cursor: pointer"
      ></i>
    </el-tooltip>
    <!-- <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    > -->

    <el-dialog
      title="主题"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      width="40%"
    >
      <el-table :data="list" border :show-header="false">
        <el-table-column prop="title" align="center" width="160" />
        <el-table-column label="预览" width="120">
          <div slot-scope="scope" class="theme-preview">
            <img :src="scope.row.preview" alt="" />
          </div>
        </el-table-column>
        <el-table-column prop="address" align="center">
          <template slot-scope="scope">
            <el-button
              v-if="activeName === scope.row.name"
              type="success"
              icon="el-icon-check"
              round
            >
              已激活
            </el-button>
            <el-button v-else round @click="handleSelectTheme(scope.row.name)">
              使用
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Theme",

  data() {
    return {
      dialogVisible: false,
      list: [
        {
          title: "WSS-流星",
          name: "star",
          // backgroundImage: 'image/theme/star/bg.jpg',
          preview: require("@/assets/img/theme/preview@2x.png"),
        },
        {
          title: "WSS-经典",
          name: "d2",
          preview: require("@/assets/img/theme/preview@3x本.png"),
        },
        {
          title: "WSS-紫罗兰",
          name: "violet",
          preview: require("@/assets/img/theme/preview@4x.png"),
        },
        {
          title: "WSS-简约线条",
          name: "line",
          // backgroundImage: 'image/theme/line/bg.jpg',
          preview: require("@/assets/img/theme/preview@5x.png"),
        },
        {
          title: "WSS-新年",
          name: "hx",
          // backgroundImage: 'image/theme/hx/hx.png',
          preview: require("@/assets/img/theme/preview@6x.png"),
        },
        {
          title: "Tomorrow Night Blue (vsCode)",
          name: "tomorrow-night-blue",
          preview: require("@/assets/img/theme/preview@6x.png"),
        },
      ],
    };
  },

  computed: {
    ...mapState("admin/theme", ["activeName"]),
  },

  mounted() {
    console.log(this.list);
  },

  methods: {
    ...mapActions("admin/theme", ["actionHandler"]),
    handleSelectTheme(row) {
      console.log(row, "???");
    },
  },
};
</script>

<style>
body .el-table::before {
  height: 0px !important;
}
</style>

<style lang="scss" scoped>
/deep/ .el-table::before {
  z-index: inherit;
  height: 0px !important;
}
.theme-preview {
  width: 90px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>