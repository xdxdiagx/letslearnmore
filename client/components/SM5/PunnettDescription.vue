<template>
  <v-sheet width="100%" height="100%" class="pt-14 px-5" color="blue lighten-3">
    <v-row no-gutters justify="center" class="mb-4">
      <v-sheet class="px-3 custom-border">
        <h2 class="blue--text text--darken-4">PUNNETT SQUARE</h2>
      </v-sheet>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col cols="7">
        <v-sheet width="180px" height="180px" class="mx-auto">
          <v-row no-gutters>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
                :style="cellStyle"
                style="position: relative"
              >
                <v-btn disabled absolute bottom left icon class="mb-n4 ml-n4">
                  <v-icon size="24">mdi-gender-female</v-icon>
                </v-btn>
                <v-btn disabled absolute top right icon class="mt-n4 mr-n4">
                  <v-icon size="24">mdi-gender-male</v-icon>
                </v-btn>
              </v-sheet>
            </v-col>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
                :style="redCellStyle"
                class="d-flex justify-center align-center text-h5"
                >{{ matrix[0][1] }}</v-sheet
              >
            </v-col>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
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
                height="60px"
                :style="redCellStyle"
                class="d-flex justify-center align-center text-h5"
                >{{ matrix[1][0] }}</v-sheet
              >
            </v-col>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
                :style="cellStyle"
                class="d-flex justify-center align-center text-h5"
                >{{ matrix[1][1] }}</v-sheet
              >
            </v-col>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
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
                height="60px"
                :style="redCellStyle"
                class="d-flex justify-center align-center text-h5"
                >{{ matrix[2][0] }}</v-sheet
              >
            </v-col>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
                :style="cellStyle"
                class="d-flex justify-center align-center text-h5"
                >{{ matrix[2][1] }}</v-sheet
              >
            </v-col>
            <v-col cols="4">
              <v-sheet
                width="100%"
                height="60px"
                :style="cellStyle"
                class="d-flex justify-center align-center text-h5"
                >{{ matrix[2][2] }}</v-sheet
              >
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="5" class="text-center">
        <span class="amber--text">PUNNETT SQUARE</span>
        <p class="text-justify text-subtitle-2 font-italic">
          is a table diagram that is used to predict and calculate the possible
          outcomes for a genetic cross between two individuals with known
          genotypes are given.
        </p>
      </v-col>
    </v-row>
    <img
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <img
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Classrom Floor"
    />
    <audio v-if="voiceover != ''" ref="voice_over">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import PunnettSquare from "Component/Global/PunnettSquare.vue";

@Component({
  components: {
    PunnettSquare,
  },
})
export default class PunnettDescription extends Vue {
  @Prop() readonly voiceover!: string;

  private matrix: NotWellDefinedObject[] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  private mounted() {
    const voice_over: any = this.$refs?.voice_over;
    voice_over.play();
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

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1;
}

.custom-border {
  border: 3px solid #ffc107 !important;
}
</style>
