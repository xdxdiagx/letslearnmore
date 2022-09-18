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
        v-for="(item, index) in windows"
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
              >Images, Videos, & Background Sounds</span
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
import ClassroomFloor from "Component/Global/ClassroomFloor.vue";
import DescriptionPage from "Component/Global/DescriptionPage.vue";
import ObjectivePage from "Component/Global/ObjectivePage.vue";
import LearningStation from "Component/SM8/LearningStation.vue";

import * as sm_8 from "@/data/sm_8";

@Component({
  layout: "material",
  components: {
    Classroom,
    ObjectivePage,
    ClassroomFloor,
    DescriptionPage,
    LearningStation,
  },
})
export default class SM4 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;
  private referenceDialog = false;

  private windows = sm_8.windows;
  private main_windows = sm_8.main_windows;

  private references: string[] = [
    "Capco, C. & Yang, G. (n.d.) You and The Natural World Biology. Third Edition. Phoenix Publishing House",
    "Capco, C. & Yang, G. (n.d.) You and The Natural World Biology. Phoenix Publishing House",
    "Brenner, C. (2019). Cellular Respiration. Mc Graw Hill. The Science Authority. Retrieved from https://www.accessscience.com/content/cellular-respiration/118150",
    "Wakim, S. & Grewal, M. (2021). Cellular Respiration. Biology Libre Texts. Retrieved from https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/05%3A_Cells/5.09%3A_Cellular_Respiration",
  ];

  private content_references: string[] = [
    "8fit, (2020). 9-minute HIIT Workout For Beginners to Start Your Fitness Journey. Retrieved fromhttps://www.youtube.com/watch?v=jWCm9piAwAU",
    "https://mixkit.co/free-stock-music/discover/games/",
    "https://www.pinclipart.com/downpngs/imoRxx_the-learning-station-clipart/",
    "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcRMKjZBIWTama2XFUNSyleeWSZ7uZfANwTQ5OvcjgHbQYN1VZOawoIirxaFu4rHP_1sAhs&usqp=CAU",
    "https://www.pinclipart.com/downpngs/iRThmJx_road-highway-animation-transparent-background-animated-road-png/",
    "https://similarpng.com/3d-illustration-numbers-two-stainless-isolated-on-transparent-background-png/#getdownload",
    "https://similarpng.com/3d-illustration-numbers-one-stainless-isolated-on-transparent-background-png/",
    "https://similarpng.com/3d-illustration-numbers-four-stainless-isolated-on-transparent-background-png/#getdownload",
    "https://similarpng.com/3d-illustration-numbers-three-stainless-isolated-on-transparent-background-png/",
    "https://www.pikpng.com/downpngs/hJbRJm_3d-number-three-red-gold-png-clip-art/",
    "https://similarpng.com/3d-illustration-numbers-five-stainless-isolated-on-transparent-background-png/#getdownload",
    "https://www.vhv.rs/viewpic/hTTJmRb_half-sun-png-transparent-png/",
    "https://www.hiclipart.com/free-transparent-background-png-clipart-bkdrw",
    "https://www.hiclipart.com/free-transparent-background-png-clipart-ogxwx",
    "https://classroomclipart.com/images/gallery/Clipart/Science/krebs-cycle-cellular-respiration-clipart.jpg",
    "https://www.pngitem.com/middle/TiRiTw_transparent-background-sun-cartoon-hd-png-download/",
    "http://clipart-library.com/clip-art/student-clipart-transparent-14.htm",
  ];

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_8")
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
      .child("sm_4")
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
      .child("sm_4")
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
    // await this.getIntroVoiceOver();
    // await this.getMainVoiceOver();
    // await this.getMainContent();
  }
}
</script>
