<template>
  <v-sheet width="100%" height="100%" class="pt-10" color="blue lighten-3">
    <v-card
      color="transparent"
      class="ml-4 custom-border"
      rounded="xl"
      elevation="0"
      style="
        position: absolute;
        top: 50%;
        right: 25%;
        transform: translate(0, -80%);
      "
    >
      <v-card-text>
        <p class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0">
          Dr. Jely is a compassionate, dedicated, and respected doctor. Her
          decision to become a doctor was driven largely by her spiritual values
          and great sense of service and duty. To help and provide the best
          possible health outcomes for her sick patients is the ultimate goal of
          Dr. Jely, that’s why she often conducts a medical mission in the
          remote areas to provide adequate supply of healthcare services to
          people who are deprived by limited access
        </p>
      </v-card-text>
    </v-card>
    <img
      src="https://images.squarespace-cdn.com/content/v1/56a1a14b05caa7ee9f26f47d/1464495050426-XFDCE0FLE8ZWZ9CCRZTP/ke17ZwdGBToddI8pDm48kBzFLwbG0C3YI8bKR4IhzENZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7QD-O0fvmPrr4iWQ1MPY9QDIYav1vCDQuhrAWgkJQO9RAy0oTEZcxOCZJWDUAfaEOA/female_doctor_strike_a_pose_lg_clr.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Dr. Jelly Image"
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
export default class DoctorIntroPage extends Vue {
  @Prop() readonly voiceover!: string;
}
</script>

<style scoped>
.teacher-lg {
  height: 50%;
  position: absolute;
  bottom: 80px;
  right: -50px;
  z-index: 1000;
}

.teacher-sm {
  height: 40%;
  position: absolute;
  bottom: 50px;
  right: -50px;
  z-index: 1000;
}

.custom-border {
  border: 7px dashed red !important;
}
</style>
