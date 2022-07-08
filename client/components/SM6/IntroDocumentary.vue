<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start"
    color="blue lighten-3"
  >
    <image-container
      :width="'100%'"
      :height="'30%'"
      :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2FDocumentaries%20(Cover)%201.jpg?alt=media&token=7873d061-6ba5-412b-922c-1cbc911fdbf2'"
    />
    <v-sheet
      width="100%"
      height="20%"
      color="blue-grey darken-3"
      style="position: relative"
    >
      <div :style="cardStyle" class="d-flex justify-center align-center">
        <h1
          class="error--text font-weight-medium"
          style="font-size: 62px; font-family: 'Archivo Narrow', sans-serif"
        >
          Documentaries
        </h1>
        <h2
          class="font-weight-bold"
          style="
            position: absolute;
            bottom: 0;
            right: 6px;
            font-size: 30px;
            font-family: 'Archivo Narrow', sans-serif;
          "
        >
          Endangered Species
        </h2>
      </div>
    </v-sheet>
    <image-container
      :width="'100%'"
      :height="'50%'"
      :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2FDocumentaries%20(Cover)%202.jpg?alt=media&token=9d265a87-8066-4225-84c6-acb65967395d'"
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
export default class IntroDocumentary extends Vue {
  @Prop() readonly voiceover!: string;

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#fff",
    borderWidth: "4px",
    borderStyle: "solid",
    width: "100%",
    height: "100%",
  };
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Readex+Pro:wght@200&display=swap");
</style>
