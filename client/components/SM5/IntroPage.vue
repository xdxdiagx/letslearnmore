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
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2FKaryotype.jpe?alt=media&token=6e52f0b3-da18-4725-9b39-b42ae965d054'"
        :width="'50%'"
        :height="'150px'"
        class="mx-auto"
        :imageStyle="`position: absolute;
          bottom: 5px;
          left: 70%;
          transform: translate(-50%, 0);`"
      />
      <h1
        class="text-center"
        style="position: absolute; top: 5%; right: 18%; line-height: 1.3"
      >
        THINK <br />
        OF IT!<br />
        <h6 class="orange--text">(PART 2)</h6>
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
