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
            height="120px"
            width="100%"
            src="~assets/img/header.png"
            alt="Classroom Background"
          />
          <v-sheet
            :style="contentStyle"
            class="pa-4 ma-4 flex-grow-1 overflow-y-auto"
          >
            <v-sheet
              color="transparent"
              width="100%"
              v-for="(item, index) in items"
              :key="index"
            >
              <p class="mb-2 d-flex text-subtitle-2">
                <span class="mr-4">{{ index + 1 }}.</span
                ><span class="text-left">{{ item.hint }}</span>
              </p>
              <WordEscape
                v-for="(word, idw) in item.words"
                :key="idw"
                :word="word.word"
                :correctAns="word.correctAns"
                class="mb-2"
              />
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import WordEscape from "../WordEscape.vue";

@Component({
  components: {
    WordEscape,
  },
})
export default class Station1 extends Vue {
  private stationIndex = 0;

  private content: string = `During your discussions, you have surely familiarized yourself with the terms associated with Cellular Respiration.<br/><span class="text-h6 yellow">TASK!</span><br/><p class="error--text mb-0">Find the 20 (twenty) vocabulary words related to cellular respiration on the next slide. Look for them in all directions, including backward and diagonally. Good luck!</p>`;

  private next() {
    this.stationIndex++;
  }

  private prev() {
    this.stationIndex--;
  }

  private items: NotWellDefinedObject[] = [
    {
      hint: "The first step in the breakdown of glucose to extract energy for cellular metabolism.",
      words: [
        {
          word: ["", "", "", "", "o", "", "", "", "i", ""],
          correctAns: "glycolysis",
        },
      ],
    },
    {
      hint: "The only part of cellular respiration that directly consumes oxygen.",
      words: [
        {
          word: ["", "", "", "", "", "", "o", ""],
          correctAns: "electron",
        },
        {
          word: ["", "", "", "", "", "", "o", "", ""],
          correctAns: "transport",
        },
        {
          word: ["", "", "", "i", ""],
          correctAns: "chain",
        },
      ],
    },
    {
      hint: "The process of cellular respiration which takes place in the presence of oxygen gas to produce energy from food.",
      words: [
        {
          word: ["", "", "", "o", "", "i", ""],
          correctAns: "aerobic",
        },
      ],
    },
    {
      hint: "Part of the cell where cellular respiration takes place.",
      words: [
        {
          word: ["", "i", "", "", "", "", "o", "", "", "", "i", ""],
          correctAns: "mitochondria",
        },
      ],
    },
    {
      hint: "The movement of hydrogen ions across the membrane via ATP synthase.",
      words: [
        {
          word: ["", "", "", "", "i", "o", "", "", "o", "", "i", ""],
          correctAns: "chemiosmosis",
        },
      ],
    },
    {
      hint: "The process by which the pyruvate created by glycolysis is oxidized.",
      words: [
        {
          word: ["", "", "", "", "", "", "", ""],
          correctAns: "pyruvate",
        },
        {
          word: ["o", "", "i", "", "", "", "i", "o", ""],
          correctAns: "oxidation",
        },
      ],
    },
    {
      hint: "It is the product of the glycolytic process.",
      words: [
        {
          word: ["", "", "", "", "", "i", ""],
          correctAns: "pyruvic",
        },
        {
          word: ["", "", "i", ""],
          correctAns: "acid",
        },
      ],
    },
    {
      hint: "The process happens in the mitochondrial matrix, where pyruvate has been imported following glycolysis.",
      words: [
        {
          word: ["", "", "", "", ""],
          correctAns: "krebs",
        },
        {
          word: ["", "", "", "", ""],
          correctAns: "cycle",
        },
      ],
    },
    {
      hint: "The part of the cells where cellular respiration begins.",
      words: [
        {
          word: ["", "", "", "o", "", "", "", "", ""],
          correctAns: "cytoplasm",
        },
      ],
    },
    {
      hint: "It is used in the first step of the citric acid cycle.",
      words: [
        {
          word: ["", "", "", "", "", ""],
          correctAns: "acetyl",
        },
        {
          word: ["", "o", ""],
          correctAns: "coa",
        },
      ],
    },
    {
      hint: "Takes place in the absence of oxygen.",
      words: [
        {
          word: ["", "", "", "", "", "o", "", "i", ""],
          correctAns: "anaerobic",
        },
      ],
    },
    {
      hint: "The process that converts sugars into ethyl alcohol and carbon dioxide.",
      words: [
        {
          word: ["", "", "", "o", "", "o", "", "i", ""],
          correctAns: "alcoholic",
        },
        {
          word: ["", "", "", "", "", "", "", "", "", "i", "o", ""],
          correctAns: "fermentation",
        },
      ],
    },
    {
      hint: "Found in every living cell and can relocate energy wherever it is needed.",
      words: [
        {
          word: ["", "", ""],
          correctAns: "atp",
        },
      ],
    },
    {
      hint: "Carries electrons to the electron transport chain in mitochondria.",
      words: [
        {
          word: ["", "", "", ""],
          correctAns: "nadh",
        },
      ],
    },
    {
      hint: "The process by which cells break down food molecules into a usable form of energy, ATP.",
      words: [
        {
          word: ["", "", "", "", "", "", "", ""],
          correctAns: "cellular",
        },
        {
          word: ["", "", "", "", "i", "", "", "", "i", "o", ""],
          correctAns: "respiration",
        },
      ],
    },
  ];

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
