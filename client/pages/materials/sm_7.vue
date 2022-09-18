<template>
  <v-container class="fill-height d-flex flex-column h-100 align-start pa-0">
    <v-btn
      @click="goBack"
      elevation="0"
      class="mt-n2 ml-n2"
      fixed
      top
      left
      fab
      small
      plain
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn
      @click="referenceDialog = !referenceDialog"
      elevation="0"
      color="black"
      class="mt-n2 mr-n2"
      fixed
      top
      right
      fab
      small
      plain
    >
      <v-icon>mdi-text-box</v-icon>
    </v-btn>
    <v-window
      v-if="!showMain"
      v-model="introIndex"
      touchless
      style="width: 100%; height: 100vh"
    >
      <v-window-item
        v-for="(item, index) in introWindows"
        :key="`item-${index}`"
        class="fill-height pa-0 ma-0"
      >
        <component
          v-if="introIndex == index"
          :is="item.name"
          v-bind="{ ...item.props }"
          v-on="{ ...item.events }"
        ></component>
      </v-window-item>
    </v-window>
    <v-window
      v-else
      v-model="mainIndex"
      touchless
      style="width: 100%; height: 100vh"
    >
      <v-window-item
        v-for="(item, index) in main_windows"
        :key="`item-${index}`"
        class="fill-height pa-0 ma-0"
      >
        <component
          v-if="mainIndex == index"
          :is="item.name"
          v-bind="{ ...item.props }"
          v-on="{ ...item.events }"
        ></component>
      </v-window-item>
    </v-window>

    <v-btn
      v-if="introIndex != windows.length - 1 && !showMain"
      @click="nextIntro"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      Next<v-icon>mdi-chevron-right</v-icon>
    </v-btn>

    <v-btn
      v-if="mainIndex != main_windows.length - 1 && showMain"
      @click="nextMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      right
      fixed
    >
      <span v-if="mainIndex == 0" class="error--text">Start</span>
      <span v-else>Next</span
      ><v-icon :class="[mainIndex == 0 ? 'error--text' : '']"
        >mdi-chevron-right</v-icon
      >
    </v-btn>

    <v-btn
      v-if="mainIndex >= 1 && showMain"
      @click="prevMain"
      class="ma-2 px-2"
      elevation="2"
      bottom
      left
      fixed
    >
      <v-icon>mdi-chevron-left</v-icon>Prev
    </v-btn>
    <v-dialog
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      v-model="referenceDialog"
    >
      <v-card>
        <v-card-title>
          <v-row no-gutters align="center">
            <span class="text-h6">References:</span>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-n2"
              icon
              plain
              @click="referenceDialog = !referenceDialog"
              ><v-icon>mdi-close</v-icon></v-btn
            ></v-row
          >
        </v-card-title>
        <v-card-text>
          <p v-for="(r, idr) in references" :key="idr">
            {{ r }}
          </p>
          <v-row no-gutters v-if="content_references.length > 0">
            <span class="text-h6 black--text mb-2">Images</span>
            <p class="" v-for="(cr, idr) in content_references" :key="idr">
              {{ cr }}
            </p>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Classroom from "Component/Global/Classroom.vue";
import ObjectivePage from "Component/Global/ObjectivePage.vue";
import Accordion from "Component/SM7/Accordion.vue";
import MainPage from "Component/SM7/MainPage.vue";
import MainIntro from "Component/SM7/MainIntro.vue";
import AccordionIntro from "Component/SM7/AccordionIntro.vue";
import IntroPage from "Component/SM7/ResearchProject/IntroPage.vue";
import InstructionsPage from "Component/SM7/ResearchProject/Instructions.vue";
import Rubrics from "Component/SM7/ResearchProject/Rubrics.vue";
import ProjectMain1 from "Component/SM7/ResearchProject/ProjectMain1.vue";
import ProjectMain2 from "Component/SM7/ResearchProject/ProjectMain2.vue";
import ProjectMain3 from "Component/SM7/ResearchProject/ProjectMain3.vue";
import ProjectMain4 from "Component/SM7/ResearchProject/ProjectMain4.vue";
import ProjectMain5 from "Component/SM7/ResearchProject/ProjectMain5.vue";

import * as sm_7 from "@/data/sm_7";

@Component({
  layout: "material",
  components: {
    Classroom,
    ObjectivePage,
    Accordion,
    MainPage,
    MainIntro,
    AccordionIntro,
    IntroPage,
    InstructionsPage,
    Rubrics,
    ProjectMain1,
    ProjectMain2,
    ProjectMain3,
    ProjectMain4,
    ProjectMain5,
  },
})
export default class SM7 extends Vue {
  private introIndex = 0;
  private mainIndex = 0;
  private voiceovers: NotWellDefinedObject[] = [];
  private mainVO: NotWellDefinedObject[] = [];
  private mainContents: NotWellDefinedObject[] = [];
  private showMain = false;
  private referenceDialog = false;

  private windows = sm_7.windows;
  private main_windows = sm_7.main_windows;

