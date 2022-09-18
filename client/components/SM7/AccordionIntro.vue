<template>
  <v-sheet
    width="100%"
    height="100%"
    class="px-2 pt-14 pb-16 overflow-y-auto"
    style="
      position: relative;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2FPhotosynthesis%20Background.jpeg?alt=media&token=5abd737a-533b-42a5-8d5c-6042f971c0ed);
      background-size: 100% 100%;
    "
    color="blue lighten-3"
  >
    <v-sheet
      max-width="350"
      class="text-center pa-4 mx-auto"
      :style="headerStyle"
    >
      <h1>ACCORDION BOOK</h1>
      <h2 class="error--text font-italic">(Photosynthesis)</h2>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import ImageContainer from "Component/Global/ImageContainer.vue";
import ContentCard from "Component/Global/ContentCard.vue";
import SummaryPage from "Component/Global/SummaryPage.vue";

@Component({
  components: {
    ImageContainer,
    ContentCard,
    SummaryPage,
  },
})
export default class AccordionIntro extends Vue {
  private headerStyle: NotWellDefinedObject = {
    borderColor: "red",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
  };
}
</script>
