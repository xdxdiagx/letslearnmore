<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-center relative pt-14"
    color="blue lighten-3"
  >
    <h2 class="text-center error--text mx-10 mb-4" style="max-width: 450px">
      The Heart & Circulatory System
    </h2>
    <video
      width="100%"
      style="max-height: 700px; min-height: 210px"
      ref="intro_video"
    >
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fmedia%2Fintro%2FThe%20Heart%20and%20Circulatory%20System%20-%20How%20They%20Work_360P.mp4?alt=media&token=9c6506d6-941e-4c17-ad36-41a00768d9c6"
        type="video/mp4"
      />
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fmedia%2Fintro%2FThe%20Heart%20and%20Circulatory%20System%20-%20How%20They%20Work_360P.mp4?alt=media&token=9c6506d6-941e-4c17-ad36-41a00768d9c6"
        type="video/ogg"
      />
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fmedia%2Fintro%2FThe%20Heart%20and%20Circulatory%20System%20-%20How%20They%20Work_360P.mp4?alt=media&token=9c6506d6-941e-4c17-ad36-41a00768d9c6"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
    <audio id="voice_over_intro" v-if="voiceover != ''" autoplay>
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
export default class IntroVideoPage extends Vue {
  @Prop() readonly voiceover!: string;

  private mounted() {
    const voice_over_intro = document.getElementById("voice_over_intro");
    voice_over_intro!.addEventListener("ended", () => {
      const intro_video: any = this.$refs?.intro_video;
      intro_video.play();
    });
  }
}
</script>
