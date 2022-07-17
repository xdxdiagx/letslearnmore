<template>
  <v-sheet width="100%" height="100%" class="d-flex justify-center relative">
    <img
      height="100%"
      :width="[$vuetify.breakpoint.smAndUp ? '100%' : '']"
      src="~assets/img/classroom_bg.png"
      alt="Classroom Background"
    />
    <img
      src="~assets/img/girl_talking.gif"
      height="60%"
      style="position: absolute; bottom: 130px; left: 15px"
      alt="Teacher Image"
    />
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="withProceedBtn"
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
export default class ClassroomPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly withProceedBtn!: boolean;

  private proceed() {
    this.$emit("proceed");
  }
}
</script>
