<template>
  <div>
    <v-bottom-sheet v-model="activated">
      <v-list>
        <v-list-tile v-for="item in cart" :key="item.idMeal">
          <v-list-tile-avatar>
            <img :src="item.meal.strMealThumb">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.meal.strMeal }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.meal.price }}€</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action>
              <v-list-tile-title>Quantité : {{ item.quantity }}</v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn icon ripple @click="deleteFromCart(item.meal.idMeal)">
              <v-icon color="red lighten-1">remove</v-icon>
              <!-- <input type="number" v-model="quantity" min="0"> -->
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <app-commande>
          <v-btn slot="activator" color="primary" dark>Valider ma commande</v-btn>
        </app-commande>
      </v-list>
    </v-bottom-sheet>
    <!-- Button shopping cart-->
    <v-btn fixed dark fab bottom right color="blue" @click="activated=!activated">
      <v-icon>shopping_cart</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Commande from "./Commande.vue";
export default {
  created() {
    this.cart = this.$cart;
  },
  data() {
    return {
      activated: false,
      cart: []
    };
  },
  methods: {
    deleteFromCart(idMeal) {
      this.$cart.forEach((item, index) => {
        if (item.meal.idMeal === idMeal) {
          console.log("splice");
          this.$cart.splice(index, 1);
        }
      });
      this.cart = this.$cart;
    }
  }
};
</script>

<style scoped>
</style>