<template>
  <v-sheet
    width="100%"
    height="100%"
    class="px-4 pt-14"
    color="blue lighten-3"
    style="
      background-image: url('https://i.pinimg.com/564x/2b/b8/6a/2bb86aceae0f2d2ccdea9aaa46b78843.jpg');
      background-size: 100% 100%;
    "
  >
    <h1 class="text-center error--text font-italic">
      I can help in species recovery through...
    </h1>
    <v-row no-gutters class="mx-10 mt-16">
      <v-col class="pa-1" cols="6" v-for="(box, index) in boxes" :key="index">
        <v-sheet
          width="100%"
          height="100px"
          rounded="lg"
          :style="boxStyle"
          @click="inputAns(index)"
          class="pa-4 overflow-y-auto d-flex justify-center align-center"
        >
          {{ box }}
        </v-sheet>
      </v-col>
    </v-row>
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-dialog persistent v-model="answerDialog">
      <v-card rounded="lg">
        <v-card-text class="px-4 pt-4 pb-0">
          <v-textarea
            v-model="answer"
            style="border: 2px solid orange"
            class="rounded-lg mt-2"
            background-color="white"
            flat
            solo
            hide-details
            autofocus
            no-resize
            clearable
            rows="4"
          ></v-textarea>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveInput"> Save </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class SpeciesRecovery extends Vue {
  @Prop() readonly voiceover!: string;

  private boxes: string[] = ["", "", "", "", "", ""];

  private answerDialog = false;
  private answer = "";
  private ansIndex = 0;

  private inputAns(index: number) {
    this.answerDialog = !this.answerDialog;
    this.ansIndex = index;
  }

  private saveInput() {
    this.boxes[this.ansIndex] = this.answer;
    this.answer = "";
    this.answerDialog = false;
  }

  private boxStyle: NotWellDefinedObject = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#000",
    backgroundColor: "#2196F3",
    overflowWrap: "break-word",
  };
}
</script>
