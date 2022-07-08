<template>
  <v-sheet width="100%" height="100%" class="pt-14 px-5" color="blue lighten-3">
    <image-container
      :src="imageUrl"
      class="rounded-xl"
      :width="'100%'"
      :height="'40%'"
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
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Classrom Floor"
    />
    <audio v-if="voiceover != ''" ref="voice_over">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="withProceedBtn && showProceedBtn"
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
export default class ClassroomFloorPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly imageUrl!: string;
  @Prop() readonly withProceedBtn!: boolean;

  private showProceedBtn = true;

  private proceed() {
    this.$emit("proceed");
  }

  private mounted() {
    const voice_over: any = this.$refs?.voice_over;
    voice_over.play();
    voice_over.addEventListener("ended", () => {
      this.showProceedBtn = true;
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
