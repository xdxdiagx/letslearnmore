<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-center align-start pt-14 pb-3"
    color="blue lighten-3"
  >
    <v-sheet
      width="auto"
      class="mx-4 d-flex justify-center mb-4"
      rounded
      color="transparent"
    >
      <p class="mb-0 text-caption text-justify">
        <span
          style="padding: 2px 4px"
          class="text-caption font-weight-medium yellow rounded"
          >Important Reminder:</span
        >
        If you have a serious medical condition, please do not do the
        activities. You may let your friend or other members of your family do
        the activities for you.
      </p>
    </v-sheet>
    <v-sheet
      width="100%"
      class="flex-grow-1 transparent px-4 overflow-y-auto mb-16"
      style="position: relative"
    >
      <v-data-table hide-default-footer dense :headers="headers" :items="data">
        <template v-slot:[`item.heartRate`]="props">
          <v-edit-dialog :return-value.sync="props.item.heartRate">
            {{ props.item.heartRate }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.heartRate"
                label="Edit"
                single-line
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:[`item.pulseRate`]="props">
          <v-edit-dialog :return-value.sync="props.item.pulseRate">
            {{ props.item.pulseRate }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.pulseRate"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
      </v-data-table>
    </v-sheet>

    <audio ref="voiceover_1">
      <source :src="voiceover1" type="audio/ogg" />
      <source :src="voiceover1" type="audio/mpeg" />
      <source :src="voiceover1" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class ActivityPage2 extends Vue {
  @Prop() readonly objectives!: string[];

  private voiceover1 =
    "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FActivities-2021-08-19%2005_29_26.wav?alt=media&token=5446f32b-f010-47fa-9753-b4b22fb3504d";
  private contents: NotWellDefinedObject[] = [
    {
      text: `According to the Harvard Medical School Special Report Diseases of the Heart, it’s easy to check your pulse using just your fingers, either at the wrist or the side of the neck.`,
      cardStyle: {
        width: "100%",
        height: "auto",
        borderColor: "#2196F3",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "transparent",
      },
      elevation: "0",
      rounded: false,
    },
  ];

  private headers: NotWellDefinedObject[] = [
    {
      text: "Activities",
      align: "start",
      sortable: false,
      value: "activity",
    },
    {
      text: "Heart Rate (bpm)",
      align: "center",
      sortable: false,
      value: "heartRate",
    },
    {
      text: "Pulse Rate (bpm)",
      align: "center",
      sortable: false,
      value: "pulseRate",
    },
  ];

  private data: NotWellDefinedObject[] = [
    {
      activity: "Sitting (Resting)",
      heartRate: 0,
      pulseRate: 0,
    },
    {
      activity: "Walking Quickly (1 minute)",
      heartRate: 0,
      pulseRate: 0,
    },
    {
      activity: "Running (1 minute)",
      heartRate: 0,
      pulseRate: 0,
    },
    {
      activity: "Jumping Jacks (20 times)",
      heartRate: 0,
      pulseRate: 0,
    },
    {
      activity: "Push Up (10 times)",
      heartRate: 0,
      pulseRate: 0,
    },
    {
      activity: "Walk at a moderate pace (Cool down)",
      heartRate: 0,
      pulseRate: 0,
    },
  ];

  private mounted() {
    const voiceover_1: any = this.$refs?.voiceover_1;
    voiceover_1.play();
  }
}
</script>
