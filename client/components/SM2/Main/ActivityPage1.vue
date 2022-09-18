<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-start pt-14"
    color="blue lighten-3"
  >
    <v-sheet dark width="auto" class="py-1 px-2 ml-4" rounded color="orange">
      <h3>DIRECTIONS:</h3>
    </v-sheet>
    <v-sheet
      width="100%"
      class="d-flex flex-column px-4 pb-2 transparent"
      style="position: relative"
    >
      <h3 class="error--text my-1 font-italic">
        How to check your heart rate?
      </h3>
      <content-card
        v-for="(content, i) in contents"
        :key="i"
        :content="content.text"
        :contentStyle="content.cardStyle"
        :color="content.color"
        :elevation="content.elevation"
        :rounded="content.rounded"
      />
    </v-sheet>
    <v-sheet
      width="100%"
      class="flex-grow-1 transparent px-4"
      style="position: relative"
    >
      <ol class="pr-4 pl-6 text-caption text-sm-subtitle-1">
        <li>
          <p class="mb-2 text-justify">
            At the wrist, lightly press the index and middle fingers of one hand
            on the opposite wrist, just below the base of the thumb.
          </p>
        </li>
        <li>
          <p class="mb-2 text-justify">
            At the neck, lightly press the side of the neck, just below your
            jawbone. You may need to move your fingers around slightly up or
            down until you feel the pulsing.
          </p>
        </li>
        <li>
          <p class="mb-2 text-justify">
            You may use a watch with a second hand or look at a clock with a
            second hand. The timer of your cell phone can be a great help to do
            this.
          </p>
        </li>
        <li>
          <p class="mb-2 text-justify">
            Count the number of beats in 15 seconds, and multiply by four.
            That’s your heart rate.
          </p>
        </li>
      </ol>
      <v-row no-gutters class="text-caption font-weight-bold" align="end">
        <v-col cols="3" class="text-right pr-2 pb-1"
          ><span>Count your pulse </span></v-col
        >
        <v-col cols="1" class="text-caption">
          <v-text-field
            hide-details
            dense
            color="black"
            type="number"
            v-model="pulseRate"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="text-center pb-1"
          ><span> beats in 15 seconds x 4 = </span></v-col
        >
        <v-col cols="1" class="text-caption">
          <v-text-field
            readonly
            :value="bpm"
            hide-details
            dense
            color="black"
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="pl-2 pb-1"><span> beats/minute</span></v-col>
      </v-row>
      <p class="text-caption font-italic mt-2">
        (To get the most accurate reading, you may want to repeat a few times
        and use the average of the three values.)
      </p>
    </v-sheet>

    <audio ref="voiceover_1">
      <source :src="voiceover1" type="audio/ogg" />
      <source :src="voiceover1" type="audio/mpeg" />
      <source :src="voiceover1" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <audio ref="voiceover_2">
      <source :src="voiceover2" type="audio/ogg" />
      <source :src="voiceover2" type="audio/mpeg" />
      <source :src="voiceover2" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class ActivityPage1 extends Vue {
  @Prop() readonly objectives!: string[];

  private pulseRate = 0;

  private voiceover1 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FDirections-2021-08-19%2005_18_40.wav?alt=media&token=2a3d52c7-cb26-4978-93de-488f540df9dd";
  private voiceover2 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FAt%20the%20wrist%2014-2021-08-19%2005_23_57.wav?alt=media&token=7aaff6fa-3e0f-4754-aa11-73019fd0367d";

  private contents: NotWellDefinedObject[] = [
    {
      text: `According to the Harvard Medical School Special Report Diseases of the Heart, it’s easy to check your pulse using just your fingers, either at the wrist or the side of the neck.`,
      cardStyle: {
        width: "100%",
        height: "auto",
        borderColor: "#2196F3",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "transparent",
      },
      elevation: "0",
      rounded: false,
    },
  ];

  private get bpm() {
    return this.pulseRate * 4;
  }

  private mounted() {
    const voiceover_1: any = this.$refs?.voiceover_1;
    const voiceover_2: any = this.$refs?.voiceover_2;
    voiceover_1.play();
    voiceover_1.addEventListener("ended", () => {
      voiceover_2.play();
    });
  }
}
</script>
