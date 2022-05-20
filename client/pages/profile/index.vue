<template>
  <v-container fluid class="fill-height h-100 align-start pa-0">
    <v-sheet class="px-3 py-2" width="100%" height="200px">
      <v-sheet class="d-flex align-center">
        <v-btn class="mr-2" elevation="0" fab small plain>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span
          class="text-md-h5 text-h6 font-weight-bold accent--text flex-grow-1"
          >Profile</span
        >
        <v-btn elevation="0" fab small plain>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: "profile",
})
export default class ProfilePage extends Vue {}
</script>
