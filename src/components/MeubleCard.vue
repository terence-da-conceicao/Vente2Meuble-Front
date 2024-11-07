<script setup>

// on importe le composant dont on aura besoin ici 

import Button from "./Button.vue"

// on défini les props propre à notre composant MeubleCard : on peut donc lui injecter un nom/ une url d'image / un prix 
const props = defineProps({
  name: String,
  imgurl : String,
  prix : Number,
})

</script>

<style>
/* style de l'image du produit */
img { 
    
    width : 60% ; 
    height : 40%
}
/* style de la structure de la carte produit  */
article {
    display : flex ; 
    flex-direction: column; 
    align-items: center;
    text-align: center;
    height : 70dvh ;
    width : 60dvh ; 
    margin : 5% ;
    gap : 5%
}
</style>

<template>

<article>
<!-- structure de la carte : une image , un titre de niveau 2 qui sera la nom qu'on lui injectera en props, prix qui sera celui qu'on lui injectera en props -->
    <img :src="imgurl">
    <h2>{{ name }}</h2>
    <p>{{ prix }} €</p>
<!-- utilisation du composant button sur lequel on donne la valeur achetez a la props(variable) cta de Button -->
    <Button cta="En savoir plus"></Button>
</article>

</template>