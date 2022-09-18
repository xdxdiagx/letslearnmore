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
        <v-expansion-panel-header> Station 2 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answers2 }}</v-sheet
              >
              <v-btn
                v-if="sta2Grade.length < 1"
                @click="toGrade(2, 0)"
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
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Station 3 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              v-for="(item, index) in answers3"
              :key="index"
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <p class="mb-2 d-flex">
                <span class="text-left">{{ item.task }}</span>
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
                v-if="sta3Grade.length < index + 1"
                @click="toGrade(3, index)"
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
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Station 4 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answers4 }}</v-sheet
              >
              <v-btn
                v-if="sta4Grade.length < 1"
                @click="toGrade(4, 0)"
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
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Station 5 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-sheet color="transparent" class="mt-2">
            <v-sheet
              color="transparent"
              width="100%"
              class="mb-4"
              style="position: relative"
            >
              <v-sheet
                width="100%"
                height="100px"
                :style="sheetStyle"
                rounded="lg"
                class="pa-4 overflow-y-auto"
                >{{ answers5 }}</v-sheet
              >
              <v-btn
                v-if="sta5Grade.length < 1"
                @click="toGrade(5, 0)"
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

@Component({
  layout: "activity",
})
export default class SM8_Activity extends Vue {
  private answers2: string = "";
  private answers3: NotWellDefinedObject[] = [];
  private answers4: string = "";
  private answers5: string = "";
  private sta2Grade: NotWellDefinedObject[] = [];
  private sta3Grade: NotWellDefinedObject[] = [];
  private sta4Grade: NotWellDefinedObject[] = [];
  private sta5Grade: NotWellDefinedObject[] = [];
  private sm_8: NotWellDefinedObject = {};
  private gradeDialog = false;

  private itemGrade: NotWellDefinedObject = {
    grade: 0,
    comment: "",
  };

  private selected: NotWellDefinedObject = {};

  private async mounted() {
    const uid = this.$route.params.studentId;
    this.sm_8 = (await this.$user.getUserById(uid)).sm_8 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_8/${uid}/sta2`)
      .get()
      .then((data) => {
        this.answers2 = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_8/${uid}/sta3`)
      .get()
      .then((data) => {
        this.answers3 = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_8/${uid}/sta4`)
      .get()
      .then((data) => {
        this.answers4 = data.val()?.answers || [];
      });
    this.$fire.database
      .ref(`sm_8/${uid}/sta5`)
      .get()
      .then((data) => {
        this.answers5 = data.val()?.url || "";
      });

    this.$fire.database
      .ref(`grades/sm_8/${uid}`)
      .get()
      .then((data) => {
        this.sta2Grade = data.val()["2"] || [];
        this.sta3Grade = data.val()["3"] || [];
        this.sta4Grade = data.val()["4"] || [];
        this.sta5Grade = data.val()["5"] || [];
      });
  }

  private get grade() {
    if (this.sm_8.grade == 0) return "Not yet graded";
    else return `${this.sm_8.grade} points`;
  }

  private get gradeColor() {
    if (this.sm_8.grade == 0) return "";
    if (this.sm_8.grade <= 3) return "amber";
    if (this.sm_8.grade <= 6) return "yellow";
    if (this.sm_8.grade <= 9) return "light-green";
    else return "green";
  }

  private getMatrix(matrix: NotWellDefinedObject[]) {
    console.log(matrix);
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
      .ref(`grades/sm_8/${uid}`)
      .child(this.selected.part)
      .child(this.selected.index)
      .set(this.itemGrade)
      .then((data) => {
        this.cancel();
        console.log(data);
      });
    this.$fire.database
      .ref(`grades/sm_8/${uid}`)
      .get()
      .then((data) => {
        this.sta2Grade = data.val()["2"] || [];
        this.sta3Grade = data.val()["3"] || [];
        this.sta4Grade = data.val()["4"] || [];
        this.sta5Grade = data.val()["5"] || [];
        const grades = [
          ...this.sta2Grade,
          ...this.sta3Grade,
          ...this.sta4Grade,
          ...this.sta5Grade,
        ];
        const totalGrade = grades.reduce(
          (total: number, curr: NotWellDefinedObject) => {
            return total + curr.grade;
          },
          0
        );
        this.$fire.database
          .ref(`users/${uid}`)
          .child("sm_8")
          .set({ done: true, grade: totalGrade.toFixed(2) });
        this.sm_8 = {
          done: true,
          grade: totalGrade.toFixed(2),
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
