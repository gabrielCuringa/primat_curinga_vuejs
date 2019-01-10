<template>
  <div>
    <v-container>
      <v-text-field type="text" v-model="search" placeholder="Rechercher..."></v-text-field>
      <div class="text-xs-center">
        <v-pagination
          v-model="page"
          circle
          :length="numberOfPages"
          @input="reload()"
          :total-visible="7"
        ></v-pagination>
        <p>{{numberOfPages}}</p>
        <v-slider
          v-model="pageSize"
          color="orange"
          label="Nombre"
          hint="Nombre de restaurants à afficher"
          min="1"
          max="100"
          :step="5"
          thumb-label
          @change="reload()"
        ></v-slider>
      </div>
      <v-flex>
        <v-card>
          <v-container v-bind="{ [`grid-list-xl`]: true }" fluid>
            <v-layout row wrap>
              <v-flex v-for="restaurant, index of filteredRestaurants" xs4 :key="restaurant._id">
                <app-restaurant
                  :id="restaurant._id"
                  :name="restaurant.name"
                  :cuisine="restaurant.cuisine"
                  v-on:reload-restaurants="reload()"
                  :grades="restaurant.grades"
                  :image="getRandomImage()"
                ></app-restaurant>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import Restaurant from "./Restaurant.vue";
import Utils from "../Utils.js";

export default {
  props: ["datasRestaurants", "numberOfPages"],
  data() {
    return {
      userName: "toto",
      page: 1,
      pageSize: 10,
      search: ""
    };
  },
  components: {
    "app-restaurant": Restaurant
  },
  methods: {
    reload() {
      console.log("i'm reloading");
      this.$emit("reload-restaurants", this.page, this.pageSize);
    },
    getRandomImage() {
      let random = Utils.random(0, this.datasRestaurants.randomImages.length);

      return this.datasRestaurants.randomImages[random];
    },
    inputPagination() {
      console.log("pagination: " + this.page);
    }
  },
  computed: {
    filteredRestaurants() {
      return this.datasRestaurants.restaurants.filter(restaurant => {
        return restaurant.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  }
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
</style>