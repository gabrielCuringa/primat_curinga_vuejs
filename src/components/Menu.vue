<template>
  <div></div>
</template>

<script>
import Utils from "../Utils.js";
export default {
  name: "app-restaurant-menu",
  data() {
    return {};
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