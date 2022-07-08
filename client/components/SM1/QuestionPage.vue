<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start px-5 mx-auto pb-16 pt-14"
    color="blue lighten-3"
    max-width="720px"
    style="position: relative"
  >
    <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
      <h3>{{ partNo }}</h3>
    </v-sheet>
    <p class="w-100 text-justify">{{ instructions }}</p>
    <span class="font-weight-medium mb-2">Criteria:</span>
    <CriteriaTable :criteria="criteria" :small="small" />
    <v-row v-if="questions" no-gutters class="overflow-y-auto">
      <v-col cols="12" v-for="item in questions" :key="item.no">
        <EssayQuestion :item="item" />
      </v-col>
    </v-row>
    <FileUpload v-else />
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="showSubmitBtn"
      class="mt-14 mr-5"
      elevation="2"
      style="position: absolute; top: 0; right: 0"
      color="success"
    >
      <span>Submit</span>
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import EssayQuestion from "./QuestionComponents/Essay.vue";
import CriteriaTable from "./QuestionComponents/CriteriaTable.vue";
import FileUpload from "Component/Global/FileUpload.vue";

@Component({
  components: {
    EssayQuestion,
    CriteriaTable,
    FileUpload,
  },
})
export default class QuestionPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly partNo!: string;
  @Prop() readonly instructions!: string;
  @Prop() readonly criteria!: NotWellDefinedObject[];
  @Prop() readonly questions!: NotWellDefinedObject[];
  @Prop() readonly small!: boolean;

  private showSubmitBtn: boolean = true;
}
</script>
