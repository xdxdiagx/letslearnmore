import { AuthPluginImp } from "./auth";
import { UserPlugin } from "@/plugins/user";

declare module "vue/types/vue" {
  interface Vue {
    $auth: AuthPluginImp;
    $user: UserPlugin;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $auth: AuthPluginImp;
    $user: UserPlugin;
  }

  interface Context {
    $auth: AuthPluginImp;
    $user: UserPlugin;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $auth: AuthPluginImp;
    $user: UserPlugin;
  }
}
