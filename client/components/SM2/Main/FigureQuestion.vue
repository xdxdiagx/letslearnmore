<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start pt-14 px-5"
    color="blue lighten-3"
  >
    <p class="mb-4 d-flex">
      <span class="mr-4">{{ item.no }}.</span
      ><span class="text-justify">{{ item.question }}</span>
    </p>
    <img width="100%" :src="item.figure" alt="Question Figure" />

    <audio v-if="voiceover" ref="voiceover">
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
export default class FigureQuestion extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly item!: NotWellDefinedObject;
  @Prop() readonly correctAns!: string;

  private mounted() {
    const voiceover: any = this.$refs?.voiceover;
    voiceover.play();
  }
}
</script>
