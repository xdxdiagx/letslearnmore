<template>
  <v-container fluid>
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <h1 class="text-center mb-10">Let's Learn More</h1>
        <v-btn to="signin" class="mb-4" block color="primary" x-large
          >Sign In</v-btn
        >
        <v-btn to="about" block x-large depressed>About</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: "landing",
})
export default class Index extends Vue {}
</script>
