<template>
  <v-sheet width="270px" height="270px">
    <v-row no-gutters>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="cellStyle"
          style="position: relative"
        >
          <v-btn disabled absolute bottom left icon class="mb-n2 ml-n2">
            <v-icon size="36">mdi-gender-female</v-icon>
          </v-btn>
          <v-btn disabled absolute top right icon class="mt-n2 mr-n2">
            <v-icon size="36">mdi-gender-male</v-icon>
          </v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[0][1] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[0][2] }}</v-sheet
        >
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[1][0] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[1][1] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[1][2] }}</v-sheet
        >
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="redCellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[2][0] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[2][1] }}</v-sheet
        >
      </v-col>
      <v-col cols="4">
        <v-sheet
          width="100%"
          height="90px"
          :style="cellStyle"
          class="d-flex justify-center align-center text-h5"
          >{{ matrix[2][2] }}</v-sheet
        >
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class PunnettSquare extends Vue {
  @Prop() readonly matrix!: NotWellDefinedObject[];

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

  @Watch("matrix", { deep: true })
  onMatrixChange() {
    this.$emit("updateMatrix", this.matrix);
  }
}
</script>

<style></style>
