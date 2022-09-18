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
      class="d-flex flex-row align-center justify-space-between"
    >
      <v-spacer></v-spacer>
    </v-sheet>
    <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
      <h3>Part 1</h3>
    </v-sheet>
    <v-sheet color="transparent" class="mt-2">
      <v-sheet
        v-for="(item, ida) in answers1"
        :key="ida"
        color="transparent"
        width="100%"
        class="mb-4"
        style="position: relative"
      >
        <p class="mb-2 d-flex">
          <span class="text-left">{{ item.question }}</span>
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
          v-if="answersGrade1.length < ida + 1"
          @click="toGrade(1, ida)"
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
    <v-sheet width="100%" color="transparent" class="mt-2">
      <v-sheet
        v-for="(img, index) in uploads1"
        :key="index"
        color="transparent"
        width="100%"
        class="mb-4"
        style="position: relative"
      >
        <ImageContainer :src="img.url" />
        <v-btn
          v-if="uploadsGrade1.length < index + 1"
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
    <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
      <h3>Part 2</h3>
    </v-sheet>
    <v-sheet color="transparent" class="mt-2">
      <v-sheet
        v-for="(item, ida) in answers2"
        :key="ida"
        color="transparent"
        width="100%"
        class="mb-4"
        style="position: relative"
      >
        <p class="mb-2 d-flex">
          <span class="text-left">{{ item.question }}</span>
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
          v-if="answersGrade2.length < ida + 1"
          @click="toGrade(3, ida)"
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
    <v-sheet width="100%" color="transparent" class="mt-2">
      <v-sheet
        v-for="(img, index) in uploads2"
        :key="index"
        color="transparent"
        width="100%"
        class="mb-4"
        style="position: relative"
      >
        <ImageContainer :src="img.url" />
        <v-btn
          v-if="uploadsGrade2.length < index + 1"
          @click="toGrade(4, index)"
          color="grey darken-3"
          large
          dark
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
export default class SM4_Activity extends Vue {
  private answers1: NotWellDefinedObject[] = [];
  private uploads1: NotWellDefinedObject[] = [];
  private answers2: NotWellDefinedObject[] = [];
  private uploads2: NotWellDefinedObject[] = [];
  private answersGrade1: NotWellDefinedObject[] = [];
  private uploadsGrade1: NotWellDefinedObject[] = [];
  private answersGrade2: NotWellDefinedObject[] = [];
  private uploadsGrade2: NotWellDefinedObject[] = [];
  private sm_4: NotWellDefinedObject = {};
  private gradeDialog = false;

  private itemGrade: NotWellDefinedObject = {
    grade: 0,
    comment: "",
  };

  private selected: NotWellDefinedObject = {};

  private async created() {
    const uid = this.$route.params.studentId;
    this.sm_4 = (await this.$user.getUserById(uid)).sm_4 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_4/${uid}/1`)
      .get()
      .then((data) => {
        this.answers1 = data.val()?.answers || [];
        this.uploads1 = data.val()?.uploads || [];
      });
    this.$fire.database
      .ref(`sm_4/${uid}/2`)
      .get()
      .then((data) => {
        this.answers2 = data.val()?.answers || [];
        this.uploads2 = data.val()?.uploads || [];
      });

    this.$fire.database
      .ref(`grades/sm_4/${uid}`)
      .get()
      .then((data) => {
        this.answersGrade1 = data.val()["1"] || [];
        this.uploadsGrade1 = data.val()["2"] || [];
        this.answersGrade2 = data.val()["3"] || [];
        this.uploadsGrade2 = data.val()["4"] || [];
      });
  }

  private get grade() {
    if (this.sm_4.grade == 0) return "Not yet graded";
    else return `${this.sm_4.grade} points`;
  }

  private get gradeColor() {
    if (this.sm_4.grade == 0) return "";
    if (this.sm_4.grade <= 2) return "amber";
    if (this.sm_4.grade <= 3) return "yellow";
    if (this.sm_4.grade <= 4) return "light-green";
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
      .ref(`grades/sm_4/${uid}`)
      .child(this.selected.part)
      .child(this.selected.index)
      .set(this.itemGrade)
      .then((data) => {
        this.cancel();
        console.log(data);
      });
    this.$fire.database
      .ref(`grades/sm_4/${uid}`)
      .get()
      .then((data) => {
        this.answersGrade1 = data.val()["1"] || [];
        this.uploadsGrade1 = data.val()["2"] || [];
        this.answersGrade2 = data.val()["3"] || [];
        this.uploadsGrade2 = data.val()["4"] || [];
        const grades = [
          ...this.answersGrade1,
          ...this.uploadsGrade1,
          ...this.answersGrade2,
          ...this.uploadsGrade2,
        ];
        const totalGrade = grades.reduce(
          (total: number, curr: NotWellDefinedObject) => {
            return total + curr.grade;
          },
          0
        );
        this.$fire.database
          .ref(`users/${uid}`)
          .child("sm_4")
          .set({ done: true, grade: totalGrade.toFixed(2) });
        this.sm_4 = {
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
