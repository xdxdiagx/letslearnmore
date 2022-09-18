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
      <v-timeline class="fill-height" v-if="!done">
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
      <v-timeline class="fill-height" v-else>
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
          <v-card :color="station.color" dark>
            <v-card-title class="text-h6"> Station {{ i + 1 }} </v-card-title>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="grey darken-4" fill-dot large>
          <template v-slot:icon>
            <v-btn dark icon @click="showFinish = !showFinish">
              <v-icon dark size="36"> mdi-flag-checkered </v-icon>
            </v-btn>
          </template>
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
        v-on:finished="finished"
      />
    </v-dialog>
    <v-dialog v-model="showFinish" fullscreen>
      <v-sheet
        height="100%"
        width="100%"
        class="d-flex flex-column"
        color="blue lighten-3"
        style="position: relative"
      >
        <img
          height="15%"
          width="100%"
          src="~assets/img/header.png"
          alt="Classroom Background"
        />
        <img
          src="~assets/img/girl_talking.gif"
          v-bind:class="[
            $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
          ]"
          alt="Teacher Image"
        />
        <img
          src="~assets/img/classroom_floor.png"
          width="100%"
          style="position: absolute; bottom: 0; left: 0; right: 0"
          alt="Classrom Floor"
        />
        <v-btn absolute bottom right to="/materials">
          <v-icon>mdi-chevron-left</v-icon>
          Go to Main
        </v-btn>
        <v-sheet :style="contentStyle" class="pa-4 ma-4 flex-grow-1">
          <v-sheet width="50%" color="transparent" class="ml-auto">
            <img
              src="~assets/img/student.png"
              width="100%"
              alt="Classrom Floor"
            />
          </v-sheet>
          <v-sheet
            color="transparent"
            width="70%"
            style="position: relative"
            class="ml-auto"
          >
            <v-card rounded="xl" :style="cardStyle">
              <v-card-text>
                <p
                  class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0"
                >
                  Congratulations on finishing the task in each station! I
                  always knew you could do it, and I'm incredibly proud of you.
                </p>
              </v-card-text>
            </v-card>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </v-dialog>
    <audio ref="voiceover_finish">
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_8%2Fvoice_over%2FCongratulations.mp3?alt=media&token=d197e9f5-7804-4b64-afd9-ef310480d0ae"
        type="audio/ogg"
      />
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_8%2Fvoice_over%2FCongratulations.mp3?alt=media&token=d197e9f5-7804-4b64-afd9-ef310480d0ae"
        type="audio/mpeg"
      />
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_8%2Fvoice_over%2FCongratulations.mp3?alt=media&token=d197e9f5-7804-4b64-afd9-ef310480d0ae"
        type="audio/wav"
      />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
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
  private done = false;
  private showFinish = false;

  private async mounted() {
    const sm_8 = (await this.$user.getCurrentUser()).sm_8 || {
      done: false,
      grade: 0,
    };
    if (sm_8.done == true) {
      this.done = true;
      this.onFinish();
    }
  }

  private finished() {
    this.done = true;
    this.onFinish();
  }

  private onFinish() {
    this.$emit("finish");
  }

  private goToStation(stationNumber: number) {
    console.log(stationNumber);
    this.currStation = stationNumber;
    this.stationDialog = !this.stationDialog;
  }

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#FF9100",
    borderWidth: "5px",
    borderStyle: "dashed",
    backgroundColor: "transparent",
    fontStyle: "italic",
  };

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#fff",
    borderWidth: "3px",
    borderStyle: "solid",
    backgroundColor: "#FF9100",
    fontStyle: "italic",
  };

  @Watch("showFinish")
  onShowFinish() {
    if (this.showFinish == true) {
      const voiceover_finish: any = this.$refs?.voiceover_finish;
      voiceover_finish.play();
    }
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1;
}
</style>
