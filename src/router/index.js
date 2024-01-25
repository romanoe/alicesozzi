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
        },
        {
          name: 'keywords',
          content: 'fasciathérapie, fasciathérapeute, fascia, fascias, Lausanne, Vaud, Chauderon, Alice Sozzi, ASCA, RME'
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
        },
        {
          name: 'keywords',
          content: 'fasciathérapie, fasciathérapeute, fascia, fascias, Lausanne, Vaud, Chauderon, Alice Sozzi, ASCA, RME'
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
        },
        {
          name: 'keywords',
          content: 'fasciathérapie, fasciathérapeute, fascia, fascias, Lausanne, Vaud, Chauderon, Alice Sozzi, ASCA, RME'
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
        },
        {
          name: 'keywords',
          content: 'fasciathérapie, fasciathérapeute, fascia, fascias, Lausanne, Vaud, Chauderon, Alice Sozzi, ASCA, RME'
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
        },
        {
          name: 'keywords',
          content: 'fasciathérapie, fasciathérapeute, fascia, fascias, Lausanne, Vaud, Chauderon, Alice Sozzi, ASCA, RME'
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


// ---- Digital Ocean https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head ----
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;