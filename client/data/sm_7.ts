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
    name: "AccordionIntro",
    props: {},
    events: {},
    id: 1,
  },
  {
    name: "MainIntro",
    props: {},
    events: {},
    id: 2,
  },
  {
    name: "MainPage",
    props: {
      voiceover: "",
      pageTitle: "Important Role of Photosynthesis",
      rows: [
        {
          columns: [
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `The process of photosynthesis transformed life on Earth. By harnessing energy from the sun, photosynthesis evolved to allow living things access to enormous amounts of energy. Photosynthesis gave living things enough power to build new structures and achieve the biodiversity visible today.`,
                contentStyle: {
                  width: "100%",
                  height: "auto",
                  backgroundColor: "transparent",
                },
              },
            },
            {
              cols: 12,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2FImportant%20role%20of%20Photosynthesis.png?alt=media&token=3391ed51-d86f-47f5-a4ac-578592194589",
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
  {
    name: "MainPage",
    props: {
      voiceover: "",
      pageTitle: "Source of Energy",
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
      pageTitle: "Source of Food",
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
  {
    name: "MainPage",
    props: {
      voiceover: "",
      pageTitle: "Source of Medicine",
      rows: [
        {
          columns: [
            {
              cols: 5,
              sm: 5,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20medicine%20(2).jpg?alt=media&token=6ed54d43-48ad-4c96-96cc-0f9d4bc76465",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 7,
              name: "ContentCard",
              props: {
                content: `It has been made clear how vital photosynthesis is for life, but the process itself has medical applications. `,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20Medicine%20(1).jpg?alt=media&token=a0a983ce-8303-4d01-8b32-90d5f1c1bf13",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Many plants have medicinal properties.<br/>
                <span class="font-weight-bold font-italic">Mint</span> has been reported to calm the stomach, soothe headaches, and fight nausea.<br/><br/>
                <span class="font-weight-bold font-italic">Aloe vera</span> can aid wound healing, treat burns, and improve circulation.<br/><br/>
                <span class="font-weight-bold font-italic">Sage</span>  is anti-inflammatory, anti-fungal, and can relieve digestive distress.<br/><br/>
                These are only a few examples of how plants can improve our health.
                `,
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
              cols: 5,
              sm: 5,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20Medicine%20(3).jpg?alt=media&token=f392bde6-14e5-40c4-a492-35af2ced4186",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 7,
              name: "ContentCard",
              alignment: "stretch",
              props: {
                content: `Humans have used them throughout history to either cure or lessen symptoms from an illness.`,
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
    id: 8,
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
                content: `Traditional Chinese Medicine uses herbs and herbal formulas to enhance organ function and support health. By understanding the essence of the various herbal ingredients, TCM practitioners can achieve healing effects that go beyond the chemical composition and physical properties of herbs.`,
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
                content: `Some pharmaceutical companies use phytochemicals to make their medicines. Tamoxifen, a breast cancer treatment, is derived from the bark of the Pacific yew tree.`,
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
              cols: 9,
              sm: 9,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20Medicine%20(6).jpg?alt=media&token=3827d7e7-9cb5-4ef7-9d62-1b72e9cf8b0e",
                width: "100%",
                height: "300px",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 9,
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
                content: `For a long time, scientists have tried to harness the powerful mechanisms underlying the photosynthetic process and turn them loose on the disease through a discipline known as photodynamic therapy. `,
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
                content: `<span class="font-weight-bold font-italic">Photodynamic Therapy</span> is a treatment that uses a specific wavelength of light to destroy cancer cells. `,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20Medicine%20(7).jpg?alt=media&token=0ac4c971-aea8-4f7a-aa02-0a28fce2ab4f",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20Medicine%20(8).jpg?alt=media&token=1c17795d-8a72-45a9-9d2d-3f79d89498b6",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 10,
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
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fmedicine%2FPhotosynthesis%20as%20source%20of%20Medicine%20(9).jpg?alt=media&token=7ac871c3-1e79-445c-a914-9bd72d5f8322",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `A drug called a photosensitizer is injected into the patient’s bloodstream. Photosensitizers are usually removed from the body by the kidneys in 24-72 hours but stay in the cancer cells for a longer period. When the photosensitizer in the cancer cells is exposed to the light of a specific wavelength, it produces an abundance of oxygen, which accumulates and kills the cancer cells surrounding the photosensitizer.`,
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
                content: `So far, this therapy has only been used to treat esophageal cancer, non-small cell lung cancer, and other parts of the body close enough to the skin’s surface so that light can penetrate. It is also well known as a treatment for acne.`,
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
    id: 11,
  },
  {
    name: "MainPage",
    props: {
      voiceover: "",
      pageTitle: "Promotes Soil Restoration",
      rows: [
        {
          columns: [
            {
              cols: 6,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(3).jpg?alt=media&token=d78f19dd-bcb9-4a36-a7fc-3f5cca0e71e5",
                width: "100%",
                height: "150px",
              },
            },
            {
              cols: 6,
              sm: 6,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(4).jpg?alt=media&token=f4076156-809f-46d8-a8d4-fd51d28f5fae",
                width: "100%",
                height: "150px",
              },
            },
            {
              cols: 12,
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(1).jpg?alt=media&token=68f90768-d274-454c-854c-bda0b394044b",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `In the past couple of decades, intensive farming practices like deforestation, overgrazing, extensive cultivation, forest fires, and construction work have sped up soil degradation. These actions disturb the soil and leave it vulnerable to wind and water erosion, damaging the complex structures underneath.`,
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
    id: 12,
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
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(5).jpg?alt=media&token=89089227-1b45-4c7c-b99b-ff0c70fab63f",
                width: "100%",
                height: "100%",
                imageStyle: {
                  borderRadius: "24px",
                },
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `<span class="text-h6 font-weight-bold font-italic">Soil restoration</span> is the process of improving soil structure, microbial lifespan, nutrient density, and total carbon content of the soil.`,
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
                content: `It has many benefits, such as soil sequestration of carbon in response to a growing threat of climate change, reduced risk of soil erosion, and increased overall soil resilience.`,
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
    id: 13,
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
                content: `Healthy, fertile soils are rich in organic matter built of carbon that living plants pull out of the atmosphere through photosynthesis. Carbon-rich organic matter helps fuel the soil organisms that recycle and release minerals that plants take back up as nutrients.`,
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
                content: `The process of photosynthesis eliminates carbon dioxide from the atmosphere, and replaces it with life-giving oxygen, supports a robust soil microbiome, regenerates topsoil, increases food nutrition, restores water balance to the landscape, and increases the profitability of agriculture.`,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(7).jpg?alt=media&token=c383e423-aacb-4337-b2aa-03326c135928",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 14,
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
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(6).jpg?alt=media&token=81e52383-c038-47d4-9120-c3b66007cc9a",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Through photosynthesis, the Carbon dioxide from the air and water from the soil are combined to capture light energy and convert it into biochemical energy in the form of simple sugars, or photosynthates which are the building blocks of life. Plants transform sugar into a great diversity of other carbon compounds, including starches, proteins, organic acids, cellulose, lignin, waxes, and oils.`,
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
    id: 15,
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
                content: `Numerous carbon compounds derived from the simple sugars formed during photosynthesis are essential in creating well-structured topsoil. Increasing the extent of soil carbon improves farm productivity, restores landscape function, reduces the effect of anthropogenic emissions and
                will increase resilience to climatic variability.`,
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
                content: `<span class="font-weight-bold font-italic">Remember that without photosynthesis, there would be no healthy soil. Weathered rock minerals may be present, but no fertile topsoil.</span>`,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fsoil%20restoration%2FPromotes%20soil%20regeneration%20(8).jpg?alt=media&token=2f7c1127-8b0e-4bc9-9967-9b748d299be8",
                width: "100%",
                height: "300px",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 16,
  },
  {
    name: "MainPage",
    props: {
      voiceover: "",
      pageTitle: "Photosynthesis Helps Mitigate Climate Change",
      rows: [
        {
          columns: [
            {
              cols: 12,
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fclimate%20change%2FPhotosynthesis%20helps%20mitigate%20climate%20change.jpg?alt=media&token=1fb0b580-1444-4e2e-b484-3cef355ef104",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Photosynthesis converts carbon dioxide from the air into carbohydrates and other kinds of "fixed" carbon, releasing oxygen into the atmosphere.`,
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
                content: `Photosynthesis consumes carbon dioxide and releases oxygen, which helps counteract the effects of the combustion of fossil fuels.`,
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
    id: 17,
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
                content: `The increase in carbon dioxide and related gases inevitably affect our atmosphere. The burning of fossil fuels releases carbon dioxide, hydrocarbons, nitrogen oxides, and other trace materials, polluting the atmosphere and contributing to long-term health and environmental problems.`,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fclimate%20change%2FPhotosynthesis%20helps%20mitigate%20climate%20change%20(1).jpeg?alt=media&token=cdba1b8a-9111-4066-943d-e261bbbe4312",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fclimate%20change%2FPhotosynthesis%20helps%20mitigate%20climate%20change%20(2).jpeg?alt=media&token=f5deaf0e-dc4e-4f26-bd86-3beccb195c54",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 18,
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
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fclimate%20change%2FPhotosynthesis%20helps%20mitigate%20climate%20change%20(4).jpeg?alt=media&token=189c8d1c-aa72-4ef0-87de-6c014fb4cbac",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Oxygen is the by-product of photosynthesis. All organisms require oxygen to carry out the process of respiration. Around 70% of the oxygen in the atmosphere that we breathe comes from algae in the ocean. Atmospheric oxygen from photosynthesis also forms the ozone layer, which protects organisms from harmful high-energy ultraviolet (UV) radiation from the Sun.`,
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
    id: 19,
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
                content: `Since photosynthesis requires the use of carbon dioxide, the atmospheric concentration of the gas is maintained at a constant level. Carbon dioxide is considered a greenhouse gas. It protects the earth with a sufficient amount of heat trapped near its surface, making the earth suited for living organisms.`,
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
                content: `If the carbon dioxide level were to increase tremendously and there were not enough green plants to use up the CO2, the earth's temperature would rise significantly.`,
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
              sm: 12,
              alignment: "stretch",
              name: "ImageContainer",
              props: {
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fclimate%20change%2FPhotosynthesis%20helps%20mitigate%20climate%20change%20(8).jpeg?alt=media&token=15d5ad8e-5aeb-4b5f-83a0-669d71612d79",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
      ],
    },
    events: {},
    id: 20,
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
                src: "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_7%2Fimages%2Fclimate%20change%2FPhotosynthesis%20helps%20mitigate%20climate%20change%20(8).jpeg?alt=media&token=15d5ad8e-5aeb-4b5f-83a0-669d71612d79",
                width: "100%",
                height: "100%",
              },
            },
            {
              cols: 12,
              name: "ContentCard",
              props: {
                content: `Because carbon dioxide stays in the atmosphere decades longer than other greenhouse gases driving global warming, efforts to reduce it are critical to mitigating climate change.`,
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
                content: `Since plants take up carbon dioxide from the atmosphere and convert it into food, forests and other similar ecosystems are considered some of the planet's most important carbon sinks.`,
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
    id: 21,
  },
  {
    name: "SummaryPage",
    props: {
      content: `<h1 class="error--text font-italic">As a Summary</h1><br/>Photosynthesis is an inevitable chemical process on which our lives depend. Photosynthesis provides oxygen, food, and nutrients that help all living organisms stay healthy and alive. If we remove vegetation to construct new buildings and cities, it's like we are digging our own graves. The lack of this chemical process is a significant cause of disasters such as sunstroke and acid rain.
      Unfortunately, we are currently living in the modern world but still rely on ancient fossil fuels and photosynthesis. Fossil fuels are usually considered a non-renewable energy source as they take millions of years to form. Therefore, by rapidly depleting these fossil fuels and limiting the process of photosynthesis, we are negating the possibility of future generations on this planet. 
      Sounds trivial, but the existence of this chemical process is the cornerstone of our survival on this planet. If proper measures are not taken to sustain the plant's life and maintain photosynthesis, a scenario will occur in which the Earth becomes completely barren.  
      `,
      contentStyle: {
        width: "100%",
        height: "auto",
        borderWidth: "4px",
        borderStyle: "dashed",
        borderColor: "#1E88E5",
        backgroundColor: "transparent",
      },
    },
    events: {},
    id: 22,
  },
  {
    name: "IntroPage",
    props: {},
    events: {},
    id: 23,
  },
  {
    name: "InstructionsPage",
    props: {},
    events: {},
    id: 24,
  },
  {
    name: "Rubrics",
    props: {},
    events: {},
    id: 25,
  },
  {
    name: "ProjectMain1",
    props: {},
    events: {},
    id: 26,
  },
  {
    name: "ProjectMain2",
    props: {},
    events: {},
    id: 27,
  },
  {
    name: "ProjectMain3",
    props: {},
    events: {},
    id: 28,
  },
  {
    name: "ProjectMain4",
    props: {},
    events: {},
    id: 29,
  },
  {
    name: "ProjectMain5",
    props: {},
    events: {},
    id: 30,
  },
];
