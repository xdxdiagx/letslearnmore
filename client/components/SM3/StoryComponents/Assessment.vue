<template>
  <v-sheet width="100%" height="100%" class="pt-12" color="blue lighten-3">
    <v-sheet width="100%" class="px-6" color="transparent">
      <div
        v-for="(item, index) in items"
        :key="index"
        style="width: 100%"
        class="mx-auto mb-4"
      >
        <p class="mb-2 d-flex">
          <span class="mr-4">{{ item.no }}.</span
          ><span class="text-justify font-weight-medium">{{
            item.question
          }}</span>
        </p>
        <v-textarea
          style="border: 2px solid orange"
          class="rounded-xl"
          background-color="white"
          flat
          solo
          hide-details
          no-resize
          rows="4"
          :name="`answer-${index}`"
        ></v-textarea>
      </div>
    </v-sheet>
    <img
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Classrom Floor"
    />
    <img
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <audio v-if="voiceover != ''" ref="voice_over">
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
export default class AssessmentPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly items!: NotWellDefinedObject[];

  private mounted() {
    const voice_over: any = this.$refs?.voice_over;
    voice_over.play();
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
}

.teacher-sm {
  height: 38%;
  position: absolute;
  bottom: 50px;
  left: 15px;
}
</style>
