<template>
  <v-sheet
    @drop.prevent="dragFile($event)"
    @dragover.prevent="dragover = true"
    @dragenter.prevent="dragover = true"
    @dragleave.prevent="dragover = false"
    rounded="xl"
    width="100%"
    height="100%"
    min-width="160px"
    min-height="160px"
    elevation="0"
    class="d-flex flex-column justify-center align-center mb-4 custom-border"
    :class="[dragover ? 'custom-border-hover' : '']"
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
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class FileUpload extends Vue {
  private dragover = false;
  private files: NotWellDefinedObject[] = [];

  private uploadClick() {
    const uploadInput = (this.$refs.uploadInput as any).$refs
      .input as HTMLInputElement;
    uploadInput.click();
  }

  private uploadFile(file: any) {
    console.log(file);
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
