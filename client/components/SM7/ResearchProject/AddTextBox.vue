<template>
  <v-sheet :width="width" :height="height" color="transparent" class="mb-4">
    <v-sheet color="transparent" width="100%" height="100%">
      <v-sheet
        v-if="content == ''"
        width="100%"
        height="100%"
        :style="sheetStyle"
        @click="inputAns"
        rounded="lg"
        class="pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular d-flex justify-center align-center text-center grey--text"
        >{{ placeholder }}</v-sheet
      >
      <v-sheet
        v-else
        width="100%"
        height="100%"
        :style="sheetStyle"
        @click="inputAns"
        rounded="lg"
        class="pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular"
        >{{ content }}</v-sheet
      >
    </v-sheet>
    <v-dialog persistent v-model="answerDialog">
      <v-card rounded="lg">
        <v-card-text class="px-4 pt-4 pb-0">
          <v-textarea
            v-model="input"
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
export default class AddTextBox extends Vue {
  @Prop() readonly width!: string | number;
  @Prop() readonly height!: string | number;
  @Prop() readonly placeholder!: string;

  private answerDialog = false;
  private input = "";
  private content = "";

  private inputAns() {
    this.answerDialog = !this.answerDialog;
  }

  private saveInput() {
    this.answerDialog = false;
    this.content = this.input;
    this.$emit("saveInput", this.input);
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "dashed",
    overflowWrap: "break-word",
  };
}
</script>
