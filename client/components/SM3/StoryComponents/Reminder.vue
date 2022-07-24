<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-6"
    color="blue lighten-3"
  >
    <v-sheet
      class="d-flex flex-column transparent"
      style="width: 100%; height: 70%; position: relative; max-width: 330px"
    >
      <v-sheet dark width="100%" class="pa-3 pb-2 rounded-t-xl" color="orange">
        <h2 class="text-center">LOVING REMINDER!</h2>
      </v-sheet>
      <v-sheet
        height="100%"
        class="custom-border rounded-b-xl text-center pa-6"
      >
        <p class="text-h6 font-italic">
          If you don’t take time to take care of your health now,
        </p>
        <p class="text-h6 font-italic">
          You’re gonna have to make time for feeling sick & tired later.
        </p>
        <p class="text-h6 error--text">Exercise Regularly,</p>
        <p class="text-h6 blue--text darken-4">Eat Healthy Foods,</p>
        <p class="text-h6 indigo--text">And SMILE 😊</p>
      </v-sheet>
    </v-sheet>
    <img
      src="https://extend.schoolwires.com/clipartgallery/images/32746173.gif"
      height="35%"
      style="position: absolute; bottom: 70px; left: -40px"
      alt="Doctor Image"
    />
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-dialog v-model="done" fullscreen>
      <v-sheet
        color="blue lighten-3"
        width="100%"
        height="100%"
        class="d-flex flex-column justify-center align-center"
      >
        <img src="~assets/img/ending1.gif" alt="Good Job" />
        <v-btn to="/materials">
          <v-icon>mdi-chevron-left</v-icon>
          Go to Main
        </v-btn>
      </v-sheet>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class StoryReminder extends Vue {
  @Prop() readonly voiceover!: string;

  private done = false;

  private async mounted() {
    const uid = this.$auth.currentUserId;
    const sm_3 = (await this.$user.getCurrentUser()).sm_3 || {
      done: false,
      grade: 0,
    };
    if (sm_3.done == true) this.done = true;
  }
}
</script>

<style scoped>
.custom-border {
  border: 4px solid #ff9800 !important;
}
</style>
