import Vue from "vue";
import Router from "vue-router";
import Restaurants from "../components/Restaurants.vue";
import RestaurantDetail from "../components/RestaurantDetail.vue";
import AddRestaurant from "../components/AddRestaurant.vue";
import ErrorVue from "../components/Error.vue";
import RestaurantMenu from "../components/RestaurantMenu.vue";

Vue.use(Router);

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
    path: "/:id/menu",
    name: "menu",
    component: RestaurantMenu
  },
  {
    path: "*",
    name: "error",
    component: ErrorVue
  },
  {
    path: "/add",
    name: "add",
    component: AddRestaurant
  }
];

export default new Router({
  routes: routes,
  mode: "history"
});
