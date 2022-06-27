<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    color="blue lighten-3"
  >
    <v-sheet
      height="55%"
      width="90%"
      class="d-flex justify-center align-center custom-border"
    >
      <h1 class="text-center" style="font-size: 48px; line-height: 1.1">
        DIGITAL STORY TELLING
      </h1>
    </v-sheet>
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbestanimations.com%2FBooks%2Fgirl-reading-book-animation-11.gif&f=1&nofb=1"
      height="40%"
      style="position: absolute; bottom: 15px; left: -40px"
      alt="Teacher Image"
    />
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class IntroPage extends Vue {
  @Prop() readonly voiceover!: string;
}
</script>

<style scoped>
.custom-border {
  border: 7px dashed yellow !important;
}
</style>
