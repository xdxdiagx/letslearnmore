<template>
  <v-sheet
    height="100%"
    width="100%"
    color="blue lighten-3"
    style="position: relative"
    class="mx-auto"
    max-width="720px"
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
    <v-window
      show-arrows
      v-model="page"
      touchless
      style="width: 100%; height: 100%"
    >
      <v-window-item class="fill-height ma-0" :value="1">
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
              <h1 :style="titleStyle">{{ projectTitle }}</h1>
            </v-sheet>
            <img
              v-for="(box, index) in images1"
              :key="index"
              class="mt-4 rounded"
              :width="box.width"
              :height="box.height"
              :style="box.style"
              :src="box.src"
            />
          </v-sheet>
          <img
            src="~assets/img/coconut_tree.png"
            height="20%"
            style="position: absolute; bottom: 60px; left: 5px"
            alt="Teacher Image"
          />
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="2">
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
            <img
              v-for="(box, index) in uploads2"
              :key="index"
              :width="'100%'"
              :height="'150px'"
              :src="box.url"
              class="mb-2 rounded"
            />
            <v-sheet
              v-if="content2.length > 0"
              width="100%"
              height="50%"
              class="pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular mb-4"
              :style="sheetStyle"
              >{{ content2[0].text }}</v-sheet
            >
            <v-sheet
              v-if="content2.length > 0"
              class="ml-auto pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular mb-4"
              width="65%"
              height="20%"
              :style="sheetStyle"
              >{{ content2[1].text }}</v-sheet
            >
          </v-sheet>
          <img
            src="~assets/img/coconut_tree.png"
            height="20%"
            style="position: absolute; bottom: 60px; left: 5px"
            alt="Teacher Image"
          />
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="3">
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
            <v-row no-gutters class="fill-height">
              <v-col cols="6" class="pr-2">
                <v-row no-gutters>
                  <v-col cols="12">
                    <img
                      v-for="(img, index) in uploads3"
                      :key="index"
                      width="100%"
                      height="150px"
                      :src="img.url"
                      class="rounded mb-2"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6" class="pl-2">
                <v-sheet
                  v-if="content3.length > 0"
                  class="ml-auto pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular mb-4"
                  width="100%"
                  height="100%"
                  :style="sheetStyle"
                  >{{ content3[0].text }}</v-sheet
                >
              </v-col>
            </v-row>
          </v-sheet>
          <img
            src="~assets/img/coconut_tree.png"
            height="20%"
            style="position: absolute; bottom: 60px; left: 5px"
            alt="Teacher Image"
          />
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="4">
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
            <v-row no-gutters>
              <v-col
                v-for="(img, index) in uploads4"
                :key="index"
                cols="6"
                :class="[index % 2 == 0 ? 'pr-2' : 'pl-2']"
              >
                <img
                  width="100%"
                  height="150px"
                  :src="img.url"
                  class="rounded mb-2"
                />
              </v-col>
            </v-row>
            <v-sheet
              v-if="content4.length > 0"
              class="ml-auto pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular mb-4"
              width="100%"
              height="50%"
              :style="sheetStyle"
              >{{ content4[0].text }}</v-sheet
            >
          </v-sheet>
          <img
            src="~assets/img/coconut_tree.png"
            height="20%"
            style="position: absolute; bottom: 60px; left: 5px"
            alt="Teacher Image"
          />
        </v-sheet>
      </v-window-item>
      <v-window-item class="fill-height pa-0 ma-0" :value="5">
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
              v-if="content5.length > 0"
              class="pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular mb-4"
              width="100%"
              height="75%"
              :style="sheetStyle"
              >{{ content5[0].text }}</v-sheet
            >
            <v-sheet
              v-if="content5.length > 0"
              class="ml-auto pa-4 overflow-y-auto text-subtitle-2 font-italic font-weight-regular mb-4"
              width="65%"
              height="20%"
              :style="sheetStyle"
              >{{ content5[1].text }}</v-sheet
            >
          </v-sheet>
          <img
            src="~assets/img/coconut_tree.png"
            height="20%"
            style="position: absolute; bottom: 60px; left: 5px"
            alt="Teacher Image"
          />
        </v-sheet>
      </v-window-item>
    </v-window>
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
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({
  layout: "activity",
})
export default class SM7_Activity extends Vue {
  private projectTitle: string = "";
  private uploads1: NotWellDefinedObject[] = [];
  private uploads2: NotWellDefinedObject[] = [];
  private content2: NotWellDefinedObject[] = [];
  private uploads3: NotWellDefinedObject[] = [];
  private content3: NotWellDefinedObject[] = [];
  private uploads4: NotWellDefinedObject[] = [];
  private content4: NotWellDefinedObject[] = [];
  private content5: NotWellDefinedObject[] = [];
  private sm_7: NotWellDefinedObject = {};
  private page = 0;

