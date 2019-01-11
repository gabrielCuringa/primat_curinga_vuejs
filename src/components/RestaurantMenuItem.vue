<template>
  <div>
    <v-list-tile v-for="meal in item.meals" :key="meal.idMeal">
      <v-list-tile-avatar>
        <img :src="meal.strMealThumb">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ meal.strMeal }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ meal.price }} €</v-list-tile-sub-title>
      </v-list-tile-content>
      <app-menu-item-quantity
        v-on:change-quantity="setQuantity($event)"
        v-on:add-cart="addToCart(meal)"
      ></app-menu-item-quantity>
    </v-list-tile>
  </div>
</template>

<script>
import Utils from "../Utils.js";
import RestaurantMenuItemQt from "./RestaurantMenuItemQt.vue";

export default {
  name: "app-restaurant-menu-item",
  components: {
    "app-menu-item-quantity": RestaurantMenuItemQt
  },
  props: ["item"],
  data() {
    return {
      quantity: 0
    };
  },
  mounted() {},
  methods: {
    addToCart(meal) {
      this.$cart.push({ meal: meal, quantity: this.quantity });

      console.log(meal);
    },
    setQuantity(event) {
      this.quantity = event.quantity;
      console.log("Quantité = " + this.quantity);
    }
  }
};
</script>

<style scoped>