<template>
  <v-app-bar class="rounded-lg elevation-1" :height="56">
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click.stop="$emit('clickNavIcon')"
    ></v-app-bar-nav-icon>

    <v-text-field
      solo
      flat
      dense
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      hide-details
      color="accent"
      class="transparent rounded-lg"
    ></v-text-field>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class AppBar extends Vue {
  private showSearch = false;
}
</script>

<style></style>