  private content: string = `During your discussions, you have surely familiarized yourself with the terms associated with Cellular Respiration.<br/><span class="text-h6 yellow">TASK!</span><br/><p class="error--text mb-0">Find the 20 (twenty) vocabulary words related to cellular respiration on the next slide. Look for them in all directions, including backward and diagonally. Good luck!</p>`;

  private next() {
    this.page++;
  }

  private prev() {
    this.page--;
  }

  private async mounted() {
    const uid = this.$auth.currentUserId;
    this.sm_7 = (await this.$user.getCurrentUser()).sm_7 || {
      done: false,
      grade: 0,
    };
    this.$fire.database
      .ref(`sm_7/${uid}/1`)
      .get()
      .then((data) => {
        this.projectTitle = data.val()?.title || "";
        this.uploads1 = data.val()?.uploads || [];
      });
    this.$fire.database
      .ref(`sm_7/${uid}/2`)
      .get()
      .then((data) => {
        this.uploads2 = data.val()?.uploads || [];
        this.content2 = data.val()?.content || [];
      });
    this.$fire.database
      .ref(`sm_7/${uid}/3`)
      .get()
      .then((data) => {
        this.uploads3 = data.val()?.uploads || [];
        this.content3 = data.val()?.content || [];
      });
    this.$fire.database
      .ref(`sm_7/${uid}/4`)
      .get()
      .then((data) => {
        this.uploads4 = data.val()?.uploads || [];
        this.content4 = data.val()?.content || [];
      });
    this.$fire.database
      .ref(`sm_7/${uid}/5`)
      .get()
      .then((data) => {
        this.content5 = data.val()?.content || [];
      });
  }

  imageBoxes: NotWellDefinedObject[] = [
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

  private get images1() {
    return this.imageBoxes.map((img: NotWellDefinedObject, index: number) => {
      return {
        width: img.width,
        height: img.height,
        style: img.style,
        src: this.uploads1[index]?.url,
      };
    });
  }

  private get grade() {
    if (this.sm_7.grade == 0) return "Not yet graded";
    else return `${Math.ceil(this.sm_7.grade)}%`;
  }

  private get gradeColor() {
    if (this.sm_7.grade == 0) return "";
    if (this.sm_7.grade <= 50) return "amber";
    if (this.sm_7.grade <= 75) return "yellow";
    if (this.sm_7.grade <= 85) return "light-green";
    else return "green";
  }

  private getMatrix(matrix: NotWellDefinedObject[]) {
    console.log(matrix);
  }

  private goBack() {
    this.$router.back();
  }

  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1565C0",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    position: "relative",
  };

  private gradeStyle: NotWellDefinedObject = {
    position: "absolute",
    top: "0",
    right: "0",
  };

  private sheetStyle: NotWellDefinedObject = {
    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "dashed",
    overflowWrap: "break-word",
  };

  private titleStyle: NotWellDefinedObject = {
    position: "absolute",
    width: "85%",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}
</script>

<style></style>
