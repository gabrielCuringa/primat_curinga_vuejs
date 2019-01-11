<template>
  <div>
    <v-list-tile>
      <v-list-tile-action>
        <v-btn icon ripple @click="add" :disabled="quantity==0">
          <v-icon color="blue lighten-1">shopping_cart</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn icon ripple @click="inc">
          <v-icon color="green lighten-1">add</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-list-tile-title>{{ quantity }}</v-list-tile-title>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn icon ripple @click="dec" :disabled="quantity==0">
          <v-icon color="red lighten-1">remove</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    inc() {
      this.quantity += 1;
      this.$emit("change-quantity", { quantity: this.quantity });
    },
    dec() {
      this.quantity -= 1;
      this.$emit("change-quantity", { quantity: this.quantity });
    },
    add() {
      this.$emit("add-cart");
    }
  }
};
</script>

<style scoped>
</style>