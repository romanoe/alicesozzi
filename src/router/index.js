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
      title: 'Alice Sozzi - Acceuil',
      metaTags: [
        {
          name: 'description',
          content: "Page d'accueil de Alice Sozzi, fasciathérapeute à Lausanne"
        }
      ]
    }

  },
  {
    path: '/traitements',
    name: 'LES TRAITEMENTS',
    component: Traitements,
    meta: {
      title: 'Les traitements de fasciathérapie',
      metaTags: [
        {
          name: 'description',
          content: "Les différents traitements de fasciathérapie fournie par Alice Sozzi, fasciathérapeute à Lausanne "
        }
      ]
    }
  },
  {
    path: '/fascia',
    name: "QU'EST-CE QU'UN FASCIA",
    component: Fascia,
    meta: {
      title: "Qu'est-ce qu'un fascia ? Quel est son domaine d'application ?",
      metaTags: [
        {
          name: 'description',
          content: "Description et définition d'un fascia ainsi que le domaines d'applications de la fasciathérapie menée par Alice Sozzi, fasciathérapeute à Lausanne"
        }
      ]
    }
  },

  {
    path: '/mon-parcours',
    name: 'MON PARCOURS',
    component: MonParcours,
    meta: {
      title: "Le parcours professionnel d'Alice Sozzi, fasciathérapeute à LAusanne",
      metaTags: [
        {
          name: 'description',
          content: "Description des différentes étapes professionnelles d'Alice Sozzi, fasciathérapeute à Lausanne"
        }
      ]
    }
  },
  {
    path: '/info-tarifs',
    name: 'INFORMATIONS ET TARIFS',
    component: InfoTarifs,
    meta: {
      title: "Informations et tarifs",
      metaTags: [
        {
          name: 'description',
          content: "Informations, tarifs et prix pour une séance de fasciathérapie menée par Alice Sozzi, fasciathérapeute à Lausanne"
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