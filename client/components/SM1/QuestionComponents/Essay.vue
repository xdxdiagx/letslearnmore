<template>
  <v-sheet width="100%" color="transparent" class="mb-4">
    <v-sheet color="transparent" width="100%">
      <p class="mb-2 d-flex">
        <span class="mr-4">{{ item.no }}.</span
        ><span class="text-left">{{ item.question }}</span>
      </p>
      <v-sheet
        width="100%"
        height="120px"
        :style="sheetStyle"
        @click="inputAns"
        rounded="lg"
        class="pa-4 overflow-y-auto"
        >{{ answer.input }}</v-sheet
      >
    </v-sheet>
    <v-dialog persistent v-model="answerDialog">
      <v-card rounded="lg">
        <v-card-text class="px-4 pt-4 pb-0">
          <span class="text-subtitle-2 font-weight-medium font-italic">{{
            answer.question
          }}</span>
          <v-textarea
            v-model="answer.input"
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
export default class EssayQuestion extends Vue {
  @Prop() readonly item!: NotWellDefinedObject;
  @Prop() readonly correctAns!: string;

  private answerDialog = false;
  private answer: NotWellDefinedObject = {};

  private mounted() {
    this.answer = this.item;
  }

  private inputAns() {
    this.answerDialog = !this.answerDialog;
  }

  private saveInput() {
    this.answerDialog = false;
    this.$emit("saveInput", this.answer);
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "orange",
    borderWidth: "2px",
    borderStyle: "solid",
    overflowWrap: "break-word",
  };
}
</script>
