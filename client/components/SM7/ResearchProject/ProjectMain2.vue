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
      <AttachImageBox
        :width="'100%'"
        :height="'150px'"
        v-on:upload="onUpload"
      />
      <AddTextBox
        :placeholder="'Add Text Introduction of the topic including definition'"
        :width="'100%'"
        :height="'50%'"
        v-on:saveInput="onInput"
      />
      <AddTextBox
        :placeholder="'Add Text Introduction of the topic including definition'"
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
export default class ProjectMain2 extends Vue {
  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1565C0",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    position: "relative",
  };

  private uploaded: NotWellDefinedObject[] = [];
  private content: NotWellDefinedObject[] = [];

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
    this.$fire.database.ref(`sm_7/${uid}/2`).child("uploads").set(uploaded);
  }

  private saveContent(content: NotWellDefinedObject[]) {
    const uid = this.$auth.currentUserId;
    this.$fire.database.ref(`sm_7/${uid}/2`).child("content").set(content);
  }
}
</script>
