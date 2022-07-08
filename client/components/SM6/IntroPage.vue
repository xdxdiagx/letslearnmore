<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    color="blue lighten-3"
  >
    <v-sheet
      width="100%"
      max-width="620px"
      max-height="620px"
      class="mx-5 rounded-xl"
      color="transparent"
      style="position: relative"
    >
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2FWhat%20you%20need%20to%20know.jpg?alt=media&token=2ff7b99a-529c-4b61-84e8-6e03457abe4a'"
        :width="'100%'"
        :height="'100%'"
        class="rounded-xl"
        :imageStyle="cardStyle"
      />
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2FGroup%20of%20animals%20(what%20we%20need%20to%20know%20title.jpg?alt=media&token=4e34bb52-5242-4ed7-944d-29703e3bccc7'"
        :width="'75%'"
        :height="'94px'"
        class="mx-auto"
        :imageStyle="`position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translate(-50%, 0);`"
      />
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2Ftiger.png?alt=media&token=eeefbe00-ff5c-4ca0-ae6b-c2c8046377b5'"
        :width="'30%'"
        :height="'143px'"
        class="mx-auto"
        :imageStyle="`position: absolute; top: 5px; right: 10%`"
      />
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2Fcheerah.png?alt=media&token=30ce6d7d-2052-48c5-9e9a-138b305f03ce'"
        :width="'40%'"
        :height="'86px'"
        :imageStyle="`position: absolute;
          top: 50%;
          right: -5%;
          transform: translate(0, -100%);`"
      />
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
export default class IntroPage extends Vue {
  @Prop() readonly voiceover!: string;

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#FFEB3B",
    borderWidth: "4px",
    borderStyle: "solid",
  };
}
</script>
