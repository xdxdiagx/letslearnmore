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
            src="~assets/img/station_3.png"
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
          <v-sheet :style="contentStyle" class="pa-4 ma-4 text-subtitle-2">
            <span class="text-h6 yellow">TASK!</span><br />
            <span class="error--text text-subtitle-2"
              >Research on the significant applications of anaerobic respiration
              in
            </span>
            <v-sheet :style="sheetStyle">
              <v-row no-gutters class="pa-2 d-flex justify-center">
                <v-col cols="6" class="text-center">
                  <span>Wine making</span>
                </v-col>
                <v-col cols="6" class="text-center">
                  <span>Vinegar making</span><br />
                </v-col>
                <v-col cols="6" class="text-center">
                  <span>Food preservation</span>
                </v-col>
                <v-col cols="6" class="text-center">
                  <span>Cheesemaking</span><br />
                </v-col>

                <v-col cols="12" class="text-center">
                  <span>Baking bread</span>
                </v-col>
              </v-row>
            </v-sheet>
            <v-row no-gutters>
              <span class="error--text">(4 points each)</span>
            </v-row>
            <CriteriaTable :criteria="criteria" :small="false" />
          </v-sheet>
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="3">
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
          <v-sheet
            :style="contentStyle"
            class="pa-4 ma-4 flex-grow-1 text-subtitle-2 overflow-y-auto"
          >
            <div v-for="(task, index) in tasks" :key="index" class="mb-4">
              <v-row no-gutters class="transparent">
                <span class="text-body-1 font-weight-bold"
                  >{{ index + 1 }}. {{ task.task }}</span
                >
              </v-row>
              <v-row no-gutters class="fill-height">
                <v-sheet
                  width="100%"
                  height="150px"
                  :style="sheetStyle"
                  rounded="lg"
                  class="pa-4"
                  @click="inputAns(index)"
                  >{{ task.answer }}</v-sheet
                >
              </v-row>
            </div>
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
            <v-btn color="grey" @click="closeModal"> Close </v-btn>
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
export default class Station3 extends Vue {
  private stationIndex = 0;
  private answerDialog = false;
  private answer: NotWellDefinedObject = {
    index: 0,
    item: "",
    input: "",
  };

  private content: string = `<p class="text-h6 mb-0">Do you ever wonder why dough rises when yeast is mixed in it?<br/>How is vinegar or “buro” products out of local fish prepared?</p><br/><p class="mb-0">Well, the answer is through <span class="font-weight-bold">fermentation</span>. Fermentation, also called <span class="font-weight-bold">anaerobic fermentation</span>, is the breakdown of pyruvic acid without the use of oxygen. Higher forms of organisms, including humans, resort to this process to supply themselves with energy when oxygen is insufficient</p>`;
  private criteria: NotWellDefinedObject = {
    column: ["Points", "Criteria"],
    row: [
      [
        "4",
        "Ideas are thoroughly explained, and are well supported by detailed and accurate information, highly coherent writing, almost no grammatical errors",
      ],
      [
        "3",
        "Ideas are explained but are not well supported by detailed information, coherent writing, few grammatical errors.",
      ],
      [
        "2",
        "Ideas are partially explained, but are not well supported by detailed information, somewhat coherent writing, and several grammatical errors.",
      ],
      [
        "1",
        "Ideas are poorly explained and are not supported by detailed information, incoherent writing, and many grammatical errors.",
      ],
    ],
  };

  private tasks: NotWellDefinedObject[] = [
    {
      task: "Wine Making",
      answer: "",
    },
    {
      task: "Vinegar Making",
      answer: "",
    },
    {
      task: "Food Preservation",
      answer: "",
    },
    {
      task: "Cheese Making",
      answer: "",
    },
    {
      task: "Baking Bread",
      answer: "",
    },
  ];

  private inputAns(index: number) {
    this.answerDialog = !this.answerDialog;
    this.answer.item = this.tasks[index].task;
    this.answer.index = index;
  }

  private saveInput() {
    this.tasks[this.answer.index].answer = this.answer.input;
    this.closeModal();
  }

  private closeModal() {
    this.answer = {
      item: "",
      input: "",
    };
    this.answerDialog = false;
  }

  private next() {
    this.stationIndex++;
  }

  private prev() {
    this.stationIndex--;
  }

  private submit() {
    console.log(this.answer);
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
