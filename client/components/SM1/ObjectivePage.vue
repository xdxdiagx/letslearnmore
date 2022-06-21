<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex justify-center align-center"
    color="blue lighten-3"
  >
    <v-card
      color="orange lighten-4"
      class="mx-8"
      rounded="xl"
      style="max-width: 550px; min-width: 300px"
    >
      <v-card-text>
        <div class="d-flex justify-start mb-6 error--text">
          <h2>Objectives:</h2>
        </div>
        <p
          class="text-body-1 font-weight-medium black--text text-justify mb-4 mx-6"
          v-for="(objective, i) in objectives"
          :key="i"
        >
          <span class="mr-4">•</span>{{ objective }}
        </p>
      </v-card-text>
    </v-card>
    <audio v-if="voiceover != ''" ref="voiceover_objective">
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
export default class ObjectivePage extends Vue {
  @Prop() readonly voiceover!: string;

  private objectives: string[] = [
    "To identify which parts of the respiratory system are commonly affected by COVID-19.",
    "To analyze critically how covid-19 can affect the Respiratory System.",
    "To develop an advocacy campaign poster to prevent the spread of COVID-19.",
  ];
}
</script>
