<template>
  <v-app-bar flat class="rounded elevation-1" :height="56">
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click.stop="$emit('clickNavIcon')"
    ></v-app-bar-nav-icon>

    <v-text-field
      v-if="$vuetify.breakpoint.mdAndUp"
      flat
      solo
      dense
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      hide-details
      color="indigo"
      class="transparent"
    ></v-text-field>
    <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>

    <div
      v-if="showSearch && $vuetify.breakpoint.mdAndDown"
      class="d-flex mr-n2"
    >
      <v-text-field
        outlined
        dense
        placeholder="Search"
        hide-details
        class="transparent mx-1"
        color="indigo"
      ></v-text-field>
      <v-btn @click="showSearch = !showSearch" icon :height="40" :width="40">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div v-else class="mr-n2">
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        @click="showSearch = !showSearch"
        icon
        :height="40"
        :width="40"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon :height="40" :width="40" class="ml-2" color="primary">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon :height="40" :width="40" color="primary">
        <v-icon>mdi-message</v-icon>
      </v-btn>

      <v-menu left bottom :nudge-bottom="52" :nudge-right="8">
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn icon  >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn> -->
          <v-avatar v-bind="attrs" v-on="on" size="40">
            <v-icon color="indigo lighten-1"> mdi-account-circle </v-icon>
          </v-avatar>
        </template>

        <v-sheet class="pt-4 pb-3" elevation="0">
          <div class="d-flex flex-column justify-center">
            <v-img
              src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
              max-height="100"
              max-width="100"
              class="mx-auto"
            ></v-img>
            <span class="heading mx-auto mt-2 font-weight-medium"
              >Full Name</span
            >
            <span class="text-caption mx-auto">Position</span>
          </div>
        </v-sheet>

        <v-divider class="mx-2"></v-divider>

        <v-list dense :width="200" class="pa-0" elevation="0">
          <v-list-item-group>
            <v-list-item class="text-right">
              <v-list-item-content>
                <v-sheet class="d-flex align-center justify-space-between pl-2">
                  <v-switch
                    hide-details
                    class="ma-0"
                    v-model="$vuetify.theme.dark"
                    dense
                  ></v-switch>
                  <v-list-item-title class="text-subtitle-2"
                    >{{
                      $vuetify.theme.dark ? "Light" : "Dark"
                    }}
                    mode</v-list-item-title
                  >
                </v-sheet>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="n in 2"
              :key="n"
              @click="() => {}"
              class="text-right"
            >
              <v-list-item-content>
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class AppBar extends Vue {
  private showSearch = false;
}
</script>

<style></style>
