<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Mini projet - M1 MIAGE</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-if="$route.name!='home'" @click="goToHome" flat>Accueil</v-btn>
            <v-btn v-if="$route.name!='add'" @click="goToAddRestaurant" flat>Ajouter un restaurant</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- point d'entré -->
        <router-view
          v-on:reload-restaurants="reloadRestaurants"
          v-on:find-restaurant="findRestaurant($event)"
          :datasRestaurants="{restaurants: restaurants, nbRestaurants: nbRestaurants, randomImages: randomImages}"
          :numberOfPages="numberOfPages"
        ></router-view>
      </v-content>

      <!--Cart-->
      <app-cart></app-cart>

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
      randomImagesObject: [],
      numberOfPages: 1,
      loading: true,
      cartActivated: false,
      randomImages: []
    };
  },
  mounted() {
    this.reloadRestaurants();

    console.log("loading image");
    randomImagesApi
      .images("food", 20)
      .then(imageResult => {
        console.log(imageResult);

        imageResult.data.result.items.forEach(item => {
          this.randomImages.push(item.media);
        });

        this.imagesLoaded = true;
        //this.loadImages();
        //console.log(this.randomImages);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    reloadRestaurants(page = 1, pageSize = 10, name = "") {
      console.log("i'm reloading - App");
      console.log("page: " + page);

      this.API.getRestaurants(page - 1, pageSize, name)
        .then(result => {
          console.log(result);
          this.restaurants = result.data;
          this.nbRestaurants = result.count;
          this.numberOfPages =
            Math.round((this.nbRestaurants - 1) / pageSize) - 1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    goToAddRestaurant() {
      this.$router.push({
        name: "add"
      });
    },
    goToHome() {
      this.$router.push({
        name: "home"
      });
    },
    findRestaurant(event) {
      console.log(event.search);
      this.reloadRestaurants(1, 10, event.search);
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
