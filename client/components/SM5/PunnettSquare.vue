<template>
  <v-sheet width="330px" height="330px">
    <v-row no-gutters>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="110px"
          :style="cellStyle"
          style="position: relative"
        >
          <v-btn disabled absolute bottom left icon>
            <v-icon size="48">mdi-gender-female</v-icon>
          </v-btn>
          <v-btn disabled absolute top right icon>
            <v-icon size="48">mdi-gender-male</v-icon>
          </v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet
          @click="editCell(0, 1)"
          width="100%"
          height="110px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[0][1] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          @click="editCell(0, 2)"
          width="100%"
          height="110px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[0][2] }}</v-sheet
        >
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <v-sheet
          @click="editCell(1, 0)"
          width="100%"
          height="110px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[1][0] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          @click="editCell(1, 1)"
          width="100%"
          height="110px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[1][1] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          @click="editCell(1, 2)"
          width="100%"
          height="110px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[1][2] }}</v-sheet
        >
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <v-sheet
          @click="editCell(2, 0)"
          width="100%"
          height="110px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[2][0] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          @click="editCell(2, 1)"
          width="100%"
          height="110px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[2][1] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          @click="editCell(2, 2)"
          width="100%"
          height="110px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[2][2] }}</v-sheet
        >
      </v-col>
    </v-row>
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
              @keyup.enter="saveCellValue"
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
export default class PunnettSquare extends Vue {
  private textDialog = false;
  private cellValue = "";
  private matrix = [
    [null, "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  private cell: NotWellDefinedObject = {
    row: 0,
    col: 0,
  };

  private editCell(row: number, col: number) {
    this.cell = {
      row: row,
      col: col,
    };
    this.textDialog = !this.textDialog;
  }

  private saveCellValue() {
    this.matrix[this.cell.row][this.cell.col] = this.cellValue;
    this.closeModal();
  }

  private closeModal() {
    this.cellValue = "";
    this.textDialog = false;
  }

  private cellStyle: NotWellDefinedObject = {
    borderColor: "#000",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  private redCellStyle: NotWellDefinedObject = {
    borderColor: "#000",
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: "#F44336",
  };
}
</script>

<style></style>
