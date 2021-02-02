<template>
<div id="app">
   <section>
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://hbr.org/resources/images/article_assets/2019/02/Mar19_11_825412904.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                     SMARTECH 
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      AGENCE DIGITAL ET WEB
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            SmarTech is the #1 component library Lorem ipsum, dolor 
            sit amet consectetur adipisicing elit. Repellat 
            maxime, voluptates reprehenderit m
            agnam iusto voluptate. Ea provident, i
            taque officia accusantium explicabo ut 
            amet veniam, cum tenetur eum, repudiandae 
            voluptatem repellat. quality components.
          </v-responsive>

         
          <div>
           <v-btn
              class="align-self-end"
              fab
              outlined
              @click="$vuetify.goTo('#features')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
            </div>

          <div></div>

         
        </v-container>

        <div class="py-12"></div>
      </section>

      <section
        id="features"
        class="grey lighten-3"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">NOS SERVICES</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              cols="6"
              sm="3">
						<v-img
							height="200"
							src=""
							gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
						></v-img>
              <h1>Developpement D'Application</h1> 
						</v-col>

            <v-col
              cols="6"
              sm="3">
						<v-img
							height="200"
							src=""
							gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
						></v-img>
              <h1>Marketing Digital</h1> 
						</v-col>

            <v-col
              cols="6"
              sm="3">
						<v-img
							height="200"
							src=""
							gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
						></v-img>
              <h1>Consulting </h1> 
						</v-col>

            <v-col
              cols="6"
              sm="3">
						<v-img
							height="200"
							src=""
							gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
						></v-img>
              <h1>Conception Site Web</h1> 
						</v-col>
          </v-row>
          </v-container>
      </section>

      <section
        id="partenaire"
        class="grey lighten-3"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">NOS PARTENAIRES</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              cols="6"
              sm="3">
						<v-avatar
            class="elevation-12 mb-12"
            size="150"
            rounded
          >
            <v-img src="img/djig.jpeg"></v-img>
          </v-avatar>
              <h1>Djiguiprod</h1> 
						</v-col>

             <v-col
              cols="6"
              sm="3">
						<v-avatar
            class="elevation-12 mb-12"
            size="150"
            rounded
          >
            <v-img src="img/laye.jpeg"></v-img>
          </v-avatar>
              <h1>LayeDist</h1> 
						</v-col>

             <v-col
              cols="6"
              sm="3">
						<v-avatar
            class="elevation-12 mb-12"
            size="150"
            rounded
          >
            <v-img src="img/loud.jpeg"></v-img>
          </v-avatar>
              <h1>Loudsscyf</h1> 
						</v-col>

             <v-col
              cols="6"
              sm="3">
						<v-avatar
            class="elevation-12 mb-12"
            size="150"
            rounded
          >
            <v-img src="img/afro.jpeg"></v-img>
          </v-avatar>
              <h1>AfroCash</h1> 
						</v-col>
          </v-row>
          </v-container>
      </section>

       <section id="contact">
        <v-footer
          dark
          padless
        >
          <v-card
            class="flex"
            flat
            tile
          >
            <v-card-title >
              <strong class="subheading">Contactez-nous +224 624 07 57 02</strong>

              <v-spacer></v-spacer>

              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
              {{ new Date().getFullYear() }} — <strong>SmarTech</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </section>
 </div>
</template>

<script>
    export default {
        mounted() {},
        data : () => ({
			items: [
          {
            src: 'img/pexels01.jpg',
		  },
		  {
            src: 'img/pexels02.jpg',
		  },
		  {
            src: 'img/pexels03.jpg',
          }
        ],
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
            
        })
    }
</script>
