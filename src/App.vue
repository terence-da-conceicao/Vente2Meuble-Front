<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HomePage from '@/views/HomePage.vue';
  import Header from  '@/components/Header.vue';
  import Connexion from '@/views/Connexion.vue';
  import Deconnexion from '@/views/Deconnexion.vue';
  import Inscription from '@/views/Inscription.vue';
  import Gestion from '@/views/Gestion.vue';
// @ est un alias de src


</script>


<template>
  <div id="app">
      
    <router-view />
    <!--
    - Cacher l'onglet Gestion dans le header pour les users. L'afficher seulement pour l'admin.
      On peut faire ça avec v-show ou v-if
    - Afficher l'onglet Déconnexion seulement quand on est connecté
    - Afficher l'onglet Inscription seulement quand on n'est pas connecté
    - Afficher l'onglet HomePage seulement quand on n'est pas sur HomePage

    -->

    </div>
</template>

<style scoped>
</style>
