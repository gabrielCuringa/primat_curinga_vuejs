<template>
  <div>
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        @click="goToDetail()"
      >
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{name}}</h3>
            <div>{{cuisine}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn color="info" @click="updateRestaurant()">Modifier</v-btn>
          <v-btn color="error" @click="deleteRestaurant()">Supprimer</v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "cuisine"],
  data() {
    return {};
  },
  methods: {
    updateRestaurant() {},
    deleteRestaurant() {
      this.API.deleteRestaurant(this.id)
        .then(result => {
          console.log(result);
          console.log("dans then Restaurant");
          this.$emit("reload-restaurants");
        })
        .catch(error => {
          console.log(error);
        });
    },
    goToDetail() {
      this.$router.push({
        name: "detail",
        params: {
          id: this.id
        }
      });
    }
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