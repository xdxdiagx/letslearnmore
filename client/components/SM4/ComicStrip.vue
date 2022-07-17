<template>
  <v-sheet width="100%" height="100%" color="blue lighten-3">
    <v-img
      :src="background"
      alt="Comic Strip Background"
      width="100%"
      height="100%"
      class="mx-0"
      contain
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0 grey" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class ComicStrip extends Vue {
  @Prop() readonly background!: string;
}
</script>
