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
          color="transparent"
          class="d-flex flex-column align-start justify-start"
        >
          <v-sheet
            dark
            width="auto"
            class="py-1 px-2 mb-1"
            rounded
            color="orange"
          >
            <h3>Part 1</h3>
          </v-sheet>
          <small class="font-italic">*Click the ribbon to grade.</small>
        </v-sheet>
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
            <v-btn
              v-if="answersGrade.length < index + 1"
              @click="toGrade(1, index)"
              color="primary"
              absolute
              icon
              bottom
              right
              large
            >
              <v-icon large>mdi-seal-variant</v-icon>
            </v-btn>
          </v-sheet>
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          width="100%"
          color="transparent"
          class="d-flex flex-column align-start justify-start"
        >
          <v-sheet
            dark
            width="auto"
            class="py-1 px-2 mb-1"
            rounded
            color="orange"
          >
            <h3>Part 2</h3>
          </v-sheet>
          <small class="font-italic">*Click the ribbon to grade.</small>
        </v-sheet>
        <v-sheet
          width="100%"
          height="100%"
          color="blue lighten-3"
          class="d-flex flex-column justify-center align-center"
          v-if="sequence.length > 0"
        >
          <v-sheet
            width="100%"
            color="transparent"
            class="d-flex justify-space-between align-center"
          >
            <span
              class="error--text text-body-1 font-weight-medium text-h6 text-left"
            >
              CIRCULAR DIAGRAM
            </span>
            <v-btn
              v-if="sequenceGrade.length > 1"
              @click="toGrade(2, 0)"
              large
              icon
            >
              <v-icon large>mdi-seal-variant</v-icon>
            </v-btn>
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
    <v-dialog max-width="600px" v-model="gradeDialog" persistent>
      <v-card>
        <v-card-text class="pa-4 pb-0">
          <v-text-field
            autofocus
            hide-details
            outlined
            dense
            label="Grade"
            suffix="points"
            class="mb-2"
            v-model="itemGrade.grade"
          ></v-text-field>
          <v-textarea
            hide-details
            outlined
            dense
            no-resize
            clearable
            rows="4"
            label="Leave a comment"
            v-model="itemGrade.comment"
          >
          </v-textarea>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-btn @click="cancel" color="grey" dark>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="saveGrade" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  private gradeDialog = false;

  private itemGrade: NotWellDefinedObject = {
    grade: 0,
    comment: "",
  };

  private selected: NotWellDefinedObject = {};

  private next() {
    this.part++;
  }

  private prev() {
    this.part--;
  }

  private async mounted() {
    const uid = this.$route.params.studentId;
    this.sm_2 = (await this.$user.getUserById(uid)).sm_2 || {
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
        this.answersGrade = data.val()["1"] || [];
        this.sequenceGrade = data.val()["2"] || [];
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

  private toGrade(part: number, index: number) {
    this.selected = {
      part: part,
      index: index,
    };
    this.gradeDialog = !this.gradeDialog;
  }

  private cancel() {
    this.selected = {
      part: 0,
      index: 0,
    };
    this.itemGrade = {
      grade: 0,
      comment: "",
    };
    this.gradeDialog = false;
  }

  private saveGrade() {
    const uid = this.$route.params.studentId;
    this.itemGrade.grade = parseFloat(this.itemGrade.grade);
    this.$fire.database
      .ref(`grades/sm_2/${uid}`)
      .child(this.selected.part)
      .child(this.selected.index)
      .set(this.itemGrade)
      .then((data) => {
        this.cancel();
        console.log(data);
      });
    this.$fire.database
      .ref(`grades/sm_2/${uid}`)
      .get()
      .then((data) => {
        this.answersGrade = data.val()["1"] || [];
        this.sequenceGrade = data.val()["2"] || [];
        const grades = [...this.answersGrade, ...this.sequenceGrade];
        const totalGrade = grades.reduce(
          (total: number, curr: NotWellDefinedObject) => {
            return total + curr.grade;
          },
          0
        );
        this.$fire.database
          .ref(`users/${uid}`)
          .child("sm_2")
          .set({ done: true, grade: totalGrade.toFixed(2) });
        this.sm_2 = {
          done: true,
          grade: totalGrade.toFixed(2),
        };
      });
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
