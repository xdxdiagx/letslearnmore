<template>
  <v-sheet width="100%" height="100%" class="pt-10" color="blue lighten-3">
    <v-sheet
      width="100%"
      height="100%"
      class="d-flex flex-column transparent px-4"
    >
      <v-sheet height="50%" class="transparent pa-4" style="position: relative">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="`Image-${index + 1}`"
          :style="image.style"
        />
      </v-sheet>
      <v-card rounded="lg" class="my-4">
        <v-card-text>
          <p
            class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0"
            ref="content"
          ></p>
        </v-card-text>
      </v-card>
    </v-sheet>
    <audio v-if="voiceover != ''" ref="voice_over">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class DescriptionPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly content!: string;
  @Prop() readonly images!: NotWellDefinedObject[];

  private slotContent = "";

  private mounted() {
    this.slotContent = this.content;
    const voice_over: any = this.$refs?.voice_over;
    voice_over.play();
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
