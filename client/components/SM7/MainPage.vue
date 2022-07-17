<template>
  <v-sheet
    width="100%"
    height="100%"
    class="px-2 pt-14 pb-16 overflow-y-auto"
    style="
      position: relative;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmain_page_bg.png?alt=media&token=9829d844-db29-4aab-9f6c-76bf8375439d);
    "
    color="blue lighten-3"
  >
    <v-row v-show="pageTitle" no-gutters justify="center" class="px-1">
      <v-col
        cols="12"
        class="error--text font-italic mb-2 cyan accent-2 text-center"
      >
        <h1>{{ pageTitle }}</h1>
      </v-col>
    </v-row>
    <v-row no-gutters v-for="(row, idr) in rows" :key="idr">
      <v-col
        class="mb-2 px-1"
        style="position: relative"
        v-for="(col, idc) in row.columns"
        :key="idc"
        :cols="col.cols"
        :sm="col.sm"
        :align-self="col.alignment"
      >
        <component
          :is="col.name"
          v-bind="{ ...col.props }"
          v-on="{ ...col.events }"
        ></component>
      </v-col>
    </v-row>
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
export default class MainPage extends Vue {
  @Prop() readonly rows!: NotWellDefinedObject[];
  @Prop() readonly pageTitle!: string;
}
</script>
