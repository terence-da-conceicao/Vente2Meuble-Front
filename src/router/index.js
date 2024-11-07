import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Deconnexion from '../views/Deconnexion.vue'
import Gestion from '../views/Gestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //c'est quoi cet import en argument??
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/inscription', name: 'Inscription', component: Inscription },
    { path: '/connexion', name: 'Connexion', component: Connexion },
    { path: '/deconnexion', name: 'Deconnexion', component: Deconnexion },
    { path: '/gestion', name: 'Gestion', component: Gestion }


    //---------------- c'est quoi ce truc en-dessous
    //---------------- pourquoi tout n'est pas syntaxé parmi les components
 
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
