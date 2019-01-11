<template>
  <div>
    <v-hover>
      <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
        <v-btn color="blue" dark small absolute right top fab v-show="hover" @click="goToDetail()">
          <v-icon>add</v-icon>
        </v-btn>
        <v-img :src="image" aspect-ratio="2.75">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title primary-title>
          <div>
            <div>{{cuisine}}</div>
          </div>
        </v-card-title>
        <div class="d-flex" v-if="grades != null">
          <v-rating
            :value="parseFloat(gradeAverage())"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          ></v-rating>
          <div class="ml-2 grey--text text--darken-2">
            <span>{{gradeAverage()}}</span>
            <span>({{ grades.length }})</span>
          </div>
        </div>
        <v-card-actions>
          <v-btn flat color="info" @click="edit">Modifier</v-btn>
          <v-btn flat color="error" @click="deleteRestaurant()">Supprimer</v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
    <app-edit-restaurant
      v-on:reload-restaurants="reload"
      :restaurant="{id: id, name: name, cuisine: cuisine}"
      ref="editRestaurantModal"
    ></app-edit-restaurant>
  </div>
</template>

<script>
import editRestaurantModal from "./EditRestaurant.vue";
export default {
  name: "app-restaurant",
  props: ["id", "name", "cuisine", "grades", "image"],
  data() {
    return {};
  },
  methods: {
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
      localStorage["image"] = this.image;
      this.$router.push({
        name: "detail",
        params: {
          id: this.id,
          image: this.image
        }
      });
    },
    editDialog(event) {
      console.log("edit dialog");
      this.showEditDialog = $event.show;
    },
    gradeAverage() {
      var total = 0;
      if (this.grades != null) {
        this.grades.forEach(element => {
          total = total + parseInt(element.score);
        });
        return (total / this.grades.length / 4).toFixed(2);
      } else {
        return 0;
      }
    },
    edit() {
      this.$refs.editRestaurantModal.showModal();
    },
    reload() {
      this.$emit("reload-restaurants");
    }
  }
};
</script>

/**
scoped = ne se s'applique pas aux composants inclus
 */
<style scoped>
.headline {
  background-color: white;
}
</style>