<template>
  <v-sheet
    width="100%"
    height="100%"
    max-width="720px"
    class="d-flex flex-column justify-start align-start mx-auto pt-14 pb-5 overflow-y-auto"
    color="blue lighten-3"
    style="position: relative"
  >
    <v-btn
      @click="goBack"
      elevation="0"
      class="mt-n2 ml-n2"
      fixed
      top
      left
      fab
      small
      plain
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-sheet
      width="100%"
      color="transparent"
      class="d-flex flex-row align-center justify-space-between pr-4"
    >
      <v-spacer></v-spacer>
    </v-sheet>
    <v-expansion-panels popout>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 1 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="(item, ida) in answers1"
              :key="ida"
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.question }}</span>
              </p>
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ item.input }}</v-sheet
              >
              <v-btn
                v-if="boomCardGrade1.length < ida + 1"
                @click="toGrade(1, ida)"
                color="primary"
                absolute
                icon
                bottom
                right
                large
              >
                <v-icon large>mdi-seal-variant</v-icon>
              </v-btn>
            </v-sheet>
            <PunnettSquare :matrix="punnett1" class="mx-auto" />
            <v-btn
              v-if="boomCardGrade1.length < answers1.length + 1"
              @click="toGrade(1, answers1.length)"
              color="primary"
              absolute
              icon
              bottom
              right
              large
            >
              <v-icon large>mdi-seal-variant</v-icon>
            </v-btn>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 2 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="(item, ida) in answers2"
              :key="ida"
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.question }}</span>
              </p>
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ item.answer }}</v-sheet
              >
              <v-btn
                v-if="boomCardGrade2.length < ida + 1"
                @click="toGrade(2, ida)"
                color="primary"
                absolute
                icon
                bottom
                right
                large
              >
                <v-icon large>mdi-seal-variant</v-icon>
              </v-btn>
            </v-sheet>
            <PunnettSquare :matrix="punnett2" class="mx-auto" />
            <v-btn
              v-if="boomCardGrade2.length < answers2.length + 1"
              @click="toGrade(2, answers2.length)"
              color="primary"
              absolute
              icon
              bottom
              right
              large
            >
              <v-icon large>mdi-seal-variant</v-icon>
            </v-btn>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 3 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="(item, ida) in answers3"
              :key="ida"
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.question }}</span>
              </p>
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ item.answer }}</v-sheet
              >
              <v-btn
                v-if="boomCardGrade3.length < ida + 1"
                @click="toGrade(3, ida)"
                color="primary"
                absolute
                icon
                bottom
                right
                large
              >
                <v-icon large>mdi-seal-variant</v-icon>
              </v-btn>
            </v-sheet>
            <PunnettSquare :matrix="punnett3" class="mx-auto" />
            <v-btn
              v-if="boomCardGrade3.length < answers3.length + 1"
              @click="toGrade(3, answers3.length)"
              color="primary"
              absolute
              icon
              bottom
              right
              large
            >
              <v-icon large>mdi-seal-variant</v-icon>
            </v-btn>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Boom Card 4 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet width="100%" color="transparent" class="mt-2">
            <v-sheet
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <ImageContainer :src="upload4" />
              <v-btn
                v-if="boomCardGrade4.length < 1"
                @click="toGrade(4, 0)"
                color="grey darken-3"
                absolute
                icon
                bottom
                right
                large
              >
                <v-icon large>mdi-seal-variant</v-icon>
              </v-btn>
            </v-sheet>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-sheet
      width="100%"
      color="transparent"
      class="d-flex flex-row align-center justify-space-between pr-4 mt-3"
      :style="gradeStyle"
    >
      <v-spacer></v-spacer>
      <v-sheet
        dark
        width="auto"
        class="py-1 px-2 mb-2"
        rounded
        :color="gradeColor"
      >
        <h4>Grade: {{ grade }}</h4>
      </v-sheet>
    </v-sheet>

    <v-dialog max-width="600px" v-model="gradeDialog" persistent>
      <v-card>
        <v-card-text class="pa-4 pb-0">
          <v-text-field
            autofocus
            hide-details
            outlined
            dense
            label="Grade"
            suffix="points"
            class="mb-2"
            v-model="itemGrade.grade"
          ></v-text-field>
          <v-textarea
            hide-details
            outlined
            dense
            no-resize
            clearable
            rows="4"
            label="Leave a comment"
            v-model="itemGrade.comment"
          >
          </v-textarea>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-btn @click="cancel" color="grey" dark>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="saveGrade" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import PunnettSquare from "Component/Global/PunnettSquare.vue";

