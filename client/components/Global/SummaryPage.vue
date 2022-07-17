<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex justify-center align-center px-4"
    style="
      position: relative;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmain_page_bg.png?alt=media&token=9829d844-db29-4aab-9f6c-76bf8375439d);
    "
    color="blue lighten-3"
  >
    <ContentCard
      :content="content"
      :elevation="0"
      :contentStyle="contentStyle"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class SummaryPage extends Vue {
  @Prop() readonly content!: string;
  @Prop() readonly contentStyle!: NotWellDefinedObject;
}
</script>
