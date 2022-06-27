<template>
  <v-sheet width="100%" height="100%" class="d-flex justify-center relative">
    <img
      height="100%"
      width="100%"
      :src="background"
      alt="Main Story Page Background"
    />
    <v-sheet
      :dark="dark_text"
      color="transparent"
      class="pa-4 custom-border mt-14 mx-auto"
      rounded="xl"
      :style="dialogueSettings"
    >
      <p
        v-for="(dialogue, index) in dialogues"
        :key="index"
        class="font-italic text-justify"
        :class="[index + 1 == dialogues.length ? 'mb-0' : 'mb-4']"
      >
        {{ dialogue }}
      </p>
    </v-sheet>
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
export default class StoryMainPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly background!: string;
  @Prop() readonly dialogues!: string[];
  @Prop() readonly settings!: NotWellDefinedObject;
  @Prop() readonly dark_text!: boolean;

  private dialogue_settings = {
    top: "0",
    left: "0",
    right: "0",
    width: "90%",
    height: "auto",
  };

  public get dialogueSettings() {
    return {
      position: "absolute",
      top: this.dialogue_settings.top,
      left: this.dialogue_settings.left,
      right: this.dialogue_settings.right,
      width: this.dialogue_settings.width,
      height: this.dialogue_settings.height,
    };
  }
}
</script>

<style scoped>
.custom-border {
  border: 3px dashed red !important;
}
</style>
