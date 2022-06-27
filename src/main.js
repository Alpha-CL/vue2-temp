import "./lib.js";
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// Global method mount 
// Vue.prototype.method = method; 


// Global component mount 
// Vue.component("Comp", Comp); 


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
