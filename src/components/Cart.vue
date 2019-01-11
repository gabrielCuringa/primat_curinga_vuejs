<template>
  <div>
    <v-bottom-sheet v-model="activated">
      <v-list>
        <v-list-tile v-for="meal in $cart" :key="meal.idMeal">
          <v-list-tile-content>
            <v-list-tile-title>{{ meal.strMeal }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
    <!-- Button shopping cart-->
    <v-btn fixed dark fab bottom right color="blue" @click="activated=!activated">
      <!--<v-badge left>
        <span slot="badge">{{$cart.length}}</span>
      </v-badge>-->
      <v-icon>shopping_cart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      activated: false
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>