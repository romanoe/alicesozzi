import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Fascia from "@/views/Fascia.vue"
import InfoTarifs from "@/views/InfoTarifs.vue";
import Traitements from "@/views/Traitements.vue";
import MonParcours from "@/views/MonParcours.vue";

export const SITE_URL = 'https://www.alicesozzi.ch';
const SITE_NAME = 'Alice Sozzi';
const DEFAULT_KEYWORDS = 'fasciathérapie, fasciathérapeute, fascia, fascias, Lausanne, Vaud, Chauderon, Alice Sozzi, ASCA, RME';

const routes = [
  {
    path: '/',
    name: 'ACCUEIL',
    component: Home,
    meta: {
      title: 'Alice Sozzi - Cabinet de fasciathérapie à Lausanne',
      description: "La fasciathérapie soigne la douleur par un toucher subtil en procurant une détente profonde. Plus de 20 ans de pratique. 7 min de Lausanne Chauderon.",
      keywords: `${DEFAULT_KEYWORDS}, psychologue, douleur, thérapie manuelle`,
    }
  },
  {
    path: '/traitements',
    name: 'LES TRAITEMENTS',
    component: Traitements,
    meta: {
      title: 'Comment je travaille en fasciathérapie ?',
      description: "La complicité avec un corps se tisse en écoutant les demandes du corps. Le fasciathérapeute resensibilise les tissus et restaure la capacité sensorielle.",
      keywords: `${DEFAULT_KEYWORDS}, traitement, douleur chronique, émotions, détente`,
    }
  },
  {
    path: '/fascia',
    name: "QU'EST-CE QU'UN FASCIA",
    component: Fascia,
    meta: {
      title: "Que soigne la fasciathérapie ?",
      description: "La fasciathérapie soigne la douleur: maux de dos et ventre, chocs physiques et émotionnels, articulations, épaule gelée, torticolis, lumbago, épicondylite.",
      keywords: `${DEFAULT_KEYWORDS}, mal de dos, torticolis, lumbago, épaule gelée, articulations`,
    }
  },
  {
    path: '/mon-parcours',
    name: 'MON PARCOURS',
    component: MonParcours,
    meta: {
      title: "Alice Sozzi - Fasciathérapeute à Lausanne",
      description: "Plus de 20 ans de pratique, fasciathérapeute et psychologue certifiée, j'allie corps, cœur et mental pour accompagner mes patients.",
      keywords: `${DEFAULT_KEYWORDS}, psychologue, méthode Danis Bois, Seïtai, Mouvement régénérateur`,
    }
  },
  {
    path: '/info-tarifs',
    name: 'INFORMATIONS ET TARIFS',
    component: InfoTarifs,
    meta: {
      title: "Tarif d’une séance de fasciathérapie",
      description: "Une séance dure environ 1 heure et coûte CHF 130.- Je suis reconnue par ASCA & RME et remboursée par certaines assurances complémentaires.",
      keywords: `${DEFAULT_KEYWORDS}, tarif, prix, assurance complémentaire, remboursement`,
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// ---- SEO: keep <head> in sync with the current page ----
// index.html holds the default tags (read by social networks, which don't run JS);
// here we only update their content so there are never duplicates.

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href, extra = '') {
  let el = document.head.querySelector(`link[rel="${rel}"]${extra}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

router.afterEach((to) => {
  const { title, description, keywords } = to.meta;
  if (!title) return;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = SITE_URL + (to.path === '/' ? '/' : to.path);

  document.title = fullTitle;
  setMeta('name', 'description', description);
  setMeta('name', 'keywords', keywords);
  setLink('canonical', url);
  setLink('alternate', url, '[hreflang="fr-CH"]');

  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', fullTitle);
  setMeta('name', 'twitter:description', description);
});

export default router;
