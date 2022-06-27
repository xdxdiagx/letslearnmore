<template>
  <v-sheet width="100%" height="100%" class="pt-10" color="blue lighten-3">
    <v-card
      class="mr-4"
      rounded="xl"
      style="position: absolute; top: 50px; left: 90px"
    >
      <v-card-text>
        <p class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0">
          {{ description }}
        </p>
      </v-card-text>
    </v-card>
    <img
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <img
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Teacher Image"
    />
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
export default class DescriptionPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly description!: string;
}
</script>

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1000;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1000;
}
</style>
