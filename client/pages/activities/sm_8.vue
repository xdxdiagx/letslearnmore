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
        <v-expansion-panel-header> Station 2 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet color="transparent" width="100%" class="mb-4">
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answers2 }}</v-sheet
              >
            </v-sheet>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Station 3 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="(item, index) in answers3"
              :key="index"
              color="transparent"
              width="100%"
              class="mb-4"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.task }}</span>
              </p>
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ item.answer }}</v-sheet
              >
            </v-sheet>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Station 4 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet color="transparent" width="100%" class="mb-4">
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answers4 }}</v-sheet
              >
            </v-sheet>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Station 5 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet color="transparent" width="100%" class="mb-4">
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answers5 }}</v-sheet
              >
            </v-sheet>
          </v-sheet>
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
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({
  layout: "activity",
})
export default class SM8_Activity extends Vue {
  private answers2: string = "";
  private answers3: NotWellDefinedObject[] = [];
  private answers4: string = "";
  private answers5: string = "";
  private sm_8: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_8 = (await this.$user.getCurrentUser()).sm_8 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_8/${uid}/sta2`)
      .get()
      .then((data) => {
        this.answers2 = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_8/${uid}/sta3`)
      .get()
      .then((data) => {
        this.answers3 = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_8/${uid}/sta4`)
      .get()
      .then((data) => {
        this.answers4 = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_8/${uid}/sta5`)
      .get()
      .then((data) => {
        this.answers5 = data.val()?.url || "";
      });
  }

  private get grade() {
    if (this.sm_8.grade == 0) return "Not yet graded";
    else return `${Math.ceil(this.sm_8.grade)}%`;
  }

  private get gradeColor() {
    if (this.sm_8.grade == 0) return "";
    if (this.sm_8.grade <= 50) return "amber";
    if (this.sm_8.grade <= 75) return "yellow";
    if (this.sm_8.grade <= 85) return "light-green";
    else return "green";
  }

  private getMatrix(matrix: NotWellDefinedObject[]) {
    console.log(matrix);
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
