<script setup>
   
// on importe le composant dont on aura besoin ici 

import Button from "./Button.vue"
// import Button from "./Button.vue"
// import Button from "./Button.vue"
// import Button from "./Button.vue"
// import Button from "./Button.vue"
// import Button from "./Button.vue"

// on définie les props propre à notre composant Header : 
//logo, nom du site, login/inscription.

const props = defineProps({
  admin: false,
  connect: false
})


// état admin ou user pour le bouton gestion de produit? 
//avec un v-if?


</script>
<style>
    header {
        background-color: #FAF4E3;
        width : 100vw;
        margin-bottom : 0px;
        padding: 0rem;
        height: 10vh;
    }



</style>
<template>

    <header>
        <img src="./public/51IDpgGCBJL.jpg">
        <h2>Vente2Meubles</h2>
        <!-- <a v-show="admin" href="/gestion">Gestion du stock</a>
        <router-link to="/connexion">Connexion</router-link>  -->
        <!-- <a class="logSubs" href="./Connexion.vue">Connexion</a> -->
        <!-- <router-link to="/inscription">Inscription</router-link> -->
        <!-- <a class="logSubs" href="./Inscription.vue">Inscription</a> -->
        <!-- <a v-show="connect" href="/deconnexion">Déconnexion</a> -->

        <RouterLink to="/">HomePage</RouterLink> 
        <RouterLink to="/connexion">Connexion</RouterLink>
        <RouterLink to="/deconnexion">Déconnexion</RouterLink>
        <RouterLink to="/inscription">Inscription</RouterLink>
        <RouterLink to="/gestion">Gestion du Stock</RouterLink>

        </header>


</template>

<!--

- image lien introuvable
- flex
- v-show et leurs props
- bouger css logSubs
- routes des autres pages
-->


<!--
    UTILISER VUE ROUTER

    Faire un index.js dans le src/router/. Intslaler npm install vue router.


Utiliser RouterView et RouterLink, deux components procurés apr Vue Router. 
Au lieu d'utliser des <a>, on utilise des éléments RouterLink pour les liens.
Cela permet à Vue Router de changer les urls sans refresh les pages entre autres.
Cela permet de mettre à jour les composants qui correspondent à un certain chemin url.
On peut mettre RouterView où on veut, pas d'endroit précis obligatoire mais il faut le mettre.

$route est l'objet qui représente le chemin/route actuelle. 

Pour créer une instance router on appelle l fonction createRouter() (il faut l'importer)


L'option history contrôles comment els routes sont mappés en url et comment
les url sont mappés en routes. 
On peut utiliser la fonction createMemoryHistory() qui ignore
les navigateurs url entierement et utilise ses propres urls internes
à la place. Mais on va préférer utiliser createWebHistory() à la place
ou createWebHashHistory(). 

Enregistrer le plugin router : 
une fois qu'on a créer notre instance router, il faut l'enregistrer
dans un plugin en utilisant use().
app.use(router). On le met dans le createApp() avant le mount.
-->



<!-- 
Résumé
1) Installez Vue Router.
2) Configurez les routes dans un fichier router.js.
3) Créez les composants pour chaque page.
4) Utilisez <router-link> pour naviguer entre les pages.
5) Utilisez <router-view> dans App.vue pour afficher les pages. -->