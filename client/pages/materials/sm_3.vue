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
            <span class="text-h6 black--text mb-2">Images</span>
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
import DescriptionPage from "Component/Global/DescriptionPage.vue";
import ObjectivePage from "Component/SM3/ObjectivePage.vue";
import IntroPage from "Component/SM3/IntroPage.vue";
import StoryPreview from "Component/SM3/StoryPreview.vue";
import ResponseRubrics from "Component/SM3/ResponseRubrics.vue";
import StoryIntroPage from "Component/SM3/StoryComponents/StoryIntro.vue";
import DoctorIntroPage from "Component/SM3/StoryComponents/DoctorIntro.vue";
import StoryMainPage from "Component/SM3/StoryComponents/MainPage.vue";
import AssessmentPage from "Component/SM3/StoryComponents/Assessment.vue";
import StoryEnding from "Component/SM3/StoryComponents/Ending.vue";
import StoryReminder from "Component/SM3/StoryComponents/Reminder.vue";

import * as sm_3 from "@/data/sm_3";

@Component({
  layout: "material",
  components: {
    Classroom,
    ObjectivePage,
    DescriptionPage,
    IntroPage,
    StoryPreview,
    StoryIntroPage,
    DoctorIntroPage,
    StoryMainPage,
    AssessmentPage,
    StoryEnding,
    StoryReminder,
    ResponseRubrics,
  },
})
export default class SM3 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;
  private referenceDialog = false;

  private windows = sm_3.windows;
  private main_windows = sm_3.main_windows;

  private references: string[] = [
    "“Asthma” (2020). Mayo Clinic Retrieved from https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653",
    "“High Blood Pressure Symptoms and Causes” (2021) Center for disease Control and Prevention. Retrieved from https://www.cdc.gov/bloodpressure/about.htm",
    "“High Blood Pressure” (2021). Mayo clinic. Retrieved from https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410",
    "“Influenza (flu)” (2020) Mayo Clinic. Retrieved from https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719",
    "“Leukemia” (2019) Cleveland Clinic. Retrieved from https://my.clevelandclinic.org/health/diseases/4365-leukemia",
    "“Pneumonia symptoms and diagnosis” (2021) American Lung Association. Retrieved from https://www.lung.org/lung-health-diseases/lung-disease-lookup/pneumonia/symptoms-and-diagnosis",
    "Brazier, Y., (2019) All you need to know about flu. Medical News Today. Retrieved from https://www.medicalnewstoday.com/articles/15107",
    "Holland, K., & Goldman, L., (2020) What do you want to know about asthma? Healthline. Retrieved from https://www.healthline.com/health/asthma",
    "Khatri, M., (2020) Tuberculosis (TB). WebMD. Retrieved from https://www.webmd.com/lung/understanding-tuberculosis-basics",
    "Lights, V., (2019) Leukemia. Healthline. Retrieved from https://www.healthline.com/health/leukemia",
    "McIntosh, J., (2020) All you need to know about Tuberculosis (TB). Medical News Today. Retrieved from https://www.medicalnewstoday.com/articles/8856",
    "Nall, R., ( 2021) What to know about lung cancer? Medical News Today. Retrieved from https://www.medicalnewstoday.com/articles/323701#what-is-it",
    "Neely, K., (2019) Using Rubrics to Grade Open-Ended Questions. Study Weekly. Retrieved from https://www.studiesweekly.com/using-rubrics/",
    "Normandin, B., (2019) Everything you need to know about Pneumonia. Healthline. Retrieved from https://www.healthline.com/health/pneumonia",
    "Robinson, J., (2019) Leukemia. WebMD. Retrieved from https://www.webmd.com/cancer/lymphoma/understanding-leukemia-basics",
    "Robinson, J., (2020) Pneumonia. WebMD. Retrieved from https://www.webmd.com/lung/understanding-pneumonia-basics",
  ];

  private content_references: string[] = [
    "https://gifimage.net/wp-content/uploads/2017/10/medicamento-gif-10.gif",
    "https://novocom.top/view/ff48da-animated-clipart-talking-teacher-gif-transparent/",
    "https://previews.123rf.com/images/dreamsvector/dreamsvector1802/dreamsvector180200135/96094519-medical-instruments-aid-kit-doctor-tools-medicament-in-cartoon-style-medication-hospital-health-trea.jpg",
    "https://wolfeborolibrary.org/welcome-to-wolfeboro-public-library/girl-reading-book/",
    "https://www.pinterest.at/pin/674203006693073274/",
    "https://www.rcsdk12.org/domain/3413",
  ];

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_3")
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

  private async getMainVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_3")
      .child("voice_over")
      .child("main");
    // Find all the prefixes and items.
    await voiceOverRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef, index) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              this.mainVO.push({
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

  private async getMainContent() {
    const contentRef = this.$fire.storage
      .ref()
      .child("sm_3")
      .child("media")
      .child("main");
    // Find all the prefixes and items.
    await contentRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef, index) => {
          const itemName = itemRef.name;
          itemRef
            .getDownloadURL()
            .then((url) => {
              this.mainContents.push({
                id: parseInt(itemRef.name.replace(/\.[^/.]+$/, "")),
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

  private get mainWindows() {
    if (this.mainVO) {
      let windows = this.main_windows;

      this.mainVO
        .sort((a, b) => a.id - b.id)
        .forEach((item: NotWellDefinedObject, index: number) => {
          let window: NotWellDefinedObject = windows[item.id - 1];
          window.props.voiceover = item.src;

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
    }

    // if (this.mainContents) {
    //   let windows = this.main_windows;

    //   this.mainContents
    //     .sort((a, b) => a.id - b.id)
    //     .forEach((item: NotWellDefinedObject, index: number) => {
    //       let window = windows[item.id - 1];
    //       window.props.content = item.src;
    //     });
    // }

    return this.main_windows;
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
    await this.getMainVoiceOver();
    // await this.getMainContent();
  }
}
</script>
