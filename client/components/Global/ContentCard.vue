<template>
  <v-card
    :elevation="elevation"
    :color="color"
    :rounded="rounded"
    :style="contentStyle"
  >
    <v-card-text>
      <p
        class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0"
        ref="content"
      ></p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class ContentCard extends Vue {
  @Prop() readonly content!: string;
  @Prop() readonly contentStyle!: NotWellDefinedObject;
  @Prop() readonly color!: string;
  @Prop() readonly elevation!: string;
  @Prop() readonly rounded!: string | boolean;

  private slotContent = "";
  private showProceedBtn = true;

  private mounted() {
    this.slotContent = this.content;
  }

  private ConvertStringToHTML(str: string) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, "text/html");
    return doc.body.innerHTML;
  }

  @Watch("slotContent")
  private onSlotContentChange() {
    const contentContainer = this.$refs.content as HTMLElement;
    contentContainer.innerHTML = this.ConvertStringToHTML(this.slotContent);
  }
}
</script>

<style></style>
