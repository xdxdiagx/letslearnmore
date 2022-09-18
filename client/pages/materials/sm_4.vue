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
import ClassroomFloor from "Component/Global/ClassroomFloor.vue";
import DescriptionPage from "Component/Global/DescriptionPage.vue";
import ObjectivePage from "Component/Global/ObjectivePage.vue";
import IntroPage from "Component/SM4/IntroPage.vue";
import DescriptionPage4 from "Component/SM4/DescriptionPage.vue";
import ComicIntro from "Component/SM4/ComicIntro.vue";
import ComicStrip from "Component/SM4/ComicStrip.vue";
import AssessmentPage from "Component/SM4/Assessment.vue";
import AssessmentPage2 from "Component/SM4/Assessment2.vue";

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
    AssessmentPage,
    AssessmentPage2,
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

  private windows = sm_4.windows;
  private main_windows = sm_4.main_windows;

  private references: string[] = [
    "“Non-Mendelian Inheritance” (2021) CK-12 Biology For High School. Retrieved from https://flexbooks.ck12.org/cbook/ck-12-biology-flexbook-2.0/section/3.7/primary/lesson/non-mendelian-inheritance-bio/",
    "Miller, C., (n.d.) Non-Mendelian Inheritance. Human Biology. Thompson Rivers University. Retrieved from https://humanbiology.pressbooks.tru.ca/chapter/5-13-non-mendelian-inheritance/",
  ];

  private content_references: string[] = [
    "http://givesimbaspridemoreattention.blogspot.com/2015/04/dog-clip-art.html",
    "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A35dab30d70ef1364bfbb6a7597c130816c99e1f23e6fed45628859d1%2BIMAGE_TINY%2BIMAGE_TINY.1",
    "https://files.mtstatic.com/site_13419/9998/0?Expires=1632362864&Signature=gEveSC-KOFZ78oORVYaq063eMgbaD09VKcYnqaYydbxrMBCDPOrVZ~s2J4IZR6nzLrvwV1ddAjeuha1HM2fXWR6gaD3CjEWA8HYLTtXWqwoc2vSO4mCFLX1fLTsfVT0tWXa3tSXNYym-qqlwJaE3R3DOaNp~pD7SWW20N4MjXoY_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA",
    "https://i.pinimg.com/564x/59/1f/63/591f639a0d01fe2317e82718b869254a.jpg",
    "https://lh3.googleusercontent.com/proxy/haHEWrx0Vs-CmhWybU0Oo8fez0OfolW2ISYOpayp9bDPJkcP9VaHeKTF4XlL20cWEC-3L5m1L8e0-llfG0LxF8lcNNFSYEJFfKNKRSokAOEfpQS6-xvqIi1NmYLW0HSw",
    "https://media.istockphoto.com/vectors/cute-cartoon-cats-family-staing-together-front-view-cat-pet-friend-vector-id1028290632?s=612x612",
    "https://www.pngkey.com/maxpic/u2w7i1i1e6i1i1e6/",
    "https://www.thoughtco.com/thmb/7H4QFt4nGZENpqmPnXdta82S_JU=/2310x1299/smart/filters:no_upscale()/462845055-56a2b3f95f9b58b7d0cd8c15.jpg",
  ];

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
