<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    style="
      position: relative;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmain_page_bg.png?alt=media&token=9829d844-db29-4aab-9f6c-76bf8375439d);
      background-size: cover;
    "
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
        :src="'https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2FA%20Deeper%20Look%20at.png?alt=media&token=f87a6ccc-2c3d-426e-aba6-810732720a2e'"
        :width="'100%'"
        :height="'100%'"
        class="rounded-xl"
      />
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class MainIntro extends Vue {
  private cardStyle: NotWellDefinedObject = {
    borderColor: "#1B5E20",
    borderWidth: "4px",
    borderStyle: "solid",
  };
}
</script>
