<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center relative"
    color="blue lighten-3"
  >
    <img
      height="30%"
      width="100%"
      src="~assets/img/header.png"
      alt="Classroom Background"
      class="mt-14"
    />
    <v-sheet class="overflow-y-auto flex-grow-1 transparent px-3">
      <v-timeline class="fill-height">
        <v-timeline-item
          v-for="(station, i) in stations"
          :key="i"
          :color="station.color"
          fill-dot
          large
        >
          <template v-slot:icon>
            <v-icon dark size="48">
              {{ station.icon }}
            </v-icon>
          </template>
          <v-card @click="goToStation(i + 1)" :color="station.color" dark>
            <v-card-title class="text-h6"> Station {{ i + 1 }} </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-sheet>
    <v-dialog fullscreen hide-overlay v-model="stationDialog">
      <Station1 v-if="currStation == 1" v-on:close="stationDialog = false" />
      <Station2
        v-else-if="currStation == 2"
        v-on:close="stationDialog = false"
      />
      <Station3
        v-else-if="currStation == 3"
        v-on:close="stationDialog = false"
      />
      <Station4
        v-else-if="currStation == 4"
        v-on:close="stationDialog = false"
      />
      <Station5
        v-else-if="currStation == 5"
        v-on:close="stationDialog = false"
      />
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Station1 from "./Stations/Station1.vue";
import Station2 from "./Stations/Station2.vue";
import Station3 from "./Stations/Station3.vue";
import Station4 from "./Stations/Station4.vue";
import Station5 from "./Stations/Station5.vue";

@Component({
  components: {
    Station1,
    Station2,
    Station3,
    Station4,
    Station5,
  },
})
export default class LearningRoadMap extends Vue {
  private stationDialog = false;
  private currStation = 0;
  private stations: NotWellDefinedObject[] = [
    {
      color: "green",
      icon: "mdi-numeric-1-circle",
    },
    {
      color: "yellow",
      icon: "mdi-numeric-2-circle",
    },
    {
      color: "blue",
      icon: "mdi-numeric-3-circle",
    },
    {
      color: "red",
      icon: "mdi-numeric-4-circle",
    },
    {
      color: "amber",
      icon: "mdi-numeric-5-circle",
    },
  ];

  private goToStation(stationNumber: number) {
    console.log(stationNumber);
    this.currStation = stationNumber;
    this.stationDialog = !this.stationDialog;
  }
}
</script>
