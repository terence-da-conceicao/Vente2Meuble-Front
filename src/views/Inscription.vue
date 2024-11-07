<script setup>
    import Header from "../components/Header.vue"
</script>

<style></style>

<template>
    <Header/>
    <h1>Inscription</h1>

    <form action="/login" method="post">
      <label for="mail">Mail</label>
      <input type="text" id="mail" name="mail" required>
      
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required>
      
      <button type="submit">S'inscrire</button>
    </form>
</template>