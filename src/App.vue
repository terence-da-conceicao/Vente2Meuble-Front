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
    <suspense>
    <router-view />
   </suspense>

    </div>
</template>

<style scoped>
</style>
