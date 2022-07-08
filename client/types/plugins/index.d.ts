import { AuthPluginImp } from "./auth";
import { UserPlugin } from "@/plugins/user";
import { NotifierPlugin } from "@/types/plugins/notifier";

declare module "vue/types/vue" {
  interface Vue {
    $auth: AuthPluginImp;
    $user: UserPlugin;
    $notifier: NotifierPlugin;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $auth: AuthPluginImp;
    $user: UserPlugin;
    $notifier: NotifierPlugin;
  }

  interface Context {
    $auth: AuthPluginImp;
    $user: UserPlugin;
    $notifier: NotifierPlugin;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $auth: AuthPluginImp;
    $user: UserPlugin;
    $notifier: NotifierPlugin;
  }
}
