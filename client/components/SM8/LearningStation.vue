<template>
  <v-container class="fill-height d-flex flex-column h-100 align-start pa-0">
    <v-window v-model="mainIndex" touchless style="width: 100%; height: 100vh">
      <v-window-item
        v-for="(item, index) in mainWindows"
        :key="`item-${index}`"
        class="fill-height pa-0 ma-0"
      >
        <component
          v-if="mainIndex == index"
          :is="item.name"
          v-bind="{ ...item.props }"
          v-on="{ ...item.events }"
        ></component>
      </v-window-item>
    </v-window>

    <v-btn
      v-if="mainIndex < 2"
      @click="nextMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      <span>Next</span><v-icon>mdi-chevron-right</v-icon>
    </v-btn>

    <v-btn
      v-if="mainIndex == 2"
      @click="nextMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      <span v-if="mainIndex == 2" class="error--text">Start</span>
      <span v-else>Next</span
      ><v-icon :class="[mainIndex == 2 ? 'error--text' : '']"
        >mdi-chevron-right</v-icon
      >
    </v-btn>

    <v-btn
      v-if="mainIndex > 0 && mainIndex < 2"
      @click="prevMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      left
      fixed
    >
      <v-icon>mdi-chevron-left</v-icon>Prev
    </v-btn>
    <audio v-if="voiceover != ''" ref="voiceover" autoplay loop>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import LearningStationIntro from "./LearningStationIntro.vue";
import LearningRoadMap from "./LearningRoadMap.vue";

@Component({
  components: {
    LearningStationIntro,
    LearningRoadMap,
  },
})
export default class LearningStation extends Vue {
  @Prop() readonly voiceover!: string;

  private mainIndex = 0;
  private main_windows: NotWellDefinedObject[] = [
    {
      name: "LearningStationIntro",
      props: {},
      events: {},
      id: 1,
    },
    {
      name: "LearningStationIntro",
      props: {
        content:
          "The <span class='font-weight-bold'>Virtual Learning Station</span> is a supplementary material intended for the students to practice skills in different ways, engaging and supporting diverse learning preferences and helping students deepen their understanding of the topic, specifically, cellular respiration, which is one of the complex topics in Biology.",
      },
      events: {},
      id: 2,
    },
    {
      name: "LearningStationIntro",
      props: {
        content:
          "It is composed of 5 (five) stations. Each station not only offers a unique opportunity to test your knowledge but also provides a fantastic learning opportunity. You need to do the activities in each station to successfully reach your destination, “The Peak of Learning”",
      },
      events: {},
      id: 3,
    },
    {
      name: "LearningRoadMap",
      props: {},
      events: {
        finish: "onFinish",
      },
      id: 4,
    },
  ];

  private get mainWindows() {
    let windows = this.main_windows;

    windows.forEach((window: NotWellDefinedObject) => {
      if (window.hasOwnProperty("events")) {
        let events: any = window.events;
        for (let i in events) {
          if (events.hasOwnProperty(i)) {
            let functionName: any = events[i];
            const self: NotWellDefinedObject = this;
            if (
              this.hasOwnProperty(functionName) &&
              typeof self[functionName] === "function"
            ) {
              window.events[i] = self[functionName];
            }
          }
        }
      }
    });

    return this.main_windows;
  }

  private onFinish() {
    console.log("finish");
    const voiceover: any = this.$refs?.voiceover;
    voiceover.pause();
  }

  private nextMain() {
    this.mainIndex =
      this.mainIndex + 1 === this.main_windows.length ? 0 : this.mainIndex + 1;
  }

  private prevMain() {
    this.mainIndex =
      this.mainIndex - 1 < 0
        ? this.main_windows.length - 1
        : this.mainIndex - 1;
  }
}
</script>
