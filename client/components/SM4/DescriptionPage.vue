<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex justify-center align-center px-4"
    style="position: relative"
    color="blue lighten-3"
  >
    <v-card elevation="0" :style="contentStyle" max-width="350px">
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="10">
            <p
              class="text-h6 font-weight-bold text-justify blue--text text--darken-4"
            >
              Why do cats, dogs and rabbits have so many different coat colors?
            </p>
          </v-col>
          <v-col offset="2" cols="10">
            <p
              class="text-body-1 font-weight-bold text-justify blue--text text--darken-4"
            >
              Why we have different types of blood groups?
            </p>
          </v-col>
          <v-col offset="2" cols="10">
            <p
              class="text-body-1 font-weight-medium text-justify blue--text text--darken-4"
            >
              How do eyes come in so many colors?
            </p>
          </v-col>
          <v-col
            cols="11"
            style="border: 3px solid #43a047"
            class="mx-auto mb-4 px-2 py-1"
          >
            <p class="text-h6 font-weight-bold text-center mb-0">
              Non-Mendelian Patterns of Inheritance
            </p>
          </v-col>
          <v-col cols="6" class="mb-4">
            <p class="text-h6 font-weight-bold text-center error--text mb-0">
              CO-DOMINANCE
            </p>
          </v-col>
          <v-col cols="6" class="mb-4">
            <p class="text-h6 font-weight-bold text-center amber--text mb-0">
              INCOMPLETE DOMINANCE
            </p>
          </v-col>
          <v-col cols="6" class="mb-4">
            <p
              class="text-h6 font-weight-bold text-center green--text text--darken-1 mb-0"
            >
              MULTIPLE ALLEISM
            </p>
          </v-col>
          <v-col cols="6" class="mb-4">
            <p
              class="text-h6 font-weight-bold text-center indigo--text text--darken-4 mb-0"
            >
              POLYGENIC TRAITS
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
export default class DescriptionPage extends Vue {
  @Prop() readonly voiceover!: string;

  contentStyle: NotWellDefinedObject = {
    borderColor: "#FFC107",
    borderWidth: "4px",
    borderStyle: "solid",
  };
}
</script>
