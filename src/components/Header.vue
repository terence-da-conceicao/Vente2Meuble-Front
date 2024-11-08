<script>
// computed est une méthode vue qui permet de mettre en cache les datas utilisés => surveille ces données et les mets a jours dans les dépendances
import {computed} from 'vue' ; 
import { admin, connected, isAdmin, isConnected } from '../../globalStateManager.js';

// permet de rendre utilisable les éléments qu'on a importer dans le composant 
export default {
  setup() {
    // Utiliser computed pour plus facilement récupérer la valeur de nos variable dynamique (refuse la requete admin.value directement)
    const adminState = computed(() => admin.value);
    const connectedState = computed(() => connected.value);

    return { adminState, connectedState, isAdmin, isConnected };
  },
};

const adminState = admin.value
const connectedState = connected.value


</script>
<style scoped>

    header {
        background-color: #FAF4E3;
        width : 100vw;
        margin-bottom : 0px;
        padding: 0rem;
        height: 10vh;
        display : flex;
        gap : 5%;
        
    }
    h2 {
        font-size: 3em;
        align-self: end;
        font-family: "Zain", serif;
        font-weight: 400;
        font-style: normal;

    }
   header img {
    width :5% ;
    height: 100% ; 
}
    .link {
        align-self : center ;
        font-family: "Zain", serif;
        font-weight: 300;
        font-style: normal;
        
    }


</style>
<template>

    <header>
        <img src="/LogoMeubles.png">
        <RouterLink to="/" class="link"><h2>Vente2Meubles</h2></RouterLink> 
        
        <div class="conditionDisplay">
    <!-- liste des condition pour afficher nos élément en fonction de si l'utilisateur est connecté et si l'utilisateur est un admin -->
     <!-- la logique de modification du status d'admin n'a pas été créer pour le moment  -->
            <RouterLink to="/connexion" class="link" v-if="connectedState==false">Connexion</RouterLink>
            <RouterLink to="/deconnexion" class="link" v-if="connectedState==true">Déconnexion</RouterLink>
            <RouterLink to="/inscription" class="link" v-if="connectedState==false">Inscription</RouterLink>
            <RouterLink to="/gestion" class="link" v-if="adminState==true">Gestion du Stock</RouterLink>
        </div>
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