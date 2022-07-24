<template>
  <v-sheet
    width="100%"
    height="100%"
    class="overflow-y-auto pt-14 pb-16 px-4"
    style="
      position: relative;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmain_page_bg.png?alt=media&token=9829d844-db29-4aab-9f6c-76bf8375439d);
      background-size: cover;
    "
    color="blue lighten-3"
  >
    <v-sheet :style="contentStyle" class="pa-4 fill-height">
      <v-sheet
        width="100%"
        class="d-flex justify-center"
        style="position: relative"
        color="transparent"
      >
        <img
          width="85%"
          style="max-height: 100px; max-width: 600px"
          height="10%"
          src="~assets/img/wood_banner.png"
        />
        <h1 :style="titleStyle" @click="changeTitle">{{ title }}</h1>
      </v-sheet>
      <AttachImageBox
        v-for="(box, index) in imageBoxes"
        :key="index"
        class="mt-4"
        :width="box.width"
        :height="box.height"
        :boxStyle="box.style"
        v-on:upload="onUpload"
      />
    </v-sheet>
    <img
      src="~assets/img/coconut_tree.png"
      height="20%"
      style="position: absolute; bottom: 60px; left: 5px"
      alt="Teacher Image"
    />
    <v-dialog persistent width="300px" v-model="textDialog">
      <v-card>
        <v-card-text class="pa-3">
          <v-sheet class="d-flex align-center">
            <v-text-field
              outlined
              dense
              hide-details
              placeholder="Type here"
              autofocus
              class="mr-2"
              v-model="titleInput"
              @keyup.enter="saveCellValue"
            ></v-text-field>
            <v-btn icon @click="closeModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import AttachImageBox from "Component/SM7/ResearchProject/AttachImageBox.vue";

@Component({
  components: {
    AttachImageBox,
  },
})
export default class ProjectMain1 extends Vue {
  private titleInput = "";
  private title = "Add Title";
  private textDialog = false;

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1565C0",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    position: "relative",
  };

  private titleStyle: NotWellDefinedObject = {
    position: "absolute",
    width: "85%",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  private uploaded: NotWellDefinedObject[] = [];

  private imageBoxes: NotWellDefinedObject[] = [
    {
      width: "60%",
      height: "25%",
      style: {},
    },
    {
      width: "50%",
      height: "25%",
      style: {
        position: "absolute",
        top: "200px",
        right: "16px",
      },
    },
    {
      width: "60%",
      height: "30%",
      style: {
        position: "absolute",
        top: "45%",
        left: "30px",
      },
    },
    {
      width: "60%",
      height: "20%",
      style: {
        position: "absolute",
        bottom: "60px",
        right: "16px",
      },
    },
  ];

  private changeTitle() {
    this.textDialog = !this.textDialog;
  }

  private saveCellValue() {
    this.title = this.titleInput;
    this.saveTitle(this.title);
    this.closeModal();
  }

  private closeModal() {
    this.titleInput = "";
    this.textDialog = false;
  }

  private async onUpload(url: string) {
    this.uploaded.push({ url: url });
    this.submit(this.uploaded);
  }

  private submit(uploaded: NotWellDefinedObject[]) {
    const uid = this.$auth.currentUserId;
    this.$fire.database.ref(`sm_7/${uid}/1`).child("uploads").set(uploaded);
  }

  private saveTitle(title: string) {
    const uid = this.$auth.currentUserId;

    this.$fire.database.ref(`sm_7/${uid}/1`).child("title").set(title);
  }
}
</script>
