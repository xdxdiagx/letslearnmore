<template>
  <v-sheet
    max-width="130px"
    min-width="100px"
    width="35%"
    height="45px"
    outlined
    rounded="lg"
    style="position: absolute; background-color: rgba(255, 255, 255, 0.8)"
    class="d-flex justify-center align-center"
    :class="[dropAns ? 'correct' : 'wrong']"
    :style="dropZone"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <v-sheet
      width="100%"
      height="100%"
      color="transparent"
      class="d-flex justify-center align-center"
    >
      <v-sheet
        width="10px"
        height="10px"
        rounded="circle"
        color="success"
        :class="[leftPointer ? 'left-pointer' : 'right-pointer']"
      >
      </v-sheet>
      <v-card
        v-if="dropAns"
        class="text-center"
        color="yellow "
        width="120px"
        height="38px"
        elevation="1"
      >
        <v-card-text class="pa-2">
          <span class="text-subtitle-2 black--text">{{ answer }}</span>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class DropZone extends Vue {
  @Prop() readonly position!: NotWellDefinedObject;
  @Prop() readonly correctAns!: string;
  @Prop({ default: true }) readonly leftPointer!: boolean;

  private dropAns = false;
  private answer = "";

  private get dropZone() {
    const pos = {
      top: `${this.position.top}px`,
      left: `${this.position.left}px`,
    };

    return pos;
  }

  private checkAnswer(answer: string) {
    if (answer.toLowerCase() == this.correctAns.toLowerCase()) {
      this.dropAns = true;
      this.answer = answer;
      this.$emit("correctAnswer");
    }
  }

  private onDrop(evt: any, item: string) {
    const organ = evt.dataTransfer.getData("organ");
    this.checkAnswer(organ);
  }
}
</script>

<style scoped>
.correct {
  border: 2px solid #4caf50;
}

.wrong {
  border: 2px solid #ef5350;
}

.left-pointer {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.right-pointer {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}
</style>
