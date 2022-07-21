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
      <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
        <h3>Part 1</h3>
      </v-sheet>
      <v-spacer></v-spacer>
      <v-sheet dark width="auto" class="py-1 px-2" rounded :color="gradeColor">
        <h4>Grade: {{ grade }}</h4>
      </v-sheet>
    </v-sheet>
    <v-sheet color="transparent" class="mt-2">
      <v-sheet
        v-for="item in answers"
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
      v-if="uploads.length > 0"
      dark
      width="auto"
      class="py-1 px-2"
      rounded
      color="orange"
    >
      <h3>Part 2</h3>
    </v-sheet>
    <v-sheet
      v-if="uploads.length > 0"
      width="100%"
      color="transparent"
      class="mt-2"
    >
      <v-sheet
        v-for="(img, index) in uploads"
        :key="index"
        color="transparent"
        width="100%"
        class="mb-4"
      >
        <ImageContainer :src="img.url" />
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
  private sm_2: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_2 = (await this.$user.getCurrentUser()).sm_2 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_2/${uid}`)
      .get()
      .then((data) => {
        this.answers = data.val()?.answers || [];
      });
  }

  private get grade() {
    if (this.sm_2.grade == 0) return "Not yet graded";
    else return `${Math.ceil(this.sm_2.grade)}%`;
  }

  private get gradeColor() {
    if (this.sm_2.grade == 0) return "";
    if (this.sm_2.grade <= 50) return "amber";
    if (this.sm_2.grade <= 75) return "yellow";
    if (this.sm_2.grade <= 85) return "light-green";
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
}
</script>
