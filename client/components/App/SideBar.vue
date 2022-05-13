<template>
  <v-list nav dense>
    <v-list-item class="py-1 mb-2">
      <v-list-item-content>
        <v-list-item-title class="text-h6 primary--text">
          LOGO
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="mb-2 mt-1"></v-divider>
    <v-list-item-group active-class="indigo--text text--lighten-1">
      <v-list-item v-for="item in links" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class SideBar extends Vue {
  private links = [
    { title: "Dashboard", icon: "mdi-view-dashboard", to: "dashboard" },
    { title: "Modules", icon: "mdi-clipboard-text", to: "modules" },
  ];
}
</script>

<style></style>
