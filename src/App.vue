<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import {getDemo} from "@/api/demoApi";

export default {
  name: "App",
  data() {
    // const _this = this;
    return {};
  },
  methods: {},
  created() {
  },
  async mounted() {

    await getDemo()
      .then(res => {
        console.log('res: ', res);
      });

  },
  beforeDestroy() {
  },
};
</script>

<style lang="scss">
@import "~@/style/index";
</style>

