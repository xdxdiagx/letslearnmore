<template>
  <v-sheet width="100%" height="100%" class="pt-14 px-4" color="blue lighten-3">
    <v-slide-y-reverse-transition>
      <v-row v-show="boom" no-gutters justify="center">
        <template>
          <v-col class="pr-2" cols="5" sm="3" lg="2">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 4 : 2"
                :class="{ 'on-hover': hover }"
                rounded="lg"
                class="pa-3"
                @click="showBoomCard(2)"
              >
                <v-img
                  class="rounded-0"
                  contain
                  src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_2.png?alt=media&token=f0d3e248-6132-44a8-9419-9ce10af9b0c7"
                  width="100%"
                  aspect-ratio="1"
                >
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col class="pl-2" cols="5" sm="3" lg="2">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 4 : 2"
                :class="{ 'on-hover': hover }"
                rounded="lg"
                class="pa-3"
                @click="showBoomCard(3)"
              >
                <v-img
                  class="rounded-0"
                  contain
                  src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_3.png?alt=media&token=ea445763-ba01-4952-ba5f-84a47868b7b7"
                  width="100%"
                  aspect-ratio="1"
                >
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-slide-y-reverse-transition>
    <v-slide-y-reverse-transition>
      <v-row
        v-show="boom"
        no-gutters
        justify="space-between"
        justify-sm="space-around"
      >
        <template>
          <v-col class="pr-2 pt-4" cols="5" sm="3" lg="2">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 4 : 2"
                :class="{ 'on-hover': hover }"
                rounded="lg"
                class="pa-3"
                @click="showBoomCard(1)"
              >
                <v-img
                  class="rounded-0"
                  contain
                  src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_1.png?alt=media&token=bb774426-69f8-48db-b8fa-06c3689df8ee"
                  width="100%"
                  aspect-ratio="1"
                >
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col class="pl-2 pt-4" cols="5" sm="3" lg="2">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 4 : 2"
                :class="{ 'on-hover': hover }"
                rounded="lg"
                class="pa-3"
                @click="showBoomCard(4)"
              >
                <v-img
                  class="rounded-0"
                  contain
                  src="https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_4.png?alt=media&token=07a4e553-ae15-4a3b-9f71-45f4ff81a592"
                  width="100%"
                  aspect-ratio="1"
                >
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-slide-y-reverse-transition>
    <img
      v-if="!cardDialog"
      src="~assets/img/girl_talking.gif"
      v-bind:class="[
        $vuetify.breakpoint.smAndDown ? 'teacher-sm' : 'teacher-lg',
      ]"
      alt="Teacher Image"
    />
    <img
      v-if="!cardDialog"
      src="~assets/img/classroom_floor.png"
      width="100%"
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        max-height: 200px;
      "
      alt="Classrom Floor"
    />
    <img
      v-show="!boom"
      @click="boom = !boom"
      src="~assets/img/treasure_box_closed.png"
      width="50%"
      style="position: absolute; bottom: 0; right: 15px; max-width: 300px"
      alt="Treasure Box"
    />
    <v-expand-transition>
      <div v-show="boom">
        <img
          src="~assets/img/treasure_box_open.png"
          width="50%"
          style="position: absolute; bottom: 0; right: 0; max-width: 300px"
          alt="Treasure Box"
        />
        <img
          src="~assets/img/explosion.gif"
          width="50%"
          style="
            position: absolute;
            bottom: 90px;
            right: 30px;
            max-width: 300px;
          "
          alt="Treasure Box"
        />
      </div>
    </v-expand-transition>
    <v-dialog fullscreen hide-overlay v-model="cardDialog">
      <BoomCards1 v-if="currCard == 1" v-on:close="cardDialog = false" />
      <BoomCards2 v-else-if="currCard == 2" v-on:close="cardDialog = false" />
      <BoomCards3 v-else-if="currCard == 3" v-on:close="cardDialog = false" />
      <BoomCards4 v-else-if="currCard == 4" v-on:close="cardDialog = false" />
    </v-dialog>
    <audio v-if="voiceover != ''" ref="voice_over">
      <source :src="voiceover" type="audio/ogg" />
      <source :src="voiceover" type="audio/mpeg" />
      <source :src="voiceover" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BoomCards1 from "./BoomCards/BoomCards1.vue";
import BoomCards2 from "./BoomCards/BoomCards2.vue";
import BoomCards3 from "./BoomCards/BoomCards3.vue";
import BoomCards4 from "./BoomCards/BoomCards4.vue";

@Component({
  components: {
    BoomCards1,
    BoomCards2,
    BoomCards3,
    BoomCards4,
  },
})
export default class TreasureBoom extends Vue {
  @Prop() readonly voiceover!: string;

  private showProceedBtn = true;
  private boom = false;
  private cardDialog = false;
  private currCard = 0;

  private cards: NotWellDefinedObject[] = [
    {
      src: `https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_1.png?alt=media&token=bb774426-69f8-48db-b8fa-06c3689df8ee`,
    },
    {
      src: `https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_2.png?alt=media&token=f0d3e248-6132-44a8-9419-9ce10af9b0c7`,
    },
    {
      src: `https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_3.png?alt=media&token=ea445763-ba01-4952-ba5f-84a47868b7b7`,
    },
    {
      src: `https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_5%2Fimages%2Fcards%2Fboom_4.png?alt=media&token=07a4e553-ae15-4a3b-9f71-45f4ff81a592`,
    },
  ];

  private showBoomCard(cardNumber: number) {
    this.cardDialog = true;
    this.currCard = cardNumber;
  }

  private mounted() {
    const voice_over: any = this.$refs?.voice_over;
    voice_over.play();
  }
}
</script>

<style scoped>
.teacher-lg {
  height: 60%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1000;
}

.teacher-sm {
  height: 50%;
  position: absolute;
  bottom: 35px;
  left: 15px;
  z-index: 1000;
}
</style>
