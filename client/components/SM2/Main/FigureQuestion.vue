<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start pt-14 px-5"
    color="blue lighten-3"
  >
    <p class="mb-4 d-flex">
      <span class="mr-4">{{ item.no }}.</span
      ><span class="text-justify">{{ item.question }}</span>
    </p>
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          color="transparent"
          width="100%"
          class="d-flex justify-end mb-4"
        >
          <v-btn
            class="text-capitalize float-right"
            small
            v-bind="attrs"
            v-on="on"
          >
            Show Diagram
          </v-btn>
        </v-sheet>
      </template>

      <v-card color="blue lighten-3">
        <v-card-title class="error--text text-body-1 font-weight-medium">
          CIRCULAR DIAGRAM
        </v-card-title>
        <v-card-text class="px-4">
          <v-sheet
            width="80%"
            class="mx-auto d-flex justify-space-around transparent"
          >
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
              :style="sheetStyle"
              @click="inputAns(0)"
              >{{
                sequence[0].text != "" ? sequence[0].text : sequence[0].no
              }}</v-sheet
            >
            <v-icon size="32">mdi-arrow-right-thick</v-icon>
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
              :style="sheetStyle"
              @click="inputAns(1)"
              >{{
                sequence[1].text != "" ? sequence[1].text : sequence[1].no
              }}</v-sheet
            >
          </v-sheet>
          <v-sheet
            width="70%"
            class="mx-auto d-flex justify-space-between transparent"
          >
            <v-icon size="32">mdi-arrow-top-right-thick</v-icon>
            <v-icon size="32">mdi-arrow-bottom-right-thick</v-icon>
          </v-sheet>
          <v-sheet class="d-flex justify-space-between transparent">
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
              :style="sheetStyle"
              @click="inputAns(5)"
              >{{
                sequence[5].text != "" ? sequence[5].text : sequence[5].no
              }}</v-sheet
            >

            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
              :style="sheetStyle"
              @click="inputAns(2)"
              >{{
                sequence[2].text != "" ? sequence[2].text : sequence[2].no
              }}</v-sheet
            >
          </v-sheet>
          <v-sheet
            width="70%"
            class="mx-auto d-flex justify-space-between transparent transparent"
          >
            <v-icon size="32">mdi-arrow-top-left-thick</v-icon>
            <v-icon size="32">mdi-arrow-bottom-left-thick</v-icon>
          </v-sheet>
          <v-sheet
            width="80%"
            class="mb-4 mx-auto d-flex justify-space-around transparent"
          >
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
              :style="sheetStyle"
              @click="inputAns(4)"
              >{{
                sequence[4].text != "" ? sequence[4].text : sequence[4].no
              }}</v-sheet
            >
            <v-icon size="32">mdi-arrow-left-thick</v-icon>
            <v-sheet
              width="100px"
              height="80px"
              class="rounded-circle d-flex justify-center align-center text-body-1 font-weight-medium"
              :style="sheetStyle"
              @click="inputAns(3)"
              >{{
                sequence[3].text != "" ? sequence[3].text : sequence[3].no
              }}</v-sheet
            >
          </v-sheet>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="submit" color="primary"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog persistent v-model="answerDialog">
      <v-card rounded="lg">
        <v-card-text class="px-4 pt-4 pb-0">
          <v-textarea
            v-model="input"
            style="border: 2px solid orange"
            class="rounded-lg mt-2"
            background-color="white"
            flat
            solo
            hide-details
            autofocus
            no-resize
            clearable
            rows="4"
          ></v-textarea>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveInput"> Save </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="done" fullscreen>
      <v-sheet
        color="blue lighten-3"
        width="100%"
        height="100%"
        class="d-flex flex-column justify-center align-center"
      >
        <img src="~assets/img/ending1.gif" alt="Good Job" />
        <v-btn to="/materials">
          <v-icon>mdi-chevron-left</v-icon>
          Go to Main
        </v-btn>
      </v-sheet>
    </v-dialog>
    <img width="100%" :src="item.figure" alt="Question Figure" />

    <audio v-if="voiceover" ref="voiceover">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class FigureQuestion extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly item!: NotWellDefinedObject;
  @Prop() readonly correctAns!: string;

  private dialog = false;
  private answerDialog = false;
  private done = false;
  private input = "";
  private cellIndex = 0;

  private async mounted() {
    const voiceover: any = this.$refs?.voiceover;
    voiceover.play();

    const sm_2 = (await this.$user.getCurrentUser()).sm_2 || {
      done: false,
      grade: 0,
    };
    if (sm_2.done == true) this.done = true;
  }

  private sequence: NotWellDefinedObject[] = [
    {
      no: 1,
      text: "",
    },
    {
      no: 2,
      text: "",
    },
    {
      no: 3,
      text: "",
    },
    {
      no: 4,
      text: "",
    },
    {
      no: 5,
      text: "",
    },
    {
      no: 6,
      text: "",
    },
  ];

  private inputAns(index: number) {
    this.answerDialog = !this.answerDialog;
    this.cellIndex = index;
  }

  private saveInput() {
    this.sequence[this.cellIndex].text = this.input;
    this.answerDialog = false;
    this.input = "";
  }

  private submit() {
    const uid = this.$auth.currentUserId;
    if (this.$fire.database.ref(`sm_2/${uid}`) != null) {
      this.$fire.database
        .ref(`sm_2/${uid}/2`)
        .child("sequence")
        .set(this.sequence)
        .then((data) => {
          console.log(data);
          this.dialog = false;
          this.$fire.database
            .ref(`users/${uid}`)
            .child("sm_2")
            .set({ done: true, grade: 0 });
          this.done = true;
        });
    }
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "#fff",
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "#FFC107",
  };
}
</script>
