<script >
// computed est une méthode vue qui permet de mettre en cache les datas utilisés => surveille ces données et les mets a jours dans les dépendances
    import {computed} from 'vue' ; 
    import Header from "../components/Header.vue"
    import { admin, connected, isAdmin, isConnected } from '../../globalStateManager.js';

// permet de rendre utilisable les éléments qu'on a importer dans le composant 
    export default {
        setup() {
    // Utiliser computed pour plus facilement récupérer la valeur de nos variable dynamique (refuse la requete admin.value directement)
        const adminState = computed(() => admin.value);
        const connectedState = computed(() => connected.value);
        return { adminState, connectedState, isAdmin, isConnected };
    },
        components: {
            Header
        }
    }

</script>

<style scoped>
    body {
        background-color: rgb(0, 255, 119);
    }
    /* Ce style ne marche pas, explications de Patrice */

</style>

<template>
    <Header/>
     <h1>CONNEXION</h1>

     <form action="/login" method="post">
      <label for="email">Mail</label>
      <input type="text" id="mail" name="mail" required>
      
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required>
      
      <!-- ajout d'un router pour rediriger vers la page d'accueil ainsi qu'un event listener pour changer l'état de connexion -->
      <RouterLink to="/"><button type="submit" @click="isConnected(true)">Se connecter</button></RouterLink>
    </form>

</template>