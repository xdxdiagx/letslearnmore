<template>
  <v-sheet width="100%" height="100%" class="pt-10" color="blue lighten-3">
    <div class="d-flex justify-start">
      <h1 class="ml-8">Trivia!!</h1>
    </div>
    <v-card
      color="yellow accent-2"
      class="mr-4"
      rounded="xl"
      style="position: absolute; top: 90px; left: 96px"
    >
      <v-card-text>
        <p class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0">
          <span class="error--text font-weight-bold">Hey!</span> Did you know
          that newborn babies breathe 40 to 60 times a minute? At about six
          years of age, the breathing rate slows down to about 22 times a
          minute. At your age (12 to 16 years), the normal breathing rate is
          roughly 12 to 16 times a minute. An exception is when you are an
          athlete or when you engage in hard work. Your breathing rate in such
          cases will be higher!
        </p>
      </v-card-text>
    </v-card>
    <img
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <img
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Teacher Image"
    />
    <audio autoplay id="sound_effect_trivia">
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fsound_effect%2Fsound_effect_trivia.wav?alt=media&token=96af9ba9-4546-4729-8e76-5fc5261d101b"
        type="audio/wav"
      />
      Your browser does not support the audio element.
    </audio>
    <audio v-if="voiceover != ''" ref="voiceover_trivia">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="showProceedBtn"
      @click="proceed"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      <span class="error--text">Proceed</span
      ><v-icon color="error">mdi-chevron-right</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class TriviaPage extends Vue {
  @Prop() readonly voiceover!: string;

  private showProceedBtn = true;

  private proceed() {
    this.$emit("proceed");
  }

  private mounted() {
    const se_trivia = document.getElementById("sound_effect_trivia");
    se_trivia!.addEventListener("ended", () => {
      const voiceover_trivia: any = this.$refs?.voiceover_trivia;
      voiceover_trivia.play();
      voiceover_trivia.addEventListener("ended", () => {
        this.showProceedBtn = true;
      });
    });
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1000;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1000;
}
</style>
