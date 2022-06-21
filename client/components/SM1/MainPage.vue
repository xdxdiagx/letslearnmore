<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative"
    color="grey darken-1"
  >
    <div v-if="isVideo">
      <video
        width="100%"
        autoplay
        muted
        style="max-height: 700px; min-height: 210px"
      >
        <source :src="content" type="video/mp4" />
        <source :src="content" type="video/ogg" />
        <source :src="content" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <p class="text-justify mx-4 mt-4 text-subtitle-1 white--text">
        {{ subtitle }}
      </p>
    </div>
    <img
      v-else
      :src="content"
      width="100%"
      alt="Respiratory System and Covid 19"
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
export default class MainPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly content!: string;
  @Prop() readonly isVideo!: boolean;
  @Prop() readonly subtitle!: boolean;
}
</script>
