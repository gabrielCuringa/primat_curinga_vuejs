<template>
  <div id="detail">
    <v-parallax dark :src="image">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">{{restaurant.name}}</h1>
        <h1 class="subheading">{{restaurant.cuisine}}</h1>
        <p id="address">{{addressGeocoder}}</p>
      </v-layout>
    </v-parallax>
    <v-layout align-center column justify-center>
      <h2>Vous pouvez nous trouver ici !</h2>
        <div id="mapContainer">
          <l-map id="map" :zoom="13" :center="[48.866667, 2.333333]">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="[48.866667, 2.333333]"></l-marker>
          </l-map>
        </div>
    </v-layout>
    <v-layout align-center column justify-center>
      <h2> Nos notes !</h2>

      <v-list two-line>
          <template v-for="grade in restaurant.grades">
            <div class="d-flex">
              <v-rating
              :value="(grade.score) / 4"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              ></v-rating>
              <v-list-tile-content>
                <v-list-tile-title v-html="grade.score"></v-list-tile-title>
                <v-list-tile-sub-title v-html="grade.grade"></v-list-tile-sub-title>
              </v-list-tile-content>
            </div>
          </template>
        </v-list>
    </v-layout>
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
        this.API.getAddressFromLatLng(
          this.restaurant.address.building +
            " " +
            this.restaurant.address.street
        ).then(result => {
          console.log(result);
          if (result.length > 0) {
            this.addressGeocoder = result[0].display_name;
            this.coordinatesGeocoder = [result[0].lat, result[0].lon];
          } else {
            this.addressGeocoder =
              this.restaurant.address.building +
              " " +
              this.restaurant.address.street +
              ", " +
              this.restaurant.address.zipcode +
              " (" +
              this.restaurant.borough +
              ")";
            this.coordinatesGeocoder = this.restaurant.address.coord;
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    image: "";
    return {
      restaurant: {},
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      addressGeocoder: "",
      coordinatesGeocoder: []
    };
  }
};
</script>

<style scoped>
#address {
  font-style: bold;
  color: white;
  background-color: black;
}
h1 {
  color: white;
}

#mapContainer{
  width: 80%;
  height: 300px;
  border: 1px solid #009688;
  }
#gradesContainer{
  width: 100%;
  background-color: #ffffff;
}
h2 {
  background-color: #ffffff;
  color: #009688;
  font-style: italic;
  width: 100%;
}
</style>