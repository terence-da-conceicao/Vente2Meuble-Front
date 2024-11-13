<!-- Le composant principal dans lequel va s'imbriquer tous les autre composant  -->

<script setup>
//On importe les méthodes vue, la méthode du fetch réalisé dans le js APIrequest ainsi que nos composant header et meubleCard
import {onMounted} from 'vue';
import { fetchMeubles } from "../APIrequest.js";
import Form from '@/components/Form.vue';
import Header from "../components/Header.vue";
import MeubleCard from "../components/MeubleCard.vue";

// Déclarer un état réactif pour stocker les meubles


let meubles = await fetchMeubles('http://localhost:8000/meubles'); 



// Utiliser onMounted pour récupérer les données quand le composant est monté (appelé dans l'index.html)


console.log('meuble?',meubles)




</script>

<style scoped>


/* style de la div qui contient toutes les cartes produits */
.container {
    display : grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
    align-self : center ;
}
</style>

<template>

<section>
    <Header/>

    <h1>Pour quel meuble craquerez-vous?</h1>


    <div class="container">
        <!-- ci dessous on fait une boucle for pour récupérer les nom , les image et les prix de chaque meuble -->
        <div v-for="meuble in meubles" :key="meuble.id">
            <!-- ci dessous on appelle notre composant MeubleCard auxquels ont passe en props les data récupéré via la boucle for  -->
            <MeubleCard :type="meuble.Type" :photos="meuble.photos" :prix="meuble.prix" :id="meuble.id" :matiere="meuble.matiere" :couleur="meuble.couleur"/>
        </div>
    </div>

<Form/>
     

</section>

</template>