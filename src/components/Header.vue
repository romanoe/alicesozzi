<script setup>
import { useDisplay } from "vuetify";
import router from "../router";

// Below Vuetify's "md" breakpoint (960px) the desktop menu is hidden,
// so the mobile app bar takes over from there.
const { smAndDown: mobile } = useDisplay();
</script>

<template>
  <div>
    <!-- Menu desktop -->
    <div v-if="!mobile">
      <v-container>
        <router-link to="/">
          <div id="header">
            <v-row>
              <v-col cols="12" md="1">
                <v-img
                  id="img-alice-header"
                  src="/img/AliceSozzi.webp"
                  aspect-ratio="1"
                  contain
                  alt="alice-sozzi-favicon"
                ></v-img>
              </v-col>
              <v-col cols="12" md="11">
                <h2 class="text-alice header-title">
                  CABINET DE FASCIATHÉRAPIE ALICE SOZZI
                </h2>
                <span class="header-subtitle"
                  >FASCIATHÉRAPEUTE ET PSYCHOLOGUE, AGRÉE ASCA, RME</span
                >
                <div id="contact-block">
                  <span class="header-subtitle"
                    >Chemin des Aubépines 23 |
                  </span>
                  <span class="header-subtitle">1004 Lausanne | </span>
                  <span class="header-subtitle"
                    >021 648 7612 / 077 411 67 07</span
                  >
                </div>
              </v-col>
            </v-row>
          </div>
        </router-link>
      </v-container>

      <div class="d-none d-md-flex d-lg-flex">
        <div class="menu">
          <router-link
            v-for="(route, index) in router.options.routes"
            :key="index"
            :to="route.path"
            class="route"
          >
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-else class="mobile-header-spacer">
      <v-app-bar :elevation="1" height="72" class="mobile-bar">
        <v-menu location="bottom start">
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              variant="text"
              color="#c7287d"
              aria-label="Menu"
              v-bind="props"
            >
              <font-awsome-icon icon="fa-solid fa-bars" class="icon" />
            </v-btn>
          </template>
          <v-list class="mobile-nav">
            <v-list-item
              v-for="(route, index) in router.options.routes"
              :key="index"
              :to="route.path"
              :title="route.name"
            />
          </v-list>
        </v-menu>
        <router-link to="/" class="mobile-brand">
          <span class="mobile-brand-title">ALICE SOZZI</span>
          <span class="mobile-brand-subtitle"
            >Fasciathérapeute et psychologue · ASCA, RME</span
          >
        </router-link>
      </v-app-bar>
    </div>
  </div>
</template>

<!-- Style -->
<style>
.menu {
  text-align: center;
  width: 100%;
  background-color: rgba(231, 248, 245, 0.7);
  height: 44px;
  line-height: 44px;
  font-size: 1.1vw;
  letter-spacing: 0.15vw;
  font-weight: 800;
  z-index: 2;
}

.menu .route {
  text-decoration: none;
  color: #c7287d;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 5px;
  z-index: 1;
}

.header-subtitle {
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.09vw;
  color: #c7287d;
}

#contact-block {
  line-height: 1rem;
  display: block;
}

.mobile-header-spacer {
  height: 88px;
}

header.mobile-bar {
  height: 72px !important;
}

.mobile-bar .v-toolbar__content {
  height: 72px !important;
  padding-inline: 4px 16px;
}

.mobile-brand {
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-left: 4px;
  line-height: 1.2;
}

.mobile-brand-title {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #c7287d;
}

.mobile-brand-subtitle {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #834b99;
}

.mobile-nav .v-list-item-title {
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #c7287d;
}

#header {
  padding: 20px 20px 40px 20px;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.09vw;
  color: #c7287d;
}

.v-toolbar__content {
  background-color: rgba(255, 255, 255, 0.5) !important;
  height: 80px !important;
}
</style>
