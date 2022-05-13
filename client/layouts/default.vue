<template>
  <v-app dark>
    <v-row no-gutters>
      <v-navigation-drawer
        v-model="drawer"
        :permanent="sideBar"
        :absolute="!sideBar"
        :temporary="!sideBar"
      >
        <SideBar />
      </v-navigation-drawer>
      <v-main>
        <AppBar class="mt-2 mx-5" v-on:clickNavIcon="onClickNavIcon" />
        <v-container fluid class="px-5 py-0">
          <Nuxt />
        </v-container>
      </v-main>
    </v-row>
  </v-app>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Default extends Vue {
  drawer = true;

  get sideBar() {
    let sidebar_stat = false;
    if (this.$vuetify.breakpoint.smAndDown) sidebar_stat = false;
    else sidebar_stat = true;
    return sidebar_stat;
  }
  onClickNavIcon() {
    this.drawer = !this.drawer;
  }
}
</script>