@Component({
  layout: "activity",
  components: {
    PunnettSquare,
  },
})
export default class SM5_Activity extends Vue {
  private answers1: NotWellDefinedObject[] = [];
  private punnett1: NotWellDefinedObject[] = [];
  private answers2: NotWellDefinedObject[] = [];
  private punnett2: NotWellDefinedObject[] = [];
  private answers3: NotWellDefinedObject[] = [];
  private punnett3: NotWellDefinedObject[] = [];
  private boomCardGrade1: NotWellDefinedObject[] = [];
  private boomCardGrade2: NotWellDefinedObject[] = [];
  private boomCardGrade3: NotWellDefinedObject[] = [];
  private boomCardGrade4: NotWellDefinedObject[] = [];
  private upload4 = "";
  private sm_5: NotWellDefinedObject = {};
  private gradeDialog = false;

  private itemGrade: NotWellDefinedObject = {
    grade: 0,
    comment: "",
  };

  private selected: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$route.params.studentId;
    this.sm_5 = (await this.$user.getUserById(uid)).sm_5 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_5/${uid}/bc1`)
      .get()
      .then((data) => {
        this.answers1 = data.val()?.answers || [];
        this.punnett1 = data.val()?.punnett || [];
      });
    this.$fire.database
      .ref(`sm_5/${uid}/bc2`)
      .get()
      .then((data) => {
        this.answers2 = data.val()?.answers || [];
        this.punnett2 = data.val()?.punnett || [];
      });
    this.$fire.database
      .ref(`sm_5/${uid}/bc3`)
      .get()
      .then((data) => {
        this.answers3 = data.val()?.answers || [];
        this.punnett3 = data.val()?.punnett || [];
      });
    this.$fire.database
      .ref(`sm_5/${uid}/bc4`)
      .get()
      .then((data) => {
        this.upload4 = data.val()?.url || "";
      });

    this.$fire.database
      .ref(`grades/sm_5/${uid}`)
      .get()
      .then((data) => {
        this.boomCardGrade1 = data.val()["1"] || [];
        this.boomCardGrade2 = data.val()["2"] || [];
        this.boomCardGrade3 = data.val()["3"] || [];
        this.boomCardGrade4 = data.val()["4"] || [];
        const grades = [
          ...this.boomCardGrade1,
          ...this.boomCardGrade2,
          ...this.boomCardGrade3,
          ...this.boomCardGrade4,
        ];
      });
  }

  private get grade() {
    if (this.sm_5.grade == 0) return "Not yet graded";
    else return `${this.sm_5.grade} points`;
  }

  private get gradeColor() {
    if (this.sm_5.grade == 0) return "";
    if (this.sm_5.grade <= 2) return "amber";
    if (this.sm_5.grade <= 3) return "yellow";
    if (this.sm_5.grade <= 4) return "light-green";
    else return "green";
  }

  private goBack() {
    this.$router.back();
  }

  private toGrade(part: number, index: number) {
    this.selected = {
      part: part,
      index: index,
    };
    this.gradeDialog = !this.gradeDialog;
  }

  private cancel() {
    this.selected = {
      part: 0,
      index: 0,
    };
    this.itemGrade = {
      grade: 0,
      comment: "",
    };
    this.gradeDialog = false;
  }

  private saveGrade() {
    const uid = this.$route.params.studentId;
    this.itemGrade.grade = parseFloat(this.itemGrade.grade);
    this.$fire.database
      .ref(`grades/sm_5/${uid}`)
      .child(this.selected.part)
      .child(this.selected.index)
      .set(this.itemGrade)
      .then((data) => {
        this.cancel();
        console.log(data);
      });
    this.$fire.database
      .ref(`grades/sm_5/${uid}`)
      .get()
      .then((data) => {
        this.boomCardGrade1 = data.val()["1"] || [];
        this.boomCardGrade2 = data.val()["2"] || [];
        this.boomCardGrade3 = data.val()["3"] || [];
        this.boomCardGrade4 = data.val()["4"] || [];
        const grades = [
          ...this.boomCardGrade1,
          ...this.boomCardGrade2,
          ...this.boomCardGrade3,
          ...this.boomCardGrade4,
        ];
        const totalGrade = grades.reduce(
          (total: number, curr: NotWellDefinedObject) => {
            return total + curr.grade;
          },
          0
        );
        const aveGrade = totalGrade / grades.length;
        this.$fire.database
          .ref(`users/${uid}`)
          .child("sm_5")
          .set({ done: true, grade: aveGrade.toFixed(2) });
        this.sm_5 = {
          done: true,
          grade: aveGrade.toFixed(2),
        };
      });
  }

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "orange",
    borderWidth: "2px",
    borderStyle: "solid",
    overflowWrap: "break-word",
  };

  private gradeStyle: NotWellDefinedObject = {
    position: "absolute",
    top: "0",
    right: "0",
  };
}
</script>
