<template>
  <div>
    <v-container>
      <div class="text-xs-center">
        <app-find-restaurant v-on:find-restaurants="find($event)"></app-find-restaurant>
        <v-pagination
          v-model="page"
          circle
          :length="numberOfPages-1"
          @input="reload"
          :total-visible="7"
        ></v-pagination>
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
              <v-flex
                v-for="restaurant, index of datasRestaurants.restaurants"
                xs4
                :key="restaurant._id"
              >
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
  name: "app-restaurants",
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
    find(event) {
      this.$emit("find-restaurant", { search: event.search });
    },
    getRandomImage() {
      let random = Utils.random(0, this.datasRestaurants.randomImages.length);

      return this.datasRestaurants.randomImages[random];
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