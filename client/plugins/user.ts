import { Plugin, Context } from "@nuxt/types";
import { Account } from "~/types/account";

export class UserPlugin {
  private $authFire!: NotWellDefinedObject;
  private $databaseFire!: NotWellDefinedObject;
  public user: Account = {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    section: 0,
    gender: "",
    birthdate: "",
    photoUrl: "",
    role: 0,
    sm_1: {
      done: false,
      grade: 0,
    },
    sm_2: {
      done: false,
      grade: 0,
    },
    sm_3: {
      done: false,
      grade: 0,
    },
    sm_4: {
      done: false,
      grade: 0,
    },
    sm_5: {
      done: false,
      grade: 0,
    },
    sm_6: {
      done: false,
      grade: 0,
    },
    sm_7: {
      done: false,
      grade: 0,
    },
    sm_8: {
      done: false,
      grade: 0,
    },
  };

  constructor(private context: Context) {
    this.$authFire = this.context.$fire.auth;
    this.$databaseFire = this.context.$fire.database;
  }

  async getCurrentUser() {
    const uid = this.$authFire.currentUser.uid;
    await this.$databaseFire
      .ref(`users/${uid}`)
      .get()
      .then((ss: any) => {
        this.user = ss.val();
        this.user.uid = uid;
      })
      .catch((err: any) => console.error(err));

    return this.user;
  }

  async getUserById(userId: string) {
    await this.$databaseFire
      .ref(`users/${userId}`)
      .get()
      .then((ss: any) => {
        this.user = ss.val();
        this.user.uid = userId;
      })
      .catch((err: any) => console.error(err));

    return this.user;
  }
}

const userPlugin: Plugin = function (context, inject) {
  inject("user", new UserPlugin(context));
};

export default userPlugin;
