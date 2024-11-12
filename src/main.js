import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

let meubles_back = fetch('http://localhost:8000/meubles')
    .then(response => response.json())
    .then(data => {
        console.log('Meubles récupérés:', data);
        return data
      })
      .catch(error => {
        console.error('Erreur de récupération:', error);
        return meubles_back;
      })
      
console.log (meubles_back.meubles.id)