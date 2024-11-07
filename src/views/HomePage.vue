<!-- Le composant principal dans lequel va s'imbriquer tous les autre composant  -->

<script>

// On importe notre JSON (fausse BDD) et le composant dont on va avoir besoin
import Header from "../components/Header.vue"
import jsonmeuble from "/jsonmeuble.json"
import MeubleCard from "../components/MeubleCard.vue"

// permet de spécifier les éléments qu'on importe, on lui dit que toute ce qu'il y a dans ma base de donnée sera stocké dans une variabe "data"
export default {
    data(){
        return{
            data: jsonmeuble
        }
    },
    components: {
        Header, MeubleCard
    }
}

// export default {
//     name : 'HomePage'
// }

</script>

<style scoped>
/* style du titre de la page  */
h1 {
    text-align: center;
    margin : 5%;
    font-size: 4em;
    font-style: italic;
}
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
        <div v-for="meuble in data.meubles" :key="meuble.nom">
            <!-- ci dessous on appelle notre composant MeubleCard auxquels ont passe en props les data récupéré via la boucle for  -->
            <MeubleCard :name="meuble.nom" :imgurl="meuble.photo" :prix="meuble.prix"/>
        </div>
    </div>

</section>


</template>