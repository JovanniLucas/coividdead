import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { APIService } from "./APIService";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./styles/custom.scss";

const apiService = new APIService();
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

const axiosPlugin = {
  install(Vue) {
    Vue.prototype.$api = apiService;
  }
};

Vue.use(axiosPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
