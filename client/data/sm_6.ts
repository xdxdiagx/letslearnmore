export const windows: NotWellDefinedObject[] = [
  {
    name: "Classroom",
    props: {
      voiceover: "",
    },
    events: {},
    id: 1,
  },
  {
    name: "ClassroomFloorPage",
    props: {
      voiceover: "",
      withProceedBtn: false,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fintro%2F2.jpg?alt=media&token=7fe2e9c9-3a6f-4083-8c38-47e9f76db79d",
    },
    events: {},
    id: 2,
  },
  {
    name: "ClassroomFloorPage",
    props: {
      voiceover: "",
      withProceedBtn: false,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fintro%2F3.jpg?alt=media&token=dda2a8aa-6314-41b0-bc12-319f122c368e",
    },
    events: {},
    id: 3,
  },
  {
    name: "ClassroomFloorPage",
    props: {
      voiceover: "",
      withProceedBtn: true,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fimages%2Fintro%2F4.jpg?alt=media&token=c1e0eeec-8168-46ca-87cb-be243b11f1b1",
    },
    events: {
      proceed: "proceedToMain",
    },
    id: 4,
  },
];

export const main_windows: NotWellDefinedObject[] = [
  {
    name: "IntroPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 1,
  },
  {
    name: "IntroDocumentary",
    props: {
      voiceover: "",
    },
    events: {},
    id: 2,
  },
  {
    name: "ObjectivePage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FObjectives_2.wav?alt=media&token=4d32e589-60b7-4f09-8c9f-dd2235d8e77a",
      objectives: [
        "Realize how human activities contributes to species extinction through watching video documentaries.",
        "Identify species saved from extinction.",
        "Cite ways to assist in species recovery.",
      ],
    },
    events: {},
    id: 3,
  },
  {
    name: "Classroom",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FCopyright%20Disclaimer.wav?alt=media&token=a844573c-e680-405e-9461-c82809fdf0aa",
    },
    events: {},
    id: 4,
  },
  {
    name: "Documentaries",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FKindly%20click%20the.wav?alt=media&token=0621b228-bac6-4d9a-b1ac-0c760e3137c7",
    },
    events: {},
    id: 5,
  },
  {
    name: "TriviaPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FSpecies%20Extinction%20is%20one%20of%20the%20major%20problems.wav?alt=media&token=d4605d1b-f261-4d96-a7e9-a0f59a4820cf",
      content:
        "Species extinction is one of the major problems that we are facing nowadays. Based on the documentary videos that you have watched; it is indeed clear that humans are driving one million species to extinction. Humans are now responsible for causing changes in the environment that tremendously affect animals and plant species.",
      withProceedBtn: false,
      contentStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "75%",
        borderColor: "#fff",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "#00C853",
      },
    },
    events: {},
    id: 6,
  },
  {
    name: "TriviaPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FHowever%20despite%20the%20threat%20of%20extinction.wav?alt=media&token=16448b09-417e-4948-9dba-f2d433f35772",
      content: `However, despite the threat of extinction, certain species that were once considered critically endangered are recovering thanks to community efforts and education. Surprisingly, some of these species were able to recover from the limit of existence in just a few decades. 
For your task, research four (4) species that have been saved from near extinction. Click the button below to record your learnings from your research. Good luck!`,
      withProceedBtn: false,
      contentStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "85%",
        borderColor: "#fff",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "#00C853",
      },
    },
    events: {},
    id: 7,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
      part: 1,
    },
    events: {},
    id: 8,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
      part: 2,
    },
    events: {},
    id: 9,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
      part: 3,
    },
    events: {},
    id: 10,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
      part: 4,
    },
    events: {},
    id: 11,
  },
  {
    name: "SpeciesRecovery",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FNow%20that%20you%20already%20identify.wav?alt=media&token=f6efae86-6f26-4eca-b1da-80bacaef6d2f",
    },
    events: {},
    id: 12,
  },
  {
    name: "Classroom",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FIm%20hoping%20that%20by%20watching%20the%20documentary%20video.wav?alt=media&token=84cb716c-0c03-4124-bd07-7b2a2b379b51",
    },
    events: {},
    id: 13,
  },
  {
    name: "ClassroomFloorPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_6%2Fvoice_over%2Fmain%2FBefore%20we%20end.wav?alt=media&token=b3a47f72-ee55-427c-b07b-efe56bd2991c",
      withProceedBtn: false,
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fquotefancy.com%2Fmedia%2Fwallpaper%2F3840x2160%2F3261450-Loretta-Lynch-Quote-We-all-have-a-responsibility-to-protect.jpg&f=1&nofb=1",
    },
    events: {},
    id: 14,
  },
];
