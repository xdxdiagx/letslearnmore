<template>
  <v-sheet height="100%" width="100%" color="blue lighten-3">
    <v-btn
      @click="$emit('close')"
      elevation="0"
      class="mt-n2 mr-n2"
      fixed
      top
      right
      fab
      small
      plain
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-window
      show-arrows
      v-model="stationIndex"
      touchless
      style="width: 100%; height: 100%"
    >
      <v-window-item class="fill-height ma-0" :value="1">
        <v-sheet height="100%" width="100%" class="transparent">
          <img
            height="40%"
            width="100%"
            src="~assets/img/station_2.png"
            alt="Classroom Background"
          />
          <ContentCard
            :content="content"
            :contentStyle="contentStyle"
            :elevation="0"
            class="ma-4"
          />
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          height="100%"
          width="100%"
          class="transparent d-flex flex-column"
        >
          <img
            height="15%"
            width="100%"
            src="~assets/img/header.png"
            alt="Classroom Background"
          />
          <v-sheet :style="contentStyle" class="pa-4 ma-4 flex-grow-1">
            <CriteriaTable :criteria="criteria" :small="false" />
            <v-row no-gutters class="transparent mt-8">
              <span class="text-body-1 font-weight-bold error--text"
                >Answer :</span
              >
            </v-row>
            <v-row no-gutters class="fill-height">
              <v-sheet
                width="100%"
                height="200px"
                :style="sheetStyle"
                @click="inputAns"
                rounded="lg"
                class="pa-4"
                >{{ answer.input }}</v-sheet
              >
            </v-row>
          </v-sheet>
        </v-sheet>
      </v-window-item>
    </v-window>
    <v-dialog persistent v-model="answerDialog">
      <v-card rounded="lg">
        <v-card-text class="px-4 pt-4 pb-0">
          <span class="text-body-1 font-weight-bold">{{ answer.item }}</span>
          <v-textarea
            v-model="answer.input"
            style="border: 2px solid orange"
            class="rounded-lg mt-2"
            background-color="white"
            flat
            solo
            hide-details
            autofocus
            no-resize
            rows="4"
            @keyup.enter="saveInput"
          ></v-textarea>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveInput"> Save </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import CriteriaTable from "Component/SM8/CriteriaTable.vue";

@Component({
  components: {
    CriteriaTable,
  },
})
export default class Station2 extends Vue {
  private stationIndex = 0;
  private answerDialog = false;
  private answer: NotWellDefinedObject = {
    item: "",
    input: "",
  };

  private content: string = `Cellular respiration and photosynthesis are biological processes that involve the flow of material and energy throughout the biosphere. These two processes are involved in the exchange of oxygen and carbon dioxide between the organism and the environment. The connections between these two processes are undeniable.<br/><span class="text-h6 yellow">TASK!</span><br/><p class="error--text mb-0">Explain the relationship between photosynthesis and cellular respiration. Be sure to include the main purpose of both processes, the molecules involved, and the parts where they occur inside the cell.</p>`;
  private criteria: NotWellDefinedObject = {
    column: ["Points", "Criteria"],
    row: [
      [
        "9-10",
        "The response clearly demonstrates an understanding of the task and provides an insightful explanation and examples. Virtually no spelling, punctuation, or grammatical errors.",
      ],
      [
        "7-8",
        "The response demonstrates an understanding of the task and provides some explanations and examples. Few spelling and punctuation errors, or minor grammatical errors.",
      ],
      [
        "5-6",
        "The response demonstrates a partial understanding of the task and provides limited explanations and examples. Several spelling, punctuation, or grammatical errors.",
      ],
      [
        "3-4",
        "The response demonstrates minimal understanding of the task and provides only vague explanations and examples. So many spelling, punctuation, and grammatical errors that interfere with the meaning.",
      ],
      [
        "0-2",
        "Ideas are not clear.The response is irrelevant or off-topic. Spelling, punctuation, and grammatical errors make the text difficult to understand.",
      ],
    ],
  };

  private next() {
    this.stationIndex++;
  }

  private prev() {
    this.stationIndex--;
  }

  private inputAns() {
    this.answerDialog = !this.answerDialog;
    this.answer.item = "Answer";
  }

  private saveInput() {
    this.answerDialog = false;
  }

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#FF9100",
    borderWidth: "5px",
    borderStyle: "dashed",
    backgroundColor: "transparent",
    fontStyle: "italic",
  };

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "#2196F3",
    borderWidth: "1px",
    borderStyle: "solid",
  };
}
</script>

<style></style>
