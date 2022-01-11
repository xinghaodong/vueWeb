<template>
  <div>
    <el-dropdown placement="bottom" @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-setting" style="font-size: 16px; color: #606266"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in options"
          :key="index"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  inject: ["reload"],
  data() {
    return {
      options: [
        { label: "默认", value: "default" },
        { label: "中", value: "medium" },
        { label: "小", value: "small" },
        { label: "最小", value: "mini" },
      ],
    };
  },
  mounted() {},
  computed: {
    ...mapState("admin/size", ["size"]),
  },
  methods: {
    ...mapActions("admin/size", ["setSize"]),
    handleCommand(value) {
      this.setSize(value);
      location.reload();
    },
  },
};
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>