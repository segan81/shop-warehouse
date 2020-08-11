import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

//Import VueSpinners
import { VueSpinners } from "@saeris/vue-spinners";

//Import Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//Import myown css
import "@/assets/styles/project.css";

// Use VueSpinners
Vue.use(VueSpinners);

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
