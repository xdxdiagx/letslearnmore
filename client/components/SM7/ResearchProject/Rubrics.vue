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
      <span class="text-caption"
        >Here’s the Rubric for scoring your Brochure.</span
      >
      <h4 class="text-center error--text mb-4">BROCHURE RUBRIC</h4>
      <v-sheet width="100%" class="d-flex justify-center" color="transparent">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"> Show Rubric </v-btn>
          </template>
          <v-card>
            <v-toolbar class="mb-2 elevation-1">
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Category</th>
                    <th class="text-center">10</th>
                    <th class="text-center">8</th>
                    <th class="text-center">6</th>
                    <th class="text-center">4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.category">
                    <td>{{ item.category }}</td>
                    <td>{{ item.ten }}</td>
                    <td>{{ item.eight }}</td>
                    <td>{{ item.six }}</td>
                    <td>{{ item.four }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-dialog>
      </v-sheet>
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

@Component
export default class Rubrics extends Vue {
  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1565C0",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
  };

  private dialog = false;
  private data: NotWellDefinedObject[] = [
    {
      category: "Organization",
      ten: "The brochure has excellent formatting and very well-organized information.",
      eight:
        "The brochure has appropriate formatting and well-organized information.",
      six: "The brochure has some organized information with random formatting.",
      four: "The brochure’s format and organization of material are confusing to the reader.",
    },
    {
      category: "Ideas",
      ten: "The brochure communicates relevant information appropriately and effectively to theintended audience.",
      eight:
        "The brochure communicates relevant information appropriately to the intended audience.",
      six: "The brochure communicates irrelevant information or communicates inappropriately to the intended audience.",
      four: "The brochure communicates irrelevant information and communicates inappropriately to the intended audience.",
    },
    {
      category: "Conventions",
      ten: "All of the writing is done in complete sentences. Capitalization and punctuation are correct throughout the brochure.",
      eight:
        "Most of the writing is done in complete sentences. Most of the capitalization and punctuation are correct throughout the brochure.",
      six: "Some of the writing is done in complete sentences. Some of the capitalization and punctuation are correct throughout the brochure.",
      four: "Most of the writing is not done in complete sentences. Most of the capitalization and punctuation are not correct throughout the brochure.",
    },
    {
      category: "Graphics",
      ten: "The graphics go well with the text, and there is a good mix of text and graphics",
      eight:
        "The graphics go well with the text, but some graphics distract from the text",
      six: "The graphics go well with the text, but there are too few",
      four: "The graphics do not go with the accompanying text or appear to be randomly chosen.",
    },
  ];
}
</script>
