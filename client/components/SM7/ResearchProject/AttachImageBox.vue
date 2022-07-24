<template>
  <v-sheet
    :width="width"
    :height="height"
    :style="boxStyle"
    color="transparent"
    class="mb-4"
  >
    <v-sheet color="transparent" width="100%" height="100%">
      <v-sheet
        v-if="imageUrl == ''"
        width="100%"
        height="100%"
        :style="sheetStyle"
        rounded="lg"
        class="pa-4 d-flex justify-center align-center font-italic text-subtitle-2"
      >
        <v-btn
          @click="inputAns"
          small
          color="orange"
          class="text-capitalize"
          dark
        >
          Attach Image
        </v-btn>
      </v-sheet>
      <v-sheet v-else width="100%" height="100%" rounded="lg">
        <v-img width="100%" height="100%" class="rounded" :src="imageUrl">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-2"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-sheet>
    </v-sheet>
    <v-dialog persistent v-model="uploadDialog">
      <v-card rounded="lg">
        <v-card-title class="py-2 px-5">
          <v-row no-gutters align="center">
            <v-spacer></v-spacer>
            <v-btn
              class="mr-n2"
              icon
              plain
              @click="uploadDialog = !uploadDialog"
              ><v-icon>mdi-close</v-icon></v-btn
            ></v-row
          >
        </v-card-title>
        <v-card-text class="pb-1 px-5">
          <file-upload v-on:upload="onUpload" :progress="progress" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class AttachImageBox extends Vue {
  @Prop() readonly width!: string | number;
  @Prop() readonly height!: string | number;
  @Prop() readonly boxStyle!: NotWellDefinedObject;

  private uploadDialog = false;
  private progress = 0;
  private imageUrl = "";

  private inputAns() {
    this.uploadDialog = !this.uploadDialog;
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "red",
    borderWidth: "2px",
    borderStyle: "solid",
    overflowWrap: "break-word",
  };

  private onUpload(file: any) {
    const uid = this.$auth.currentUserId;
    let uploadTask = this.$fire.storage
      .ref()
      .child(`uploads/sm_7/${file.name}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        this.progress = progress;
        switch (snapshot.state) {
          case "paused": // or 'paused'
            console.log("Upload is paused");
            break;
          case "running": // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            console.log("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            console.log("User canceled the upload");
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.uploadDialog = false;
          this.imageUrl = downloadURL;
          this.$emit("upload", downloadURL);
        });
      }
    );
  }
}
</script>
