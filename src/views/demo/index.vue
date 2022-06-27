<template>

  <layout class="demo">
    demo
  </layout>

</template>

<script>
import layout from "./components/layout";
import {demo11} from "@/utils";
import {} from "./request";
import {} from "./config";

export default {
  name: "demo",
  components: {
    layout
  },
  props: {},
  data() {

    // const _this = this;

    return {
      /** common variable zone start **/

      /** common variable zone end **/

      // other controller data    

    };
  },
  methods: {
    /** common methods zone start **/

    /** common methods zone end **/

    /** init zone start **/
    initComp() {
      demo11();
    },
    /** init zone end **/

    // other controller method


  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.initComp();
  },
  beforeDestroy() {
  },
};

</script>

<style lang="scss" scoped>

.demo {

}

</style>

