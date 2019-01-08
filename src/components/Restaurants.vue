<template>
  <div>
    <p>Nombre de restaurants : {{datasRestaurants.nbRestaurants}}</p>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex
          v-for="restaurant, index of datasRestaurants.restaurants"
          xs4
          v-bind:key="restaurant._id"
        >
          <app-restaurant
            :id="restaurant._id"
            :name="restaurant.name"
            :cuisine="restaurant.cuisine"
            v-on:reload-restaurants="reload()"
          ></app-restaurant>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Restaurant from "./Restaurant.vue";
export default {
  props: ["datasRestaurants"],
  data() {
    return {
      userName: "toto"
    };
  },
  components: {
    "app-restaurant": Restaurant
  },
  methods: {
    reload() {
      console.log("i'm reloading");
      this.$emit("reload-restaurants");
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