  private references: string[] = [
    "Capco, C. & Yang, G. (n.d.) You and The Natural World Biology. Third Edition. Phoenix Publishing House",
    "Craggs, G., (2016) Photosynthesis and its Role in Climate Change and Soil Regeneration. Future Directions International. Retrieved from https://www.futuredirections.org.au/publication/photosynthesis-role-climate-change-soil-regeneration/",
    "Brenner, L., (2019) Why Is Photosynthesis Important for All Organisms? Retrieved from https://sciencing.com/photosynthesis-important-organisms-6389083.html",
    "Cook, B., (2013) The important role of photosynthesis. Michigan State University. Retrieved from https://www.canr.msu.edu/news/the_important_role_of_photosynthesis",
    "Gust, D., (n.d.) Why Study Photosynthesis. Center for Bioenergy & Photosynthesis. Center for Bioenergy & Photosynthesis. Arizona State University. Retrieved from https://live-bioenergy.ws.asu.edu/content/why-study-photosynthesis",
    "“Photosynthesis Cells” (n.d.) Scitable by Nature Education. Retrieved from https://www.nature.com/scitable/topicpage/photosynthetic-cells-14025371/",
    "Cottingham, K. (2013) The Medical Bond: Using photosynthesis to make medicines and other useful substances. Retrieved from https://communities.acs.org/t5/Science-News/The-Medical-Bond-Using-photosynthesis-to-make-medicines-and/ba-p/14938",
    "Photosynthesis: How Is It Important to Medicine? HASPI Medical Biology Lab 06. Retrieved from file:///E:/THESIS-%20FINAL/06a_photosynthesis___medicine.pdf",
    "Jones, C., (n.d.) Soil restoration: 5 core principles. Retrieved from https://www.ecofarmingdaily.com/build-soil/soil-restoration-5-core-principles/",
    "Soil Health. National Agroforestry Center U.S. Department of Agriculture. Retrieved from https://www.fs.usda.gov/nac/topics/soil-health.php",
    "Fox, S., (2010) Surprise! Even Plants Can Contribute to Global Warming. Live Science. Retrieved from https://www.livescience.com/6429-surprise-plants-contribute-global-warming.html",
    "Runwal, P., (2021) Plants Buy Us Time to Slow Climate Change – But Not Enough to Stop It. News Center Barkeley Lab. Retrieved from https://newscenter.lbl.gov/2021/12/08/plants-buy-us-time-to-slow-climate-change-but-not-enough-to-stop-it/",
    "“Photosynthesis”, (n.d.) Understanding Global Change. Retrieved from https://ugc.berkeley.edu/background-content/photosynthesis/",
    "ReadWriteThink,(2006).Travel Brochure Rubrics. Retrieved from https://devlegalsimpli.blob.core.windows.net/pdfseoforms/pdf-20180219t134432z-001/pdf/travel-brochure-rubric.pdf?sv=2018-03-28&si=readpolicy&sr=c&sig=MXHnWmn0sXNXztiU%2Bugk2d7DV7KBCOuXF3oBMx0EeEw%3D",
  ];

