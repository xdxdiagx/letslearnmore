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
    <v-sheet
      width="100%"
      v-for="(answer, index) in answers"
      :key="index"
      color="transparent"
    >
      <v-sheet
        width="100%"
        color="transparent"
        class="d-flex flex-row align-center justify-space-between mb-2"
      >
        <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
          <h3>Part {{ index + 1 }}</h3>
        </v-sheet>
      </v-sheet>
      <v-sheet
        v-for="item in answer"
        :key="item.no"
        color="transparent"
        width="100%"
        class="mb-4"
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
        <h4>Grade: {{ grade }}</h4>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({
  layout: "activity",
})
export default class SM3_Activity extends Vue {
  private answers: NotWellDefinedObject[] = [];
  private uploads: NotWellDefinedObject[] = [];
  private sm_3: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$route.params.studentId;
    this.sm_3 = (await this.$user.getUserById(uid)).sm_3 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_3/${uid}`)
      .get()
      .then((data) => {
        this.answers = this.splitIntoChunk(data.val()?.answers, 2) || [];
        console.log(this.answers);
      });
  }

  private get grade() {
    if (this.sm_3.grade == 0) return "Not yet graded";
    else return `${Math.ceil(this.sm_3.grade)}%`;
  }

  private get gradeColor() {
    if (this.sm_3.grade == 0) return "";
    if (this.sm_3.grade <= 50) return "amber";
    if (this.sm_3.grade <= 75) return "yellow";
    if (this.sm_3.grade <= 85) return "light-green";
    else return "green";
  }

  private splitIntoChunk(arr: NotWellDefinedObject[], chunk: number) {
    let res = [];
    while (arr.length > 0) {
      let tempArray;
      tempArray = arr.splice(0, chunk);
      res.push(tempArray);
    }

    return res;
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
