export const windows: NotWellDefinedObject[] = [
  {
    name: "Classroom",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fvoice_over%2FWhats%20up%20Learners.wav?alt=media&token=e4009856-8c7b-441b-8e3c-796b9e00f1e7",
    },
    events: {},
    id: 1,
  },
  {
    name: "ObjectivePage",
    props: {
      voiceover:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fvoice_over%2FObjectives_3.wav?alt=media&token=3445edc9-af77-4477-8c84-8ddebae6f832",
      objectives: [
        `Demonstrate through examples the significance of photosynthesis to human beings and other living things.`,
        `Develop a moral responsibility to nurture plants as part of nature and as the major source of life’s energy by exploring the accordion book.`,
        `Create slogan to make people aware of the importance of plants and photosynthesis.`,
      ],
    },
    events: {},
    id: 2,
  },
  {
    name: "Accordion",
    props: {},
    events: {
      proceed: "proceedToMain",
    },
    id: 3,
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
    name: "MainPage",
    props: {
      voiceover: "",
      rows: [
        {
          columns: [
            {
              cols: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ogisetu.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fsample-image.jpg&f=1&nofb=1",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ogisetu.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fsample-image.jpg&f=1&nofb=1",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Nature allows plants to convert solar energy into a form that can be used by plants and other organisms through photosynthesis.`,
                contentStyle: {
                  width: "100%",
                  height: "auto",
                  borderWidth: "3px",
                  borderStyle: "solid",
                  backgroundColor: "#1E88E5",
                },
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Humans also indirectly obtain energy from trees and plants that were broken down into oil, coal, and natural gas millions of years ago. All of these substances are derived from ancient animals and plants, and the energy stored there is the chemical energy originally obtained from sunlight by photosynthesis.`,
                contentStyle: {
                  width: "100%",
                  height: "auto",
                  borderWidth: "3px",
                  borderStyle: "solid",
                  backgroundColor: "#1E88E5",
                },
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 2,
  },
  {
    name: "MainPage",
    props: {
      voiceover: "",
      rows: [
        {
          columns: [
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `In the past, green plants and tiny organisms that ate plants propagated faster than they were consumed, and their debris was deposited in the crust by sedimentation and other geological processes. There, these oxidation-protected organic residues were slowly converted to fossil fuels.`,
                contentStyle: {
                  width: "100%",
                  height: "auto",
                  borderWidth: "3px",
                  borderStyle: "solid",
                  backgroundColor: "#1E88E5",
                },
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Fuels provide much of the energy used in factories, homes, and transportation and serve as the raw material for plastics and other synthetic products.`,
                contentStyle: {
                  width: "100%",
                  height: "auto",
                  borderWidth: "3px",
                  borderStyle: "solid",
                  backgroundColor: "#1E88E5",
                },
              },
            },
            {
              cols: 6,
              name: "ImageContainer",
              props: {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ogisetu.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fsample-image.jpg&f=1&nofb=1",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              name: "ImageContainer",
              props: {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ogisetu.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fsample-image.jpg&f=1&nofb=1",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 3,
  },
];
