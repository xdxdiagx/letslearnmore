<template>
  <v-app dark>
    <v-main>
      <v-container class="pa-0 fill-height">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component()
export default class Activity extends Vue {}
</script>
