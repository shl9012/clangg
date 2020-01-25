<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      dense
      color="#FF0000"
    >
        <v-app-bar-nav-icon @click.stop="d" />
        <v-icon class="mx-4">fab fa-youtube</v-icon>
        <v-toolbar-title class="mr-12 align-center">
            <span class="title">ClanGG</span>
        </v-toolbar-title>
        <v-spacer />
        <v-row
            align="center"
            style="max-width: 650px"
        >
            <v-text-field
            :append-icon-cb="() => {}"
            placeholder="Search..."
            single-line
            append-icon="search"
            color="white"
            hide-details
            />
        </v-row>
    </v-app-bar>
  </v-app>
</template>

<script>
  export default {
    props: {
      drawer: Boolean,
      source: String,
    },
    data: () => ({
      a: false
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    methods: {
        d() {
            this.$emit('drawerClick')
        }
    }
  }
</script>