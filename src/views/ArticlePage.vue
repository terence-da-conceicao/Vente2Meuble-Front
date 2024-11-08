<!-- Le composant principal dans lequel va s'imbriquer tous les autre composant  -->

<script>

// On importe notre JSON (fausse BDD) et le composant dont on va avoir besoin (ici header)
import Header from "../components/Header.vue"
import jsonmeuble from "/jsonmeuble.json"
import Button from "../components/Button.vue"


// permet de spécifier les éléments qu'on importe, on lui dit que toute ce qu'il y a dans ma base de donnée sera stocké dans une variabe "data"
export default {
  data() {
    return {
      meuble: {} // Objet vide pour stocker le meuble correspondant
    };
  },
  components: {
    Header,
    Button
  },
  mounted() {
    // Récupérer l'ID du meuble depuis les paramètres de la route
    const articleId = this.$route.query.id; // Permet de récupérer l'ID présent dans l'URL de la page
    // Find() => recherche un élément dans un tableau (jsonmeuble.meubles) on vérifie l'id de tout les item du tableau jasonmeuble et si on a un ITEM;id qui correspond a articleid on return son objet
    this.meuble = jsonmeuble.meubles.find(item => item.id === parseInt(articleId));
    }
};


//Définition des information que le composant à besoin de récupérer 



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
h1 {
    text-align: center;
    font-size: 3em;
    margin-bottom: 5rem;
}
.imgContainer {
    width : 50dvw;
    background-color: #e0d5b6 ;
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
        <img :src="meuble.photo" class="mainImg">
        <!-- <div class="subImg">
            <img src="https://picsum.photos/id/1/200/300">
            <img src="https://picsum.photos/id/2/200/300">
            <img src="https://picsum.photos/id/3/200/300">
        </div> -->
    </div>

    <div class="dataContainer">
        <div class="subContainer">
            <h1>{{ meuble.nom }}</h1>
            <ul class="listInfos">
                <li>{{meuble.type}}</li>
                <li>{{meuble.dimension}}</li>
                <li>{{meuble.couleur}}</li>
                <li>{{meuble.matière}} </li>
                <li>{{ meuble.prix }}€</li>
            </ul>
            <Button cta="Réserver"></Button>
        </div>
    </div>
</section>
</body>


</template>

