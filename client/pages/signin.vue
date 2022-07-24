<template>
  <v-container fluid class="fill-height pa-0">
    <v-row no-gutters class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card max-width="335px" rounded="lg" class="mx-auto">
          <v-card-title class="py-6 px-5">
            <h2>Sign In</h2>
          </v-card-title>
          <v-card-text class="px-5">
            <v-form
              ref="loginForm"
              v-model="valid"
              lazy-validation
              @submit.prevent="signIn"
            >
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
                :rules="passwordRules"
                label="Password"
                outlined
                required
                prepend-inner-icon="mdi-lock"
                @click:append="showPass = !showPass"
              >
              </v-text-field>
              <v-btn
                elevation="2"
                color="primary"
                block
                x-large
                type="submit"
                class="mt-1"
                >Sign In</v-btn
              >
            </v-form>
            <v-row justify="center" class="my-4">
              <span>OR</span>
            </v-row>
            <v-row justify="center" class="my-4 px-3">
              <v-btn to="request" block x-large depressed
                >Request an Account</v-btn
              >
            </v-row>
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
    (v: string) => !!v || "Email is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  passwordRules = [(v: string) => !!v || "Password is required"];

  private async created() {
    // this.createUser();
    console.log(this.$fire.auth.currentUser);
  }

  private async createUser() {
    const user = {
      firstName: "Test",
      lastName: "User",
      role: 1,
      email: "test@test.com",
      birthdate: "January 01, 2022",
      gender: "Male",
    };
    try {
      await this.$auth.createUser("test@test.com", "test11", user);
    } catch (e) {
      console.error(e);
    }
  }

  private async signIn() {
    try {
      const user = await this.$auth.signInUser(this.email, this.password);
      if (user) {
        this.$notifier.notifierState = {
          iconName: "mdi-check",
          color: "success",
          message: `Login Success`,
        };
        this.$router.push("/materials");
      } else {
        this.$router.push("/signin");
        this.$notifier.notifierState = {
          iconName: "mdi-info",
          color: "error",
          message: `Ooops! Try Again...`,
        };
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
