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
      <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
        <h3>Part 1</h3>
      </v-sheet>
      <v-spacer></v-spacer>
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
        <v-menu
          v-if="uploadsGrade.length > 0"
          v-show="uploadIndex == index"
          v-model="uploadMenu"
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
              @click="uploadIndex = index"
            >
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
            </v-btn>
          </template>

          <v-card v-if="uploadIndex == index" class="pa-4">
            <v-row no-gutters justify="space-between">
              <span class="text-subtitle-2">Points:</span>
              <span class="text-subtitle-2 font-weight-regular"
                >{{ uploadsGrade[index].grade }} points</span
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
                <p class="mb-0">{{ uploadsGrade[index].comment }}</p>
              </v-sheet>
            </v-row>
          </v-card>
        </v-menu>
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
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({
  layout: "activity",
})
export default class SM1_Activity extends Vue {
  private answers: NotWellDefinedObject[] = [];
  private uploads: NotWellDefinedObject[] = [];
  private answersGrade: NotWellDefinedObject[] = [];
  private uploadsGrade: NotWellDefinedObject[] = [];
  private sm_1: NotWellDefinedObject = {};
  private answerMenu = false;
  private uploadMenu = false;
  private answerIndex = 0;
  private uploadIndex = 0;

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_1 = (await this.$user.getCurrentUser()).sm_1 || {
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
        console.log(this.answersGrade);
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
