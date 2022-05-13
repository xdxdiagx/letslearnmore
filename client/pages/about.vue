<template>
  <v-container fluid class="fill-height h-100">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolor
          doloribus reiciendis sed architecto esse maxime distinctio blanditiis
          dolore tenetur? Optio blanditiis dignissimos error natus, quisquam
          quis expedita fugiat harum!
        </p>
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
  email: string = "";
  password: string = "";
  valid: boolean = true;
  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
}
</script>