  private content_references: string[] = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bb90f65889151.5b03f02cd52bd.jpg",
    "https://www.microbiota-site.com/images/2020/vrac/Leaf_in_sunlight-1.jpg",
    "https://www.merlot.org/merlot/getMaterialImage.htm?id=773310947",
    "https://image.freepik.com/free-vector/tiny-scientist-male-character-looking-green-leaf-through-huge-magnifying-glass-sun-shining-plant-sunlight-changing-into-chemical-energy-during-photosynthesis-cartoon-vector-illustration_87771-11918.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnbHZ6tAOBq_p1tyOWYiB6kJP4L6p_hZAAA&usqp=CAU",
    "https://cdn11.bigcommerce.com/s-v5lcc6/product_images/uploaded_images/bio-p-cel-y11-12-9-img1h.jpeg",
    "https://www.microbiota-site.com/images/2020/vrac/Leaf_in_sunlight-1.jpg",
    "https://www.thestudypath.com/wp-content/uploads/2021/04/Important-Questions-for-Class-7-Science-Chapter-1-Nutrition-in-Plants-image-3.png",
    "https://oilprice.com/Energy/Energy-General/Artificial-Photosynthesis-A-New-Renewable-Energy-Source.html",
    "https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-1-4419-0194-1_9/MediaObjects/978-1-4419-0194-1_9_Fig5_HTML.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDfEmXkMHDyT4tctMwIs_c06217sJylMvTQ&usqp=CAU",
    "https://blog.sciencemuseum.org.uk/wp-content/uploads/2017/12/T1-e1513687947112-1024x969.jpg",
    "https://blog.sciencemuseum.org.uk/wp-content/uploads/2017/12/Credit-Bart-van-Overbeeke-2.jpg",
    "https://static.wixstatic.com/media/8749e1_4aa9a36aaaa94b12bf20f7484ea94c27~mv2.png/v1/fill/w_740,h_417,al_c,lg_1,q_95/8749e1_4aa9a36aaaa94b12bf20f7484ea94c27~mv2.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mYR0GIhU3urY2zLiBYQBMxQAb-BNJqhCTUevV_efPKHDgbTgb3nCCfk3FucnUBeJhMc&usqp=CAU",
    "https://www.topriseglobal.com/wp-content/uploads/2021/12/people-eating-at-table.jpg",
    "https://static.wixstatic.com/media/8749e1_4aa9a36aaaa94b12bf20f7484ea94c27~mv2.png/v1/fill/w_740,h_417,al_c,lg_1,q_95/8749e1_4aa9a36aaaa94b12bf20f7484ea94c27~mv2.webp",
    "https://image.slidesharecdn.com/rahanappt-170328082425/95/medicinal-plants-1-638.jpg?cb=1490689735",
    "https://cdn.britannica.com/78/148078-050-79D05CB8/Coal-power-plant-Wyoming-Rock-Springs.jpg",
    "https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/86/f86fc6a8-5c87-11e3-874d-0019bb2963f4/529e927877d92.image.jpg?resize=400%2C400",
    "https://media.visualstories.com/images/18/465812/640-106474479-types-of-fossil-fuels.jpg",
    "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/vegetables-and-fruits-farmers-market.jpg",
    "https://cdn.britannica.com/11/196511-050-F63E85DD/man-ingredients-apothecary-Asian.jpg?w=690&h=388&c=crop",
    "https://post.healthline.com/wp-content/uploads/2019/11/Ayurvedic-herb-herb-turmeric-indian-spices-732x549-thumbnail.jpg",
    "https://static.practicalpainmanagement.com/sites/default/files/imagecache/inline-image/images/2015/09/14/18593722_XL.jpg",
    "https://img2.asiancancer.com/uploads/allimg/2016/08/16/2-093931701.jpg",
    "https://farmingfirst.org/wordpress/wp-content/uploads/2018/04/IFDC-header.jpghttp://www.biotechclear.com/content/science/images/products/soil-01.jpg",
    "https://feeco.com/wp-content/uploads/2018/07/Soil-Amendments-and-Conditioners.jpg",
    "https://woodfordia.org/wp-content/uploads/2018/09/UNADJUSTEDNONRAW_thumb_735_600.jpg",
    "https://i2.wp.com/crestoneeagle.com/wp-content/uploads/2020/01/carbon-farming-cycle-slider.jpg?resize=960%2C350&ssl=1",
    "https://images.theconversation.com/files/313841/original/file-20200205-149789-ahxxv8.png?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCdmUZlf8V1p8pA5eW2bm-Pe056OVxN8gR10HgCwYOSkhlgfhzi6D2MNSPlT7EqaTADU&usqp=CAU",
    "https://www.zurich.com/-/media/project/zurich/dotcom/media/magazine/2021/images/stage-how-soil-supports-life-on-earth.jpg?h=1250&iar=0&w=2500&rev=5aed8e940e614667a46140800daf430c&hash=D085CE62C15CE894E7405939F85A1429",
    "http://2.bp.blogspot.com/--GNmi1oB40o/UVBmhU6tpWI/AAAAAAAAAII/f41C3C_Y_7g/s1600/dirt_soil_lg.jpg",
    "https://myschoolpedia.co.in/wp-content/uploads/2021/06/Carbon-Cycle-Diagram.jpg",
    "https://scx1.b-cdn.net/csz/news/800a/2016/burningallkn.jpg",
    "https://miro.medium.com/max/1200/1*PmIg4r3YL_PAgiLNVSb4FA@2x.jpeg",
    "https://www.americanoceans.org/wp-content/uploads/2021/02/fullsizeoutput_227.jpeg",
    "https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/110/2016/05/03201853/Figure_08_01_03.jpg",
    "https://qph.fs.quoracdn.net/main-qimg-7a4da72243b1b5f2f68fa650767c7d72",
    "https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/16/full/1600230954-8316.jpg",
    "https://64.media.tumblr.com/6ccf7ce5c3265988c301d087bfbc3d70/tumblr_nkrsegqgeD1rl35vno1_500.jpg",
    "https://www.pngall.com/wp-content/uploads/9/Coconut-Tree-Vector.png",
  ];

  private get introWindows() {
    this.windows.forEach((window) => {
      if (window.hasOwnProperty("events")) {
        let events: any = window.events;
        for (let i in events) {
          if (events.hasOwnProperty(i)) {
            let functionName: any = events[i] as any;
            const self: NotWellDefinedObject = this;
            if (
              this.hasOwnProperty(functionName) &&
              typeof self[functionName] === "function"
            ) {
              window.events[i] = self[functionName];
            }
          }
        }
      }
    });

    return this.windows;
  }

  private nextIntro() {
    this.introIndex =
      this.introIndex + 1 === this.windows.length ? 0 : this.introIndex + 1;
  }

  private nextMain() {
    this.mainIndex =
      this.mainIndex + 1 === this.main_windows.length ? 0 : this.mainIndex + 1;
  }

  private prevMain() {
    this.mainIndex =
      this.mainIndex - 1 < 0
        ? this.main_windows.length - 1
        : this.mainIndex - 1;
  }

  private goBack() {
    this.$router.back();
  }

  private proceedToMain() {
    this.showMain = true;
  }
}
</script>
