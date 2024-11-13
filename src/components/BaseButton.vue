<script setup>

//  Définition des props utilisable sur le composant Button ici : cta (call to action)
const props = defineProps({
  cta: String
})


</script>
<!-- ici scoped permet d'encapsuler le style à l'intérieur du composant et éviter d'impacter le style des autres pages et composants -->
 <style scoped> 
/* style du bouton */
button {
    height: 60px;
    width : 160px ;
	box-shadow:inset 0px 2px 0px 0px #a6827e;
	background:linear-gradient(to bottom, #2E1B0F 5%, #492b18 100%);
	background-color:#2E1B0F;
	border-radius:9px;
	border:1px solid #54381e;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Georgia;
	font-size:16px;
	padding:8px 30px;
	text-decoration:none;
	text-shadow:0px 5px 0px #4d3534;
}
/* gestion du style au survol du bouton */
button:hover {
	background:linear-gradient(to bottom, #2e1b0fad 5%, #492b18b4 100%);
	background-color:#634b30;
	box-shadow: 15px 13px 15px -3px rgba(28,16,9,0.73)

}
/* getion du style au clic du bouton */
button:active {
	position:relative;
	top:1px;
}


</style>

<template>

	<!-- creation d'un bouton avec comme texte la valeur de la props cta (qui seras entré dans le composant parent) -->
     <button> {{ cta }}</button> 

</template>