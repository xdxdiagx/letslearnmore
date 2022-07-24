<template>
  <v-container class="fill-height d-flex flex-column h-100 align-start pa-0">
    <v-btn
      @click="goBack"
      elevation="0"
      class="mt-n2 ml-n2"
      fixed
      top
      left
      fab
      small
      plain
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn
      @click="referenceDialog = !referenceDialog"
      elevation="0"
      color="black"
      class="mt-n2 mr-n2"
      fixed
      top
      right
      fab
      small
      plain
    >
      <v-icon>mdi-text-box</v-icon>
    </v-btn>
    <v-window
      v-if="!showMain"
      v-model="introIndex"
      touchless
      style="width: 100%; height: 100vh"
    >
      <v-window-item
        v-for="(item, index) in introWindows"
        :key="`item-${index}`"
        class="fill-height pa-0 ma-0"
      >
        <component
          v-if="introIndex == index"
          :is="item.name"
          v-bind="{ ...item.props }"
          v-on="{ ...item.events }"
        ></component>
      </v-window-item>
    </v-window>
    <v-window
      v-else
      v-model="mainIndex"
      touchless
      style="width: 100%; height: 100vh"
    >
      <v-window-item
        v-for="(item, index) in main_windows"
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
      v-if="introIndex != windows.length - 1 && !showMain"
      @click="nextIntro"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      Next<v-icon>mdi-chevron-right</v-icon>
    </v-btn>

    <v-btn
      v-if="mainIndex != main_windows.length - 1 && showMain"
      @click="nextMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      <span v-if="mainIndex == 0" class="error--text">Start</span>
      <span v-else>Next</span
      ><v-icon :class="[mainIndex == 0 ? 'error--text' : '']"
        >mdi-chevron-right</v-icon
      >
    </v-btn>

    <v-btn
      v-if="mainIndex >= 1 && showMain"
      @click="prevMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      left
      fixed
    >
      <v-icon>mdi-chevron-left</v-icon>Prev
    </v-btn>
    <v-dialog
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      v-model="referenceDialog"
    >
      <v-card>
        <v-card-title>
          <v-row no-gutters align="center">
            <span class="text-h6">References:</span>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-n2"
              icon
              plain
              @click="referenceDialog = !referenceDialog"
              ><v-icon>mdi-close</v-icon></v-btn
            ></v-row
          >
        </v-card-title>
        <v-card-text>
          <p v-for="(r, idr) in references" :key="idr">
            {{ r }}
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Classroom from "Component/Global/Classroom.vue";
import TriviaPage from "Component/Global/Trivia.vue";
import ObjectivePage from "Component/Global/ObjectivePage.vue";
import DescriptionPage from "Component/SM2/DescriptionPage.vue";
import IntroVideoPage from "Component/SM2/IntroVideo.vue";
import RatePage from "Component/SM2/Main/RatePage.vue";
import ReminderPage from "Component/SM2/Main/ReminderPage.vue";
import ActivityPage1 from "Component/SM2/Main/ActivityPage1.vue";
import ActivityPage2 from "Component/SM2/Main/ActivityPage2.vue";
import FigureQuestion from "Component/SM2/Main/FigureQuestion.vue";
import QuestionPage from "Component/SM2/Main/QuestionPage.vue";
import FactsPage from "Component/SM2/FactsPage.vue";

import * as sm_2 from "@/data/sm_2";

@Component({
  layout: "material",
  components: {
    Classroom,
    TriviaPage,
    DescriptionPage,
    IntroVideoPage,
    ObjectivePage,
    RatePage,
    ReminderPage,
    ActivityPage1,
    ActivityPage2,
    QuestionPage,
    FigureQuestion,
    FactsPage,
  },
})
export default class SM2 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;
  private referenceDialog = false;

  private windows = sm_2.windows;
  private main_windows = sm_2.main_windows;

  private references: string[] = [
    "Bailey, R., (2019) Respiratory System and How We Breathe. Retrieved from https://www.thoughtco.com/respiratory-system-4064891",
    "Capco, C., & Yang, G., (n.d.) You and The Natural World Biology. Third Edition. Phoenix Publishing House. ",
    "Capco, C., (2002) Biology. Phoenix Science Series. Phoenix Publishing House.",
    "Cennimo, D., et al, (2021) How did coronavirus outbreak start?. Medscape. Retrieved fromhttps://www.medscape.com/answers/2500114-197402/how-did-the-coronavirus-outbreak-start",
    "Challenge 5: How does COVID-19 affect the respiratory system? (2020). Yale School of Medicine. Retrieved from https://medicine.yale.edu/coved/modules/virus/respiratory/",
    "Elflein, J., (2021) Number of coronavirus (COVID-19) cases, recoveries, and deaths worldwide as of July 9, 2021. Statista. Retrieved from https://www.statista.com/statistics/1087466/covid19-cases-recoveries-deaths-worldwide/",
    "Kandola, A., (2020). Coronavirus cause: Origin and how it spreads. Retrieved from https://www.medicalnewstoday.com/articles/coronavirus-causes",
    "Lockett, E., (2019) What is a Normal Respiratory Rate for Kids and Adults? Healthline. Retrieved from https://www.healthline.com/health/normal-respiratory-rate#measuring-rate",
    "Poster success criteria. Retrieved at https://www.pinterest.ph/pin/52284045645655178/",
    "Zafar, A., (2020) What is a ventilator and who gets one if COVID-19 turns catastrophic in Canada?. CBSNEWS. Retrieved from https://www.cbc.ca/news/health/covid19-ventilators-1.5515550",
  ];

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_2")
      .child("voice_over")
      .child("intro");
    // Find all the prefixes and items.
    await voiceOverRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef, index) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              this.voiceovers.push({
                id: parseInt(itemRef.name.replace(".wav", "")),
                src: url,
              });
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private get introWindows() {
    if (this.voiceovers) {
      let windows = this.windows;

      this.voiceovers
        .sort((a, b) => a.id - b.id)
        .forEach((item: NotWellDefinedObject, index: number) => {
          let window: NotWellDefinedObject = windows[item.id - 1];
          window.props.voiceover = item.src;
          if (window.hasOwnProperty("events")) {
            let events: any = window.events;
            for (let i in events) {
              if (events.hasOwnProperty(i)) {
                let functionName: any = events[i] as any;
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

      return this.windows;
    }
  }

  private nextIntro() {
    this.introIndex =
      this.introIndex + 1 === this.windows.length ? 0 : this.introIndex + 1;
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

  private goBack() {
    this.$router.back();
  }

  private proceedToMain() {
    this.showMain = !this.showMain;
  }

  private async created() {
    await this.getIntroVoiceOver();
  }
}
</script>
