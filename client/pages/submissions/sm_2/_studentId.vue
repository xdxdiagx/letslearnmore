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
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          width="100%"
          height="100%"
          color="blue lighten-3"
          class="d-flex flex-column justify-center align-center"
          v-if="sequence.length > 0"
        >
          <v-sheet width="100%" color="transparent">
            <span
              class="error--text text-body-1 font-weight-medium text-h6 text-left"
            >
              CIRCULAR DIAGRAM
            </span>
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
export default class SM2_Activity extends Vue {
  private answers: NotWellDefinedObject[] = [];
  private uploads: NotWellDefinedObject[] = [];
  private sequence: NotWellDefinedObject[] = [];
  private sm_2: NotWellDefinedObject = {};
  private part = 0;

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
