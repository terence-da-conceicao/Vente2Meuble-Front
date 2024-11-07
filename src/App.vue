<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import Header from  './components/Header.vue';
import Connexion from '@/views/Connexion.vue';
//ajouter un @ pour le src?
</script>

<template>
  <div id="app">
    <!-- <HomePage />  -->
      <RouterLink to="/">HomePage</RouterLink>
      <RouterLink to="/deconnexion">Déconnexion</RouterLink>
      <RouterLink to="/connexion">Connexion</RouterLink>
      <RouterLink to="/">HomePage</RouterLink>
    <router-view />
    <!--pourquoi un / est syntaxé et pas les autre-->



      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
 

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
