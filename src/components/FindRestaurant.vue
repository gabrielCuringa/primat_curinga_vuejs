<template>
  <div>
    <v-text-field type="text" v-model="search" placeholder="Rechercher..." @input="find"></v-text-field>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "app-find-restaurant",
  data: () => ({
    search: ""
  }),

  methods: {
    find: _.debounce(function() {
      this.$emit("find-restaurants", { search: this.search });
    }, 300)
  }
};
</script>

/**
scoped = ne se s'applique pas aux composants inclus
 */
<style scoped>
</style>