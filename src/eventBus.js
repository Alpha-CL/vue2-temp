
import Vue from "vue";

const app = new Vue({});
Vue.prototype.$eventBus = app;
export default app;