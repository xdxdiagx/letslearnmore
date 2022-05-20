<template>
  <v-app dark>
    <v-row no-gutters>
      <v-navigation-drawer
        v-model="drawer"
        :permanent="sideBar"
        :absolute="!sideBar"
        :temporary="!sideBar"
        color="primary"
        dark
      >
        <SideBar />
        <template v-slot:append>
          <div class="d-flex align-center justify-center">
            <v-list class="pa-0">
              <v-list-item dense class="pa-0 pl-2" to="/profile">
                <v-list-item-avatar>
                  <img src="~/assets/img/user1.png" />
                </v-list-item-avatar>

                <v-list-item-content class="pa-0">
                  <v-list-item-title class="text-subtitle-2">{{
                    fullname
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="text-caption">{{
                    section
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div>
              <v-btn @click="signOut" elevation="0" fab small plain>
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </div>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main>
        <AppBar class="mt-2 mx-5" v-on:clickNavIcon="onClickNavIcon" />
        <v-container fluid class="px-5 py-0">
          <Nuxt />
        </v-container>
      </v-main>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  middleware: "authenticated",
})
export default class Default extends Vue {
  drawer = true;
  private user: NotWellDefinedObject = {};

  get sideBar() {
    let sidebar_stat = false;
    if (this.$vuetify.breakpoint.smAndDown) sidebar_stat = false;
    else sidebar_stat = true;
    return sidebar_stat;
  }

  private onClickNavIcon() {
    this.drawer = !this.drawer;
  }

  private async created() {
    if (this.$vuetify.breakpoint.smAndDown) this.drawer = false;
    await this.getUser();
  }

  private get fullname() {
    if (this.user != null) {
      return `${this.user.lastName}, ${this.user.firstName}`;
    }
  }

  private get section() {
    if (this.user != null) {
      if (this.user.role == 1) return `Teacher`;
      else return `Section ${this.user.section}`;
    }
  }

  private async getUser() {
    const uid = this.$auth.currentUserId;
    await this.$fire.database
      .ref(`users/${uid}`)
      .get()
      .then((ss: any) => {
        console.log(ss.val());
        this.user = ss.val();
      })
      .catch((err: any) => console.error(err));
    console.log(this.user);
  }

  private async signOut() {
    await this.$auth.signOutUser();
    this.$router.push("/");
  }
}
</script>
