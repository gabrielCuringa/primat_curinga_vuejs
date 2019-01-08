import Vue from "vue";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import VueRouter from "vue-router";
import App from "./App.vue";

// Custom components
import Restaurants from "./components/Restaurants.vue";
import RestaurantDetail from "./components/RestaurantDetail.vue";
import ErrorVue from "./components/Error.vue";
import Api from "./Api";

//Global variable
Vue.API = Vue.prototype.API = new Api();

// Librairies graphiques
Vue.use(Vuetify);

// COMPOSANT GLOBAL qui peut être utilisé n'importe où
Vue.component("app-restaurants", Restaurants);
Vue.component("app-restaurant-detail", RestaurantDetail);

// Définition des routes
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Restaurants
  },
  {
    path: "/:id",
    name: "detail",
    component: RestaurantDetail
  },
  {
    path: "*",
    name: "error",
    component: ErrorVue
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
