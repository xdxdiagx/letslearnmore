<template>
  <v-sheet width="100%" color="transparent" class="mb-4">
    <v-sheet color="transparent" width="100%">
      <p class="mb-2 d-flex">
        <span class="mr-4">{{ item.no }}.</span
        ><span class="text-left">{{ item.question }}</span>
      </p>
      <FileUpload v-on:upload="onUpload" :progress="progress" />
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import FileUpload from "Component/Global/FileUpload.vue";

@Component({
  components: {
    FileUpload,
  },
})
export default class UploadQuestion extends Vue {
  @Prop() readonly item!: NotWellDefinedObject;
  @Prop() readonly part!: number;

  private progress = 0;
  private uploads: NotWellDefinedObject[] = [];

  private async mounted() {
    await this.getUploads();
  }

  private async getUploads() {
    const uid = this.$auth.currentUserId;

    await this.$fire.database
      .ref(`sm_4/${uid}/${this.part}`)
      .child("uploads")
      .get()
      .then((ss) => {
        if (ss.val() != null) {
          this.uploads = ss.val();
          console.log(this.uploads);
        }
      });
  }

  private onUpload(file: any) {
    const uid = this.$auth.currentUserId;
    let uploadTask = this.$fire.storage
      .ref()
      .child(`uploads/sm_4/${this.part}/${file.name}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        this.getUploads();

        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          if (this.uploads.length == 0) {
            let uploads = [];
            uploads.push({ url: downloadURL });
            this.$fire.database
              .ref(`sm_4/${uid}/${this.part}`)
              .child("uploads")
              .set(uploads);
          } else {
            this.uploads.push({ url: downloadURL });
            this.$fire.database
              .ref(`sm_4/${uid}/${this.part}`)
              .child("uploads")
              .set(this.uploads);
          }
        });
      }
    );
  }
}
</script>
