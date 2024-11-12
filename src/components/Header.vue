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
    width : 100%;  
    height: 100px;
    display : flex;
    justify-content: space-around;
    /* gap : 5%; */
    font-size:1.5em ;
    font-family: "Zain", serif;
    }

.homepage {
    font-size: 2rem;
    align-self: center;
   /*  width: 20%; */
    font-weight: 400;
    }
 
 .logo{
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
 }

 .logo>img{
  width: 90px;
  height: auto;
 }

 .link {
    align-self : center ;
    font-weight: 300;
    margin-right: 5em;
    
    }

    .conditionDisplay{
      width: 60vw;
      display: flex;
      justify-content: flex-end;
    }

</style>


<template>

    <header>
      <div class="logo"><img  src="/LogoMeubles.png"></div>
      
        
        <RouterLink to="/" class="link, homepage">Vente2Meubles</RouterLink> 
        
        <div class="conditionDisplay">
    <!-- liste des condition pour afficher nos élément en fonction de si l'utilisateur est connecté et si l'utilisateur est un admin -->
     <!-- la logique de modification du status d'admin n'a pas été créer pour le moment  -->
            <RouterLink to="/connexion" class="link" v-if="connectedState==false">Connexion</RouterLink>
            <RouterLink to="/deconnexion" class="link" v-if="connectedState==true">Déconnexion</RouterLink>
            <RouterLink to="/inscription" class="link" v-if="connectedState==false">Inscription</RouterLink>
            <RouterLink to="/gestion" class="link">Gestion des stocks</RouterLink>
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