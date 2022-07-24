<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start px-5 mx-auto pb-16 pt-14"
    color="blue lighten-3"
    style="position: relative"
  >
    <v-sheet
      color="transparent"
      width="100%"
      v-if="questions"
      class="overflow-y-auto"
    >
      <EssayQuestion
        v-for="item in questions"
        :key="item.no"
        :item="item"
        v-on:saveInput="onSaveInput"
      />
    </v-sheet>
    <v-sheet
      color="transparent"
      width="100%"
      v-if="forUploads"
      class="overflow-y-auto"
    >
      <UploadQuestion
        v-for="(item, index) in forUploads"
        :part="part"
        :item="item"
        :key="index"
      />
    </v-sheet>
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="!done"
      :disabled="!showSubmitBtn"
      class="mt-4 mr-5"
      elevation="2"
      style="position: absolute; top: 0; right: 0"
      color="success"
      @click="submit"
    >
      <span>Submit</span>
    </v-btn>
    <span
      class="mt-4 mr-5 text-caption error--text font-italic"
      style="position: absolute; top: 0; right: 0"
      v-else
      >You've already finished this activity</span
    >
    <img
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="position: absolute; bottom: 0; left: 0; right: 0"
      alt="Teacher Image"
    />
    <img
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <audio v-if="voiceover != ''" ref="voiceover_trivia">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-dialog v-model="completed" fullscreen>
      <v-sheet
        color="blue lighten-3"
        width="100%"
        height="100%"
        class="d-flex flex-column justify-center align-center"
      >
        <img src="~assets/img/ending1.gif" alt="Good Job" />
        <v-btn to="/materials">
          <v-icon>mdi-chevron-left</v-icon>
          Go to Main
        </v-btn>
      </v-sheet>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import EssayQuestion from "Component/SM1/QuestionComponents/Essay.vue";
import CriteriaTable from "Component/SM1/QuestionComponents/CriteriaTable.vue";
import UploadQuestion from "Component/SM4/UploadQuestion.vue";

@Component({
  components: {
    EssayQuestion,
    CriteriaTable,
    UploadQuestion,
  },
})
export default class AssessmentPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly part!: number;
  @Prop() readonly questions!: NotWellDefinedObject[];
  @Prop() readonly forUploads!: NotWellDefinedObject[];

  private showSubmitBtn: boolean = false;
  private done: boolean = false;
  private forSubmit: NotWellDefinedObject[] = [];
  private submitted: NotWellDefinedObject[] = [];
  private uploads: NotWellDefinedObject[] = [];
  private currentUser: NotWellDefinedObject = {};
  private progress = 0;

  private async mounted() {
    const uid = this.$auth.currentUserId;
    const sm_4 = (await this.$user.getCurrentUser()).sm_4 || {
      done: false,
      grade: 0,
    };
    if (sm_4.done == true) this.done = true;
    await this.$fire.database
      .ref(`sm_4/${uid}/${this.part}`)
      .child("answers")
      .get()
      .then((ss) => {
        if (ss.val() != null) {
          this.submitted = ss.val();
        }
      });

    await this.$fire.database
      .ref(`sm_4/${uid}/${this.part}`)
      .child("uploads")
      .get()
      .then((ss) => {
        if (ss.val() != null) {
          this.uploads = ss.val();
        }
      });
  }

  private onSaveInput(data: NotWellDefinedObject) {
    if (data.input != "") {
      if (this.forSubmit.length == 0) {
        this.forSubmit.push(data);
      } else {
        const answers = this.forSubmit.filter(
          (q: NotWellDefinedObject) => q.no != data.no
        );
        answers.push(data);
        this.forSubmit = answers.sort(
          (a: NotWellDefinedObject, b: NotWellDefinedObject) => a.no - b.no
        );
      }
    }
    console.log(this.forSubmit);
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
        }
      });
  }

  private submit() {
    const uid = this.$auth.currentUserId;
    this.getUploads();

    if (this.$fire.database.ref(`sm_4/${uid}`) != null) {
      let data = {};
      if (this.submitted.length == this.part * 2) {
        data = {
          uid: uid,
          answers: this.forSubmit,
          uploads: this.uploads,
        };
      } else {
        data = {
          uid: uid,
          answers: [...this.submitted, ...this.forSubmit],
          uploads: this.uploads,
        };
      }

      this.$fire.database
        .ref(`sm_4/${uid}/${this.part}`)
        .set(data)
        .then((data) => {
          this.showSubmitBtn = false;
        });
    }
  }

  private onUpload(file: any) {
    if (this.done == false) {
      const uid = this.$auth.currentUserId;
      let uploadTask = this.$fire.storage
        .ref()
        .child(`uploads/sm_4/${this.part}/${file.name}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            let uploads = [];
            console.log("File available at", downloadURL);
            uploads.push({ url: downloadURL });
            this.$fire.database
              .ref(`sm_4/${uid}/${this.part}`)
              .child("uploads")
              .set(uploads);
          });
        }
      );
    }
  }

  private get completed() {
    if (this.done == true && this.part == 2) return true;
    else return false;
  }

  @Watch("forSubmit")
  onFull() {
    if (this.forSubmit.length == this.questions.length)
      this.showSubmitBtn = true;
  }

  @Watch("submitted")
  onSubmitted() {
    if (this.submitted.length >= this.part * 2) {
      this.done = true;
    }
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
}

.teacher-sm {
  height: 40%;
  position: absolute;
  bottom: 35px;
  left: 15px;
}
</style>
