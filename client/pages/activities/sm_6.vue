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
    <v-expansion-panels popout>
      <v-expansion-panel>
        <v-expansion-panel-header> Recovery 1 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers1" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Recovery 2 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers2" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Recovery 3 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers3" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Recovery 4 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RecoveryPage :fields="answers4" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
  private sm_6: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_6 = (await this.$user.getCurrentUser()).sm_6 || {
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
    else return `${Math.ceil(this.sm_6.grade)}%`;
  }

  private get gradeColor() {
    if (this.sm_6.grade == 0) return "";
    if (this.sm_6.grade <= 50) return "amber";
    if (this.sm_6.grade <= 75) return "yellow";
    if (this.sm_6.grade <= 85) return "light-green";
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
}
</script>
