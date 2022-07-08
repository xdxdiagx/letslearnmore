<template>
  <v-sheet
    width="100%"
    height="100%"
    class="px-4 d-flex align-center justify-center"
    color="blue lighten-3"
  >
    <img src="~assets/img/accordion.png" width="100%" alt="Accordion" />
    <v-btn @click="proceed" class="ma-2 px-2" elevation="2" bottom right fixed>
      <span class="error--text">Proceed</span
      ><v-icon color="error">mdi-chevron-right</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class Accordion extends Vue {
  private proceed() {
    this.$emit("proceed");
  }
}
</script>
