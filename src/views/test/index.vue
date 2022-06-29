<template>

  <layout class="test">
    test
  </layout>

</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {getDemo} from "@/api/testApi";
import layout from "./components/layout";
// import {} from "@/utils";
// import {} from "./request";
// import {} from "./config";


export default {
  name: "test",
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
    // usage; this.demoAction(payload);
    ...mapActions("test", [
      // "demoAction"
    ]),
    /** common methods zone start **/

    /** common methods zone end **/

    /** init zone start **/
    initComp() {
      this.test();
    },
    /** init zone end **/

    // other controller method
    async test() {
      await getDemo()
        .then(res => {
          console.log(res);
        });
    },

  },
  computed: {},
  // usage: this.demoGetter
  ...mapGetters("test", [
    // "demoGetter"
  ]),
  // usage: this.demo
  ...mapState("test", {
    // "demo"
  }),
  watch: {},
  created() {
  },
  async mounted() {
    this.initComp();
  },
  beforeDestroy() {
  },
};

</script>

<style lang="scss" scoped>

.test {

}

</style>

