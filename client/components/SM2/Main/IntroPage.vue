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
      style="position: relative"
      class="d-flex justify-center align-start custom-border pa-4"
    >
      <h1 class="text-center" style="font-size: 28px; line-height: 1.1">
        The Respiratory System and Circulatory System Working Together:
      </h1>
      <h1
        class="text-center error--text"
        style="
          width: 70%;
          position: absolute;
          right: 0;
          top: 42%;
          line-height: 1;
        "
      >
        CARDIO CHALLENGE!
      </h1>
    </v-sheet>
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Flung%2Flung_PNG19.png&f=1&nofb=1"
      height="30%"
      style="position: absolute; bottom: 20%; left: 10px"
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
  border: 2px solid #ffc107 !important;
}
</style>
