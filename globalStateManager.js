//Page qui permet de partager de manière global des états à tous les composants qui souhaite les utiliser 

//import la méthode ref spécifique à vue qui permet de créer des variable dynamique 
import {ref} from 'vue'

//gestion de la reconnaissance si utilisateur connecté ou non 
export const admin = ref(false)
export const connected = ref(false)

//fonction réutilisable ailleur dans le code 
export function isAdmin(state) {
    admin.value = state
}
export function isConnected(state) {
    connected.value = state
}


