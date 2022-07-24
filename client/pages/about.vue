<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center relative px-4 py-14"
  >
    <v-btn
      @click="goBack"
      elevation="0"
      class="mt-n2 ml-n2"
      fixed
      top
      left
      fab
      small
      plain
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-sheet
      width="100%"
      height="100%"
      class="rounded-xl d-flex flex-column justify-center align-center pa-5"
      color="blue lighten-3"
    >
      <img
        src="~assets/img/icon.png"
        width="200px"
        height="200px"
        alt="Logo"
        class="mb-10"
      />
      <p class="text-justify">
        Supplementary materials using the mobile application were developed to
        encourage the students to apply or extend the concepts they learned in
        new situations and to reinforce and give more hands-on application of
        the lesson content. Supplementary materials provide some of the most
        engaging and worthwhile experiences, improving students' performance and
        interest in the lesson.
      </p>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: "landing",
})
export default class AboutPage extends Vue {
  private goBack() {
    this.$router.back();
  }
}
</script>
