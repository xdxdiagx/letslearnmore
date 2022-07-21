<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start pt-14 px-5"
    color="blue lighten-3"
  >
    <p class="mb-4 d-flex">
      <span class="mr-4">{{ item.no }}.</span
      ><span class="text-justify">{{ item.question }}</span>
    </p>
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          color="transparent"
          width="100%"
          class="d-flex justify-end mb-4"
        >
          <v-btn
            class="text-capitalize float-right"
            small
            v-bind="attrs"
            v-on="on"
          >
            Show Diagram
          </v-btn>
        </v-sheet>
      </template>

      <v-card color="blue lighten-3">
        <v-card-title class="error--text text-h6">
          CIRCULAR DIAGRAM
        </v-card-title>
        <v-card-text class="px-4">
          <v-sheet
            width="80%"
            class="mx-auto d-flex justify-space-around transparent"
          >
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle"
              :style="sheetStyle"
            ></v-sheet>
            <v-icon size="32">mdi-arrow-right-thick</v-icon>
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle"
              :style="sheetStyle"
            ></v-sheet>
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
              class="rounded-circle"
              :style="sheetStyle"
            ></v-sheet>

            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle"
              :style="sheetStyle"
            ></v-sheet>
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
              class="rounded-circle"
              :style="sheetStyle"
            ></v-sheet>
            <v-icon size="32">mdi-arrow-left-thick</v-icon>
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle"
              :style="sheetStyle"
            ></v-sheet>
          </v-sheet>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <img width="100%" :src="item.figure" alt="Question Figure" />

    <audio v-if="voiceover" ref="voiceover">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class FigureQuestion extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly item!: NotWellDefinedObject;
  @Prop() readonly correctAns!: string;

  private dialog = false;

  private mounted() {
    const voiceover: any = this.$refs?.voiceover;
    voiceover.play();
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "#fff",
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "#FFC107",
  };
}
</script>
