<template>
  <v-sheet width="100%" height="100%" class="pt-14 px-4" color="blue lighten-3">
    <image-container
      :width="'100%'"
      :height="'40%'"
      class="rounded-xl"
      :src="'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fquotefancy.com%2Fmedia%2Fwallpaper%2F3840x2160%2F3261450-Loretta-Lynch-Quote-We-all-have-a-responsibility-to-protect.jpg&f=1&nofb=1'"
    />
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
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        max-height: 200px;
      "
      alt="Classrom Floor"
    />
    <audio v-if="voiceover != ''" ref="voice_over">
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
export default class Ending extends Vue {
  @Prop() readonly voiceover!: string;

  private done = false;

  private async mounted() {
    const voice_over: any = this.$refs?.voice_over;
    voice_over.play();

    const sm_6 = (await this.$user.getCurrentUser()).sm_6 || {
      done: false,
      grade: 0,
    };
    if (sm_6.done == true) this.done = true;
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1;
}
</style>
