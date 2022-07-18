import Vue from 'vue';

// import third-party modules
import "axios";
import "js-cookie";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "echarts";
import "normalize.css/normalize.css";


// import global methods
import globalMethods from "./config/globalMethods";
// import global components
import globalComps from "./config/globalComps";
// import global directives
import globalDirectives from "./config/globalDirectives";
// import local module
import "./mock";


// mount plugins
Vue.use(ElementUI, {
    size: "small"
});


// mount global methods -- Vue.prototype._$method = method;
(function (globalMethods = {}) {
    for (const method in globalMethods) {
        const customMethodName = `_$${method}`;
        Vue.prototype[customMethodName] = globalMethods[method];
    }
}(globalMethods));


// mount global components -- Vue.component("Comp", Comp);
(function (globalComps = {}) {
    for (const comp in globalComps) {
        const customCompName = `${comp.replace(comp[0], comp[0].toUpperCase())}Plus`;
        Vue.component(customCompName, globalComps[comp]);
    }
}(globalComps));


// mount global directives -- Vue.directive("directive", directive);
(function (globalDirectives = {}) {
    for (const directive in globalDirectives) {
        const customDirectiveName = `${directive}`;
        Vue.directive(customDirectiveName, globalComps[directive]);
    }
}(globalDirectives));