<template>
  <v-sheet
    width="100%"
    height="100%"
    class="pt-14 px-4"
    color="blue lighten-3"
    style="position: relative"
  >
    <v-sheet width="100%" style="position: relative">
      <v-card :color="color" rounded="xl" :style="contentStyle">
        <v-card-text>
          <p
            class="text-subtitle-2 text-sm-h6 black--text text-justify mb-0"
            ref="content"
          ></p>
        </v-card-text>
      </v-card>
    </v-sheet>

    <img
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Teacher Image"
    />
    <img
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <audio v-if="voiceover != ''" ref="voiceover_trivia">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="withProceedBtn && showProceedBtn"
      @click="proceed"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      <span class="error--text">Proceed</span
      ><v-icon color="error">mdi-chevron-right</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class TriviaPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly content!: string;
  @Prop() readonly withProceedBtn!: boolean;
  @Prop() readonly contentStyle!: NotWellDefinedObject;
  @Prop() readonly color!: string;

  private slotContent = "";
  private showProceedBtn = false;

  private mounted() {
    this.slotContent = this.content;
    const voiceover_trivia: any = this.$refs?.voiceover_trivia;
    voiceover_trivia.play();
    if (this.withProceedBtn == true) {
      voiceover_trivia.addEventListener("ended", () => {
        this.showProceedBtn = true;
      });
    }
  }

  private proceed() {
    this.$emit("proceed");
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

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
}
</style>
