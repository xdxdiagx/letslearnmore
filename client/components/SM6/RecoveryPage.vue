<template>
  <v-sheet width="100%" height="100%" class="px-4 pt-4" color="blue lighten-3">
    <v-row no-gutters style="position: relative">
      <h3
        style="
          position: absolute;
          bottom: 10%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, 0);
          line-height: 1;
          color: #fff;
        "
        class="text-center text-h6 text-sm-h4"
      >
        Recovering Endangered Species
      </h3>
      <img src="~assets/img/ribbon.png" width="100%" alt="Ribbon Banner" />
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="5" sm="6">
        <file-upload v-on:upload="onUpload" :progress="progress" />
      </v-col>
      <v-col cols="7" sm="6" class="pl-2">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              hide-details
              dense
              label="Species Name"
              outlined
              color="black"
              class="mb-2"
              v-model="fields.species_name"
            ></v-text-field
          ></v-col>
          <v-col cols="12">
            <v-text-field
              hide-details
              dense
              label="Place Commonly Found"
              outlined
              color="black"
              class="mb-2"
              v-model="fields.place_found"
            ></v-text-field
          ></v-col>
          <v-col cols="12">
            <v-text-field
              hide-details
              dense
              label="Natural Habitat"
              outlined
              color="black"
              class="mb-2"
              v-model="fields.natural_habitat"
            ></v-text-field
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters align="center">
      <v-col cols="10" sm="6">
        <span class="text-subtitle-2 text-sm-subtitle-1"
          >Year the species became endangered:</span
        >
      </v-col>
      <v-col cols="2" sm="6" class="pl-2">
        <v-text-field
          hide-details
          dense
          color="black"
          class="mb-2"
          v-model="fields.year_endangered"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters align="center">
      <v-col cols="10" sm="6">
        <span class="text-subtitle-2 text-sm-subtitle-1"
          >Year the species saved from extinction:</span
        >
      </v-col>
      <v-col cols="2" sm="6" class="pl-2">
        <v-text-field
          hide-details
          dense
          color="black"
          class="mb-2"
          v-model="fields.year_saved"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-sheet class="d-flex flex-column" color="transparent">
      <span class="text-subtitle-2 text-sm-subtitle-1 mb-1"
        >Why did the species become endangered?</span
      >
      <v-textarea
        outlined
        color="black"
        hide-details
        no-resize
        rows="4"
        v-model="fields.why_endangered"
      ></v-textarea>
    </v-sheet>
    <v-sheet class="d-flex flex-column" color="transparent">
      <span class="text-subtitle-2 text-sm-subtitle-1 mb-1"
        >How was the species saved from extinction?</span
      >
      <v-textarea
        outlined
        color="black"
        hide-details
        no-resize
        rows="4"
        v-model="fields.how_saved"
      ></v-textarea>
    </v-sheet>
    <v-row v-if="!done" no-gutters class="mt-2">
      <v-btn @click="clear" dark color="red lighten-1">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="disableBtn" @click="submit" color="success"
        >Submit</v-btn
      >
    </v-row>
    <v-row v-else no-gutters>
      <span class="text-caption error--text font-italic"
        >You've already finished this activity</span
      >
    </v-row>

    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class RecoveryPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly part!: number;

  private progress = 0;
  private done = false;
  private disableBtn = false;
  private fields: NotWellDefinedObject = {
    species_name: "",
    place_found: "",
    natural_habitat: "",
    year_endangered: 0,
    year_saved: 0,
    why_endangered: "",
    how_saved: "",
    photo_url: "",
  };

  private onUpload(file: any) {
    const uid = this.$auth.currentUserId;
    let uploadTask = this.$fire.storage
      .ref()
      .child(`uploads/sm_6/${file.name}`)
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
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.fields.photo_url = downloadURL;
        });
      }
    );
  }

  private async mounted() {
    const uid = this.$auth.currentUserId;
    const sm_6 = (await this.$user.getCurrentUser()).sm_6 || {
      done: false,
      grade: 0,
    };
    if (sm_6.done == true) this.done = true;
  }

  private submit() {
    const uid = this.$auth.currentUserId;

    if (this.$fire.database.ref(`sm_6/${uid}`) != null) {
      this.$fire.database
        .ref(`sm_6/${uid}/${this.part}`)
        .set(this.fields)
        .then((data) => {
          this.clear();
          this.disableBtn = true;
          if (this.part == 4) {
            this.$fire.database
              .ref(`users/${uid}`)
              .child("sm_6")
              .set({ done: true, grade: 0 });
          }
        });
    }
  }

  private clear() {
    this.fields = {
      species_name: "",
      place_found: "",
      natural_habitat: "",
      year_endangered: 0,
      year_saved: 0,
      why_endangered: "",
      how_saved: "",
      photo_url: "",
    };
  }
}
</script>
