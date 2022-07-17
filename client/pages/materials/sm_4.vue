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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Classroom from "Component/Global/Classroom.vue";
import ClassroomFloor from "Component/Global/ClassroomFloor.vue";
import DescriptionPage from "Component/Global/DescriptionPage.vue";
import ObjectivePage from "Component/Global/ObjectivePage.vue";
import IntroPage from "Component/SM4/IntroPage.vue";
import DescriptionPage4 from "Component/SM4/DescriptionPage.vue";
import ComicIntro from "Component/SM4/ComicIntro.vue";
import ComicStrip from "Component/SM4/ComicStrip.vue";

import * as sm_4 from "@/data/sm_4";

@Component({
  layout: "material",
  components: {
    Classroom,
    ObjectivePage,
    ClassroomFloor,
    IntroPage,
    DescriptionPage4,
    ComicIntro,
    ComicStrip,
  },
})
export default class SM4 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;

  private windows = sm_4.windows;
  private main_windows = sm_4.main_windows;

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_4")
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
    await this.getIntroVoiceOver();
    // await this.getMainVoiceOver();
    // await this.getMainContent();
  }
}
</script>
