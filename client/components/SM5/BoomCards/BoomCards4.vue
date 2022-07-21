<template>
  <v-sheet height="100%" width="100%" color="blue lighten-3">
    <v-btn
      @click="$emit('close')"
      elevation="0"
      class="mt-n2 mr-n2"
      fixed
      top
      right
      fab
      small
      plain
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-window
      show-arrows
      v-model="cardIndex"
      touchless
      style="width: 100%; height: 100%"
    >
      <v-window-item class="fill-height ma-0" :value="1">
        <v-sheet
          height="100%"
          width="100%"
          color="transparent"
          class="d-flex justify-center align-center"
        >
          <v-card
            height="auto"
            :style="cardStyle"
            max-width="400px"
            class="mx-auto"
          >
            <v-card-text class="pa-0">
              <v-row no-gutters>
                <img
                  width="100%"
                  height="80px"
                  src="~assets/img/boom_card_header.png"
                  alt="Boom Card Header"
                />
              </v-row>
              <v-row no-gutters>
                <v-col cols="3" class="pa-2">
                  <img
                    width="100%"
                    src="~assets/img/Four.png"
                    alt="Boom Card Number"
                  />
                </v-col>
                <v-col cols="9" class="pa-2">
                  <content-card
                    :content="`A <span class='error--text font-italic'>PEDIGREE</span> is a genetic representation of a family tree that diagrams the inheritance of a trait or disease though several generations.`"
                    :elevation="0"
                  />
                </v-col>
                <v-col cols="10" offset="2" class="px-6">
                  <p class="text-justify font-italic ma-0">
                    It is used to determine the mode of inheritance of a
                    particular disease or trait, and also to predict the
                    probability of its appearance among offspring. Below is an
                    example of pedigree.
                  </p>
                </v-col>
              </v-row>
              <v-row no-gutters class="pa-2 pb-4" justify="center">
                <img
                  width="100%"
                  src="~assets/img/pedigree_diagram.jpg"
                  alt="Pedigree Diagram"
                />
              </v-row>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
        <v-sheet
          height="100%"
          width="100%"
          color="transparent"
          class="d-flex justify-center align-center"
        >
          <v-card
            height="auto"
            :style="cardStyle"
            max-width="400px"
            class="mx-auto"
          >
            <v-card-text class="pa-0">
              <v-row no-gutters>
                <img
                  width="100%"
                  height="80px"
                  src="~assets/img/boom_card_header.png"
                  alt="Boom Card Header"
                />
              </v-row>
              <v-row no-gutters class="px-4 pb-4">
                <v-row no-gutters :style="contentStyle">
                  <v-col cols="12" class="pa-2">
                    <p
                      class="text-justify ma-0 text-body-1 font-weight-medium font-italic"
                    >
                      Construct a chart showing the pedigree of your
                      family-either on the father side or mother side. Tackle
                      one trait and indicate the corresponding genotypes. For
                      example, you can deal with the presence (D) or absence (d)
                      of dimples in every family member. Take a picture of your
                      work and upload it below
                    </p>
                  </v-col>
                  <v-col class="pa-2 pt-0">
                    <FileUpload v-on:upload="onUpload" :progress="progress" />
                  </v-col>
                </v-row>
              </v-row>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import PunnettSquare from "../PunnettSquare.vue";

@Component({
  components: {
    PunnettSquare,
  },
})
export default class BoomCards1 extends Vue {
  private cardIndex = 0;
  private progress = 0;

  private next() {
    this.cardIndex++;
  }

  private prev() {
    this.cardIndex--;
  }

  private onUpload(file: any) {
    const uid = this.$auth.currentUserId;
    let uploadTask = this.$fire.storage
      .ref()
      .child(`uploads/sm_5/${file.name}`)
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
          this.$fire.database
            .ref(`sm_5/${uid}`)
            .child("bc4")
            .set({ url: downloadURL });
          this.$fire.database
            .ref(`users/${uid}`)
            .child("sm_5")
            .set({ done: true, grade: 0 });
        });
      }
    );
  }

  private cardStyle: NotWellDefinedObject = {
    borderColor: "#FFC107",
    borderWidth: "4px",
    borderStyle: "solid",
  };

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1E88E5",
    borderWidth: "3px",
    borderStyle: "dashed",
  };
}
</script>

<style></style>
