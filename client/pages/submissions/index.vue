<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="py-2">
      <span class="text-md-h5 text-h6 font-weight-bold accent--text"
        >Submissions</span
      >
    </div>
    <v-divider></v-divider>
    <v-card rounded="lg" class="mt-4">
      <v-card-title class="py-2">
        <v-select
          :items="materials"
          label="Select Material"
          hide-details
          outlined
          dense
          v-model="selectedMaterial"
          @change="changeMaterial"
        ></v-select>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-list dense class="pa-0">
          <v-list-item v-for="student in sortedStudents" :key="student.key">
            <v-list-item-avatar size="36">
              <v-icon class="grey lighten-1" dark> mdi-account </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ student.lastName }},
                {{ student.firstName }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                :to="`/submissions/${selectedMaterial}/${student.key}`"
              >
                <v-icon color="primary">mdi-exit-to-app</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Submissions extends Vue {
  private students: NotWellDefinedObject[] = [];
  private materials: NotWellDefinedObject[] = [
    {
      text: "SM1",
      value: "sm_1",
    },
    {
      text: "SM2",
      value: "sm_2",
    },
    {
      text: "SM3",
      value: "sm_3",
    },
    {
      text: "SM4",
      value: "sm_4",
    },
    {
      text: "SM5",
      value: "sm_5",
    },
    {
      text: "SM6",
      value: "sm_6",
    },
    {
      text: "SM7",
      value: "sm_7",
    },
    {
      text: "SM8",
      value: "sm_8",
    },
  ];
  private selectedMaterial = "sm_1";

  private changeMaterial() {
    console.log(this.selectedMaterial);
    this.getStudentsByMaterial();
  }

  private get sortedStudents() {
    return this.students
      .filter(
        (s: NotWellDefinedObject) =>
          s[this.selectedMaterial] != null ||
          s[this.selectedMaterial] != undefined
      )
      .filter((s: NotWellDefinedObject) => s.role == 2)
      .sort((a, b) => {
        let fa = a.lastName.toLowerCase(),
          fb = b.lastName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
  }

  private async getStudentsByMaterial() {
    this.$fire.database
      .ref("users")
      .orderByChild(this.selectedMaterial)
      .once("value", (ss) => {
        this.students = this.snapshotToArray(ss);
      });
  }

  private snapshotToArray(snapshot: NotWellDefinedObject) {
    var returnArr: NotWellDefinedObject[] = [];

    snapshot.forEach(function (childSnapshot: any) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }

  private async created() {
    await this.getStudentsByMaterial();
  }
}
</script>
