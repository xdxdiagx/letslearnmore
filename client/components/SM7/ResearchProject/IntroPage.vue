<template>
  <v-sheet
    width="100%"
    height="100%"
    class="overflow-y-auto"
    color="blue lighten-3"
  >
    <img
      src="~assets/img/sm7_intro.png"
      width="100%"
      height="100%"
      alt="Coconut Tree"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class IntroPage extends Vue {}
</script>
