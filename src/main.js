import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import NewStore from "./NewStore.vue";
import Dashboard from "./Dashboard.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/new",
    component: NewStore,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
