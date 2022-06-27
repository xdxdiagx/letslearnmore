<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    color="blue lighten-3"
  >
    <div style="width: 100%; height: 85%; position: relative">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FScroll-High-Quality-PNG.png&f=1&nofb=1"
        width="100%"
        height="100%"
        style="position: absolute; top: 0: left: 0; right: 0; bottom: 0"
        alt="Scroll Background"
      />
      <h1
        style="
          position: absolute;
          width: 80%;
          left: 0;
          right: 0;
          top: 4.5%;
          text-align: center;
          font-size: 30px;
        "
        class="mx-auto error--text text-sm-h4 text-h5 font-weight-bold"
      >
        Story Preview
      </h1>
      <div
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70%;
          transform: translate(-50%, -50%);
        "
      >
        <p
          class="mx-auto text-sm-h6 text-caption text-justify"
          v-for="(paragraph, index) in paragraphs"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbestanimations.com%2FBooks%2Fgirl-reading-book-animation-11.gif&f=1&nofb=1"
      height="25%"
      style="position: absolute; bottom: 10px; left: -25px"
      alt="Teacher Image"
    />
    <audio v-if="voiceover != ''" autoplay>
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
export default class StoryPreview extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly paragraphs!: string[];
  @Prop() readonly showProceedBtn!: boolean;

  private proceed() {
    this.$emit("proceed");
  }
}
</script>
