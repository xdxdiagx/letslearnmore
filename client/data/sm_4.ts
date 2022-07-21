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
    name: "ClassroomFloor",
    props: {
      voiceover: "",
      topicTitle: "Non-Mendelian",
      imageStyle: {
        maxWidth: "350px",
      },
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fintro%2Fnon_mendelian_intro.png?alt=media&token=94f83a58-ac73-4a45-9a25-eaad6d453424",
    },
    events: {},
    id: 2,
  },
  {
    name: "DescriptionPage4",
    props: {
      voiceover: "",
    },
    events: {},
    id: 3,
  },
  {
    name: "Classroom",
    props: {
      voiceover: "",
      withProceedBtn: true,
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
    name: "ObjectivePage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fvoice_over%2Fmain%2FObjectives.wav?alt=media&token=ef548a53-cf43-4a41-bceb-506666231c52",
      objectives: [
        "Realize that not all traits are inherited the same way through comic strips.",
        "Solve problems on Non-Mendelian inheritance.",
      ],
    },
    events: {},
    id: 2,
  },
  {
    name: "ComicIntro",
    props: {
      voiceover: "",
    },
    events: {},
    id: 3,
  },
  {
    name: "Classroom",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fvoice_over%2Fmain%2FRead%20and%20analyze.wav?alt=media&token=a3cfc87a-9b3b-4733-941b-eb4561ebf4aa",
    },
    events: {},
    id: 4,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F1.png?alt=media&token=9b10f362-603f-48ad-9439-a92c233fb4a4",
    },
    events: {},
    id: 5,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F2.png?alt=media&token=cecbb1de-e7d3-4638-9b9c-07ee118b070d",
    },
    events: {},
    id: 6,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F3.png?alt=media&token=ef195a8a-1287-44ac-a05c-4f89e8e0ad1d",
    },
    events: {},
    id: 7,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F4.png?alt=media&token=66d836c9-22e8-449f-ad62-4c59bf65819d",
    },
    events: {},
    id: 8,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F5.png?alt=media&token=3382455d-c830-4404-845e-87254363fa03",
    },
    events: {},
    id: 9,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F6.png?alt=media&token=19184c09-d1f6-487c-92b4-94903f2d88bb",
    },
    events: {},
    id: 10,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F7.png?alt=media&token=6b9daf96-dab9-4df8-9ba5-576707316b8a",
    },
    events: {},
    id: 11,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F8.png?alt=media&token=b4d6a964-4250-4a3d-ace1-f0b682562335",
    },
    events: {},
    id: 12,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F9.png?alt=media&token=327a0cdc-db27-4268-9d83-4c5e20cb6b36",
    },
    events: {},
    id: 13,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F10.png?alt=media&token=c188f919-5558-4d05-b846-a90189a91c3d",
    },
    events: {},
    id: 14,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F11.png?alt=media&token=aaa80ade-7201-4929-a109-4fa834e94303",
    },
    events: {},
    id: 15,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F12.png?alt=media&token=bbd62e1f-1d5e-4f11-8277-6a9527c65886",
    },
    events: {},
    id: 16,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_1%2F13.png?alt=media&token=40156934-7a9c-4d98-a0db-7a86b8cc36b8",
    },
    events: {},
    id: 17,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fvoice_over%2Fmain%2FComics%201%20Questions%201%20and%202.wav?alt=media&token=91e6ecc3-e4fb-4957-bd34-67040f791998",
      forUploads: [
        {
          no: "1",
          question:
            "Can you show how Daniel’s cows with red (RR) and white (Ww) hair colors produced offspring with roan color (RW)?  Use Punnet square. Send a picture of your work in the box provided below.",
        },
        {
          no: "2",
          question:
            "Help Rodin determine the chance of having a roan cow when they mate their Red cow (RR) with their father’s friend roan cow (RW). Send a picture of your work in the box",
        },
      ],
      part: 1,
    },
    events: {},
    id: 18,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fvoice_over%2Fmain%2FComics%201%20Questions%203%20and%204.wav?alt=media&token=3804b267-6bd1-487e-a531-7efb94598765",
      questions: [
        {
          no: "3",
          question:
            "In your own words, how will you differentiate codominance with the other types of Non- Mendelian Pattern of Inheritance.",
        },
        {
          no: "4",
          question:
            "Give other example of organism that shows the same pattern of inheritance.",
        },
      ],
      part: 1,
    },
    events: {},
    id: 19,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F1.png?alt=media&token=e267bf7d-d597-4a82-b1ae-ce98d05085f8",
    },
    events: {},
    id: 20,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F2.png?alt=media&token=1144414f-7ee0-46a7-b2fc-6b174ea1a5a2",
    },
    events: {},
    id: 21,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F3.png?alt=media&token=f12f2463-22e5-49b9-894c-f1d0723b0c91",
    },
    events: {},
    id: 22,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F4.png?alt=media&token=d1e3ef53-fcb5-46fe-89a3-846d3fc201cf",
    },
    events: {},
    id: 23,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F5.png?alt=media&token=c86d293d-6fac-479b-be5c-98616f1fd0c7",
    },
    events: {},
    id: 24,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F6.png?alt=media&token=63afb9a4-62ac-450d-adfc-ee4016571c3e",
    },
    events: {},
    id: 25,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F7.png?alt=media&token=09bb4a8e-fad8-42c4-b487-cc404952b266",
    },
    events: {},
    id: 26,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F8.png?alt=media&token=975aa65c-e69d-46f9-a32f-299a2d2db710",
    },
    events: {},
    id: 27,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F9.png?alt=media&token=575f545a-27c8-4b16-b5cd-daa68878893a",
    },
    events: {},
    id: 28,
  },
  {
    name: "ComicStrip",
    props: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fimages%2Fcomics_2%2F10.png?alt=media&token=a7e97317-5ee8-4293-b36a-9723fdd847bc",
    },
    events: {},
    id: 29,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fvoice_over%2Fmain%2FComics%202%20Questions%201%20and%202.wav?alt=media&token=fb6c4582-24a1-44b6-96a5-0f235ec981f6",
      questions: [
        {
          no: "1",
          question: "What are the things to consider before donating blood?",
        },
      ],
      forUploads: [
        {
          no: "2",
          question:
            "What blood type can donate to Don’s blood type? Prove your answer. Take a picture of your answer and upload it in the box below.",
        },
      ],
      part: 2,
    },
    events: {},
    id: 30,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_4%2Fvoice_over%2Fmain%2FComics%202%20Questions%203%20and%204.wav?alt=media&token=f4c0fb2f-644c-4258-81f3-752f539f514a",
      forUploads: [
        {
          no: "4",
          question:
            "Do you think John is the biological father of Don? Why or why not? Use Punnet square to prove your point. Take a picture of your answer and upload it in the box below.",
        },
      ],
      questions: [
        {
          no: "3",
          question:
            "In your own words, explain why the human ABO blood group is an example of a multiple allele trait with codominance.",
        },
      ],
      part: 2,
    },
    events: {},
    id: 31,
  },
];
