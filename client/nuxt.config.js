import colors from "vuetify/es5/util/colors";
import { resolve } from "path";

const isAppInDevelopment = /^dev(elopment)$/.test(process.env.NODE_ENV);

const nuxtConfig = {
  baseUrl: process.env.APP_HOST,
  dev: isAppInDevelopment,

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Let's Learn More",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  components: {
    dirs: ["~/components", "~/components/App", "~/components/Dashboard"],
  },

  alias: {
    Component: resolve(__dirname, "./components"),
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/firebase",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Poppins",
      },
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken2,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Firebase module configuration
  firebase: {
    config: {
      apiKey: "AIzaSyBhY1PkP3ZRpe6cTDvKQBNGidn-IM6qR5k",
      authDomain: "letslearnmore-ce0b9.firebaseapp.com",
      databaseURL:
        "https://letslearnmore-ce0b9-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "letslearnmore-ce0b9",
      storageBucket: "letslearnmore-ce0b9.appspot.com",
      messagingSenderId: "723936040837",
      appId: "1:723936040837:web:f5e2ba1ad410095db156ec",
      measurementId: "G-ELH7W9C69K",
    },
    services: {
      // auth: true,
      // firestore: true,
      // functions: true,
      // storage: true,
      database: true,
      // messaging: true,
      // performance: true,
      // analytics: true,
      // remoteConfig: true
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
    timing: isAppInDevelopment,
  },
};

export default Object.freeze(nuxtConfig);