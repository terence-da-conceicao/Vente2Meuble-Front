<script>
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

<style></style>

<template>
    <Header/>
    <h1>Etes-vous sûr de vouloir vous déconnecter ? </h1>
      <!-- ajout d'un router pour rediriger vers la page d'accueil ainsi qu'un event listener pour changer l'état de connexion -->
      <RouterLink to="/"><button @click="isConnected(false)">Se déconnecter</button></RouterLink>

</template>