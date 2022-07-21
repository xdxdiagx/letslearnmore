<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="py-2">
      <span class="text-md-h5 text-h6 font-weight-bold accent--text"
        >Activities</span
      >
    </div>
    <v-divider></v-divider>
    <v-card class="mt-4">
      <v-list class="pa-0">
        <v-list-item
          class="px-2"
          v-for="(material, index) in sortedMaterials"
          :key="index"
        >
          <v-list-item-avatar>
            <v-img :src="material.topic_bg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="material.title"></v-list-item-title>

            <v-list-item-subtitle
              v-text="material.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              :disabled="material.disable"
              icon
              color="primary"
              :to="`/activities/${material.mid}`"
            >
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Activities extends Vue {
  materials: NotWellDefinedObject[] = [];
  student: NotWellDefinedObject = {};

  private async getAllTopics() {
    this.$fire.database.ref("materials").once("value", (ss) => {
      this.materials = ss.val();
    });
  }

  private get sortedMaterials() {
    const sorted = this.materials.map((m: NotWellDefinedObject) => {
      let disable = true;
      if (this.student[m.mid] != null || this.student[m.mid] != undefined) {
        disable = false;
      }

      return {
        title: m.title,
        subtitle: m.subtitle,
        topic_bg: m.topic_bg,
        mid: m.mid,
        show: m.show,
        disable: disable,
      };
    });

    return sorted;
  }

  private async created() {
    await this.$user.getCurrentUser().then((data) => (this.student = data));
    await this.getAllTopics();
    console.log(this.student);
  }
}
</script>
