<template>
  <v-sheet
    width="100%"
    height="100%"
    max-width="720px"
    class="d-flex flex-column justify-start align-start px-4 mx-auto pt-14 overflow-y-auto"
    color="blue lighten-3"
    style="position: relative"
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
    <v-window
      show-arrows
      v-model="part"
      touchless
      style="width: 100%; height: 100%"
    >
      <v-window-item class="fill-height ma-0" :value="1">
        <v-sheet
          width="100%"
          height="100%"
          color="transparent"
          class="mt-2 overflow-y-auto"
        >
          <v-sheet
            v-for="(item, index) in answers"
            :key="index"
            color="transparent"
            width="100%"
            class="mb-4"
            style="position: relative"
          >
            <p class="mb-2 d-flex">
              <span class="mr-4">{{ item.no }}.</span
              ><span class="text-left">{{ item.question }}</span>
            </p>
            <v-sheet
              width="100%"
              height="120px"
              :style="sheetStyle"
              rounded="lg"
              class="pa-4 overflow-y-auto"
              >{{ item.input }}</v-sheet
            >
            <v-menu
              v-if="answersGrade.length > 0"
              v-show="answerIndex == index"
              v-model="answerMenu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="grey"
                  icon
                  absolute
                  bottom
                  right
                  large
                  v-bind="attrs"
                  v-on="on"
                  @click="answerIndex = index"
                >
                  <v-icon>mdi-comment-text-multiple-outline</v-icon>
                </v-btn>
              </template>

              <v-card v-if="answerIndex == index" class="pa-4">
                <v-row no-gutters justify="space-between">
                  <span class="text-subtitle-2">Points:</span>
                  <span class="text-subtitle-2 font-weight-regular"
                    >{{ answersGrade[index].grade }} points</span
                  >
                </v-row>
                <v-row no-gutters class="mb-2">
                  <span class="text-subtitle-2">Comments:</span>
                </v-row>
                <v-row no-gutters>
                  <v-sheet
                    width="100%"
                    max-height="120px"
                    rounded="lg"
                    class="pa-2 text-subtitle-2 font-weight-regular font-italic"
                    :style="sheetStyle"
                  >
                    <p class="mb-0">{{ answersGrade[index].comment }}</p>
                  </v-sheet>
                </v-row>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          width="100%"
          height="100%"
          color="blue lighten-3"
          class="d-flex flex-column justify-center align-center"
          v-if="sequence.length > 0"
        >
          <v-sheet
            width="100%"
            class="d-flex justify-space-between align-center"
            color="transparent"
          >
            <span
              class="error--text text-body-1 font-weight-medium text-h6 text-left"
            >
              CIRCULAR DIAGRAM
            </span>
            <v-menu
              v-if="sequenceGrade.length > 0"
              v-show="sequenceIndex == index"
              v-model="sequenceMenu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="grey lighten-4"
                  icon
                  large
                  v-bind="attrs"
                  v-on="on"
                  @click="sequenceIndex = index"
                >
                  <v-icon>mdi-comment-text-multiple-outline</v-icon>
                </v-btn>
              </template>

              <v-card v-if="sequenceIndex == index" class="pa-4">
                <v-row no-gutters justify="space-between">
                  <span class="text-subtitle-2">Points:</span>
                  <span class="text-subtitle-2 font-weight-regular"
                    >{{ sequenceGrade[index].grade }} points</span
                  >
                </v-row>
                <v-row no-gutters class="mb-2">
                  <span class="text-subtitle-2">Comments:</span>
                </v-row>
                <v-row no-gutters>
                  <v-sheet
                    width="100%"
                    max-height="120px"
                    rounded="lg"
                    class="pa-2 text-subtitle-2 font-weight-regular font-italic"
                    :style="sheetStyle"
                  >
                    <p class="mb-0">{{ sequenceGrade[index].comment }}</p>
                  </v-sheet>
                </v-row>
              </v-card>
            </v-menu>
          </v-sheet>
          <v-sheet width="100%" color="transparent" class="py-4">
            <v-sheet
              width="80%"
              class="mx-auto d-flex justify-space-around transparent"
            >
              <v-sheet
                width="100px"
                height="80px"
                class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
                :style="diagramStyle"
                >{{ sequence[0].text }}</v-sheet
              >
              <v-icon size="32">mdi-arrow-right-thick</v-icon>
              <v-sheet
                width="100px"
                height="80px"
                class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
                :style="diagramStyle"
                >{{ sequence[1].text }}</v-sheet
              >
            </v-sheet>
            <v-sheet
              width="70%"
              class="mx-auto d-flex justify-space-between transparent"
            >
              <v-icon size="32">mdi-arrow-top-right-thick</v-icon>
              <v-icon size="32">mdi-arrow-bottom-right-thick</v-icon>
            </v-sheet>
            <v-sheet class="d-flex justify-space-between transparent">
              <v-sheet
                width="100px"
                height="80px"
                class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
                :style="diagramStyle"
                >{{ sequence[5].text }}</v-sheet
              >

              <v-sheet
                width="100px"
                height="80px"
                class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
                :style="diagramStyle"
                >{{ sequence[2].text }}</v-sheet
              >
            </v-sheet>
            <v-sheet
              width="70%"
              class="mx-auto d-flex justify-space-between transparent transparent"
            >
              <v-icon size="32">mdi-arrow-top-left-thick</v-icon>
              <v-icon size="32">mdi-arrow-bottom-left-thick</v-icon>
            </v-sheet>
            <v-sheet
              width="80%"
              class="mb-4 mx-auto d-flex justify-space-around transparent"
            >
              <v-sheet
                width="100px"
                height="80px"
                class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
                :style="diagramStyle"
                >{{ sequence[4].text }}</v-sheet
              >
              <v-icon size="32">mdi-arrow-left-thick</v-icon>
              <v-sheet
                width="100px"
                height="80px"
                class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
                :style="diagramStyle"
                >{{ sequence[3].text }}</v-sheet
              >
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-window-item>
    </v-window>
    <v-sheet
      width="100%"
      color="transparent"
      class="d-flex flex-row align-center justify-space-between pr-4 mt-3"
      :style="gradeStyle"
    >
      <v-spacer></v-spacer>
      <v-sheet
        dark
        width="auto"
        class="py-1 px-2 mb-2"
        rounded
        :color="gradeColor"
      >
        <h4>Total: {{ grade }}</h4>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({
  layout: "activity",
})
export default class SM2_Activity extends Vue {
  private answers: NotWellDefinedObject[] = [];
  private uploads: NotWellDefinedObject[] = [];
  private sequence: NotWellDefinedObject[] = [];
  private answersGrade: NotWellDefinedObject[] = [];
  private sequenceGrade: NotWellDefinedObject[] = [];
  private sm_2: NotWellDefinedObject = {};
  private part = 0;
  private answerMenu = false;
  private answerIndex = 0;
  private sequenceMenu = false;
  private sequenceIndex = 0;

