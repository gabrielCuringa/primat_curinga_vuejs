<template>
  <div>
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ item.category }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile v-for="meal in item.meals" :key="meal.idMeal">
      <v-list-tile-content>
        <v-list-tile-title>{{ meal.strMeal }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: "app-restaurant-menu-item",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>