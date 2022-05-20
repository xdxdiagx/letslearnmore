<template>
  <v-container fluid class="fill-height h-100">
    <h1>{{ $route.params.smId }}</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class ModulePage extends Vue {}
</script>
