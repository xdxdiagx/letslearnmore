<template>
  <v-img :width="width" :height="height" :style="imageStyle" :src="src">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
    <v-row no-gutters justify="center" align="center" class="fill-height">
      <h1 class="yellow error--text px-2">{{ topicTitle }}</h1>
    </v-row>
  </v-img>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class ImageContainer extends Vue {
  @Prop() readonly src!: string;
  @Prop() readonly imageStyle!: string;
  @Prop() readonly width!: string | number;
  @Prop() readonly height!: string | number;
  @Prop() readonly topicTitle!: string;
}
</script>
