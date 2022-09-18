<template>
  <v-sheet
    @drop.prevent="dragFile($event)"
    @dragover.prevent="dragover = true"
    @dragenter.prevent="dragover = true"
    @dragleave.prevent="dragover = false"
    rounded="xl"
    width="100%"
    height="100%"
    min-width="140px"
    min-height="140px"
    elevation="0"
    class="d-flex flex-column justify-center align-center mb-4 custom-border"
    :class="[dragover ? 'custom-border-hover' : '']"
  >
    <v-sheet
      v-if="uploadProgress == 0"
      class="d-flex flex-column justify-center align-center"
    >
      <v-icon x-large color="grey">mdi-cloud-upload-outline</v-icon>
      <span class="mb-1 text-subtitle-2 grey--text">Drop your file here</span>
      <span class="mb-2 text-caption grey--text">or</span>
      <v-btn small dark elevation="2" color="red accent-2" @click="uploadClick"
        >Select a file</v-btn
      >
      <v-file-input
        v-model="files"
        ref="uploadInput"
        v-show="false"
        @change="uploadFile"
      />
    </v-sheet>
    <v-sheet
      width="100%"
      v-else
      class="d-flex flex-column justify-center align-center px-4"
    >
      <span class="mb-1 text-subtitle-2 grey--text">{{ statusText }}</span>
      <v-progress-linear v-model="uploadProgress" color="blue-grey" height="25">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class FileUpload extends Vue {
  @Prop({ default: 0 }) readonly progress!: number;
  private dragover = false;
  private files: NotWellDefinedObject[] = [];
  private uploadProgress = 0;
  private statusText = "";

  private uploadClick() {
    const uploadInput = (this.$refs.uploadInput as any).$refs
      .input as HTMLInputElement;
    uploadInput.click();
  }

  private uploadFile(file: any) {
    this.$emit("upload", file);
  }

  private dragFile(e: NotWellDefinedObject) {
    this.dragover = false;
    if (e.dataTransfer.files.length > 1) {
      console.log("Only one file is allowed.");
    } else {
      this.files = e.dataTransfer.files;
      this.uploadFile(this.files[0]);
    }
  }

  @Watch("progress")
  onProgress() {
    console.log(this.progress);
    this.uploadProgress = this.progress;
    if (this.uploadProgress < 100) this.statusText = "Uploading @";
    else this.statusText = "Your file has been uploaded.";
  }
}
</script>

<style scoped>
.custom-border {
  border: 2px dashed #cccccc !important;
}

.custom-border-hover {
  border: 2px dashed #0d92e3 !important;
}

.converted-border {
  border: 2px dashed #cccccc !important;
}
</style>
