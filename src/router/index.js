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
    meta: {
      title: 'Alice Sozzi - Cabinet de fasciathérapie à Lausanne',
      metaTags: [
        {
          name: 'description',
          content: "La fasciathérapie soigne la douleur par un toucher subtil en procurant une détente profonde. Plus de 20 ans de pratique. 7min de Lausanne Chauderon."
        }
      ]
    }

  },
  {
    path: '/traitements',
    name: 'LES TRAITEMENTS',
    component: Traitements,
    meta: {
      title: 'Comment je travaille en fasciathérapie ?',
      metaTags: [
        {
          name: 'description',
          content: "La complicité avec un corps se tisse en écoutant les demandes du corps. Le fasciathérapeute resensibilise les tissus et restaure la capacité sensorielle."
        }
      ]
    }
  },
  {
    path: '/fascia',
    name: "QU'EST-CE QU'UN FASCIA",
    component: Fascia,
    meta: {
      title: "Que soigne la fasciathérapie ?",
      metaTags: [
        {
          name: 'description',
          content: "La fasciathérapie soigne la douleur: maux de dos et ventre, chocs physiques et émotionels, articulations, épaule gelée, torticolis, lumbago, épycondilite."
        }
      ]
    }
  },

  {
    path: '/mon-parcours',
    name: 'MON PARCOURS',
    component: MonParcours,
    meta: {
      title: "Alice Sozzi - Fasciathérapeute à Lausanne",
      metaTags: [
        {
          name: 'description',
          content: "Plus de 20 ans de pratique, fasciathérapeute et psychologue certifiée, j'allie corps, cœur et mental pour accompagner mes patients."
        }
      ]
    }
  },
  {
    path: '/info-tarifs',
    name: 'INFORMATIONS ET TARIFS',
    component: InfoTarifs,
    meta: {
      title: "Tarif d’une séance de fasciathérapie",
      metaTags: [
        {
          name: 'description',
          content: "Une séance dure environ 1 heure et coûte CHF 120.- Je suis reconnue par ASCA & RME et remboursée par certaines assurances complémentaires."
        }
      ]
    }
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