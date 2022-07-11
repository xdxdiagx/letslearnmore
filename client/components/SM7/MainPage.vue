<template>
  <v-sheet
    width="100%"
    height="100%"
    class="px-2 pt-14 pb-16 overflow-y-auto"
    style="position: relative"
    color="blue lighten-3"
  >
    <v-row no-gutters v-for="(row, idr) in rows" :key="idr">
      <v-col
        class="mb-2 px-1"
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

@Component({
  components: {
    ImageContainer,
    ContentCard,
  },
})
export default class MainPage extends Vue {
  @Prop() readonly rows!: NotWellDefinedObject[];
}
</script>
