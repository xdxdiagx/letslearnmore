<template>
  <div style="width: 100%" class="mx-auto mb-4">
    <p class="mb-2 d-flex">
      <span class="mr-4">{{ item.no }}.</span
      ><span class="text-left">{{ item.question }}</span>
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
      :name="`answer-${item.no}`"
    ></v-textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class EssayQuestion extends Vue {
  @Prop() readonly item!: NotWellDefinedObject;
  @Prop() readonly correctAns!: string;
}
</script>
