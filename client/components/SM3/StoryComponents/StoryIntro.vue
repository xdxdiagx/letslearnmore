<template>
  <v-sheet width="100%" height="100%" class="pt-10" color="blue lighten-3">
    <v-sheet
      width="100%"
      height="100%"
      max-width="600px"
      class="transparent mx-auto"
      style="position: relative"
    >
      <v-sheet
        class="mr-4 d-flex justify-center align-center custom-border"
        elevation="0"
        rounded="xl"
        height="50%"
        style="
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translate(0, -70%);
        "
      >
        <h1 class="text-right text-h3 black--text my-10 font-italic pl-8 pr-6">
          Dr. Jely's Medical Mission
        </h1>
      </v-sheet>
      <img
        src="https://gifimage.net/wp-content/uploads/2017/10/medicamento-gif-10.gif"
        v-bind:class="[
          $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
        ]"
        alt="Dr. Jelly Image"
      />
    </v-sheet>
    <audio autoplay id="sound_effect_story_intro">
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fsound_effect%2Fsound_effect_story_intro.wav?alt=media&token=17e36201-91c5-49f6-92d1-737dbd8fa6b6"
        type="audio/wav"
      />
      Your browser does not support the audio element.
    </audio>
    <audio v-if="voiceover != ''" ref="voiceover_story_intro">
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
export default class StoryIntroPage extends Vue {
  @Prop() readonly voiceover!: string;

  private mounted() {
    const se_intro = document.getElementById("sound_effect_story_intro");
    se_intro!.addEventListener("ended", () => {
      const voiceover_story_intro: any = this.$refs?.voiceover_story_intro;
      voiceover_story_intro.play();
    });
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 55%;
  position: absolute;
  bottom: 50px;
  left: -25px;
  z-index: 1000;
}

.teacher-sm {
  height: 45%;
  position: absolute;
  bottom: 50px;
  left: -25px;
  z-index: 1000;
}

.custom-border {
  border: 3px dashed #fff !important;
  background-color: #7cb342 !important;
}
</style>
