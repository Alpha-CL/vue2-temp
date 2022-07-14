import Vue from 'vue';

// import third-party modules
import "axios";
import "js-cookie";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "echarts";
import "normalize.css/normalize.css";


// import global methods
import globalMethods from "./utils/globalMethods";
// import global components
import globalComps from "./utils/globalComps";
// import local module
import "./mock";


// mount plugins
Vue.use(ElementUI, {
    size: "small"
});


// mount global methods -- Vue.prototype.method = method;
(function () {
    for (const method in globalMethods) {
        Vue.prototype[method] = globalMethods[method];
    }
}(globalMethods));


// mount global components -- Vue.component("Comp", Comp);
(function () {
    for (const comp in globalComps) {
        Vue.component(comp, globalComps[comp]);
    }
}(globalComps));