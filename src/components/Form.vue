<script setup>
import { ref } from 'vue';
import BaseButton from "./BaseButton.vue";

// Déclaration de la structure du formulaire en tant qu'objet réactif
const form = ref({
  type: '',
  price: '',
  color: '',
  material: '',
  dimensions: '',
  photo: null, // Ce sera un objet fichier (File) une fois sélectionné
});

// Fonction pour gérer le changement de fichier
function onFileChange(event) {
  form.value.photo = event.target.files[0]; // Récupère le fichier sélectionné
}

// Fonction pour soumettre le formulaire
async function submitForm() {
  const formData = new FormData();
  formData.append('type', form.value.type);
  formData.append('price', form.value.price);
  formData.append('color', form.value.color);
  formData.append('material', form.value.material);
  formData.append('dimensions', form.value.dimensions);
  formData.append('photo', form.value.photo);

  try {
    // Envoi des données avec `fetch`
    const response = await fetch('https://example.com/api/submit', { // Remplacez l'URL par celle de votre API
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log("Formulaire envoyé avec succès :", form.value);
      alert('Formulaire soumis avec succès !');
    } else {
      console.error("Erreur lors de l'envoi du formulaire.");
      alert('Une erreur est survenue lors de la soumission du formulaire.');
    }
  } catch (error) {
    console.error("Erreur réseau :", error);
    alert('Une erreur réseau est survenue.');
  }
}
</script>


<style scoped>

section{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}


form{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  font-size: 1.4em;
  width: 60%;
  margin: auto;
  /* background-color: aqua; */
  
}


/*Stylise les div qui contiennent l'input ainsi que son label et le <p></p> qui précise comment remplir le champ*/
form>div{
  margin: 5% 0;
  display: flex;
  flex-direction: column;
}

input{
  width: 30em;
  height: 2.5em;
  border-radius: 10px 10px;
  border: 3px solid #4A6A75;
  margin: 5px 0;
 /*  background-color: coral; */
}

#photo{
  border: none;
}
/*stylise les <p></p> qui se trouvent sous chaque input afin d'aider l'utilisateur à les remplir */
.aideInput{
  font-size: 12px;
}


</style>


<template>
    <section>
      <h2 id="sectionFormAddMeuble">Vous souhaitez proposer l'un de vos meubles à la vente ? </h2>

<h3>Rien de plus facile ! Il vous suffit de compléter le formulaire ci-dessous</h3><br>

<p>Attention: chaque proposition de meuble devra être accepté par Lauréline</p><br>


<form @submit.prevent="submitForm">

  <!-- Label et champ pour le type de meuble -->
  <div>
    <label for="type">Type de meuble</label>
    <input type="text" id="type" v-model="form.type" placeholder="Type" required>
    <p class="aideInput">Exemple: chaise en métal, canapé 3 place ...</p>
  </div>

  <!-- label et champ pour le prix du meuble -->
  <div>
    <label for="price">Prix du meuble</label>
    <input type="text" id="price" v-model="form.price" placeholder="Prix en euro" required>
    <p class="aideInput">Le prix devra être validé avec Lauréline </p>
  </div>

  <!-- label et champ pour la couleur du meuble -->
  <div>
    <label for="color">Couleur du meuble</label>
    <input type="text" id="color" v-model="form.color" placeholder="Couleur" required>
  </div>

  <!-- label et champ pour la matière du meuble -->
  <div>
    <label for="material">Matière meuble</label>
    <input type="text" id="material" v-model="form.material" placeholder="Matériau" required>
    <p class="aideInput">Exemple: Bois de Chêne, velours ...</p>
  </div>

  <!-- label et champ pour les dimensions du meuble -->
  <div>
    <label for="dimensions">Dimensions du meuble (en cm)</label>
    <input type="text" id="dimensions" v-model="form.type" placeholder="Dimensions en cm" required>
    <p class="aideInput">Exemple: Longueur x largeur x hauteur en cm 90x70x35cm</p>
  </div>

  <!-- label et champ pour l'image du meuble -->
  <div>
    <label for="photo">Photo du meuble</label>
   
    <input type="file" id="photo" @change="onFileChange" required>
    <p class="aideInput">Envoi limité à une image par meuble. formats acceptés : jpg, png</p>
  </div>

  <!-- import du composant bouton -->
  <BaseButton cta="Envoyer"/>

</form>
    </section>
      
</template>