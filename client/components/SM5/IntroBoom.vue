<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    color="blue lighten-3"
  >
    <v-sheet
      width="100%"
      max-width="450px"
      class="mx-5 rounded-xl"
      color="transparent"
      style="position: relative"
    >
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2FBoom%20Cards.png?alt=media&token=dd772611-b66e-4a3a-87ad-3a281c356ee9'"
        :width="'100%'"
        :height="'100%'"
        class="rounded-xl"
      />
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class IntroBoom extends Vue {}
</script>
