export type Account = {
  uid?: string;
  firstName: string;
  lastName: string;
  email: string;
  section: number;
  gender: string;
  birthdate: string;
  photoUrl?: string;
  role: number;
  sm_1?: SM;
  sm_2?: SM;
  sm_3?: SM;
  sm_4?: SM;
  sm_5?: SM;
  sm_6?: SM;
  sm_7?: SM;
  sm_8?: SM;
};

type SM = {
  done: boolean;
  grade: number;
};
