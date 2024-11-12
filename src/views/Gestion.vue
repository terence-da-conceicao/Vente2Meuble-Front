<!-- 
Cette page n'est visible qu'en tant qu'admin -->

<script setup>
    import Header from "../components/Header.vue"
</script>

<style scoped>
  h1{
    font-family: roboto;
    font-size: 4em;
    text-align: center;
    font-style: italic;
    margin: 5% 0;
  }
  table{
    justify-self: center;
    text-align: center;
    
    
    
  }
  thead{
    border: solid 5px #4A6A75;
    font-weight: 600;
    font-size: 1.3em;
  }


  /*espacer les colonnes et les lignes */
  tr, th, td{
    padding: 30px 10px;
    border: solid 3px #4A6A75;
    
  }

  td{
    vertical-align: middle;
  }


  /*style de la nav qui composrte les deux UL */
  .dropdown-menu ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /*Style du li contenu dans l'ul principal */
  .menu-item{
    position: relative;
    font-weight: 600;
    padding: 10px 5px;
    border-radius: 5%;
    border: solid 1px #4A6A75;
  }

  menu-item>a{
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }

  /*Sous-menu caché par défaut */
  .submenu{
    display: none;
    position: absolute;
    /*Place le sous-menu en dessous du menu principal  */
    top: 100%;
    left: 0;
    min-width: 150px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .submenu li {
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }

  .submenu li:last-child {
    border-bottom: none;
}

/*Styles des lien du sous-menu */
.submenu li a {
    text-decoration: none;
    color: #4A6A75;
    padding: 10px;
    display: block;
}

.submenu li a:hover {
    background-color: #4A6A75;
    color: #fff;
}

/* Affiche le sous-menu au survol de l'élément principal */
.menu-item:hover .submenu {
    display: block;
    z-index: 100;
}


  /*style des boutons*/
  button{
    height: 4em;
    width: 8em;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 10px 10px;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    border: none;
    color: #fff;
    -webkit-box-shadow: 6px 13px 22px -12px rgba(117, 116, 116, 1);
    -moz-box-shadow: 6px 13px 22px -12px rgba(117, 116, 116, 1);
    box-shadow: 6px 13px 22px -12px rgba(117, 116, 116, 1); 
  }

/*   button:hover{
    color: #fff;
  } */

  .ajouter{
    background-color: #57cc99;
    color: #fff;
  }
  .ajouter:hover{
    background-color:#c7f9cc ;
    color: #4A6A75;
  }


  .modifier{
    background-color: #ff9100;
  }

  .modifier:hover{
    background-color:#FFB85C;
    color: #2e1b0f;
  }

  .supprimer{
    background-color: #c1121f;
  }

  .supprimer:hover{
    background-color: #EF233C;
    color:#2e1b0f;
  }


</style>

<template>
    <Header/>
    <h1>Gestion des stocks</h1>
    <table>
      <thead>
        <tr>
          <th>Référence (ID)</th>
          <th>Nom et type de meuble</th>
          <th>Photos</th>
          <th>Prix</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3335</td>
          <td>Buffet industriel</td>
          <td><img src="https://picsum.photos/id/0/200/300" class="mainImg"></td>
          <td>230€</td>
          <td>
            <nav class="dropdown-menu">
              <ul>
                <li class="menu-item">
                  <a href="#">Statut</a>
                  <ul class="submenu">
                    <li><a href="#">A valider</a></li>
                    <li><a href="#">En ligne</a></li>
                    <li><a href="#">Réservé</a></li>
                    <li><a href="#">Vendu</a></li>
                    <li><a href="#">Récupéré</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </td>
          <td>
            <button type="button" class="ajouter">Ajouter</button>
            <button type="button" class="modifier">Modifier</button>
            <button type="button" class="supprimer">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>3437</td>
          <td>Armoire ancienne</td>
          <td><img src="https://picsum.photos/id/0/200/300" class="mainImg"></td>
          <td>230€</td>
          
          <td>
            <nav>
              <ul>
                <li class="menu-item">
                  <a href="#">Statut</a>
                  <ul class="submenu">
                    <li><a href="#">A valider</a></li>
                    <li><a href="#">En ligne</a></li>
                    <li><a href="#">Réservé</a></li>
                    <li><a href="#">Vendu</a></li>
                    <li><a href="#">Récupéré</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </td>
          <td>
            <div class="buttons">
              <button type="button" class="ajouter">Ajouter</button>
              <button type="button" class="modifier">Modifier</button>
              <button type="button" class="supprimer">Supprimer</button>
            </div>
            
          </td>
        </tr>
      </tbody>
    </table>

</template>