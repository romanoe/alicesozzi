import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Fascia from "@/views/Fascia.vue"
import InfoTarifs from "@/views/InfoTarifs.vue";
import Traitements from "@/views/Traitements.vue";
import MonParcours from "@/views/MonParcours.vue";

const routes = [
  {
        path: '/public',
        component: () => import('@/layouts/Default.vue'),
    
        path: '/',
        name: 'ACCUEIL',
        component: Home,

  },
  {
    path: '/traitements',
    name: 'LES TRAITEMENTS',
    component: Traitements
  },
      {
        path: '/fascia',
        name: "QU'EST-CE QU'UN FASCIA",
        component: Fascia
      },
    
      {
        path: '/mon-parcours',
        name: 'MON PARCOURS',
        component: MonParcours
      },
      {
        path: '/info-tarifs',
        name: 'INFORMATIONS ET TARIFS',
        component: InfoTarifs
      }

    ]
  ;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },

});

export default router;