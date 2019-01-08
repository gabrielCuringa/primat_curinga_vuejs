<template>
  <div id="app">
    <v-app>
      <!-- point d'entré -->
      <router-view
        v-on:reload-restaurants="reloadRestaurants()"
        :datasRestaurants="{restaurants: restaurants, nbRestaurants: nbRestaurants, randomImages: randomImages}"
      ></router-view>

      <!--Footer-->
      <v-footer dark height="auto">
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <strong class="subheading">Projet dans le cadre du module Web, encadré par M.Buffa</strong>
          </v-card-title>

          <v-card-actions class="grey darken-3 justify-center">
            <strong>10 janvier 2019 — Jeremy Primat & Gabriel Curinga - M1 MIAGE</strong>
          </v-card-actions>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import randomImagesApi from "./api/RandomImages.js";

export default {
  name: "app",
  data() {
    return {
      restaurants: [],
      nbRestaurants: 0,
      randomImages: []
    };
  },
  mounted() {
    this.reloadRestaurants();
  },
  methods: {
    reloadRestaurants() {
      console.log("i'm reloading - App");
      this.API.getRestaurants(0, 10)
        .then(result => {
          this.restaurants = result.data;
          this.nbRestaurants = result.count;
        })
        .catch(err => {
          console.log(err);
        });

      randomImagesApi
        .images("restaurant", 50)
        .then(imageResult => {
          console.log(imageResult);

          imageResult.data.result.items.forEach(item => {
            this.randomImages.push(item.media);
          });
          //console.log(this.randomImages);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
  background-color: #0e0e0e;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
