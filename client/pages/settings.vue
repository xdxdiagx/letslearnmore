<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="py-2">
      <span class="text-md-h5 text-h6 font-weight-bold accent--text"
        >Settings</span
      >
    </div>
    <v-divider></v-divider>
    <v-card class="mt-4">
      <v-tabs centered>
        <v-tab class="text-capitalize"> Topics </v-tab>
        <v-tab class="text-capitalize"> Students </v-tab>
        <v-tab class="text-capitalize"> Enrollees </v-tab>

        <v-tab-item>
          <v-list class="pa-0">
            <v-list-item
              class="px-2"
              v-for="(material, index) in materials"
              :key="index"
            >
              <v-list-item-avatar>
                <v-img :src="material.topic_bg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="material.title"></v-list-item-title>

                <v-list-item-subtitle
                  v-text="material.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-switch
                  v-model="material.show"
                  @change="showTopic(index, material.show)"
                  dense
                  inset
                ></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-tab-item>
        <v-tab-item>
          <v-row no-gutters class="pr-4 pt-2" justify="end">
            <v-btn color="primary" @click="showModal = true"> Add </v-btn>
          </v-row>
          <v-list two-line class="pa-0">
            <v-list-item v-for="student in students" :key="student.key">
              <v-list-item-avatar size="36">
                <v-icon class="grey lighten-1" dark> mdi-account </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  >{{ student.firstName }}
                  {{ student.lastName }}</v-list-item-title
                >

                <v-list-item-subtitle>Section 1</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon :to="`/profile/${student.key}`">
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-tab-item>
        <v-tab-item>
          <v-list two-line class="pa-0">
            <v-list-item v-for="student in enrollees" :key="student.key">
              <v-list-item-avatar size="36">
                <v-icon class="grey lighten-1" dark> mdi-account </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  >{{ student.firstName }}
                  {{ student.lastName }}</v-list-item-title
                >

                <v-list-item-subtitle>Section 1</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon @click="acceptStudent(student)">
                  <v-icon color="primary">mdi-check-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-dialog v-model="showModal" scrollable max-width="720px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <small :class="{ 'error--text': fieldError }"
            >*indicates required field</small
          >
          <v-container class="pa-0">
            <v-row no-gutters class="py-2">
              <v-col cols="12" sm="6" class="mb-2 pr-sm-1">
                <v-text-field
                  v-model="fields.firstName"
                  :readonly="enrollee"
                  label="First name*"
                  :rules="[rules.required]"
                  :error="fieldError"
                  hide-details
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="mb-2 pl-sm-1">
                <v-text-field
                  v-model="fields.lastName"
                  :readonly="enrollee"
                  label="Last name*"
                  :rules="[rules.required]"
                  :error="fieldError"
                  hide-details
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mb-2">
                <v-text-field
                  v-model="fields.email"
                  :readonly="enrollee"
                  label="Email*"
                  :rules="[rules.required, rules.email]"
                  :error="fieldError"
                  hide-details
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mb-2">
                <v-select
                  v-model="fields.section"
                  :readonly="enrollee"
                  :items="[1, 2]"
                  :rules="[rules.required]"
                  outlined
                  hide-details
                  label="Section*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" class="mb-2">
                <v-text-field
                  v-model="fields.password"
                  :readonly="enrollee"
                  label="Password*"
                  :rules="[rules.required]"
                  :error="fieldError"
                  type="password"
                  hide-details
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="7" class="mb-2 pr-2">
                <v-menu
                  v-model="datePicker"
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="fields.birthdate"
                      label="Birthdate*"
                      :rules="[rules.required]"
                      hide-details
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="fields.birthdate"
                    @input="datePicker = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="5" class="mb-2 pl-1">
                <v-select
                  v-model="fields.gender"
                  :readonly="enrollee"
                  :items="['Male', 'Female']"
                  :rules="[rules.required]"
                  outlined
                  hide-details
                  label="Gender*"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red lighten-1" text @click="showModal = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="addStudent"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  layout: "default",
})
export default class Settings extends Vue {
  materials: NotWellDefinedObject[] = [];
  private showModal = false;
  private datePicker = false;
  private fieldError = false;
  private enrollee = false;
  private students: NotWellDefinedObject[] = [];
  private enrollees: NotWellDefinedObject[] = [];
  private rules: NotWellDefinedObject = {
    required: (v: string) => !!v || "Required.",
    email: (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  };

  private fields: NotWellDefinedObject = {
    firstName: "",
    lastName: "",
    birthdate: new Date().toISOString().substr(0, 10),
    gender: "Male",
    email: "",
    password: "",
    section: 1,
    role: 2,
  };

  private async getAllTopics() {
    this.$fire.database.ref("materials").once("value", (ss) => {
      this.materials = ss.val();
    });
  }

  private async getAllStudents() {
    this.$fire.database
      .ref("users")
      .orderByChild("role")
      .equalTo(2)
      .once("value", (ss) => {
        this.students = this.snapshotToArray(ss);
      });
  }

  private async getAllEnrollees() {
    this.$fire.database.ref("enrollees").once("value", (ss) => {
      this.enrollees = this.snapshotToArray(ss);
    });
  }

  private async addStudent() {
    try {
      if (
        this.fields.email != "" &&
        this.fields.password != "" &&
        this.fields.firstName != "" &&
        this.fields.lastName != ""
      ) {
        const userData: NotWellDefinedObject = {
          firstName: this.fields.firstName,
          lastName: this.fields.lastName,
          email: this.fields.email,
          birthdate: this.fields.birthdate,
          gender: this.fields.gender,
          role: this.fields.role,
          section: this.fields.section,
        };
        if (this.enrollee == false) {
          await this.$auth.createUser(
            this.fields.email,
            this.fields.password,
            userData
          );
        } else {
          this.$fire.database.ref("enrollees").child(this.fields.key).remove();
          this.$fire.database.ref("users").child(this.fields.key).set(userData);
          this.enrollee = false;
          this.getAllEnrollees();
          this.getAllStudents();
        }
        this.showModal = false;
        this.resetFields();
      } else {
        this.fieldError = true;
      }
    } catch (error) {
      console.error(error);
    }
  }

  private acceptStudent(student: NotWellDefinedObject) {
    this.fields = student;
    this.showModal = true;
    this.enrollee = true;
  }

  private resetFields() {
    this.fields = {
      firstName: "",
      lastName: "",
      birthdate: new Date().toISOString().substr(0, 10),
      gender: "Male",
      email: "",
      password: "",
      section: 1,
      role: 2,
    };
  }

  private showTopic(index: string, show: boolean) {
    this.$fire.database.ref(`materials/${index}`).update({
      show: show,
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
    await this.getAllTopics();
    await this.getAllStudents();
    await this.getAllEnrollees();
  }
}
</script>
