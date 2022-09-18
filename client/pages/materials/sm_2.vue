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
          <v-row no-gutters v-if="content_references.length > 0">
            <span class="text-h6 black--text mb-2"
              >Videos, Images & Sound Effect</span
            >
            <p class="" v-for="(cr, idr) in content_references" :key="idr">
              {{ cr }}
            </p>
          </v-row>
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
import IntroPage from "Component/SM2/Main/IntroPage.vue";

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
    IntroPage,
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
    "Beckerman, J., (2020) Your Heart Rate. WebMD. Retrieved from https://www.webmd.com/heart-disease/heart-failure/watching-rate-monitor",
    "BYJU’S The Learning App. Difference between Heart Rate & Pulse Rate. Retrieved from https://byjus.com/biology/difference-between-heart-rate-and-pulse-rate/",
    "Laskowski, E., (2020) What’s a normal resting heart rate? Mayo Clinic. Retrieved from https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979",
    "Pulse & Heart Rate (2018) Cleveland Clinic. Retrieved from https://my.clevelandclinic.org/health/diagnostics/17402-pulse--heart-rate",
    "Pulse and Heart Rate (2018) Cleveland Clinic. Retrieved from https://my.clevelandclinic.org/health/diagnostics/17402-pulse--heart-rate",
    "Smith, C., (2012) Anatomy and Physiology: The Relationship of the Respiratory System. Visible Body. Retrieved from https://www.visiblebody.com/blog/anatomy-and-physiology-the-relationships-of-the-respiratory-system",
    "Want to check your heart rate? (2019) Harvard Health Publishing. Retrieved from https://www.health.harvard.edu/heart-health/want-to-check-your-heart-rate-heres-how",
  ];

  private content_references: string[] = [
    "https://commons.wikimedia.org/wiki/File:Vein_art_rotating.gif",
    "https://cursa.ihmc.us/rid=1NZ3CB70H-2B99MC1 27Q1/misura%20pressione%20sistole.gif",
    "https://gif-magepop.blogspot.com/2014/07/heart-pumping-gif-transparent.html",
    "https://giphy.com/stickers/selflove-reward-sukasukabee-v97SpIKrZJv6nT8sRS",
    "https://i.pinimg.com/originals/01/c7/50/01c75001813834727654ba16286b1faa.gif",
    "https://intl.siyavula.com/read/science/grade-9/systems-in-the-human-body/images/gr9ll02-gd-0007.png",
    "https://novocom.top/view/ff48da-animated-clipart-talking-teacher-gif-transparent/",
    "https://www.pinterest.co.uk/pin/326018460502224929/",
    "https://www.pinterest.ph/pin/675188169117821472/",
    "https://www.visiblebody.com/hubfs/learn/assets/glossary/circulatory/circulatory-system-cardiac-cycle-gif.gif",
    "https://www.youtube.com/watch?v=CWFyxn0qDEU",
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
