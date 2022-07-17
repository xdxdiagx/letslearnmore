<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    color="blue lighten-3"
  >
    <v-sheet
      width="100%"
      max-width="327px"
      max-height="327px"
      min-height="327px"
      min-width="327px"
      class="mx-5 rounded-xl"
      color="transparent"
      style="position: relative"
    >
      <image-container
        :src="'https://freesvg.org/img/1533756508.png'"
        :width="'100%'"
        :height="'100%'"
        class="rounded-xl"
        :imageStyle="cardStyle"
      />
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fmain%2FCat%20family.png?alt=media&token=f3a4a5e1-4c95-4c4b-804d-3cbbd236998f'"
        :width="'50%'"
        :height="'100px'"
        class="mx-auto"
        :imageStyle="`position: absolute;
          bottom: 5px;
          left: 65%;
          transform: translate(-50%, 0);`"
      />
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fmain%2Fdog_family-removebg-preview.png?alt=media&token=aefc40b6-d3fa-4304-add1-80e66aed3339'"
        :width="'30%'"
        :height="'80px'"
        class="mx-auto"
        :imageStyle="`position: absolute; top: 25%; left: 5%`"
      />
      <image-container
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fmain%2FRoan_cattle-removebg-preview.png?alt=media&token=d545b627-8890-473b-a1a8-adf0ba46be83'"
        :width="'45%'"
        :height="'60px'"
        :imageStyle="`position: absolute;
          top: 75%;
          right: 5%;
          transform: translate(0, -100%);`"
      />
      <h1 class="text-center" style="position: absolute; top: 8%; right: 18%">
        THINK <br />
        OF IT!
      </h1>
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
    backgroundColor: "#fff",
  };
}
</script>
