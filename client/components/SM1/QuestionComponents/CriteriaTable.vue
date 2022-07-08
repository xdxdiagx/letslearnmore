<template>
  <div style="width: 100%" class="mb-5 mx-auto">
    <v-card v-if="small" rounded="lg">
      <v-btn
        @click="showSmallTable = !showSmallTable"
        small
        class="text-capitalize"
        style="position: absolute; top: -35px; right: 0"
      >
        {{ showSmallTable ? "Hide" : "See" }} Table
      </v-btn>
      <v-simple-table v-if="showSmallTable" dense class="rounded-lg">
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
                :class="[index == 0 ? 'text-center font-weight-bold' : '']"
              >
                {{ item }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-sheet
      v-else
      width="100%"
      class="transparent d-flex justify-end mt-n8"
      rounded="xl"
    >
      <v-dialog
        v-model="showTable"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn small class="text-capitalize" v-bind="attrs" v-on="on">
            See Table
          </v-btn>
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

  private showTable: boolean = false;
  private showSmallTable: boolean = true;
}
</script>
