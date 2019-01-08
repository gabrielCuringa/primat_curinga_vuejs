<template>
  <div id="app">
    <!--<div>
      <router-link to="/">Restaurants</router-link>
      <router-link to="/home">Home</router-link>
    </div>-->
    <v-app>
      <router-view
        v-on:reload-restaurants="reloadRestaurants()"
        :datasRestaurants="{restaurants: restaurants, nbRestaurants: nbRestaurants}"
      ></router-view>
    </v-app>
  </div>
</template>

<script>
import Api from "./Api.js";

export default {
  name: "app",
  data() {
    return {
      msg: "TP2 - Gabriel Curinga",
      restaurants: [],
      nbRestaurants: 0
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
