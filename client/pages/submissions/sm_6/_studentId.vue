<template>
  <v-sheet
    width="100%"
    height="100%"
    max-width="720px"
    class="d-flex flex-column justify-start align-start mx-auto pt-14 pb-5 overflow-y-auto"
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
    <v-sheet
      width="100%"
      color="transparent"
      class="d-flex flex-row align-center justify-space-between pr-4"
    >
      <v-spacer></v-spacer>
    </v-sheet>
    <v-expansion-panels popout>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row align="center" justify="space-between" class="pr-4"
            ><span>Recovery 1</span>
            <v-btn @click="toGrade(1, 0)" color="primary" icon>
              <v-icon size="30">mdi-seal-variant</v-icon>
            </v-btn></v-row
          ></v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers1" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row align="center" justify="space-between" class="pr-4"
            ><span>Recovery 2</span>
            <v-btn @click="toGrade(2, 0)" color="primary" icon>
              <v-icon size="30">mdi-seal-variant</v-icon>
            </v-btn></v-row
          >
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers2" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row align="center" justify="space-between" class="pr-4"
            ><span>Recovery 3</span>
            <v-btn @click="toGrade(3, 0)" color="primary" icon>
              <v-icon size="30">mdi-seal-variant</v-icon>
            </v-btn></v-row
          >
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers3" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row align="center" justify="space-between" class="pr-4"
            ><span>Recovery 4</span>
            <v-btn @click="toGrade(4, 0)" color="primary" icon>
              <v-icon size="30">mdi-seal-variant</v-icon>
            </v-btn></v-row
          >
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers4" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
        <h4>Grade: {{ grade }}</h4>
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
import RecoveryPage from "Component/Global/RecoveryPage.vue";

@Component({
  layout: "activity",
  components: {
    RecoveryPage,
  },
})
export default class SM6_Activity extends Vue {
  private answers1: NotWellDefinedObject = {};
  private answers2: NotWellDefinedObject = {};
  private answers3: NotWellDefinedObject = {};
  private answers4: NotWellDefinedObject = {};
  private boomCardGrade1: NotWellDefinedObject[] = [];
  private boomCardGrade2: NotWellDefinedObject[] = [];
  private boomCardGrade3: NotWellDefinedObject[] = [];
  private boomCardGrade4: NotWellDefinedObject[] = [];
  private sm_6: NotWellDefinedObject = {};
  private gradeDialog = false;

  private itemGrade: NotWellDefinedObject = {
    grade: 0,
    comment: "",
  };

  private selected: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$route.params.studentId;
    this.sm_6 = (await this.$user.getUserById(uid)).sm_6 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_6/${uid}/1`)
      .get()
      .then((data) => {
        this.answers1 = data.val() || {};
      });
    this.$fire.database
      .ref(`sm_6/${uid}/2`)
      .get()
      .then((data) => {
        this.answers2 = data.val() || {};
      });
    this.$fire.database
      .ref(`sm_6/${uid}/3`)
      .get()
      .then((data) => {
        this.answers3 = data.val() || {};
      });
    this.$fire.database
      .ref(`sm_6/${uid}/4`)
      .get()
      .then((data) => {
        this.answers4 = data.val() || {};
      });
  }

  private get grade() {
    if (this.sm_6.grade == 0) return "Not yet graded";
    else return `${this.sm_6.grade} points`;
  }

  private get gradeColor() {
    if (this.sm_6.grade == 0) return "";
    if (this.sm_6.grade <= 2) return "amber";
    if (this.sm_6.grade <= 3) return "yellow";
    if (this.sm_6.grade <= 4) return "light-green";
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
      .ref(`grades/sm_6/${uid}`)
      .child(this.selected.part)
      .child(this.selected.index)
      .set(this.itemGrade)
      .then((data) => {
        this.cancel();
        console.log(data);
      });
    this.$fire.database
      .ref(`grades/sm_6/${uid}`)
      .get()
      .then((data) => {
        this.boomCardGrade1 = data.val()["1"] || [];
        this.boomCardGrade2 = data.val()["2"] || [];
        this.boomCardGrade3 = data.val()["3"] || [];
        this.boomCardGrade4 = data.val()["4"] || [];
        const grades = [
          ...this.boomCardGrade1,
          ...this.boomCardGrade2,
          ...this.boomCardGrade3,
          ...this.boomCardGrade4,
        ];
        const totalGrade = grades.reduce(
          (total: number, curr: NotWellDefinedObject) => {
            return total + curr.grade;
          },
          0
        );
        const aveGrade = totalGrade / grades.length;
        this.$fire.database
          .ref(`users/${uid}`)
          .child("sm_6")
          .set({ done: true, grade: aveGrade.toFixed(2) });
        this.sm_6 = {
          done: true,
          grade: aveGrade.toFixed(2),
        };
      });
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "orange",
    borderWidth: "2px",
    borderStyle: "solid",
    overflowWrap: "break-word",
  };

  private gradeStyle: NotWellDefinedObject = {
    position: "absolute",
    top: "0",
    right: "0",
  };
}
</script>
