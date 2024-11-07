import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// diff de syntaxe dans const app + import du router/index.js en moins mais ça pose peut-être aps de probleme