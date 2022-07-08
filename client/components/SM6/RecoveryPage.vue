<template>
  <v-sheet width="100%" height="100%" class="px-4 pt-4" color="blue lighten-3">
    <v-row no-gutters style="position: relative">
      <h3
        style="
          position: absolute;
          bottom: 10%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, 0);
          line-height: 1;
          color: #fff;
        "
        class="text-center text-h6 text-sm-h4"
      >
        Recovering Endangered Species
      </h3>
      <img src="~assets/img/ribbon.png" width="100%" alt="Ribbon Banner" />
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="12" sm="6" class="mb-2">
        <file-upload />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="pl-sm-2 d-flex flex-column justify-space-around"
      >
        <v-text-field
          hide-details
          dense
          label="Species Name"
          outlined
          color="black"
          class="mb-2"
        ></v-text-field>
        <v-text-field
          hide-details
          dense
          label="Place Commonly Found"
          outlined
          color="black"
          class="mb-2"
        ></v-text-field>
        <v-text-field
          hide-details
          dense
          label="Natural Habitat"
          outlined
          color="black"
          class="mb-2"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters align="center">
      <v-col cols="10" sm="6">
        <span class="text-subtitle-2 text-sm-subtitle-1"
          >Year the species became endangered:</span
        >
      </v-col>
      <v-col cols="2" sm="6" class="pl-2">
        <v-text-field
          hide-details
          dense
          color="black"
          class="mb-2"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters align="center">
      <v-col cols="10" sm="6">
        <span class="text-subtitle-2 text-sm-subtitle-1"
          >Year the species saved from extinction:</span
        >
      </v-col>
      <v-col cols="2" sm="6" class="pl-2">
        <v-text-field
          hide-details
          dense
          color="black"
          class="mb-2"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-sheet class="d-flex flex-column" color="transparent">
      <span class="text-subtitle-2 text-sm-subtitle-1 mb-1"
        >Why did the species become endangered?</span
      >
      <v-textarea
        outlined
        color="black"
        hide-details
        no-resize
        rows="3"
      ></v-textarea>
    </v-sheet>
    <v-sheet class="d-flex flex-column" color="transparent">
      <span class="text-subtitle-2 text-sm-subtitle-1 mb-1"
        >How was the species saved from extinction?</span
      >
      <v-textarea
        outlined
        color="black"
        hide-details
        no-resize
        rows="3"
      ></v-textarea>
    </v-sheet>

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
export default class RecoveryPage extends Vue {
  @Prop() readonly voiceover!: string;
}
</script>
