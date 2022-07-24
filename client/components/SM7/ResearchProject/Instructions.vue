<template>
  <v-sheet
    width="100%"
    height="100%"
    class="overflow-y-auto pt-14 pb-16 px-4"
    style="
      position: relative;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmain_page_bg.png?alt=media&token=9829d844-db29-4aab-9f6c-76bf8375439d);
      background-size: cover;
    "
    color="blue lighten-3"
  >
    <v-sheet :style="contentStyle" class="pa-4 fill-height">
      <p
        class="font-italic text-caption text-sm-subtitle-1 font-weight-regular"
      >
        <span class="font-weight-bold">Instructions:</span> Research and design
        a brochure about current hot topics related to photosynthesis (e.g.,
        Deforestation& Global warming).
      </p>
      <p
        class="font-italic text-caption text-sm-subtitle-1 font-weight-regular"
      >
        Be sure to include the following items in your brochure.
      </p>
      <ul
        class="font-italic text-caption text-sm-subtitle-1 font-weight-regular"
      >
        <li>
          The title and related pictures of the topic (Place the title at the
          top and attach images related to the case)
        </li>
        <li>Complete introduction of the topic, including definition.</li>
        <li>
          Connection to photosynthesis (how this topic is related to
          photosynthesis)
        </li>
        <li>Description of how the topic affects society.</li>
        <li>
          Personal recommendation of the students. (Discuss how to combat the
          effects of the chosen subject or topic to the community)
        </li>
        <li>
          Slogan to make people aware of the importance of plants and
          photosynthesis
        </li>
      </ul>
      <v-sheet width="70%" class="ml-auto mt-2" color="transparent">
        <p
          class="font-italic text-caption text-sm-subtitle-1 font-weight-regular mb-0"
        >
          <span class="font-weight-bold">Note:</span> Attach the related
          pictures of the topic discussed in the red boxes provided.
        </p>
        <p
          class="font-italic text-caption text-sm-subtitle-1 font-weight-regular mb-1"
        >
          <span class="font-weight-bold">Method:</span> You are allowed to use
          the following resources
        </p>
        <ul
          class="font-italic text-caption text-sm-subtitle-1 font-weight-regular ml-4"
        >
          <li>Scientific Journal Articles</li>
          <li>Newspaper Articles</li>
          <li>Books</li>
          <li>Internet</li>
        </ul>
      </v-sheet>
    </v-sheet>
    <img
      src="~assets/img/coconut_tree.png"
      height="20%"
      style="position: absolute; bottom: 60px; left: 5px"
      alt="Teacher Image"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class InstructionsPage extends Vue {
  private contentStyle: NotWellDefinedObject = {
    borderColor: "#1565C0",
    borderWidth: "4px",
    borderStyle: "solid",
    backgroundColor: "transparent",
  };
}
</script>
