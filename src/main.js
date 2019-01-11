import Vue from "vue";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import Api from "./api/Api";
import Router from "./router/index.js";
import Cart from "./components/Cart.vue";
import FindRestaurant from "./components/FindRestaurant.vue";
import EditRestaurant from "./components/EditRestaurant.vue";
import Commande from "./components/Commande.vue";

//Map import
import { L, LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.component("app-cart", Cart);
Vue.component("app-find-restaurant", FindRestaurant);
Vue.component("app-edit-restaurant", EditRestaurant);
Vue.component("app-commande", Commande);

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});


//Global variable
Vue.API = Vue.prototype.API = new Api();
Vue.prototype.$cart = [];

// Librairies graphiques
Vue.use(Vuetify);

var vm = new Vue({
  el: "#app",
  router: Router,
  render: h => h(App)
});
