<template>
  <v-container fluid class="fill-height pa-0">
    <v-row no-gutters class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card max-width="335px" rounded="lg" class="mx-auto">
          <v-card-title>
            <span class="text-h5">Request an Account</span>
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
          <v-card-actions class="px-4 pb-4 pt-0">
            <v-spacer></v-spacer>
            <v-btn color="grey" dark @click="resetFields"> Clear </v-btn>
            <v-btn color="primary" @click="addStudent"> Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: "landing",
})
export default class RequestPage extends Vue {
  private datePicker = false;
  private fieldError = false;
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

  private async addStudent() {
    try {
      if (
        this.fields.email != "" &&
        this.fields.password != "" &&
        this.fields.firstName != "" &&
        this.fields.lastName != ""
      ) {
        const userData: any = {
          firstName: this.fields.firstName,
          lastName: this.fields.lastName,
          email: this.fields.email,
          birthdate: this.fields.birthdate,
          gender: this.fields.gender,
          role: this.fields.role,
          section: this.fields.section,
          password: this.fields.password,
        };
        await this.$user.enrollStudent(
          this.fields.email,
          this.fields.password,
          userData
        );
        await this.$fire.auth.signOut();
        this.resetFields();
        this.$router.push("/signin");
      } else {
        this.fieldError = true;
      }
    } catch (error) {
      console.error(error);
    }
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

  private snapshotToArray(snapshot: NotWellDefinedObject) {
    var returnArr: NotWellDefinedObject[] = [];

    snapshot.forEach(function (childSnapshot: any) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }
}
</script>
