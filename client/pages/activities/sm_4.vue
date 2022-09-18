<template>
  <v-sheet
    width="100%"
    height="100%"
    max-width="720px"
    class="d-flex flex-column justify-start align-start px-5 mx-auto pt-14 overflow-y-auto"
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
        v-for="(item, index) in answers1"
        :key="index"
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
        <v-menu
          v-if="answersGrade1.length > 0"
          v-show="answerIndex1 == index"
          v-model="answerMenu1"
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
              @click="answerIndex1 = index"
            >
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
            </v-btn>
          </template>

          <v-card v-if="answerIndex1 == index" class="pa-4">
            <v-row no-gutters justify="space-between">
              <span class="text-subtitle-2">Points:</span>
              <span class="text-subtitle-2 font-weight-regular"
                >{{ answersGrade1[index].grade }} points</span
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
                <p class="mb-0">{{ answersGrade1[index].comment }}</p>
              </v-sheet>
            </v-row>
          </v-card>
        </v-menu>
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
        <v-menu
          v-if="uploadsGrade1.length > 0"
          v-show="uploadIndex1 == index"
          v-model="uploadMenu1"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              icon
              absolute
              bottom
              right
              large
              v-bind="attrs"
              v-on="on"
              @click="uploadIndex1 = index"
            >
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
            </v-btn>
          </template>

          <v-card v-if="uploadIndex1 == index" class="pa-4">
            <v-row no-gutters justify="space-between">
              <span class="text-subtitle-2">Points:</span>
              <span class="text-subtitle-2 font-weight-regular"
                >{{ uploadsGrade1[index].grade }} points</span
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
                <p class="mb-0">{{ uploadsGrade1[index].comment }}</p>
              </v-sheet>
            </v-row>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-sheet>
    <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
      <h3>Part 2</h3>
    </v-sheet>
    <v-sheet color="transparent" class="mt-2">
      <v-sheet
        v-for="(item, index) in answers2"
        :key="item.no"
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
        <v-menu
          v-if="answersGrade2.length > 0"
          v-show="answerIndex2 == index"
          v-model="answerMenu2"
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
              @click="answerIndex2 = index"
            >
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
            </v-btn>
          </template>

          <v-card v-if="answerIndex2 == index" class="pa-4">
            <v-row no-gutters justify="space-between">
              <span class="text-subtitle-2">Points:</span>
              <span class="text-subtitle-2 font-weight-regular"
                >{{ answersGrade2[index].grade }} points</span
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
                <p class="mb-0">{{ answersGrade2[index].comment }}</p>
              </v-sheet>
            </v-row>
          </v-card>
        </v-menu>
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
        <v-menu
          v-if="uploadsGrade2.length > 0"
          v-show="uploadIndex2 == index"
          v-model="uploadMenu2"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              icon
              absolute
              bottom
              right
              large
              v-bind="attrs"
              v-on="on"
              @click="uploadIndex2 = index"
            >
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
            </v-btn>
          </template>

          <v-card v-if="uploadIndex2 == index" class="pa-4">
            <v-row no-gutters justify="space-between">
              <span class="text-subtitle-2">Points:</span>
              <span class="text-subtitle-2 font-weight-regular"
                >{{ uploadsGrade2[index].grade }} points</span
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
                <p class="mb-0">{{ uploadsGrade2[index].comment }}</p>
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
  private answerMenu1 = false;
  private uploadMenu1 = false;
  private answerMenu2 = false;
  private uploadMenu2 = false;
  private answerIndex1 = 0;
  private uploadIndex1 = 0;
  private answerIndex2 = 0;
  private uploadIndex2 = 0;

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_4 = (await this.$user.getCurrentUser()).sm_4 || {
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
