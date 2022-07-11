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
              cols: 12,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fenergy%2F1-1.jpg?alt=media&token=01f88038-25ad-48bb-bc4f-b005fadc5097",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fenergy%2F1-2.jpg?alt=media&token=7ce05b50-e882-433f-9459-187329df0b84",
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
    id: 4,
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
              cols: 12,
              sm: 4,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fenergy%2F2-1.webp?alt=media&token=a2510639-36c1-44f7-8932-9b6bbe1173b1",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              sm: 4,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fenergy%2F2-2.webp?alt=media&token=e2fd990b-3869-46cb-af71-ae2f78307bf4",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              sm: 4,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fenergy%2F2-3.jpg?alt=media&token=11b50cd0-27b5-4e30-b536-88a02d1b4634",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 5,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Ffood%2FSource%20of%20Food%20(1).jfif?alt=media&token=1db67bb8-aca2-4ca9-a2fb-54045bac2fd5",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Ffood%2FSource%20of%20Food%20(3).jpg?alt=media&token=fbafd8b2-1b64-4388-81a5-a47f2af92b12",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Ffood%2FSource%20of%20Food%20(6).jpg?alt=media&token=f4f5d265-4889-4805-b861-d5b74dda6b0e",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Plants can make their food from sunlight through the process of photosynthesis, something even the most resourceful human isn't capable of doing. The importance of plants in the global kitchen can never be underestimated. Fascinatingly, the food we eat ultimately comes from plants, either directly or indirectly.`,
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
                content: `Everybody on the planet relies on plants for their food. But for plants to survive, they need sunlight, water, and carbon dioxide, which are readily available right here on earth. By transferring energy from the Sun to plants, plants build sugars that humans consume to drive our daily activities.`,
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
    id: 6,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Ffood%2FSource%20of%20Food%20(6).webp?alt=media&token=8b4ac316-cf0d-441e-8bed-6e5be3abe4d0",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Ffood%2FSource%20of%20Food%20(5).jpg?alt=media&token=d00ed3b3-5001-4822-8bd0-86849b80b6dd",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 6,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Ffood%2FSource%20of%20Food%20(4).jfif?alt=media&token=4415bbb5-358e-46a5-b8ea-2c4a977ba4d2",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Once we eat our favorite foods like beef, chicken, or fish, we are transferring energy from the Sun into our bodies because, at some point, one organism consumes a photosynthetic organism.`,
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
                content: `<span class="error--text text-h6 font-italic">So, the next time you grab a snack to replenish your energy, thank the Sun for it!</span>`,
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
    id: 7,
  },
];