  private next() {
    this.part++;
  }

  private prev() {
    this.part--;
  }

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_2 = (await this.$user.getCurrentUser()).sm_2 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_2/${uid}/1`)
      .get()
      .then((data) => {
        this.answers = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_2/${uid}/2`)
      .get()
      .then((data) => {
        this.sequence = data.val()?.sequence || [];
      });

    this.$fire.database
      .ref(`grades/sm_2/${uid}`)
      .get()
      .then((data) => {
        this.answersGrade = data.val()?.["1"] || [];
        this.sequenceGrade = data.val()?.["2"] || [];
      });
  }

  private get grade() {
    if (this.sm_2.grade == 0) return "Not yet graded";
    else return `${this.sm_2.grade} points`;
  }

  private get gradeColor() {
    if (this.sm_2.grade == 0) return "";
    if (this.sm_2.grade <= 2) return "amber";
    if (this.sm_2.grade <= 3) return "yellow";
    if (this.sm_2.grade <= 4) return "light-green";
    else return "green";
  }

  private goBack() {
    this.$router.back();
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "orange",
    borderWidth: "2px",
    borderStyle: "solid",
    overflowWrap: "break-word",
  };

  private diagramStyle: NotWellDefinedObject = {
    borderColor: "#fff",
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "#FFC107",
  };

  private gradeStyle: NotWellDefinedObject = {
    position: "absolute",
    top: "0",
    right: "0",
  };
}
</script>
