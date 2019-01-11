<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>

          <v-toolbar-title>Carte du restaurant</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.strMeal"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ subItem.strMeal }}
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Utils from "../Utils.js";
export default {
  name: "app-restaurant-menu",
  data() {
    return {
      promises : [],
      items: [
          {
            action: 'restaurant',
            title: 'Nos Fabuleuses entrées',
            active: true,            
            items: [
              {strMeal : "Soupe de poisson fait maison !"},
              {strMeal : "Morrue sêchées!"},
              {strMeal : "Salade César !"},
              {price : "Toutes nos entrées sont à 9 euros"},

            ]
          },
          {
            action: 'restaurant',
            title: 'Les plats du chef :D',
            items: [
              {strMeal : "Teryaki poulet !"},
              {strMeal : "Agneau sauté à la pékinoise!"},
              {strMeal : "Couscous aux lardons !"},
              {price : "Tous nos plats sont à 11 euros"},
              
            ]
          },
          {
            action: 'restaurant',
            title: 'Nos desserts préparés avec amour',
            items: [
              {strMeal : "Crème brulée !"},
              {strMeal : "Frommage blanc aux fruits rouges de saison !"},
              {strMeal : "Boules Cocos !"},
              {price : "Tous nos desserts sont à 4 euros"},
            ]
          },
        ]
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
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>