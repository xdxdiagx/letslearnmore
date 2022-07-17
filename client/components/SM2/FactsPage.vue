<template>
  <v-sheet width="100%" height="100%" class="px-4 pt-4" color="blue lighten-3">
    <v-row no-gutters style="position: relative">
      <h3
        style="
          position: absolute;
          bottom: 20%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, 0);
          line-height: 1;
          color: #fff;
        "
        class="text-center text-h5 text-sm-h2"
      >
        Facts
      </h3>
      <img src="~assets/img/ribbon.png" width="100%" alt="Ribbon Banner" />
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" class="pa-0">
        <v-row
          no-gutters
          v-for="fact in facts"
          :key="fact.text"
          :justify="fact.alignment"
          class="my-4 px-6"
        >
          <v-card
            width="200"
            rounded="lg"
            class="pa-4"
            dark
            :style="fact.style"
          >
            <v-row
              no-gutters
              justify="center"
              align="center"
              class="fill-height"
            >
              <span class="text-center text-subtitle-2 font-italic">{{
                fact.text
              }}</span>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>

    <audio v-if="voiceover != ''" autoplay>
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
export default class FactsPage extends Vue {
  @Prop() readonly voiceover!: string;

  private facts: NotWellDefinedObject[] = [
    {
      text: "The average persons’ heart will beat 2.5 billion times during a lifetime.",
      alignment: "end",
      style: {
        borderColor: "#fff",
        borderWidth: "3px",
        borderStyle: "solid",
        backgroundColor: "#FFC107",
      },
    },
    {
      text: "Amazingly, it takes under 20 seconds for one red blood cell to go around the whole body and Red Blood Cells last about 4 months before your body makes new one.",
      alignment: "start",
      style: {
        borderColor: "#fff",
        borderWidth: "3px",
        borderStyle: "solid",
        backgroundColor: "#4CAF50",
      },
    },
    {
      text: "If you put one adult’s veins capillaries and arteries in one long line it would stretch 60,000 miles which would circle the Earth two and a half times.",
      alignment: "end",
      style: {
        borderColor: "#fff",
        borderWidth: "3px",
        borderStyle: "solid",
        backgroundColor: "#FF5722",
      },
    },
  ];

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#FFEB3B",
    borderWidth: "3px",
    borderStyle: "solid",
  };
}
</script>
