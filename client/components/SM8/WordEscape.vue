<template>
  <v-sheet class="d-flex justify-center align-center" color="transparent">
    <v-sheet
      width="30px"
      height="30px"
      class="d-flex justify-center align-center"
      @click="editCell"
      :class="[correct ? 'correct' : 'wrong']"
      v-for="(box, index) in boxes"
      :key="index"
    >
      {{ box }}
    </v-sheet>
    <v-dialog persistent width="300px" v-model="textDialog">
      <v-card>
        <v-card-text class="pa-3">
          <v-sheet class="d-flex align-center">
            <v-text-field
              outlined
              dense
              hide-details
              placeholder="Type here"
              autofocus
              class="mr-2"
              v-model="cellValue"
              @keyup="checkAnswer"
              @keyup.enter="closeModal"
            ></v-text-field>
            <v-btn icon @click="closeModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class WordEscape extends Vue {
  @Prop() readonly word!: string[];
  @Prop() readonly correctAns!: string;

  private boxes: string[] = [];
  private textDialog = false;
  private correct = false;
  private cellValue = "";

  private mounted() {
    this.boxes = this.word;
  }

  private checkAnswer() {
    if (this.cellValue.toLowerCase() == this.correctAns.toLowerCase()) {
      this.boxes = this.cellValue.split("");
      this.correct = true;
    } else this.correct = false;
  }

  private editCell() {
    this.textDialog = !this.textDialog;
  }

  private closeModal() {
    this.cellValue = "";
    this.textDialog = false;
  }

  private boxStyle: NotWellDefinedObject = {
    borderColor: "#000",
    borderWidth: "1px",
    borderStyle: "solid",
  };
}
</script>

<style scoped>
.correct {
  border: 1px solid #4caf50;
}

.wrong {
  border: 1px solid #ef5350;
}
</style>
