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
    <v-sheet
      width="100%"
      color="transparent"
      class="d-flex flex-column align-start justify-start"
    >
      <v-sheet dark width="auto" class="py-1 px-2 mb-1" rounded color="orange">
        <h3>Part 1</h3>
      </v-sheet>
      <small class="font-italic">*Click the ribbon to grade.</small>
    </v-sheet>
    <v-sheet color="transparent" class="mt-2">
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
          >{{ item.input }}
        </v-sheet>
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
    <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
      <h3>Part 2</h3>
    </v-sheet>
    <v-sheet width="100%" color="transparent" class="mt-2">
      <v-sheet
        v-for="(img, index) in uploads"
        :key="index"
        color="transparent"
        width="100%"
        class="mb-4"
        style="position: relative"
      >
        <ImageContainer :src="img.url" />
        <v-btn
          v-if="uploadsGrade.length < index + 1"
          @click="toGrade(2, index)"
          color="grey darken-3"
          large
          absolute
          icon
          bottom
          right
        >
          <v-icon large>mdi-seal-variant</v-icon>
        </v-btn>
      </v-sheet>
    </v-sheet>
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
export default class SM1_Submission extends Vue {
  private answers: NotWellDefinedObject[] = [];
  private uploads: NotWellDefinedObject[] = [];
  private answersGrade: NotWellDefinedObject[] = [];
  private uploadsGrade: NotWellDefinedObject[] = [];
  private sm_1: NotWellDefinedObject = {};
  private gradeDialog = false;

  private itemGrade: NotWellDefinedObject = {
    grade: 0,
    comment: "",
  };

  private selected: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$route.params.studentId;
    this.sm_1 = (await this.$user.getUserById(uid)).sm_1 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_1/${uid}`)
      .get()
      .then((data) => {
        this.answers = data.val()?.answers || [];
        this.uploads = data.val()?.uploads || [];
      });

    this.$fire.database
      .ref(`grades/sm_1/${uid}`)
      .get()
      .then((data) => {
        this.answersGrade = data.val()["1"] || [];
        this.uploadsGrade = data.val()["2"] || [];
      });
  }

  private get grade() {
    if (this.sm_1.grade == 0) return "Not yet graded";
    else return `${this.sm_1.grade} points`;
  }

  private get gradeColor() {
    if (this.sm_1.grade == 0) return "";
    if (this.sm_1.grade <= 2) return "amber";
    if (this.sm_1.grade <= 3) return "yellow";
    if (this.sm_1.grade <= 4) return "light-green";
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
      .ref(`grades/sm_1/${uid}`)
      .child(this.selected.part)
      .child(this.selected.index)
      .set(this.itemGrade)
      .then((data) => {
        this.cancel();
        console.log(data);
      });
    this.$fire.database
      .ref(`grades/sm_1/${uid}`)
      .get()
      .then((data) => {
        this.answersGrade = data.val()["1"] || [];
        this.uploadsGrade = data.val()["2"] || [];
        const grades = [...this.answersGrade, ...this.uploadsGrade];
        const totalGrade = grades.reduce(
          (total: number, curr: NotWellDefinedObject) => {
            return total + curr.grade;
          },
          0
        );
        this.$fire.database
          .ref(`users/${uid}`)
          .child("sm_1")
          .set({ done: true, grade: totalGrade.toFixed(2) });
        this.sm_1 = {
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

  private gradeStyle: NotWellDefinedObject = {
    position: "absolute",
    top: "0",
    right: "0",
  };
}
</script>
