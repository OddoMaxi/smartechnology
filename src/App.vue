<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer 
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            SmarTech
          </v-list-item-title>
          <v-list-item-subtitle>
            Guinea
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>SmarTech Guinea</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="align-self-end mx-2"
        outlined
        @click="$vuetify.goTo('#app')"
      >Accueil</v-btn>
      <v-btn
        class="align-self-end mx-2"
        outlined
        @click="$vuetify.goTo('#about-me')"
      >Apopos</v-btn>
      <v-btn
        class="align-self-end mx-2"
        outlined
        @click="$vuetify.goTo('#features')"
      >Service</v-btn>
      <v-btn
        class="align-self-end mx-2"
        outlined
        @click="$vuetify.goTo('#contact')"
      >Contact</v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: !null,
       items: [
          { title: 'Accueil', icon: 'mdi-home', to: '/' },
          { title: 'Apropos', icon: 'mdi-help-box', to: '/about' },
          { title: 'Services', icon: 'mdi-toolbox-outline', to: '/service' },
        ], 
        }),
  }
</script>