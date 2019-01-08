<template>
  <div>
    <v-parallax dark :src="image">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">{{restaurant.name}}</h1>
        <h1 class="subheading">{{restaurant.cuisine}}</h1>
        <p>{{restaurant.borough}} - {{restaurant.address.street}}, {{restaurant.address.zipcode}} - bât.{{restaurant.address.building}}</p>
      </v-layout>
    </v-parallax>
    <l-map  :zoom="13" :center="[48.866667, 2.333333]">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="[48.866667, 2.333333]"></l-marker>
    </l-map>
  </div>
  
</template>

<script>
export default {
  mounted() {
    console.log(localStorage["image"]);
    this.image = localStorage["image"];
    this.API.getRestaurantById(this.$route.params.id)
      .then(result => {
        this.restaurant = result.restaurant;
        console.log(this.restaurant);
        console.log("toto");
        console.log(this.restaurant.address.coord[0]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
      image: ""
    return {
      restaurant : {},
      url : "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      
    };
  },
};
</script>

/**
scoped = ne se s'applique pas aux composants inclus
 */
<style scoped>
p {
  font-style: bold;
  color: white;
}

h1 {
  color: white;
}
</style>