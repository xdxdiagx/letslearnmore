<template>
  <v-list nav dense class="py-0">
    <v-list-item class="my-1">
      <v-list-item-avatar>
        <img src="~/assets/img/icon.png" />
      </v-list-item-avatar>
      <v-list-item-content class="pa-0">
        <v-list-item-title class="text-h6" dark
          >Let's Learn More</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>
    <v-divider class="mb-2 mt-1"></v-divider>
    <v-list-item-group active-class="white--text text--lighten-1">
      <v-list-item v-for="item in links" :key="item.title" link :to="item.to">
        <v-list-item-icon class="mr-4">
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
  private links: NotWellDefinedObject[] = [
    {
      title: "Supplementary Materials",
      icon: "mdi-clipboard-text",
      to: "/materials",
    },
    {
      title: "Activities",
      icon: "mdi-star-outline",
      to: "/activities",
    },
    {
      title: "Results",
      icon: "mdi-poll",
      to: "/results",
    },
  ];

  private setLinks(role: number) {
    if (role == 1) {
      this.links.push({
        title: "Settings",
        icon: "mdi-cog",
        to: "/settings",
      });
    }
  }

  async created() {
    if (this.$fire.auth.currentUser) {
      const user = await this.$user.getCurrentUser();
      this.setLinks(user.role);
    }
  }
}
</script>

<style></style>
