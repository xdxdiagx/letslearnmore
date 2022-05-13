<template>
  <v-container fluid class="fill-height pa-0">
    <v-row no-gutters class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card min-height="450px" max-width="335px" rounded="lg">
          <v-card-title class="py-6 px-5">
            <h2>Sign In</h2>
          </v-card-title>
          <v-card-text class="px-5">
            <v-form ref="loginForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                outlined
                required
                prepend-inner-icon="mdi-account"
              >
              </v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                label="Password"
                outlined
                required
                prepend-inner-icon="mdi-lock"
                @click:append="showPass = !showPass"
              >
              </v-text-field>
              <v-btn elevation="2" color="primary" block x-large to="dashboard"
                >Sign In</v-btn
              >
            </v-form>
          </v-card-text>
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
export default class SignInPage extends Vue {
  showPass: boolean = false;
  email: string = "";
  password: string = "";
  valid: boolean = true;
  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
}
</script>
