<template>

  <layout class="demo">
    demo:{{ demo }}
    demoGetter: {{ demoGetter }}
  </layout>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
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
    ...mapActions('test', ['demoAction']),
    /** common methods zone start **/

    /** common methods zone end **/

    /** init zone start **/
    initComp() {
      demo11();

      this.demoAction('hi');
      this.$store.dispatch("test/demoAction", "hey")
    },
    /** init zone end **/

    // other controller method


  },
  computed: {
    ...mapGetters('test', ['demoGetter']),
    ...mapState('test', ['demo']),
  },
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

