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
        <v-expansion-panel-header> Boom Card 1 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="item in answers1"
              :key="item.no"
              color="transparent"
              width="100%"
              class="mb-4"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.question }}</span>
              </p>
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ item.input }}</v-sheet
              >
            </v-sheet>
            <PunnettSquare :matrix="punnett1" class="mx-auto" />
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 2 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="item in answers2"
              :key="item.no"
              color="transparent"
              width="100%"
              class="mb-4"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.question }}</span>
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
            <PunnettSquare :matrix="punnett2" class="mx-auto" />
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 3 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="item in answers3"
              :key="item.no"
              color="transparent"
              width="100%"
              class="mb-4"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.question }}</span>
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
            <PunnettSquare :matrix="punnett3" class="mx-auto" />
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 4 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet width="100%" color="transparent" class="mt-2">
            <v-sheet color="transparent" width="100%" class="mb-4">
              <ImageContainer :src="upload4" />
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
import PunnettSquare from "Component/Global/PunnettSquare.vue";

@Component({
  layout: "activity",
  components: {
    PunnettSquare,
  },
})
export default class SM5_Activity extends Vue {
  private answers1: NotWellDefinedObject[] = [];
  private punnett1: NotWellDefinedObject[] = [];
  private answers2: NotWellDefinedObject[] = [];
  private punnett2: NotWellDefinedObject[] = [];
  private answers3: NotWellDefinedObject[] = [];
  private punnett3: NotWellDefinedObject[] = [];
  private upload4 = "";
  private sm_5: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_5 = (await this.$user.getCurrentUser()).sm_5 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_5/${uid}/bc1`)
      .get()
      .then((data) => {
        this.answers1 = data.val()?.answers || [];
        this.punnett1 = data.val()?.punnett || [];
      });
    this.$fire.database
      .ref(`sm_5/${uid}/bc2`)
      .get()
      .then((data) => {
        this.answers2 = data.val()?.answers || [];
        this.punnett2 = data.val()?.punnett || [];
      });
    this.$fire.database
      .ref(`sm_5/${uid}/bc3`)
      .get()
      .then((data) => {
        this.answers3 = data.val()?.answers || [];
        this.punnett3 = data.val()?.punnett || [];
      });
    this.$fire.database
      .ref(`sm_5/${uid}/bc4`)
      .get()
      .then((data) => {
        this.upload4 = data.val()?.url || "";
      });
  }

  private get grade() {
    if (this.sm_5.grade == 0) return "Not yet graded";
    else return `${Math.ceil(this.sm_5.grade)}%`;
  }

  private get gradeColor() {
    if (this.sm_5.grade == 0) return "";
    if (this.sm_5.grade <= 50) return "amber";
    if (this.sm_5.grade <= 75) return "yellow";
    if (this.sm_5.grade <= 85) return "light-green";
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
