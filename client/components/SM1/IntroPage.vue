<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-center relative px-5"
    color="blue lighten-3"
  >
    <img
      src="https://cdn.vox-cdn.com/thumbor/daWnV4QZgVvKIE2Jep5vLggtR90=/0x0:2000x1219/1200x675/filters:focal(854x195:1174x515)/cdn.vox-cdn.com/uploads/chorus_image/image/66771415/Scarred_Lungs.0.jpg"
      width="100%"
      height="40%"
      class="mx-5 mt-14 rounded-xl"
      alt="Respiratory System and Covid 19"
      style="max-width: 450px"
    />
    <h1 class="text-center mt-8 error--text" style="max-width: 450px">
      COVID-19 and Respiratory System Activity
    </h1>
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
