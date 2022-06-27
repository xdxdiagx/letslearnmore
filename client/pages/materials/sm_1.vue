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
import Trivia from "Component/SM1/Trivia.vue";
import RespiratorySystem from "Component/SM1/RespiratorySystem.vue";
import LabelGame from "Component/SM1/LabelGame.vue";
import MainPage from "Component/SM1/MainPage.vue";
import IntroPage from "Component/SM1/IntroPage.vue";
import ObjectivePage from "Component/SM1/ObjectivePage.vue";
import QuestionPage from "Component/SM1/QuestionPage.vue";

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

  private windows = [
    {
      name: "Classroom",
      props: {
        voiceover: "",
      },
      events: {},
      id: 1,
    },
    {
      name: "RespiratorySystem",
      props: {
        voiceover: "",
      },
      events: {},
      id: 2,
    },
    {
      name: "LabelGame",
      props: {
        voiceover: "",
      },
      events: {},
      id: 3,
    },
    {
      name: "Trivia",
      props: {
        voiceover: "",
      },
      events: {
        proceed: "proceedToMain",
      },
      id: 4,
    },
  ];

  private main_windows = [
    {
      name: "Classroom",
      props: {
        voiceover: "",
      },
      events: {},
      id: 1,
    },
    {
      name: "IntroPage",
      props: {
        voiceover: "",
      },
      events: {},
      id: 100,
    },
    {
      name: "ObjectivePage",
      props: {
        voiceover: "",
      },
      events: {},
      id: 101,
    },
    {
      name: "Classroom",
      props: {
        voiceover: "",
      },
      events: {},
      id: 4,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: false,
      },
      events: {},
      id: 5,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `Coronavirus disease 2019 (COVID-19) is defined as illness caused by a
        novel coronavirus called severe acute respiratory syndrome coronavirus 2
        (SARS-CoV-2; formerly called 2019-nCoV) which was first identifies amid
        an outbreak of respiratory illness cases in Wuhan City, Hubei Province,
        China. Reports of the first COVID-19 cases started in December 31,2019.`,
      },
      events: {},
      id: 6,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `COVID-19 is a respiratory disease that can cause mild to critical breathing problems.  The virus affects the upper and lower parts of the respiratory tract. As it moves through the airways, the lungs will begin to swell and get inflamed. The lungs are the most affected when a person contracts COVID-19, and it can have severe manifestations. In some cases, the infection can reach all the way down into your alveoli. `,
      },
      events: {},
      id: 7,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `When people with COVID-19 breathe out or cough, they expel tiny droplets that contain the virus. These droplets can enter the mouth or nose of someone without the virus, causing an infection to occur. Droplets containing the virus can also land on nearby surfaces or objects. Other people can pick up the virus by touching these surfaces or objects. Infection is likely if the person then touches their nose, eyes, or mouth.`,
      },
      events: {},
      id: 8,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `COVID-19 can cause lung (Respiratory) illness that might be mild, serious, or even deadly. The symptoms usually start between 2 to 14 days after a person is infected. Symptoms include fever, cough, and shortness of breath (hard to breath). Some people who have a COVID-19 infection get pneumonia in both lungs. Pneumonia is a lung infection. It can cause the lungs to fill with fluid. It can make it very hard for a person to breath.`,
      },
      events: {},
      id: 9,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `Some Covid-19 patients develop a complication known as Acute Respiratory Distress Syndrome (ARDS). In ARDS, the alveoli which are tiny sacs that allow oxygen to reach the blood stream and remove carbon dioxide are filled with fluid, which diminishes the lungs’ ability to provide vital organs with enough oxygen`,
      },
      events: {},
      id: 10,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `With ARDS patients lose the ability to breathe normally and this is known as respiratory failure that results from severe inflammation in the lungs. Inflammation arises when there is damage to cells and in the case of COVID-19 which infects lung cells and damages them. Unfortunately, when fluid moves into the lungs, the lungs cannot perform their normal function, taking in oxygen and releasing carbon dioxide.`,
      },
      events: {},
      id: 11,
    },
    {
      name: "MainPage",
      props: {
        voiceover: "",
        content: "",
        isVideo: true,
        subtitle: `A ventilator can help save the lives of some people with COVID-19 by supporting their lungs until their bodies can fight off the virus. It can assist your lungs by helping maintain optimal air pressure and providing your lungs with oxygen. `,
      },
      events: {},
      id: 12,
    },
    {
      name: "QuestionPage",
      props: {
        voiceover: "",
        partNo: "PART 1",
        instructions: "Answer the following questions below.",
        criteria: {
          column: ["Score", "Indicators"],
          row: [
            [
              "4",
              "Thoroughly explained ideas, and are well supported by detailed and accurate information.",
            ],
            [
              "3",
              "Ideas are clear but are not well supported by detailed information.",
            ],
            ["2", "Ideas are somewhat clear."],
            ["1", "Ideas are not clear."],
          ],
        },
        questions: [
          {
            no: 1,
            question:
              "Which parts of the respiratory system are commonly affected by Covid- 19?",
          },
          {
            no: 2,
            question:
              "How does COVID- 19 affect the functioning of your Respiratory System?",
          },
          {
            no: 3,
            question:
              "How do ventilators work and help people breathe in if they have Acute Respiratory Distress syndrome associated with COVID-19?",
          },
          {
            no: 4,
            question:
              "What is the most important thing you can do to prevent (not get) the coronavirus?",
          },
        ],
        small: true,
      },
      events: {},
      id: 13,
    },
    {
      name: "QuestionPage",
      props: {
        voiceover: "",
        partNo: "PART 2",
        instructions:
          "Statistical data show that there were over 186 million cases of COVID-19 worldwide, and the worst may still come if necessary actions will be lacking.  Make an advocacy campaign poster to help prevent and stop the spread of coronavirus. Upload your output below.",
        criteria: {
          column: ["Category", "4", "3", "2", "1"],
          row: [
            [
              "Title",
              "Title can be read from 6 ft. away and is quite creative",
              "Title can be read from 6 ft. away and describes content well",
              "Title can be read from 4 ft. away and describes the content well",
              "The title is too small and/or does not describe the content of the poster well.",
            ],
            [
              "Attractiveness",
              "The poster is exceptionally attractive in terms of design, layout, and neatness",
              "The poster is attractive in terms of design, layout and neatness.",
              "The poster is acceptably attractive through it may be a bit messy.",
              "The poster is distractingly messy or very poorly designed. It is not attractive.",
            ],
            [
              "Mechanics",
              "Capitalization and punctuation are correct throughout the poster.",
              "There is 1 error in capitalization of punctuation.",
              "There are 2 errors in capitalization or punctuation.",
              "There are more than 2 errors in capitalization or punctuation.",
            ],
            [
              "Labels",
              "All items of importance on the poster are clearly labeled with labels that can be read from at least 3 ft. away.",
              "Almost of importance on the poster are clearly labeled with labels that can be read from at least 3 ft. away.",
              "Several items of importance on the poster are clearly labeled with labels that can be read from at least 3 ft. away.",
              "Labels are too small to view or no important items were labeled. ",
            ],
            [
              "Graphics-Originality",
              "Several of the graphics used on the poster reflect an exceptional degree of student creativity in their creation and/or display",
              "One or two of the graphics used on the poster reflect student creativity in their creation and/or display.",
              "The graphics are made by the student, but are based on the designs or ideas of other.",
              "No graphics made by the student are included. ",
            ],
          ],
        },
        small: false,
      },
      events: {},
      id: 14,
    },
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
