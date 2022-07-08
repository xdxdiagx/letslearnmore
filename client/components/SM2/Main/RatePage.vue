<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center pt-14"
    color="blue lighten-3"
  >
    <v-sheet
      width="100%"
      class="flex-grow-1 transparent"
      style="position: relative"
    >
      <img
        width="60%"
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fmedia%2Fmain%2FPulse%20Rate%20%26%20Heart%20Rate.gif?alt=media&token=761a0d59-357d-4bc9-94d6-2d68ae4eb8c5"
        alt="Pulse Rate"
        style="
          position: absolute;
          bottom: 10%;
          max-width: 550px;
          min-width: 300px;
        "
      />
      <h1
        class="font-weight-bold"
        style="
          position: absolute;
          top: 10%;
          right: 0;
          width: 70%;
          max-width: 300px;
        "
      >
        PULSE RATE & HEART RATE
      </h1>
    </v-sheet>
    <v-sheet
      width="100%"
      class="d-flex py-4 transparent"
      style="position: relative"
    >
      <content-card
        class="mb-16"
        :class="[i == 0 ? 'ml-4 mr-2' : 'ml-2 mr-4']"
        v-for="(content, i) in contents"
        :key="i"
        :content="content.text"
        :contentStyle="content.cardStyle"
        :elevation="content.elevation"
        :rounded="content.rounded"
      />
      <v-avatar
        size="64"
        style="
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translate(-50%, 0);
        "
      >
        <span class="text-h4 font-weight-bold error--text">VS</span>
      </v-avatar>
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
    <audio ref="voiceover_3">
      <source :src="voiceover3" type="audio/ogg" />
      <source :src="voiceover3" type="audio/mpeg" />
      <source :src="voiceover3" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class RatePage extends Vue {
  @Prop() readonly objectives!: string[];

  private voiceover1 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FPulse%20rate%20and%20heart%20rate-2021-08-19%2005_01_28.wav?alt=media&token=dbf6a25d-291c-4777-acdf-ce02c2923172";
  private voiceover2 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FPulse%20rate%20-2021-08-19%2005_02_12.wav?alt=media&token=ae846a82-da62-4565-a939-5b26e5ac4de8";
  private voiceover3 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FHeart%20rate%20-2021-08-19%2005_03_35.wav?alt=media&token=ddcdfb8b-2b2f-4fa0-b470-654ce3f7ab0a";

  private contents: NotWellDefinedObject[] = [
    {
      text: `The <span class="error--text font-weight-bold">PULSE RATE</span> is the number of times the blood flows from the capillaries that are caused due to the contractions in a minute. It can be accurately measured from the earlobe.`,
      cardStyle: {
        width: "100%",
        height: "auto",
        borderWidth: "2px",
        borderStyle: "solid",
      },
      elevation: "0",
      rounded: "xl",
    },
    {
      text: `The <span class="error--text font-weight-bold">HEART RATE</span> is the speed of the heartbeat measures by the number of contractions of the heart per minute. The heart rate can vary according to the body’s physical needs.`,
      cardStyle: {
        width: "100%",
        height: "auto",
        borderWidth: "2px",
        borderStyle: "solid",
      },
      elevation: "0",
      rounded: "xl",
    },
  ];

  private mounted() {
    const voiceover_1: any = this.$refs?.voiceover_1;
    const voiceover_2: any = this.$refs?.voiceover_2;
    const voiceover_3: any = this.$refs?.voiceover_3;
    voiceover_1.play();
    voiceover_1.addEventListener("ended", () => {
      this.contents[0].elevation = "12";
      this.contents[0].cardStyle.borderColor = "#4CAF50";
      voiceover_2.play();
      voiceover_2.addEventListener("ended", () => {
        this.contents[0].elevation = "0";
        this.contents[1].elevation = "12";
        this.contents[1].cardStyle.borderColor = "#4CAF50";

        voiceover_3.play();
        voiceover_3.addEventListener("ended", () => {
          this.contents[1].elevation = "0";
        });
      });
    });
  }
}
</script>
