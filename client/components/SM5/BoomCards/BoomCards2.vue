<template>
  <v-sheet height="100%" width="100%" color="blue lighten-3">
    <v-btn
      @click="$emit('close')"
      elevation="0"
      class="mt-n2 mr-n2"
      fixed
      top
      right
      fab
      small
      plain
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-window
      show-arrows
      v-model="cardIndex"
      touchless
      style="width: 100%; height: 100%"
    >
      <v-window-item class="fill-height ma-0" :value="1">
        <v-sheet
          height="100%"
          width="100%"
          color="transparent"
          class="d-flex justify-center align-center"
        >
          <v-card
            height="auto"
            :style="cardStyle"
            max-width="400px"
            class="mx-auto"
          >
            <v-card-text class="pa-0">
              <v-row no-gutters>
                <img
                  width="100%"
                  height="80px"
                  src="~assets/img/boom_card_header.png"
                  alt="Boom Card Header"
                />
              </v-row>
              <v-row no-gutters>
                <v-col cols="3" class="pa-2">
                  <img
                    width="100%"
                    src="~assets/img/Two.png"
                    alt="Boom Card Number"
                  />
                </v-col>
                <v-col cols="9" class="pa-2">
                  <content-card
                    :content="`A normal daughter of a man with hemophilia (recessive sex-linked trait) marries a man who is normal for that trait. Cross their genotypes using Punnett square, and answer the succeeding card.`"
                    :elevation="0"
                    :contentStyle="contentStyle"
                  />
                </v-col>
              </v-row>
              <v-row no-gutters class="pa-2 pb-4" justify="center">
                <PunnettSquare v-on:updateMatrix="onUpdateMatrix" />
              </v-row>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          height="100%"
          width="100%"
          color="transparent"
          class="d-flex justify-center align-center"
        >
          <v-card
            height="auto"
            :style="cardStyle"
            max-width="400px"
            class="mx-auto"
          >
            <v-card-text class="pa-0">
              <v-row no-gutters>
                <img
                  width="100%"
                  height="80px"
                  src="~assets/img/boom_card_header.png"
                  alt="Boom Card Header"
                />
              </v-row>
              <v-row
                v-for="item in activityQuestions"
                :key="item.no"
                no-gutters
                class="px-4 mb-4"
                justify="center"
                align="center"
              >
                <v-row v-if="item.type == 'short'" no-gutters>
                  <v-col cols="8" class="pr-2 text-subtitle-2">
                    {{ item.no }}. {{ item.question }}
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="item.answer"
                      hide-details
                      outlined
                      background-color="amber"
                      color="grey darken-4"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row v-else-if="item.type == 'long'" no-gutters>
                  <v-col cols="12" class="text-subtitle-2">
                    {{ item.no }}. {{ item.question }}
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="item.answer"
                      hide-details
                      outlined
                      no-resize
                      background-color="amber"
                      color="grey darken-4"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-row>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-row no-gutters>
                <v-btn @click="clear" text>Clear</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submit" color="primary">Submit</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import PunnettSquare from "../PunnettSquare.vue";

@Component({
  components: {
    PunnettSquare,
  },
})
export default class BoomCards2 extends Vue {
  private cardIndex = 0;
  private showSubmitBtn = false;
  private punnettMatrix = [];

  private next() {
    this.cardIndex++;
  }

  private prev() {
    this.cardIndex--;
  }

  private activityQuestions: NotWellDefinedObject[] = [
    {
      no: 1,
      question:
        "What is the probability of the couple’s daughter to become hemophiliac?",
      answer: "",
      type: "short",
    },
    {
      no: 2,
      question:
        "What is the probability of the couple’s son to become hemophiliac?",
      answer: "",
      type: "short",
    },
    {
      no: 3,
      question:
        "In your own words, how will you differentiate sex-linked traits from sex-influenced and sex-limited traits?",
      answer: "",
      type: "long",
    },
  ];

  private submit() {
    const uid = this.$auth.currentUserId;

    if (this.$fire.database.ref(`sm_5/${uid}`) != null) {
      let data = {};
      data = {
        uid: uid,
        answers: this.activityQuestions,
        punnett: this.punnettMatrix,
      };

      this.$fire.database
        .ref(`sm_5/${uid}/bc2`)
        .set(data)
        .then((data) => {
          this.showSubmitBtn = false;
          this.clear();
        });
    }
  }

  private onUpdateMatrix(matrix: NotWellDefinedObject[]) {
    this.punnettMatrix = matrix;
  }

  private clear() {
    this.activityQuestions = this.activityQuestions.map(
      (item: NotWellDefinedObject) => {
        return {
          no: item.no,
          question: item.question,
          answer: "",
          type: item.type,
        };
      }
    );
  }

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#EF5350",
    borderWidth: "4px",
    borderStyle: "solid",
  };

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#795548",
    borderWidth: "3px",
    borderStyle: "dashed",
  };
}
</script>

<style></style>
