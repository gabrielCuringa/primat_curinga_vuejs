<template>
  <div>
    <p>Nom: {{$route.params.id}}</p>
    <v-img :src="$route.params.image"></v-img>
  </div>
</template>

<script>
export default {
  mounted() {
    this.API.getRestaurantById(this.$route.params.id)
      .then(result => {
        this.restaurant = result.restaurant;
        console.log(this.restaurant);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {};
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