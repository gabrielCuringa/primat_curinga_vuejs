<template>
  <div>
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        @click="goToDetail()"
      >
        <v-img :src="image" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{name}}</h3>
            <div>{{cuisine}}</div>
          </div>
          <div class="d-flex">
            <v-rating
              :value="parseFloat(gradeAverage())"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{gradeAverage()}}</span>
              <span>({{ grades.length }})</span>
            </div>
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
  props: ["id", "name", "cuisine", "grades", "image"],
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
      console.log(this.image);
      this.$router.push({
        name: "detail",
        params: {
          id: this.id
        }
      });
    },
    gradeAverage() {
      var total = 0;
      this.grades.forEach(element => {
        total = total + parseInt(element.score);
      });
      return (total / this.grades.length / 4).toFixed(2);
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