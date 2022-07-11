<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="py-2">
      <span class="text-md-h5 text-h6 font-weight-bold accent--text"
        >Activities</span
      >
    </div>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Activities extends Vue {
  async created() {
    console.log(this.$fire.auth.currentUser);
  }
}
</script>
