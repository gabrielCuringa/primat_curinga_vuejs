<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="500">
      <v-btn slot="activator" color="primary" dark>Valider ma commande</v-btn>
      <v-card>
        <v-card-title class="headline">Récapitulatif de votre commande</v-card-title>
        <v-card-text v-if="getTotalAmount() <= 0">Merci de bien vouloir ajouter des articles.</v-card-text>
        <v-card-text>{{ "Votre montant est de "+ getTotalAmount() + " €" }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Annuler</v-btn>
          <v-btn
            color="green darken-1"
            :disabled="$cart.length==0"
            flat
            @click="dialog = false;snackbar=true"
          >Et ça, J'achete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="4000">Votre commande a bien été prise en compte !
      <v-btn color="pink" flat @click="snackbar = false">Fermer</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      snackbar: false
    };
  },
  methods: {
    getTotalAmount() {
      let totalAmount = 0;
      this.$cart.forEach(item => {
        totalAmount += item.meal.price * item.quantity;
      });
      return Math.round(totalAmount * 100) / 100;
    }
  }
};
</script>

<style scoped>
</style>