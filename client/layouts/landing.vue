<template>
  <v-app dark>
    <v-row no-gutters>
      <v-main>
        <v-container fluid class="px-5 py-0 fill-height">
          <Nuxt />
        </v-container>
      </v-main>
    </v-row>
  </v-app>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component()
export default class Landing extends Vue {}
</script>
