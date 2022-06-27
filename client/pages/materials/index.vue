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
        <template v-for="(material, i) in sortedMaterials">
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

  get sortedMaterials() {
    if (this.materials) {
      return this.materials.sort(
        (a: NotWellDefinedObject, b: NotWellDefinedObject) => {
          let fa = a.id.toLowerCase(),
            fb = b.id.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }
      );
    }
  }

  private async getAllTopics() {
    const topicRef = this.$fire.storage.ref().child("topic_images");

    // Find all the prefixes and items.
    topicRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef, index) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              this.materials.push({
                id: itemRef.name,
                to: `/materials/${itemRef.name.replace(".png", "")}`,
                src: url,
              });
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private async created() {
    await this.getAllTopics();
  }
}
</script>
