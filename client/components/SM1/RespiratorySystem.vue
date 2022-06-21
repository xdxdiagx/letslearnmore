<template>
  <v-sheet width="100%" height="100%" class="pt-10">
    <div class="d-flex justify-center">
      <h1 class="error--text">Respiratory System</h1>
    </div>
    <div
      style="width: 100%; max-width: 380px; position: relative"
      class="mx-sm-auto mx-4 mt-6 pt-4"
    >
      <img
        class="d-block ml-10"
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2FO2.png?alt=media&token=4fb5496c-0de3-471a-990f-59e779a28199"
        height="50px"
        alt="O2"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2FO2.png?alt=media&token=4fb5496c-0de3-471a-990f-59e779a28199"
        height="30px"
        alt="O2"
        class="ml-8"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2FO2.png?alt=media&token=4fb5496c-0de3-471a-990f-59e779a28199"
        height="30px"
        alt="O2"
      />
      <div class="d-block"></div>
      <img
        class="d-block"
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2FCO2.png?alt=media&token=f74433c4-fb46-492a-bf53-38193710d114"
        height="50px"
        alt="O2"
        style="margin-top: 90px"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2FCO2.png?alt=media&token=f74433c4-fb46-492a-bf53-38193710d114"
        height="30px"
        alt="O2"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2FCO2.png?alt=media&token=f74433c4-fb46-492a-bf53-38193710d114"
        height="30px"
        alt="O2"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fintro%2Frespi_system.png?alt=media&token=3a011b39-55ce-4abc-bc9d-02b3a464672f"
        width="85%"
        style="position: absolute; right: 0; top: 50px; max-width: 350px"
        alt="Respiratory System"
      />
    </div>
    <v-card
      color="yellow accent-2"
      rounded="xl"
      class="mx-sm-auto mx-5"
      style="margin-top: 112px; max-width: 380px"
    >
      <v-card-text>
        <p
          class="text-body-1 text-sm-h6 black--text font-weight-medium text-justify mb-0"
        >
          The
          <span class="error--text font-weight-bold">Respiratory System</span>
          is the system of the body that deals with breathing. When we breathe,
          the body takes in the oxygen that it needs and removes the carbon
          dioxide that it doesn’t need.
        </p>
      </v-card-text>
    </v-card>
    <audio v-if="voiceover != ''" ref="voiceover">
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
export default class TriviaPage extends Vue {
  @Prop() readonly voiceover!: string;

  private mounted() {
    const voiceover: any = this.$refs?.voiceover;
    voiceover.play();
  }
}
</script>
