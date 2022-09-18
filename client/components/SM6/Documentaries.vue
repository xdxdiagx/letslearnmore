<template>
  <v-sheet
    width="100%"
    height="100%"
    class="px-4 pt-4"
    color="blue lighten-3"
    style="
      background-image: url('https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fmain%2FDocumentaries%20Background.jpg?alt=media&token=fd636d0a-fddf-4aa2-a0f4-f56765f0ad9f');
      background-size: cover;
    "
  >
    <v-row no-gutters style="position: relative">
      <h3
        style="
          position: absolute;
          bottom: 20%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, 0);
          line-height: 1;
          color: #fff;
        "
        class="text-center text-h5 text-sm-h2"
      >
        Documentaries
      </h3>
      <img src="~assets/img/ribbon.png" width="100%" alt="Ribbon Banner" />
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" class="pa-0">
        <v-row
          no-gutters
          v-for="video in videos"
          :key="video.link"
          :justify="video.alignment"
          class="my-4 px-6"
        >
          <v-card
            height="200"
            width="200"
            rounded="circle"
            :href="video.link"
            link
            target="_blank"
            class="pa-4"
            :style="cardStyle"
          >
            <v-row
              no-gutters
              justify="center"
              align="center"
              class="fill-height"
            >
              <span class="text-center text-subtitle-2 font-italic">{{
                video.title
              }}</span>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>

    <audio v-if="voiceover != ''" autoplay>
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
export default class Documentaries extends Vue {
  @Prop() readonly voiceover!: string;

  private videos: NotWellDefinedObject[] = [
    {
      title:
        "How Humans Are Causing The Sixth Mass Extinction l The Holocene Extinction, Explained",
      link: "https://www.youtube.com/watch?v=N2DP1I6CnXw",
      alignment: "start",
    },
    {
      title: "Philippines Critically Endangered Species (Animals) - DENR",
      link: "https://www.youtube.com/watch?v=uZ97e7rzON8",
      alignment: "end",
    },
    {
      title:
        "We need IMMEDIATE action to stop extinction crisis, David Attenborough - BBC",
      link: "https://www.youtube.com/watch?v=dbCR0KSU52g",
      alignment: "start",
    },
  ];

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#FFEB3B",
    borderWidth: "3px",
    borderStyle: "solid",
  };
}
</script>
