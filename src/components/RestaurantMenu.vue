<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list>
          <v-list-group
            v-for="item, index of menu"
            v-model="item.active"
            :key="item.category"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.category }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <app-restaurant-menu-item :item="item"></app-restaurant-menu-item>
          </v-list-group>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Utils from "../Utils.js";
import RestaurantMenuItem from "./RestaurantMenuItem.vue";

export default {
  name: "app-restaurant-menu",
  components: {
    "app-restaurant-menu-item": RestaurantMenuItem
  },
  data() {
    return {
      menu: []
    };
  },
  mounted() {
    this.getMenus();
  },
  methods: {
    getMenus() {
      this.API.getCategories()
        .then(meals => {
          console.log(meals);
          var starter = "Starter";
          var desert = "Desert";
          let promises = [];

          promises.push(this.API.getMenuFromCategory(starter));

          for (let i = 0; i <= 2; i++) {
            var random = meals[Utils.random(0, meals.length)].strCategory;
            //console.log(random);
            promises.push(this.API.getMenuFromCategory(random));
          }
          promises.push(this.API.getMenuFromCategory(desert));

          Promise.all(promises)
            .then(result => {
              console.log(result);
              this.menu = result;
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {});
    },
    
  }
};
</script>

<style scoped>