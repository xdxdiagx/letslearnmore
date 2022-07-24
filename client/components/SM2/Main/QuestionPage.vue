<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-start px-5 mx-auto pb-16 pt-14"
    color="blue lighten-3"
    style="position: relative"
  >
    <v-sheet dark width="auto" class="py-1 px-2" rounded color="orange">
      <h3>{{ partNo }}</h3>
    </v-sheet>
    <p class="w-100 text-justify">{{ instructions }}</p>
    <span class="font-weight-medium mb-2">Criteria:</span>
    <CriteriaTable :criteria="criteria" :small="small" />
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
    <audio v-if="voiceover != ''" autoplay>
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <v-btn
      v-if="!done"
      :disabled="!showSubmitBtn"
      class="mt-14 mr-5"
      elevation="2"
      style="position: absolute; top: 0; right: 0"
      color="success"
      @click="submit"
    >
      <span>Submit</span>
    </v-btn>
    <span
      class="mt-16 mr-5 text-caption error--text font-italic"
      style="position: absolute; top: 0; right: 0"
      v-else
      >You've already finished this activity</span
    >
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import EssayQuestion from "Component/SM1/QuestionComponents/Essay.vue";
import CriteriaTable from "Component/SM1/QuestionComponents/CriteriaTable.vue";
import FileUpload from "Component/Global/FileUpload.vue";

@Component({
  components: {
    EssayQuestion,
    CriteriaTable,
  },
})
export default class QuestionPage extends Vue {
  @Prop() readonly voiceover!: string;
  @Prop() readonly partNo!: string;
  @Prop() readonly instructions!: string;
  @Prop() readonly criteria!: NotWellDefinedObject[];
  @Prop() readonly questions!: NotWellDefinedObject[];
  @Prop() readonly small!: boolean;

  private showSubmitBtn: boolean = false;
  private done: boolean = false;
  private forSubmit: NotWellDefinedObject[] = [];
  private currentUser: NotWellDefinedObject = {};
  private progress = 0;

  private async mounted() {
    const sm_2 = (await this.$user.getCurrentUser()).sm_2 || {
      done: false,
      grade: 0,
    };
    if (sm_2.done == true) this.done = true;
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

  private submit() {
    const uid = this.$auth.currentUserId;
    if (this.$fire.database.ref(`sm_2/${uid}`) != null) {
      const data = {
        uid: uid,
        answers: this.forSubmit,
      };
      this.$fire.database
        .ref(`sm_2/${uid}/1`)
        .set(data)
        .then((data) => {
          console.log(data);
          this.showSubmitBtn = false;
        });
    }
  }

  @Watch("forSubmit")
  onFull() {
    if (this.forSubmit.length == this.questions.length)
      this.showSubmitBtn = true;
  }
}
</script>
