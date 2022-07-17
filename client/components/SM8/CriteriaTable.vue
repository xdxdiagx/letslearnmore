<template>
  <div style="width: 100%" class="mx-auto">
    <v-sheet
      v-if="!small"
      width="100%"
      class="transparent d-flex justify-end"
      rounded="xl"
    >
      <v-dialog
        v-model="showTable"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-row no-gutters align="center">
            <span class="text-body-1 font-weight-bold error--text"
              >CRITERIA:</span
            >
            <v-spacer></v-spacer>
            <v-btn small class="text-capitalize" v-bind="attrs" v-on="on">
              See Table
            </v-btn>
          </v-row>
        </template>
        <v-card>
          <v-card-title class="pa-2 d-flex justify-space-between">
            <h4 class="ml-2 grey--text text--darken-2">Criteria Table</h4>
            <v-btn icon @click="showTable = false">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </v-card-title>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    v-for="(column, index) in criteria.column"
                    :key="index"
                    class="text-center text-subtitle-2 font-weight-bold"
                  >
                    {{ column }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in criteria.row" :key="index">
                  <td
                    v-for="(item, index) in row"
                    :key="index"
                    :class="[index == 0 ? 'font-weight-bold' : '']"
                  >
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-dialog>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class CriteriaTable extends Vue {
  @Prop() readonly criteria!: NotWellDefinedObject;
  @Prop() readonly small!: boolean;

  private showSmallTable = true;
  private showTable = false;
}
</script>
