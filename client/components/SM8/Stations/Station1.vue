<template>
  <v-sheet height="100%" width="100%" color="blue lighten-3">
    <v-btn
      @click="$emit('close')"
      elevation="0"
      class="mt-n2 mr-n2"
      fixed
      top
      right
      fab
      small
      plain
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-window
      show-arrows
      v-model="stationIndex"
      touchless
      style="width: 100%; height: 100%"
    >
      <v-window-item class="fill-height ma-0" :value="1">
        <v-sheet height="100%" width="100%" class="transparent">
          <img
            height="40%"
            width="100%"
            src="~assets/img/station_1.png"
            alt="Classroom Background"
          />
          <ContentCard
            :content="content"
            :contentStyle="contentStyle"
            :elevation="0"
            class="ma-4"
          />
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          height="100%"
          width="100%"
          class="transparent d-flex flex-column"
        >
          <img
            height="15%"
            width="100%"
            src="~assets/img/header.png"
            alt="Classroom Background"
          />
          <v-sheet :style="contentStyle" class="pa-4 ma-4 flex-grow-1">
          </v-sheet>
        </v-sheet>
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({})
export default class Station1 extends Vue {
  private stationIndex = 0;

  private content: string = `During your discussions, you have surely familiarized yourself with the terms associated with Cellular Respiration.<br/><span class="text-h6 yellow">TASK!</span><br/><p class="error--text mb-0">Find the 20 (twenty) vocabulary words related to cellular respiration on the next slide. Look for them in all directions, including backward and diagonally. Good luck!</p>`;

  private next() {
    this.stationIndex++;
  }

  private prev() {
    this.stationIndex--;
  }

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#FF9100",
    borderWidth: "5px",
    borderStyle: "dashed",
    backgroundColor: "transparent",
    fontStyle: "italic",
  };
}
</script>

<style></style>
