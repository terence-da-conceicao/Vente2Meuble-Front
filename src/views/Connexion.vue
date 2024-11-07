<script setup>
    import Header from "../components/Header.vue"
</script>

<style scoped>
    body {
        background-color: rgb(0, 255, 119);
    }
    /* Ce style ne marche pas, explications de Patrice */

</style>

<template>
    <Header/>
     <p>CONNEXION</p>

     <form action="/login" method="post">
      <label for="email">Mail</label>
      <input type="text" id="mail" name="mail" required>
      
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required>
      
      <button type="submit">Se connecter</button>
    </form>

</template>