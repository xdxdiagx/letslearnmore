<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="py-2">
      <span class="text-md-h5 text-h6 font-weight-bold accent--text"
        >Results</span
      >
    </div>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="sortedStudents"
      :items-per-page="10"
      class="elevation-1 mt-4"
    ></v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Results extends Vue {
  private students: NotWellDefinedObject[] = [];
  async created() {
    this.getAllStudents();
  }

  private headers: NotWellDefinedObject[] = [
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Section",
      value: "section",
    },
    {
      text: "Gender",
      value: "gender",
    },
    {
      text: "SM1 (%)",
      value: "sm_1",
      align: "center",
    },
    {
      text: "SM2 (%)",
      value: "sm_2",
      align: "center",
    },
    {
      text: "SM3 (%)",
      value: "sm_3",
      align: "center",
    },
    {
      text: "SM4 (%)",
      value: "sm_4",
      align: "center",
    },
    {
      text: "SM5 (%)",
      value: "sm_5",
      align: "center",
    },
    {
      text: "SM6 (%)",
      value: "sm_6",
      align: "center",
    },
    {
      text: "SM7 (%)",
      value: "sm_7",
      align: "center",
    },
    {
      text: "SM8 (%)",
      value: "sm_8",
      align: "center",
    },
  ];

  private async getAllStudents() {
    await this.$fire.database.ref("users").once("value", (ss) => {
      ss.forEach((cs) => {
        const user = cs.val();
        if (user.role == 2) {
          this.students.push(user);
        }
      });
    });
  }

  private get sortedStudents() {
    const sorted = this.students
      .map((s: NotWellDefinedObject) => {
        return {
          name: `${s.lastName}, ${s.firstName}`,
          gender: s.gender,
          section: s.section,
          sm_1: s.sm_1?.grade || 0,
          sm_2: s.sm_2?.grade || 0,
          sm_3: s.sm_3?.grade || 0,
          sm_4: s.sm_4?.grade || 0,
          sm_5: s.sm_5?.grade || 0,
          sm_6: s.sm_6?.grade || 0,
          sm_7: s.sm_7?.grade || 0,
          sm_8: s.sm_8?.grade || 0,
        };
      })
      .sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

    return sorted;
  }
}
</script>
