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
      <AddTextBox
        :placeholder="'Add Text Personal recommendation of the students'"
        :width="'100%'"
        :height="'75%'"
        v-on:saveInput="onInput"
      />
      <AddTextBox
        :placeholder="'Add Text (Slogan)'"
        class="ml-auto"
        :width="'65%'"
        :height="'20%'"
        v-on:saveInput="onInput"
      />
    </v-sheet>
    <img
      src="~assets/img/coconut_tree.png"
      height="20%"
      style="position: absolute; bottom: 60px; left: 5px"
      alt="Teacher Image"
    />
    <v-dialog v-model="done" fullscreen>
      <v-sheet
        color="blue lighten-3"
        width="100%"
        height="100%"
        class="pa-4"
        style="
          position: relative;
          background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsm7_ending.jpg?alt=media&token=5928192d-c3f0-41c4-bbec-e64858bb182d);
          background-size: cover;
        "
      >
        <v-sheet
          class="pa-2 white--text font-italic mb-4"
          width="75%"
          rounded
          :style="endContentStyle"
        >
          <p class="text-h6">
            The planet needs trees. If there is indeed that carbon dioxide out
            there in the atmosphere, the only species on the planet that can
            actually trap it for us in a natural process of photosynthesis are
            the trees.
          </p>
          <h3 class="text-right">-Wangari Maathai</h3>
        </v-sheet>
        <v-btn absolute bottom right to="/materials">
          <v-icon>mdi-chevron-left</v-icon>
          Go to Main
        </v-btn>
      </v-sheet>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import AttachImageBox from "Component/SM7/ResearchProject/AttachImageBox.vue";
import AddTextBox from "Component/SM7/ResearchProject/AddTextBox.vue";

@Component({
  components: {
    AttachImageBox,
    AddTextBox,
  },
})
export default class ProjectMain5 extends Vue {
  private done = false;
  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1565C0",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    position: "relative",
  };

  private uploaded: NotWellDefinedObject[] = [];
  private content: NotWellDefinedObject[] = [];
  private endContentStyle: NotWellDefinedObject = {
    backgroundColor: "transparent",
    borderColor: "red",
    borderWidth: "2px",
    borderStyle: "solid",
  };

  private async mounted() {
    const sm_7 = (await this.$user.getCurrentUser()).sm_7 || {
      done: false,
      grade: 0,
    };
    if (sm_7.done == true) this.done = true;
  }

  private onInput(text: string) {
    this.content.push({ text: text });
    this.saveContent(this.content);
  }

  private async onUpload(url: string) {
    this.uploaded.push({ url: url });
    this.saveUploaded(this.uploaded);
  }

  private saveUploaded(uploaded: NotWellDefinedObject[]) {
    const uid = this.$auth.currentUserId;
    this.$fire.database.ref(`sm_7/${uid}/5`).child("uploads").set(uploaded);
  }

  private saveContent(content: NotWellDefinedObject[]) {
    const uid = this.$auth.currentUserId;
    this.$fire.database.ref(`sm_7/${uid}/5`).child("content").set(content);
    if (this.content.length == 2) {
      this.$fire.database
        .ref(`users/${uid}`)
        .child("sm_7")
        .set({ done: true, grade: 0 });
      this.done = true;
    }
  }
}
</script>
