<!-- Style -->
<style>
.menu {
  text-align: center;
  width: 100%;
  background-color: rgba(152, 227, 213, 0.5);
  height: 44px;
  line-height: 44px;
  font-weight: bold;
  font-size: medium;
}

.title {
  font-weight: bold;
  font-size: medium;
}

.subtitle {
  font-weight: 300;
  font-size: small;
}

.title-mobile {
  font-weight: bold;
  font-size: small;
}

.subtitle-mobile {
  font-weight: 300;
  font-size: x-small;
}

#header {
  padding: 20px 20px 20px 20px;
}


header  {
  background-color: rgba(255, 255, 255, 0.5) !important;
  height: 5% !important;
}

v-toolbar__content {
  background-color: rgba(255, 255, 255, 0.5) !important;
  height: 5% !important;
}


</style>


<template>
<div>
  <!-- Menu desktop -->
  <div v-if="$device.isDesktop">
    <NuxtLink to="/">
      <div id = "header">
        <v-row>
          <v-col cols=12 md=1 sm=1>
            <v-img id='img-alice-header' :src='require("~/assets/img/AliceSozzi.png")' aspect-ratio="1.5" contain></v-img>
           </v-col>
          <v-col cols=12 md=11 sm=1>
            <h4 class='text-alice'>
              <span class='title'> CABINET DE SOINS ALICE SOZZI</span>
              <br>
              <span class='subtitle'>PSYCHOLOGUE ET FASCIATHÉRAPEUTE, AGRÉE ASCA, RME</span>
            </h4>
          </v-col>
        </v-row>
      </div>
    </NuxtLink>
    <div class="menu">
        <NuxtLink v-for="(item, i) in items" :key="i" :to=item.link>
          {{ item.title }}
        </NuxtLink>
    </div>
  </div>

  <!-- Menu mobile -->
  <div v-else-if="$device.isMobile">
      <v-app-bar color="rgba(255, 255, 255, 0.5)" prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <NuxtLink to="/">
          <h5 class='text-alice'>
            <span class='title-mobile'> CABINET DE SOINS ALICE SOZZI</span>
            <br>
            <span class='subtitle-mobile'>PSYCHOLOGUE ET FASCIATHÉRAPEUTE, AGRÉE ASCA, RME</span>
          </h5>
        </NuxtLink>
        <v-navigation-drawer v-model="drawer" absolute temporary height="100vh" hide-overlay>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
              <v-list-item v-for="(item, i) in items" :key="i">
                <NuxtLink :to=item.link>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </NuxtLink>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-app-bar>
  </div>

</div>
</template>

<!-- Script -->
<script>
export default {
  data: () => ({
    items: [{
        title: "LES TRAITEMENTS",
        link: "/traitements"
      },
      {
        title: "QU'EST-CE QU'UN FASCIA",
        link: "/fascia"
      },
      {
        title: "MON PARCOURS",
        link: "/mon-parcours"
      },
      {
        title: "INFORMATION ET TARIFS",
        link: "/info-tarifs"
      },

    ],
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
