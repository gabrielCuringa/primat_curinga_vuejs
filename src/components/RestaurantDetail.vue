<template>
  <div>
    <p>Nom: {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
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