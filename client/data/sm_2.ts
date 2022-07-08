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
    name: "Classroom",
    props: {
      voiceover: "",
    },
    events: {},
    id: 2,
  },
  {
    name: "TriviaPage",
    props: {
      voiceover: "",
      content: `Your body has thousands of kilometers of blood vessels, and several hundred million tiny air sacs in your lungs. The blood circulates constantly through the vessels, while air continually fills and empties from the tiny air sacs. Your heart keeps beating and your lungs keep working 24 hours every day. What’s even more amazing is everything works without you having to think about it.`,
      withProceedBtn: false,
      contentStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "75%",
      },
      color: "amber lighten-3",
    },
    events: {},
    id: 3,
  },
  {
    name: "DescriptionPage",
    props: {
      voiceover: "",
      images: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fimages%2FHuman-respiratory-system-removebg-preview.png?alt=media&token=eac07c1b-2349-4aad-bace-dd4bdad58f09",
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "80%",
            maxHeight: "100%",
            minWidth: "300px",
          },
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fimages%2FLungs.gif?alt=media&token=9317f181-108a-44fa-86b2-d4cb0874acd4",
          style: {
            position: "absolute",
            top: "40px",
            right: 0,
            width: "30%",
            minWidth: "120px",
          },
        },
      ],
      content: `The <span class="error--text font-weight-bold">RESPIRATORY SYSTEM</span> is the body system in which gas exchange takes place. You can think of your respiratory system as a supply depot where the blood can get oxygen (O2) and deposit excess carbon dioxide (CO2). The lungs of the respiratory system are the sole place in your body where gases in the blood are exchanged with gases from the atmosphere.`,
    },
    events: {},
    id: 4,
  },
  {
    name: "DescriptionPage",
    props: {
      voiceover: "",
      images: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fimages%2FCirculatory%20System%202.gif?alt=media&token=505fb1c4-dfa3-4f79-b5a1-f9cc47c5254c",
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            maxHeight: "100%",
          },
        },
      ],
      content: `The <span class="error--text font-weight-bold">CIRCULATORY SYSTEM</span> is the body system that transports blood and other materials. It brings vital supplies to the cells and carries away their wastes. The function of the circulatory system is to transport O2 and nutrients to body cells and to carry oxygen- poor blood and CO2 back to the heart and lungs. To do its job, the system must keep blood constantly circulating. `,
    },
    events: {},
    id: 5,
  },
  {
    name: "IntroVideoPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 6,
  },
  {
    name: "Classroom",
    props: {
      voiceover: "",
    },
    events: {},
    id: 7,
  },
  {
    name: "TriviaPage",
    props: {
      voiceover: "",
      content:
        "Your Respiratory System and Circulatory Systems work closely together to maintain homeostasis in the face of constant change. Every time you exercise, lie down to rest, or simply stand up, you change your needs for oxygen and nutrients. As a result, your heart speeds up or slows down and you breathe faster or slower, depending on your activity.",
      withProceedBtn: true,
      contentStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        borderColor: "red",
        borderWidth: "2px",
        borderStyle: "solid",
      },
    },
    events: {
      proceed: "proceedToMain",
    },
    id: 8,
  },
];

export const main_windows: NotWellDefinedObject[] = [
  {
    name: "Classroom",
    props: {
      voiceover: "",
    },
    events: {},
    id: 1,
  },
  {
    name: "ObjectivePage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FObjectives-2021-08-19%2005_01_05.wav?alt=media&token=66d1bdcd-3b92-4451-b283-4d81fe9ab049",
      objectives: [
        "Measure one’s heart rate and pulse rate before and after an activity.",
        "Explain how the heart and lungs work together.",
        "Show the sequence of oxygen and carbon dioxide in the blood flow using circular diagram.",
      ],
    },
    events: {},
    id: 2,
  },
  {
    name: "RatePage",
    props: {},
    events: {},
    id: 3,
  },
  {
    name: "ReminderPage",
    props: {},
    events: {},
    id: 4,
  },
  {
    name: "ActivityPage1",
    props: {},
    events: {},
    id: 5,
  },
  {
    name: "ActivityPage2",
    props: {},
    events: {},
    id: 6,
  },
  {
    name: "QuestionPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FQuestions%20-2021-08-21%2001_15_17.wav?alt=media&token=934fab2f-bfd5-4b46-bcc5-caddc7875933",
      partNo: "QUESTIONS:",
      instructions: "Answer the following questions below.",
      criteria: {
        column: ["Score", "Indicators"],
        row: [
          [
            "4",
            "Thoroughly explained ideas, and are well supported by detailed and accurate information.",
          ],
          [
            "3",
            "Ideas are clear but are not well supported by detailed information.",
          ],
          ["2", "Ideas are somewhat clear."],
          ["1", "Ideas are not clear."],
        ],
      },
      questions: [
        {
          no: 1,
          question:
            "What did you notice about your heart rate as you increased your activity level?",
        },
        {
          no: 2,
          question:
            "What factors besides exercise might influence your heart rate? Give 4 factors.",
        },
        {
          no: 3,
          question: "Why does a good resting heart matter?",
        },
        {
          no: 4,
          question: "How do you think your heart and lungs work together?",
        },
      ],
      small: true,
    },
    events: {},
    id: 7,
  },
  {
    name: "FigureQuestion",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fvoice_over%2Fmain%2FQuestion%205-2021-08-21%2001_17_12.wav?alt=media&token=901d334f-4ce4-4065-90b2-cdab604ab16b",
      item: {
        no: "5",
        question:
          "In your own words, show the sequence of oxygen and carbon dioxide in the blood flow through circular diagram.  Use the diagram below.",
        figure:
          "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_2%2Fimages%2FQuestion%205%20DIAGRAM.png?alt=media&token=16048c47-3f3a-4b63-8eae-b736f48df1ad",
      },
    },
    events: {},
    id: 8,
  },
];
