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
    name: "Classroom",
    props: {
      voiceover: "",
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
    },
    events: {},
    id: 8,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 9,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 10,
  },
  {
    name: "RecoveryPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 11,
  },
];
