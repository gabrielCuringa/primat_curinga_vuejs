<template>
  <div>
    <v-container>
      <v-form ref="addForm" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="basicRules" label="Nom" required></v-text-field>

        <v-text-field v-model="cuisine" :rules="basicRules" label="Cuisine" required></v-text-field>
        <v-btn color="error" @click="reset">Réinitialiser</v-btn>
        <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "app-add-restaurant",
  data: () => ({
    valid: true,
    name: "",
    basicRules: [v => !!v || "Required"],
    cuisine: ""
  }),

  methods: {
    validate() {
      if (this.$refs.addForm.validate()) {
        let formData = new FormData();

        formData.append("nom", this.name);
        formData.append("cuisine", this.cuisine);
        this.API.addRestaurant(formData);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

/**
scoped = ne se s'applique pas aux composants inclus
 */
<style scoped>
</style>