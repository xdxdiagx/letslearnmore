import { AuthPluginImp } from "./auth";

declare module "vue/types/vue" {
  interface Vue {
    $auth: AuthPluginImp;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $auth: AuthPluginImp;
  }

  interface Context {
    $auth: AuthPluginImp;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $auth: AuthPluginImp;
  }
}
