
<!-- Style -->
<style>


</style>


<template>
<div class='menu-mobile'>

  <v-app-bar color="black accent-4" prominent>
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
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
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
      {
        title: "CONTACT",
        link: "/contact"
      },

    ],
    drawer : false,
    group : null,
  }),
  watch: {
     group () {
       this.drawer = false
     },
   },
}
</script>
