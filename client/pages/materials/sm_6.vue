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
import ClassroomFloorPage from "Component/Global/ClassroomFloor.vue";
import ObjectivePage from "Component/Global/ObjectivePage.vue";
import TriviaPage from "Component/Global/Trivia.vue";
import IntroPage from "Component/SM6/IntroPage.vue";
import IntroDocumentary from "Component/SM6/IntroDocumentary.vue";
import RecoveryPage from "Component/SM6/RecoveryPage.vue";
import Documentaries from "Component/SM6/Documentaries.vue";
import Ending from "Component/SM6/Ending.vue";
import SpeciesRecovery from "Component/SM6/SpeciesRecovery.vue";

import * as sm_6 from "@/data/sm_6";

@Component({
  layout: "material",
  components: {
    Classroom,
    ClassroomFloorPage,
    ObjectivePage,
    IntroPage,
    IntroDocumentary,
    TriviaPage,
    RecoveryPage,
    Documentaries,
    Ending,
    SpeciesRecovery,
  },
})
export default class SM6 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;
  private referenceDialog = false;

  private windows = sm_6.windows;
  private main_windows = sm_6.main_windows;

  private references: string[] = [
    "“Extinction The Facts - Full Documentary 2020”. YouTube. Uploaded by Urizen Deurges. Retrieved from https://www.youtube.com/watch?v=NsHUmtv8D_g",
    "“Philippines Critically endangered species (Animals) Department of Environment and Natural Resources”. YouTube, Uploaded by PH RED TV. Retrieved from. https://www.youtube.com/watch?v=uZ97e7rzON8",
    "“We need IMMEDIATE action to stop extinction crisis, David Attenborough – BBC”. YouTube. Uploaded by BBC. Retrieved from https://www.youtube.com/watch?v=dbCR0KSU52g",
  ];

  private content_references: string[] = [
    "http://www.bethcov.org/wp-content/uploads/2016/05/what-you-need-to-know-1-450x450.jpg",
    "https://cdn.yourpng.com/uploads/preview/tiger-walking-front-view-png-images-download-23-11616319429d9azx8puwc.png",
    "https://images.slideplayer.com/28/9348150/slides/slide_2.jpg",
    "https://pbs.twimg.com/media/DdaqGjhU8AAruTZ.jpg",
    "https://pngimg.com/uploads/cheetah/cheetah_PNG14854.png",
    "https://previews.123rf.com/images/tupungato/tupungato1411/tupungato141100317/33758139-endangered-species-environment-issues-and-concepts-word-cloud-illustration-word-collage-concept-.jpg",
    "https://quotefancy.com/quote/1736939/Loretta-Lynch-We-all-have-a-responsibility-to-protect-endangered-species-both-for-their",
    "https://st.depositphotos.com/1121376/1750/i/950/depositphotos_17505317-stock-photo-different-animals-collage-on-postcards.jpg",
    "https://thumbs.dreamstime.com/b/wildlife-wild-animals-nature-isolated-animal-illustration-orientation-banner-panoramic-panorama-each-white-213967473.jpg",
    "https://w.ndtvimg.com/sites/3/2020/10/30150648/660x330-endangered-species.jpg",
    "https://www.onenaturehotels.com/blog/wp-content/uploads/2020/03/Big-5-Blog-Post-Title-Photo-627x376.jpg",
    "https://www.pinterest.ph/pin/449867450253812989/",
  ];

  private async getIntroVoiceOver() {
    const voiceOverRef = this.$fire.storage
      .ref()
      .child("sm_6")
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
