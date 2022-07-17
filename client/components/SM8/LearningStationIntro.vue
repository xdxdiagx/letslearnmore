<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center relative"
    color="blue lighten-3"
  >
    <img
      height="100%"
      width="100%"
      src="~assets/img/learning_station.png"
      alt="Classroom Background"
    />
    <ContentCard
      v-if="content"
      :elevation="0"
      :content="content"
      :contentStyle="contentStyle"
      class="mx-2 font-italic mb-16"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class LearningStationIntro extends Vue {
  @Prop() readonly content!: string;

  private contentStyle: NotWellDefinedObject = {
    borderColor: "red",
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
  };
}
</script>
