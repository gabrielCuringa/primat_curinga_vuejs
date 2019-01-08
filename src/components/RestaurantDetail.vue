<template>
  <div id="map">  
    <p>Nom: {{$route.params.id}}</p>
    <v-img :src="$route.params.image"></v-img>
    <l-map  :zoom="13" :center="[48.866667, 2.333333]">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="[48.866667, 2.333333]"></l-marker>
    </l-map>
  </div>
  
</template>

<script>
export default {
  mounted() {
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
    return {
      restaurant : {},
      url : "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      
    };
  },
  displayGeocoderMap(){
    
  },
};
</script>

/**
scoped = ne se s'applique pas aux composants inclus
 */
<style scoped>
p {
  font-style: italic;
  color: red;
}
#map{
  height: 100%;
}
</style>