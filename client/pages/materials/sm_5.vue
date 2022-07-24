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
import IntroPage from "Component/SM5/IntroPage.vue";
import IntroBoom from "Component/SM5/IntroBoom.vue";
import TreasureBoom from "Component/SM5/TreasureBoom.vue";

import * as sm_5 from "@/data/sm_5";

@Component({
  layout: "material",
  components: {
    Classroom,
    ObjectivePage,
    ClassroomFloor,
    DescriptionPage,
    IntroPage,
    IntroBoom,
    TreasureBoom,
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

  private windows = sm_5.windows;
  private main_windows = sm_5.main_windows;

  private references: string[] = [
    "“Pedigree” (n.d.) National Human Genome Research Institute. Retrieved from https://www.genome.gov/genetics-glossary/Pedigree",
    "“Punnett Square” (n.d.) Biology online. Retrieved from https://www.biologyonline.com/dictionary/punnett-square",
    "4f54-8e8d-0a43f06fff39.png",
    "http://userscontent2.emaze.com/images/858757b9-aa71-475e-8cce-ffbf8eddf115/f78a1167-bd57-",
    "http://www.clipartpanda.com/clipart_images/number-one-red-clip-art-59236123",
    "https://cdn.britannica.com/w:400,h:300,c:crop/73/72173-004-87D1E1BB/hemophilia-pedigree-chart-inheritance-trait-generations-gene.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7EtgLQxlkSOkVJlUcWcDns5-JjgFgn4ri1XIFgb6fvFPshhkM6fJNxTpWS3mvB7_exA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzWq7XoqIwzYjgEl7PhA4Rucc46AleMQ0T-0iTZD39XSWidxu-cJzx4ergAjOL4a78pI&usqp=CAU",
    "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif",
    "https://images.squarespace-cdn.com/content/v1/5bbbc5669b7d1566ffe45ea0/1589725665001-SB3KVEE71W8ARUYHDTZL/boom+cards+boom+learning+free+decks?format=1000w",
    "https://mcmscache.epapr.in/post_images/website_350/post_15669903/thumb.jpg",
    "https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F13240.jpg%3Fv%3Dfc25c5c63f9affc57a40c69dfc128dcfd6b8d9d710f8b8df896a9738d6d2274a&prog=1&w=780",
    "https://st2.depositphotos.com/5644252/8749/v/950/depositphotos_87498430-stock-illustration-my-family-vetor.jpg",
    "https://thumbs.gfycat.com/ElatedBrownBaboon-max-1mb.gif",
    "https://www.clipartmax.com/middle/m2K9A0m2m2b1i8Z5_cartoon-number-two-two-cartoon-png/",
    "Nickle, T., & Barrette- Ng (2020) Pedigree Analysis. Biology LibreTexts. Retrieved from https://bio.libretexts.org/Bookshelves/Genetics/Book%3A_Online_Open_Genetics_(Nickle_and_Barrette-Ng)/05%3A_Pedigrees_and_Populations/5.02%3A_Pedigree_Analysis",
    "Phelan, J., (2013) Punnett square. Science Direct. Retrieved from https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/punnett-square",
  ];

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_5")
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
