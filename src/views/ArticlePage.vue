<!-- Le composant principal dans lequel vont s'imbriquer tous les autres composants -->
<script setup>
// On importe notre JSON (fausse BDD) et le composant dont on va avoir besoin (ici Header et Button)
import { ref, onMounted } from 'vue'; // Importation des fonctions Vue nécessaires
import { useRoute } from 'vue-router'; // Importation de `useRoute` pour accéder aux paramètres de la route
import { fetchMeubles } from "../APIrequest.js";
import Header from "../components/Header.vue";
import Button from "../components/BaseButton.vue";
import jsonmeuble from "/jsonmeuble.json";


// Utilisation de la route actuelle pour récupérer les paramètres
const route = useRoute();

  // Récupérer l'ID du meuble depuis les paramètres de la route
  const articleId = route.query.id; // Permet de récupérer l'ID présent dans l'URL de la page
  
// Création d'un objet réactif `meuble` vide pour stocker le meuble correspondant
let meuble = await fetchMeubles(`http://localhost:8000/meubles/${articleId}`); 



  // Find() => recherche un élément dans un tableau (jsonmeuble.meubles)
  // On vérifie l'id de tous les items du tableau jsonmeuble et si on a un item.id
  // qui correspond à articleId, on retourne son objet
//   meuble.value = jsonmeuble.meubles.find(item => item.id === parseInt(articleId));

</script>
<style scoped>
body {
    display: flex ;
    flex-direction : column ;
    height : 100dvh;
}
section {
    display : flex;
}
/* h1 {
    text-align: center;
    font-size: 3em;
    margin-bottom: 5rem;
} */
.imgContainer {
    width : 50dvw;
    background-color: #E0D5B6 ;
    display : flex ;
    flex-direction: column ;
    align-items : center ;
    justify-content: center ;
}
.dataContainer {
    width : 50dvw;
    background-color : #D9A441 ;
}
.subContainer {
    display : flex ;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    margin : 10% auto;
}
.listInfos>li{
    width: 30%;
    text-align: center;
    margin:auto;
}
.listInfos{
    height: 35dvh;
    width : 50dvw ;
    display: flex;
    flex-direction: column;
}
.mainImg {
    width : 70%;
    height : 60%
}
/* .subImg {
    display : flex;
    width : 70%;
    height : 30%;
    background-color: blue;
}
.subImg>img{
width: 25%;
} */
</style>
<template>
<body>
    <Header/>
<section>
    <div class="imgContainer">
        <img :src="meuble.images" class="mainImg" alt="Photo"> 
        <!-- de {{meuble.type}}en{{meuble.matiere}} {{meuble.couleur}}"
        
         <div class="subImg">
            <img src="https://picsum.photos/id/1/200/300">
            <img src="https://picsum.photos/id/2/200/300">
            <img src="https://picsum.photos/id/3/200/300">
        </div> -->
    </div>
    <div class="dataContainer">
        <div class="subContainer">

            <h1>{{meuble.type}} en {{meuble.matiere}} {{meuble.couleur}}</h1>

            <ul class="listInfos">
                <li>{{meuble.type}}</li>
                <li>{{meuble.couleur}}</li>
                <li>{{meuble.matiere}} </li>
                <li>{{meuble.dimensions}}</li>
                <li>{{ meuble.prix }}€</li>
            </ul>
            <Button cta="Réserver"></Button>
        </div>
    </div>
</section>
</body>
</template>