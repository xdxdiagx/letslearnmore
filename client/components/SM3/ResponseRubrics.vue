<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column justify-start align-center relative px-5 pt-14 overflow-y-auto"
    color="blue lighten-3"
  >
    <h3 class="error--text">Short Answer Response Rubric</h3>
    <span class="text-subtitle-2 mb-3"
      >(Guide in Scoring Student's Responses)</span
    >
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
                <th class="text-center">Criteria</th>
                <th class="text-center">
                  4 <br />
                  (Exceeds Expectations)
                </th>
                <th class="text-center">3 <br />(Meets Expectations)</th>
                <th class="text-center">2 <br />(Approaching Expectations)</th>
                <th class="text-center">1 <br />(Below Expectations)</th>
                <th class="text-center">0 <br />(Below Expectations)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.criteria">
                <td>{{ item.criteria }}</td>
                <td>{{ item.four }}</td>
                <td>{{ item.three }}</td>
                <td>{{ item.two }}</td>
                <td>{{ item.one }}</td>
                <td>{{ item.zero }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class ResponseRubrics extends Vue {
  private dialog = false;
  private data: NotWellDefinedObject[] = [
    {
      criteria: "Claim & Support",
      four: "Establishes a credible and convincing claim to answer each question. Cites sufficient and relevant evidence to fully support the claim.",
      three:
        "Establishes a clear and plausible claim to answer each question. Cites mostly strong evidence that supports the claim.",
      two: "Establishes a claim to answer each question that needs more development. Refers to some evidence from the text that loosely or vaguely supports the claim.",
      one: "Attempts to establish a claim that is unclear or disconnected from the topic; or does not answer each question. Includes almost no evidence from the text; the evidence is based on personal experience or unconnected sources",
      zero: "No claim present or evidence present.",
    },
    {
      criteria: "Development",
      four: "Analyzes the relevant evidence to fully support the claim.",
      three:
        "Clearly explains the connections between the selected evidence and the claim.",
      two: "Explains the connection between some evidence and the claim; some explanations revolve around personal feelings rather than analysis.",
      one: "Attempts to explain some connections between evidence and claim in an unclear or disconnected.",
      zero: "No development present.",
    },
    {
      criteria: "Conventions",
      four: "Demonstrates a strong command of English conventions with few minor errors. Uses language and tone that are appropriate to audience and purpose",
      three:
        "Demonstrates a working command of English conventions with some errors that do not inhibit the reader’s comprehension. Uses language and tone that are academic. ",
      two: "Demonstrates some command of English conventions with some errors that inhibit the reader’s comprehension. Uses language and tone that are inconsistently appropriate for the audience and purpose.",
      one: "Attempts to use some English conventions, though errors frequently inhibit the reader’s comprehension.",
      zero: "Writing is incomprehensible.",
    },
  ];
}
</script>
