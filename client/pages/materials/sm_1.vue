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
import Trivia from "Component/SM1/Trivia.vue";
import RespiratorySystem from "Component/SM1/RespiratorySystem.vue";
import LabelGame from "Component/SM1/LabelGame.vue";
import MainPage from "Component/SM1/MainPage.vue";
import IntroPage from "Component/SM1/IntroPage.vue";
import ObjectivePage from "Component/SM1/ObjectivePage.vue";
import QuestionPage from "Component/SM1/QuestionPage.vue";

import * as sm_1 from "@/data/sm_1";

@Component({
  layout: "material",
  components: {
    Classroom,
    Trivia,
    RespiratorySystem,
    LabelGame,
    MainPage,
    IntroPage,
    ObjectivePage,
    QuestionPage,
  },
})
export default class SM1 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;
  private referenceDialog = false;

  private windows = sm_1.windows;
  private main_windows = sm_1.main_windows;

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

  private content_references: string[] = [
    "https://catimes.brightspotcdn.com/dims4/default/8735145/2147483647/strip/true/crop/600x338+0+0/resize/840x473!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2F7e%2Fb537393e4060861fdd09936f3f92%2Fsd-photos-handouts-2sars-cov-2-video.gif",
    "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20201105090042/ri/1200/picture/2020/11/shutterstock_1707538084_(1).jpg",
    "https://i0.wp.com/hdsmileys.com/wp-content/uploads/2017/10/brown-and-cony-saying-good-job.gif",
    "https://in.pinterest.com/pin/683491680951246537/",
    "https://makeagif.com/i/2Ehzy7",
    "https://mixkit.co/free-sound-effects/intro/",
    "https://tenor.com/view/man-talking-speaking-standing-up-animated-gif-17213205",
    "https://www.istockphoto.com/vector/the-respiratory-tract-medical-vector-illustration-on-white-background-gm1142652159-306576569",
    "https://www.pinterest.ph/pin/675188169117821472/",
    "https://www.thoughtco.com/respiratory-system-4064891",
    "https://www.youtube.com/watch?v=5DGwOJXSxqg",
    "https://www.youtube.com/watch?v=-7NGWR8Yy4I",
    "https://www.youtube.com/watch?v=dkAe4DjHwMM&t=5s",
    "https://www.youtube.com/watch?v=PSnSo9kYlH4",
  ];

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_1")
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
      .child("sm_1")
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

  private async getMainContent() {
    const contentRef = this.$fire.storage
      .ref()
      .child("sm_1")
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

    if (this.mainContents) {
      let windows = this.main_windows;

      this.mainContents
        .sort((a, b) => a.id - b.id)
        .forEach((item: NotWellDefinedObject, index: number) => {
          let window = windows[item.id - 1];
          window.props.content = item.src;
        });
    }

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
    await this.getMainContent();
  }
}
</script>
