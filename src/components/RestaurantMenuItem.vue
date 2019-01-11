<template>
  <div>
    <v-list-tile v-for="meal in item.meals" :key="meal.idMeal">
      <v-list-tile-avatar>
        <img :src="meal.strMealThumb">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ meal.strMeal }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ meal.price }} € </v-list-tile-sub-title>
      </v-list-tile-content>

      <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="green lighten-1">add</v-icon>
                <!-- <input type="number" v-model="quantity" min="0"> -->
              </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script>
import Utils from "../Utils.js";

export default {
  name: "app-restaurant-menu-item",
  props: ["item"],
  data() {
    return {
      price : 0,
      quantity: 0,
      
    };
  },
  mounted() {},
  methods : {
    generateRandomPrice(){
      var random = Utils.random(7,18);
      this.price = random;
      return random;
    }
  }
};
</script>

<style scoped>