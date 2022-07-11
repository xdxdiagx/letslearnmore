<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="py-2">
      <span class="text-md-h5 text-h6 font-weight-bold accent--text"
        >Supplementary Materials</span
      >
    </div>
    <v-divider></v-divider>
    <div class="overflow-auto mt-2">
      <v-row no-gutters>
        <template v-for="(material, i) in materials">
          <v-col class="pa-2" :key="i" cols="6" lg="2" sm="3">
            <v-hover v-slot="{ hover }">
              <v-card
                :to="material.to"
                :elevation="hover ? 4 : 2"
                :class="{ 'on-hover': hover }"
                rounded="lg"
              >
                <v-img :src="material.src" width="100%" aspect-ratio="1">
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Materials extends Vue {
  materials: NotWellDefinedObject[] = [];

  private async getAllTopics() {
    this.$fire.database.ref("materials").once("value", (ss) => {
      const mats: NotWellDefinedObject[] = ss.val();
      this.materials = mats
        .filter((m) => m.show == true)
        .map((m: NotWellDefinedObject) => {
          return {
            id: m.mid,
            src: m.topic_bg,
            to: `/materials/${m.mid}`,
          };
        });
    });
  }

  private async created() {
    await this.getAllTopics();
  }
}
</script>
