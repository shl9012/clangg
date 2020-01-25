<template>
  <v-app id="app">
      <layout-leftMenu :drawer="drawer"></layout-leftMenu>
      <layout-header :drawer="drawer" @drawerClick="drawerClick"></layout-header>
      <v-content>
        <v-container class="fill-height">
          <router-view></router-view>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: true//
  }),
  methods: {
    drawerClick() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
