<template>
  <v-container class="fill-height d-flex flex-column h-100 align-start pa-0">
    <v-sheet color="primary" class="px-3 py-2" width="100%" height="250px">
      <v-sheet dark class="transparent d-flex align-center">
        <v-btn @click="goBack" class="mr-2" elevation="0" fab small plain>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="text-md-h5 text-h6 font-weight-bold flex-grow-1"
          >Profile</span
        >
        <v-btn elevation="0" fab small plain>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-sheet>
    </v-sheet>
    <v-card
      color="white"
      elevation="2"
      rounded="lg"
      min-width="335px"
      class="mx-auto mt-n16 mb-4"
      style="width: 90%"
    >
      <div class="d-flex justify-center">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-sheet
              height="124px"
              width="124px"
              class="d-flex justify-center align-center mt-n16 rounded-circle"
              style="position: relative"
            >
              <img src="~assets/img/user1.png" height="120" width="120" />
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn icon x-large>
                    <v-icon dark large> mdi-cloud-upload </v-icon></v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-sheet>
          </template>
        </v-hover>
      </div>
      <div class="d-block text-center">
        <span class="text-subtitle-1 font-weight-medium">
          {{ fullName }}
        </span>
      </div>
      <div class="pa-4" v-if="!$vuetify.breakpoint.smAndDown">
        <v-tabs vertical>
          <v-tab
            class="d-flex justify-start text-capitalize"
            style="min-width: 200px"
          >
            <v-icon left> mdi-account </v-icon>
            Account
          </v-tab>
          <v-tab
            class="d-flex justify-start text-capitalize"
            style="min-width: 200px"
          >
            <v-icon left> mdi-star-outline </v-icon>
            Activities
          </v-tab>
          <v-tab
            class="d-flex justify-start text-capitalize"
            style="min-width: 200px"
          >
            <v-icon left> mdi-poll </v-icon>
            Results
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="pa-0 pl-4">
                <v-row no-gutters class="text-body-2">
                  <v-col cols="3"> Email: </v-col>
                  <v-col cols="9" class="text-left font-italic">
                    {{ user.email }}
                  </v-col>
                </v-row>
                <v-row no-gutters class="text-body-2">
                  <v-col cols="3"> Birthdate: </v-col>
                  <v-col cols="9" class="text-left font-italic">
                    {{ user.birthdate }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text class="pa-0 pl-4">
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text class="pa-0 pl-4">
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque
                  facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                  ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
      <div class="py-2" v-else>
        <v-list dense nav>
          <v-list-group
            prepend-icon="mdi-account"
            append-icon="mdi-chevron-right"
            no-action
            value="true"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item class="px-2">
              <v-list-item-content>
                <v-card flat>
                  <v-card-text class="pa-0 px-2">
                    <v-row no-gutters class="text-body-2">
                      <v-col cols="3"> Email: </v-col>
                      <v-col cols="9" class="text-right font-italic">
                        {{ user.email }}
                      </v-col>
                    </v-row>
                    <v-row no-gutters class="text-body-2">
                      <v-col cols="3"> Birthdate: </v-col>
                      <v-col cols="9" class="text-right font-italic">
                        {{ user.birthdate }}
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group
            prepend-icon="mdi-star-outline"
            append-icon="mdi-chevron-right"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Activities</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item class="px-2">
              <v-list-item-content>
                <v-card flat>
                  <v-card-text class="pa-0">
                    <p>
                      Morbi nec metus. Suspendisse faucibus, nunc et
                      pellentesque egestas, lacus ante convallis tellus, vitae
                      iaculis lacus elit id tortor. Sed mollis, eros et ultrices
                      tempus, mauris ipsum aliquam libero, non adipiscing dolor
                      urna a orci. Curabitur ligula sapien, tincidunt non,
                      euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                    </p>

                    <p>
                      Suspendisse feugiat. Suspendisse faucibus, nunc et
                      pellentesque egestas, lacus ante convallis tellus, vitae
                      iaculis lacus elit id tortor. Proin viverra, ligula sit
                      amet ultrices semper, ligula arcu tristique sapien, a
                      accumsan nisi mauris ac eros. In hac habitasse platea
                      dictumst. Fusce ac felis sit amet ligula pharetra
                      condimentum.
                    </p>

                    <p>
                      Sed consequat, leo eget bibendum sodales, augue velit
                      cursus nunc, quis gravida magna mi a libero. Nam commodo
                      suscipit quam. In consectetuer turpis ut velit. Sed cursus
                      turpis vitae tortor. Aliquam eu nunc.
                    </p>

                    <p>
                      Etiam ut purus mattis mauris sodales aliquam. Ut varius
                      tincidunt libero. Aenean viverra rhoncus pede. Duis leo.
                      Fusce fermentum odio nec arcu.
                    </p>

                    <p class="mb-0">
                      Donec venenatis vulputate lorem. Aenean viverra rhoncus
                      pede. In dui magna, posuere eget, vestibulum et, tempor
                      auctor, justo. Fusce commodo aliquam arcu. Suspendisse
                      enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                    </p>
                  </v-card-text>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group
            prepend-icon="mdi-poll"
            append-icon="mdi-chevron-right"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Results</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item class="px-2">
              <v-list-item-content>
                <v-card flat>
                  <v-card-text class="pa-0">
                    <p>
                      Fusce a quam. Phasellus nec sem in justo pellentesque
                      facilisis. Nam eget dui. Proin viverra, ligula sit amet
                      ultrices semper, ligula arcu tristique sapien, a accumsan
                      nisi mauris ac eros. In dui magna, posuere eget,
                      vestibulum et, tempor auctor, justo.
                    </p>

                    <p class="mb-0">
                      Cras sagittis. Phasellus nec sem in justo pellentesque
                      facilisis. Proin sapien ipsum, porta a, auctor quis,
                      euismod ut, mi. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nam at tortor in
                      tellus interdum sagittis.
                    </p>
                  </v-card-text>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: "profile",
})
export default class ProfilePage extends Vue {
  private user: NotWellDefinedObject = {};

  private get fullName() {
    if (this.user != null) {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  }

  private get section() {
    if (this.user != null) {
      if (this.user.role == 1) return `Teacher`;
      else return `Section ${this.user.section}`;
    }
  }

  private async created() {
    this.user = await this.$user.getUserById(this.$route.params.userId);
  }

  private goBack() {
    this.$router.back();
  }
}
</script>
