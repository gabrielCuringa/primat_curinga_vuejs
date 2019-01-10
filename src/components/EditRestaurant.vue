<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="show" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Modifier</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="editForm" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :rules="basicRules"
                  :placeholder="restaurant.name"
                  label="Nom"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="cuisine"
                  :rules="basicRules"
                  :placeholder="restaurant.cuisine"
                  label="Cuisine"
                  required
                ></v-text-field>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" flat @click="show=!show">Fermer</v-btn>
            <v-btn color="green darken-1" :disabled="!valid" flat @click="validate">Enregistrer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "app-edit-restaurant",
  props: ["restaurant"],
  data: () => ({
    show: false,
    valid: true,
    name: "",
    basicRules: [v => !!v || "Required"],
    cuisine: ""
  }),
  methods: {
    showModal() {
      this.show = !this.show;
    },
    validate() {
      if (this.$refs.editForm.validate()) {
        this.show = !this.show;
        let formData = new FormData();

        formData.append("nom", this.name);
        formData.append("cuisine", this.cuisine);

        console.log(formData);

        this.API.updateRestaurant(this.restaurant.id, formData)
          .then(result => {
            this.$emit("reload-restaurants");
          })
          .catch(err => {});
      }
    }
  }
};
</script>

/**
scoped = ne se s'applique pas aux composants inclus
 */
<style scoped>
</style>