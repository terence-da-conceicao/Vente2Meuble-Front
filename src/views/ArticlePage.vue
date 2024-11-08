<!-- Le composant principal dans lequel va s'imbriquer tous les autre composant  -->

<script>

// On importe notre JSON (fausse BDD) et le composant dont on va avoir besoin (ici header)
import Header from "../components/Header.vue"
import jsonmeuble from "/jsonmeuble.json"
import Button from "../components/Button.vue"


// permet de spécifier les éléments qu'on importe, on lui dit que toute ce qu'il y a dans ma base de donnée sera stocké dans une variabe "data"
export default {
    data(){
        return{
            data: jsonmeuble
        }
    },
    components: {
        Header, 
        Button
    }
}


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
        <img src="https://picsum.photos/id/0/200/300" class="mainImg">
        <!-- <div class="subImg">
            <img src="https://picsum.photos/id/1/200/300">
            <img src="https://picsum.photos/id/2/200/300">
            <img src="https://picsum.photos/id/3/200/300">
        </div> -->
    </div>

    <div class="dataContainer">
        <div class="subContainer">
            <h1>Nom Meuble</h1>
            <ul class="listInfos">
                <li>type</li>
                <li>dimension</li>
                <li>couleurs</li>
                <li>matière </li>
            </ul>
            <Button cta="Réserver"></Button>
        </div>
    </div>
</section>
</body>


</template>

<!-- 1- Créer la page qui meuble avec des data préinscrite 
2- gérer les route pour mener a cette page 
3- faire en sorte de pouvoir personnaliser la page en fonction du bouton cliqué  -->