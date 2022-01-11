<template>
  <div class="screen-full">
    <div v-show="!isFullscreen" @click="handleFullScreen">
      <i class="el-icon-rank" style="transform: rotate(45deg);font-size:16px;"></i>
    </div>
    <div v-show="isFullscreen" @click="handleFullScreen">
      <i class="el-icon-full-screen" style="font-size:16px;"></i>
    </div>
  </div>
</template>
<script>
import screenfull from "screenfull"; //引入依赖
export default {
  name: "ScreenFull",
  data() {
    return {
      isFullscreen: false, //是否全屏
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    handleFullScreen() {
      if (!screenfull.isEnabled) {
        this.$message.info("您的浏览器版本过低，不支持全屏浏览");
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off("change", this.change);
      }
    },
  },
};
</script>
<style scoped>
.screen-full {
  cursor: pointer;
}
</style>