<script setup>

//  Définition des props utilisable sur le composant Button ici : cta (call to action)
const props = defineProps({
  cta: String,
})


</script>

<style>
/* style du bouton */
button {
    height: 30% ;
    width : 40% ;
	box-shadow:inset 0px 2px 0px 0px #a6827e;
	background:linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
	background-color:#7d5d3b;
	border-radius:9px;
	border:1px solid #54381e;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Georgia;
	font-size:14px;
	padding:8px 30px;
	text-decoration:none;
	text-shadow:0px 5px 0px #4d3534;
}
/* gestion du style au survol du bouton */
button:hover {
	background:linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
	background-color:#634b30;
}
/* getion du style au clic du bouton */
button:active {
	position:relative;
	top:1px;
}


</style>

<template>

<article>
	<!-- creation d'un bouton avec comme texte la valeur de la props cta (qui seras entré dans le composant parent) -->
    <button> {{ cta }}</button>
</article>

</template>