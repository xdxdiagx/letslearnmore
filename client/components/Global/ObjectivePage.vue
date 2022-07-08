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
        <ul>
          <li v-for="(objective, i) in objectives" :key="i">
            <p
              class="text-body-1 font-weight-medium black--text text-left mb-4 ml-6"
            >
              {{ objective }}
            </p>
          </li>
        </ul>
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
  @Prop() readonly objectives!: string[];

  private mounted() {
    const voiceover_objective: any = this.$refs?.voiceover_objective;
    voiceover_objective.play();
  }
}
</script>
