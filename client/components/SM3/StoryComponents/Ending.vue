<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-5"
    color="blue lighten-3"
  >
    <div
      class="custom-border rounded-xl"
      style="width: 100%; height: 80%; position: relative"
    >
      <img
        width="100%"
        class="mt-16 ml-10"
        src="https://media1.giphy.com/media/He1R3fB0LbourJlg2F/200w.webp?cid=dda24d50fd9baa61bf4e6836be45aec5548336fb7d1f64e6&amp;rid=200w.webp&amp;ct=s"
        alt=""
      />
    </div>
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbestanimations.com%2FBooks%2Fgirl-reading-book-animation-11.gif&f=1&nofb=1"
      height="45%"
      style="position: absolute; bottom: 80px; left: -50px"
      alt="Teacher Image"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class StoryEnding extends Vue {}
</script>

<style scoped>
.custom-border {
  border: 5px dashed navy !important;
}
</style>
