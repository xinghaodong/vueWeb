<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  name: "App",
  components: {},
  watch: {
    $route(to, from) {
      if (from.path == "/Login") {
        this.setDynamicMenu("0"); //首页
      }
    },
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  created() {
    var Loading = document.getElementById("Loading");
    if (Loading != null) {
      document.body.removeChild(Loading);
    }
  },
  mounted() {},
  methods: {
    ...mapActions("admin/menu", ["setDynamicMenu"]),
    reload() {
      (this.isRouterAlive = false),
        this.$nextTick(() => {
          this.isRouterAlive = true;
        });
    },
  },
};
</script>
<style >
.el-menu--popup {
  padding: 0px !important;
}
</style>
