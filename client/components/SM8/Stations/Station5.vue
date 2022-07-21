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
            src="~assets/img/station_5.png"
            alt="Classroom Background"
          />
          <v-sheet :style="contentStyle" class="pa-4 ma-4 flex-grow-1">
            <img
              height="40%"
              width="100%"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biologyonline.com%2Fwp-content%2Fuploads%2F2020%2F02%2FCell-Respiration.jpg&f=1&nofb=1"
              alt="Cellular Respiration"
            />
            <span class="text-h6 yellow">TASK!</span><br />
            <span class="error--text text-subtitle-2"
              >Upon learning how cellular respiration takes place, Justify the
              importance of cellular respiration to living things. Support your
              answers with evidence or examples.
            </span>
          </v-sheet>
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
            <span class="text-h6 yellow">TASK!</span><br />
            <span class="error--text text-subtitle-2"
              >Find out how such fitness programs/exercises affect the rate of
              Cellular Respiration.
            </span>
            <CriteriaTable :criteria="criteria" :small="false" />
            <v-row no-gutters class="transparent mt-8">
              <span class="text-body-1 font-weight-bold error--text"
                >Answer :</span
              >
            </v-row>
            <v-row no-gutters>
              <v-sheet
                width="100%"
                height="200px"
                :style="sheetStyle"
                @click="inputAns"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answer.input }}</v-sheet
              >
              <v-row no-gutters class="mt-2">
                <v-spacer></v-spacer>
                <v-btn
                  v-if="!done"
                  color="success"
                  :disabled="disableBtn"
                  @click="submit"
                  >Submit</v-btn
                >
                <span class="text-caption error--text font-italic" v-else
                  >You've already finished this activity</span
                >
              </v-row>
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
export default class Station5 extends Vue {
  private stationIndex = 0;
  private answerDialog = false;
  private disableBtn = true;
  private done = false;
  private answer: NotWellDefinedObject = {
    item: "",
    input: "",
  };

  private content: string = `<span class="text-h6 yellow">TASK!</span><br/><p class="error--text mb-0">At present, there are lots of fitness programs being advertised. The good ones increase the efficiency of cellular respiration in certain tissues. Below is a sample of the fitness program.</p>`;
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

  private async mounted() {
    const sm_8 = (await this.$user.getCurrentUser()).sm_8 || {
      done: false,
      grade: 0,
    };
    if (sm_8.done == true) this.done = true;
  }

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

  private submit() {
    const uid = this.$auth.currentUserId;
    if (this.$fire.database.ref(`sm_8/${uid}`) != null) {
      const data = {
        uid: uid,
        answers: this.answer.input,
      };
      this.$fire.database
        .ref(`sm_8/${uid}/sta5`)
        .set(data)
        .then((data) => {
          this.disableBtn = true;
          this.$fire.database
            .ref(`users/${uid}`)
            .child("sm_8")
            .set({ done: true, grade: 0 });
          this.done = true;
        });
    }
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
    overflowWrap: "break-word",
  };

  @Watch("answer", { deep: true })
  onFull() {
    if (this.answer.input != "") this.disableBtn = false;
  }
}
</script>

<style></style>
