<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-center pt-14"
    color="blue lighten-3"
  >
    <v-sheet
      width="100%"
      class="flex-grow-1 transparent px-4"
      style="position: relative"
    >
      <h2 class="mb-4">What is a normal pulse?</h2>
      <ul class="px-4">
        <li>
          <p class="mb-2 text-justify">
            Children (ages 6-15) 70 -100 beats per minute
          </p>
        </li>
        <li>
          <p class="mb-2 text-justify">
            Adults (age 18 and over) 60-100 beats per minute
          </p>
        </li>
      </ul>
    </v-sheet>
    <v-sheet
      width="100%"
      class="d-flex flex-column pt-4 pb-16 px-4 transparent"
      style="position: relative"
    >
      <content-card
        class="mb-4"
        v-for="(content, i) in contents"
        :key="i"
        :content="content.text"
        :contentStyle="content.cardStyle"
        :color="content.color"
        :elevation="content.elevation"
        :rounded="content.rounded"
      />
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
export default class ReminderPage extends Vue {
  @Prop() readonly objectives!: string[];

  private voiceover1 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FWhat%20is%20a%20normal%20pulse%20rate-2021-08-19%2005_04_39.wav?alt=media&token=4a63a9a6-5c33-482b-96a4-922db8612f39";
  private voiceover2 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FGenerally-2021-08-19%2005_06_05.wav?alt=media&token=d67febb8-0167-45c8-b42e-3d71f0fba33c";
  private voiceover3 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FReminder-2021-08-19%2005_11_07.wav?alt=media&token=29abfcd4-4cea-4af0-9f8c-b6ae59280f10";

  private contents: NotWellDefinedObject[] = [
    {
      text: `Generally, a lower heart rate at rest implies more efficient heart function and better cardiovascular fitness. For example, a well-trained athlete might have a normal resting heart rate closer to 40 beats per minute.`,
      cardStyle: {
        width: "100%",
        height: "auto",
        borderColor: "red",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "transparent",
      },
      elevation: "0",
      rounded: false,
    },
    {
      text: `<h2 class="error--text mb-2">REMINDER</h2> An unusually high or low heart rate may indicate an underlying problem. Consult your doctor if your resting heart rate is consistently above 100 beats a minute (tachycardia) or if you're not a trained athlete and your resting heart rate is below 60 beats a minute (bradycardia) particularly if you have other signs or symptoms, such as fainting, dizziness or shortness of breath.`,
      cardStyle: {
        width: "100%",
        height: "auto",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "#4CAF50",
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
      voiceover_2.play();
      voiceover_2.addEventListener("ended", () => {
        this.contents[0].elevation = "0";
        this.contents[1].elevation = "12";

        voiceover_3.play();
        voiceover_3.addEventListener("ended", () => {
          this.contents[1].elevation = "0";
        });
      });
    });
  }
}
</script>
