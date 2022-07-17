<template>
  <v-app-bar class="rounded-lg elevation-1" :height="56" style="z-index: 1">
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click.stop="$emit('clickNavIcon')"
    ></v-app-bar-nav-icon>

    <div style="position: relative; width: 100%" class="d-flex flex-column">
      <v-text-field
        solo
        flat
        dense
        clearable
        placeholder="Search Wikipedia..."
        prepend-inner-icon="mdi-magnify"
        hide-details
        color="accent"
        class="transparent rounded-lg"
        v-model="query"
        @keyup.enter="search"
        @keyup.esc="clearText"
        @click:clear="clearText()"
      ></v-text-field>
      <v-expand-transition>
        <v-card
          v-show="showResults"
          v-click-outside="onClickOutside"
          width="100%"
          class="mx-auto rounded-lg overflow-y-auto"
          style="position: absolute; top: 40px"
          max-height="350px"
        >
          <v-card-text>
            <v-card
              elevation="2"
              rounded
              class="pa-2 mb-1"
              v-for="(result, index) in searchResults"
              :key="index"
            >
              <v-row no-gutters align="center">
                <div>
                  <span class="text-subtitle-2">{{ result.title }}</span
                  ><br />
                  <span
                    v-if="!$vuetify.breakpoint.smAndDown"
                    class="text-caption blue--text text--lighten-1"
                    >{{ result.url }}</span
                  >
                </div>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  small
                  color="primary"
                  link
                  target="_blank"
                  :href="result.url"
                >
                  <v-icon size="20">mdi-open-in-new</v-icon>
                </v-btn>
              </v-row>
            </v-card>
          </v-card-text>
        </v-card>
      </v-expand-transition>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

@Component({})
export default class AppBar extends Vue {
  private showSearch = false;
  private showResults = false;
  private query = "";
  private results: NotWellDefinedObject[] = [];

  private async searchWikipedia(searchQuery: string) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchQuery}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
  }

  private async search() {
    console.log(this.query);
    const searchQuery = this.query.trim();

    try {
      const searchResults = await this.searchWikipedia(searchQuery);
      this.results = searchResults.query.search;
      console.log(this.results);
      this.showResults = true;
    } catch (err) {
      console.error(err);
    }
  }

  private get searchResults() {
    return this.results.map((r: NotWellDefinedObject) => {
      return {
        url: `https://en.wikipedia.org/?curid=${r.pageid}`,
        title: r.title,
      };
    });
  }

  private clearText() {
    this.query = "";
    this.showResults = false;
  }

  private onClickOutside() {
    if (this.showResults == true) this.clearText();
  }

  @Watch("query")
  private onQueryChange() {
    if (this.query == "") this.showResults = false;
  }
}
</script>

<style></style>
