<script setup>

// on importe le ou les composant(s) dont on aura besoin ici 

import BaseButton from "./BaseButton.vue"

// on défini les props propre à notre composant MeubleCard : on peut donc lui injecter un nom/ une url d'image / un prix 
const props= defineProps({
  type: String,
  photos : String,
  prix : Number,
  id : Number,
  matiere : String, 
  couleur : String, 

});

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
    <img :src="photos" alt="photo de meubles"> 
    <h2>{{ type }} en {{ matiere }} {{ couleur }}</h2>
    <p>{{ prix }} €</p>
<!-- utilisation du composant button sur lequel on donne la valeur achetez a la props(variable) cta de Button -->
<RouterLink :to="`/articlePage?id=${id}`"> <BaseButton cta="En savoir plus"></BaseButton></RouterLink>
</article>

</template>