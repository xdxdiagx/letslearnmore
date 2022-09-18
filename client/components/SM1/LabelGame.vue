<template>
  <v-sheet
    width="100%"
    height="100%"
    style="position: relative; max-width: 380px"
    class="pt-14 mx-auto"
  >
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" class="d-flex justify-center">
        <img
          width="100%"
          src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fgame%2Frespi_system_2.png?alt=media&token=8de2960f-76d3-49e8-bbbe-4b0eb43a1f73"
          alt=""
          class="mx-auto"
          style="max-width: 400px"
        />
        <img
          height="70px"
          style="
            position: absolute;
            top: 380px;
            left: 210px;
            border: 4px solid #000;
          "
          src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fimages%2Fgame%2Falveoli.png?alt=media&token=2e6951a5-df1a-46bb-9d02-0c9abd1eca65"
          alt=""
        />
      </v-col>
    </v-row>
    <DropZone
      v-for="zone in dropZones"
      :key="zone.correctAns"
      :position="zone.position"
      :correctAns="zone.correctAns"
      :leftPointer="zone.leftPointer"
      v-on:correctAnswer="onCorrectAnswer"
    />

    <draggable :list="choices" class="d-flex justify-center flex-wrap py-1">
      <v-card
        width="114px"
        height="38px"
        class="text-center ma-1"
        color="yellow"
        style="cursor: move"
        v-for="choice in choices"
        :key="choice"
        draggable
        @dragstart="startDrag($event, choice)"
      >
        <v-card-text class="pa-2">
          <span class="text-subtitle-2 black--text">{{ choice }}</span>
        </v-card-text>
      </v-card>
    </draggable>

    <audio v-if="voiceover != ''" ref="voiceover_label_game">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <audio ref="voiceover_game">
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fvoice_over%2Fgame%2Fyou_made_it.wav?alt=media&token=67c2204c-0890-4c41-9514-b4baa57177d1"
        type="audio/ogg"
      />
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fvoice_over%2Fgame%2Fyou_made_it.wav?alt=media&token=67c2204c-0890-4c41-9514-b4baa57177d1"
        type="audio/mpeg"
      />
      <source
        src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_1%2Fvoice_over%2Fgame%2Fyou_made_it.wav?alt=media&token=67c2204c-0890-4c41-9514-b4baa57177d1"
        type="audio/wav"
      />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import DropZone from "./GameComponents/Dropzone.vue";
import draggable from "vuedraggable";

@Component({
  components: {
    DropZone,
    draggable,
  },
})
export default class LabelGame extends Vue {
  @Prop() readonly voiceover!: string;

  private correctAnswers = 0;

  private choices: string[] = [
    "Larynx",
    "Bronchi",
    "Pharynx",
    "Trachea",
    "Alveoli",
    "Nasal Cavity",
    "Lungs",
    "Pleura",
    "Diaphragm",
    "Bronchioles",
  ];

  private dropZones: NotWellDefinedObject[] = [
    {
      position: {
        top: 60,
        left: 10,
      },
      correctAns: "Nasal Cavity",
      leftPointer: false,
    },
    {
      position: {
        top: 120,
        left: 170,
      },
      correctAns: "Pharynx",
      leftPointer: true,
    },
    {
      position: {
        top: 170,
        left: 70,
      },
      correctAns: "Larynx",
      leftPointer: false,
    },
    {
      position: {
        top: 220,
        left: 170,
      },
      correctAns: "Trachea",
      leftPointer: true,
    },
    {
      position: {
        top: 290,
        left: 60,
      },
      correctAns: "Bronchi",
      leftPointer: false,
    },
    {
      position: {
        top: 270,
        left: 238,
      },
      correctAns: "Pleura",
      leftPointer: true,
    },
    {
      position: {
        top: 340,
        left: 10,
      },
      correctAns: "Lungs",
      leftPointer: false,
    },
    {
      position: {
        top: 345,
        left: 238,
      },
      correctAns: "Bronchioles",
      leftPointer: true,
    },
    {
      position: {
        top: 400,
        left: 20,
      },
      correctAns: "Diaphragm",
      leftPointer: false,
    },
    {
      position: {
        top: 410,
        left: 238,
      },
      correctAns: "Alveoli",
      leftPointer: true,
    },
  ];

  private startDrag(evt: any, item: string) {
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("organ", item);
  }

  private onMove(evt: any) {
    console.log(evt);
  }

  private dropEvent() {
    console.log("Drop");
  }

  private onCorrectAnswer() {
    this.correctAnswers += 1;
  }

  private mounted() {
    const voiceover_label_game: any = this.$refs?.voiceover_label_game;
    if (voiceover_label_game != undefined) voiceover_label_game?.play();
  }

  @Watch("correctAnswers")
  onCorrectAnswerChanged() {
    if (this.correctAnswers == this.dropZones.length) {
      const voiceover_label_game: any = this.$refs?.voiceover_label_game;
      voiceover_label_game?.play();
    }
  }
}
</script>
