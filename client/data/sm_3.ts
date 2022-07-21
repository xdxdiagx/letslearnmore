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
    name: "DescriptionPage",
    props: {
      voiceover: "",
      description:
        "Your Respiratory and Circulatory system works together to circulate the blood and oxygen throughout your body. However, once disease occurs, it may affect the bodily functions. These can be hereditary and acquired. Lifestyle choices strongly affect your Respiratory and Circulatory system. Smoking, lack of exercise, excessive weight, long-term stress, and a diet low in fruits and vegetables but high in saturates fats are all linked to an increase of developing diseases.",
    },
    events: {},
    id: 2,
  },
  {
    name: "IntroPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 3,
  },
  {
    name: "ObjectivePage",
    props: {
      voiceover: "",
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
    name: "Classroom",
    props: {
      voiceover: "",
    },
    events: {},
    id: 6,
  },
  {
    name: "StoryPreview",
    props: {
      voiceover: "",
      paragraphs: [
        "This is a story about the experience of a medical doctor during a medical mission in a far-flung area. It highlights the patients’ health conditions that have been possibly acquired, developed, or inherited.",
        "It is a story of how one’s health is intimately connected with the health of families, friends, and communities and influenced by the complex environments where we live, eat, work, play, volunteer, gather, and socialize.",
        "This story will enlighten us on how lifestyle and environments influence health across the lifespan-from the beginning of fetal development to elder years- and how they can promote health and resilience, or disease and disability.",
      ],
    },
    events: {},
    id: 7,
  },
  {
    name: "StoryPreview",
    props: {
      voiceover: "",
      paragraphs: [
        "The story we will explore includes some of the most common and troubling diseases and disorders related to our circulatory and respiratory systems.",
        "The story is not meant to threaten you but to allow you to better understand how your lifestyle and environmental factors can put you at risk and make more informed decisions and vital actions to help improve not just your health, but also those around you including your family, friends, and community.",
      ],
      showProceedBtn: true,
    },
    events: {
      proceed: "proceedToMain",
    },
    id: 8,
  },
];

export const main_windows: NotWellDefinedObject[] = [
  {
    name: "StoryIntroPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 1,
  },
  {
    name: "DoctorIntroPage",
    props: {
      voiceover: "",
    },
    events: {},
    id: 2,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F1.jpg?alt=media&token=a32d1597-9493-4c33-9c44-5c4aa9b2304f",
      dialogues: [
        "Barangay Malaya, located miles away from the city, will be the next destination of Dr. Jely’s medical mission. It takes roughly 15 hours to reach the said island.",
      ],
    },
    events: {},
    id: 3,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F2.jpg?alt=media&token=08ef4846-68b9-42dc-aa9a-3b8e7152056e",
      dialogues: [
        "Despite the struggles that Dr. Jely’s team faces along their way to Brgy. Malaya, they nevertheless manage to reach the Island and duly conduct the medical mission.",
        "Indescribable gratitude is visibly seen in the eyes of the people of Brgy. Malaya upon seeing the medical team approaching them. ",
      ],
    },
    events: {},
    id: 4,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F3.jpg?alt=media&token=e3378b56-fae8-4b81-a73e-4a6147773ec7",
      dialogues: [
        "Dr. Jely is so worried upon seeing the health condition of some of the residents. There are children and elderly patients who are in a pitiful condition, patiently waiting for their arrival. ",
      ],
    },
    events: {},
    id: 5,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F4.jpg?alt=media&token=40be3445-7a91-45c1-bb72-992a4dd45d0e",
      dialogues: [
        "Without any hesitation, Dr. Jely and her team immediately begin the check-up. One by one she asks the patients’ background, lifestyle, and current health condition.",
      ],
    },
    events: {},
    id: 6,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F8.jpg?alt=media&token=24b1815d-2492-41f5-ab73-940af291d46a",
      dialogues: [
        "Hello Doc, I’m Santy, 13 years old. I’m an athlete and I play several sports including baseball, soccer, and basketball. I have three dogs and two rabbits at home, and I love playing with them every morning.",
      ],
    },
    events: {},
    id: 7,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F8.jpg?alt=media&token=24b1815d-2492-41f5-ab73-940af291d46a",
      dialogues: [
        "Recently, I have noticed that my chest often tightens, and I experience shortness of breathing and whistling sound every time I exhale. This bothers me, doc, since I am currently training for competition, and I don’t seem to perform well because of my condition.",
      ],
    },
    events: {},
    id: 8,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover: "",
      part: 1,
      questions: [
        {
          no: "1",
          question:
            "Based on the information given by Santy, what do you think will be the diagnosis of Dr. Jely?",
        },
        {
          no: "2",
          question:
            "Can you provide scientific data or research supporting your claim?",
        },
      ],
    },
    events: {},
    id: 9,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F8.jpg?alt=media&token=24b1815d-2492-41f5-ab73-940af291d46a",
      dialogues: [
        "After the thorough assessment of Santy’s given information. Dr. Jely told Santy her diagnosis. She also gave him his medicines and share advice that he needs to follow. Then, she proceeds to her next patient.",
      ],
    },
    events: {},
    id: 10,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F6.jpg?alt=media&token=a6b3403d-b61a-4603-9510-e50101ce7bf4",
      dialogues: [
        "Good morning, Doc. She is my daughter. Her name is Ashley and she’s already five years old. I’m worried about her health condition as she has been having a persistent fever, cough, and sore throat for about a week now. She also experienced vomiting and diarrhea a few days ago. I don’t know what to do Doc.",
      ],
    },
    events: {},
    id: 11,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F6.jpg?alt=media&token=a6b3403d-b61a-4603-9510-e50101ce7bf4",
      dialogues: [
        "I tried all possible means to cure my daughter, but she didn’t seem to get better. Her father had just recovered from influenza and now, Ashley is showing the same symptoms as her father did. We no longer have enough money for her check-up since my husband had just recovered and it took a toll on our resources. Please help us Doc.",
      ],
    },
    events: {},
    id: 12,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover: "",
      part: 2,
      questions: [
        {
          no: "1",
          question: "Do you think Ashley has Influenza? Why do you say so?",
        },
        {
          no: "2",
          question:
            "If Ashley is infected by Influenza or flu viruses, what treatment and advice should Dr. Jely must give to Ashley?",
        },
      ],
    },
    events: {},
    id: 13,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F6.jpg?alt=media&token=a6b3403d-b61a-4603-9510-e50101ce7bf4",
      dialogues: [
        "Doc. Jely told the mother not to worry because she will give Ashley free medical care. She also provided milk and vitamins to strengthen Ashley’s immune system. Before the patient and the mother leave the room, Doc Jely reminded the mother of the things she needs to do to keep her child healthy.",
      ],
    },
    events: {},
    id: 14,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F9.jpg?alt=media&token=02ab0195-61de-45bd-a52f-d99196d7ee1f",
      dialogues: [
        "Hi Doc, I’m Sandy. I hope you can still remember me. I am one of your patients when you were assigned at Rañola Medical Hospital Inc. It has been 10 years already when I was confined in the hospital due to asthma, but I can still remember how you took good care of me.",
      ],
    },
    events: {},
    id: 15,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F9.jpg?alt=media&token=02ab0195-61de-45bd-a52f-d99196d7ee1f",
      dialogues: [
        "Now, I’m already 63 years old, and I’m experiencing a persistent cough for more than 3 weeks which usually brings up phlegm and blood. I am currently losing my appetite which causes my sudden weight loss. I also observed that I have fever, chills, and sweating at night.",
      ],
    },
    events: {},
    id: 16,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F9.jpg?alt=media&token=02ab0195-61de-45bd-a52f-d99196d7ee1f",
      dialogues: [
        "To tell you honestly, I still have not stopped my vices on smoking and drinking alcohol despite my awareness of my history of asthma, and now, I think I’m suffering the consequences of my bad habits.",
      ],
    },
    events: {},
    id: 17,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover: "",
      part: 3,
      questions: [
        {
          no: "1",
          question:
            "Given the lifestyle and the symptoms, what do you think will be the possible diagnosis of Dr. Jelly? Why?",
        },
        {
          no: "2",
          question: "How do you think his lifestyle affects his health?",
        },
      ],
    },
    events: {},
    id: 18,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F9.jpg?alt=media&token=02ab0195-61de-45bd-a52f-d99196d7ee1f",
      dialogues: [
        "Since it has been 10 years already since the last time they met and Doc Jely has attended many patients, Doc Jely failed to recognized Sandy but she’s very thankful that Sandy can still remember her. After sharing his health history and lifestyle, Doc Jely told Sandy about the possible disease that he acquired, and he needs to run some tests to help Doc Jelly confirm Sandy’s health problem. After Sandy, she proceeds to her next child patient which seems to be lethargic.",
      ],
    },
    events: {},
    id: 19,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F5.jpg?alt=media&token=67387cba-5143-4c43-9e2f-4811f396a079",
      dialogues: [
        "Good morning, Doc. I’m grateful that you chose our Barangay for your medical mission. You’re indeed a blessing to us! Thank you for taking time out of your busy schedule to visit us. By the way, this is my son Johny; he’s seven years old. I am worried that my son easily gets bruised and has frequent nosebleeds. Unlike other kids, he is not energetic for his age, and he gets tired easily.",
      ],
    },
    events: {},
    id: 20,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F5.jpg?alt=media&token=67387cba-5143-4c43-9e2f-4811f396a079",
      dialogues: [
        "Last week, he was run at a private hospital in the city due to a high fever caused by severe infections. He underwent many tests including physical exam and blood tests. The doctor told me that the test results showed a very high white blood count and very low platelet count and he suspected that Johny might have leukemia.",
      ],
    },
    events: {},
    id: 21,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F5.jpg?alt=media&token=67387cba-5143-4c43-9e2f-4811f396a079",
      dialogues: [
        "I am worried because his father died of the same illness. The doctor also advised us to be in the hospital for a while so that he can further monitor and take proper measure of my son’s health condition but since we don’t have enough money to support the medical expenses, we decided to just go home. We would like to ask for a second opinion from you Doc to confirm if Johny is really suffering from leukemia. Please help us Doc.",
      ],
    },
    events: {},
    id: 22,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover: "",
      part: 4,
      questions: [
        {
          no: "1",
          question: "What government agencies must they seek for help?",
        },
        {
          no: "2",
          question:
            "Do you think there’s a possibility that Johny inherited the disease of his father? Why?",
        },
      ],
    },
    events: {},
    id: 23,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F5.jpg?alt=media&token=67387cba-5143-4c43-9e2f-4811f396a079",
      dialogues: [
        "Doc Jely promised Johny that she will help him to best that she can. She also recommended Johny to come with them as they go back to the City for her to monitor Johny’s health condition and to run some tests to confirm if Johny is really suffering from Leukemia. Before they leave, Doc Jely told Johny’s mother not to worry about the expenses as there are many agencies she knew which they can seek for help.",
      ],
    },
    events: {},
    id: 24,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F7.jpg?alt=media&token=0578066c-19bb-41a8-8b00-bbaa4ff75ef6",
      dialogues: [
        "Good morning, Doc! I am Jinky, 55 years old, and a mother of six children. A few days ago, we attended a birthday party, and I could not control myself from heavily consuming alcohol and eating “lechon” and other fatty foods",
      ],
    },
    events: {},
    id: 25,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F7.jpg?alt=media&token=0578066c-19bb-41a8-8b00-bbaa4ff75ef6",
      dialogues: [
        "Lately, I have been experiencing a severe headache, accompanied by confusion and blurred vision. Due to my current condition worsened by my obesity, my cousin who is one of the barangay health workers is regularly monitoring my high blood pressure. I would like to ask for a prescription of medicines to lower my blood pressure, Doc. Thank you.",
      ],
    },
    events: {},
    id: 26,
  },
  {
    name: "AssessmentPage",
    props: {
      voiceover: "",
      part: 5,
      questions: [
        {
          no: "1",
          question:
            "What do you think will be the diagnosis of Dr. Jelly? Why do you say so? Provide research to support your claim.",
        },
        {
          no: "2",
          question:
            "Based on your answer in question 1, what health advice would you give to Jinky?",
        },
      ],
    },
    events: {},
    id: 27,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F7.jpg?alt=media&token=0578066c-19bb-41a8-8b00-bbaa4ff75ef6",
      dialogues: [
        "Doc Jely recommended a diet or eating plan and highlighted the things that Jinky needs to avoid in maintaining her blood pressure within the recommended range. Doc Jely also prescribed medicines that is best for Jinky. She also reminded Jinky of the possible things that might occur if she will not follow her advice.",
      ],
    },
    events: {},
    id: 28,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F10.jpg?alt=media&token=4b0fc74f-cd03-440e-be96-9ba1df209382",
      dialogues: [
        "Those are only some of the patients that Dr. Jely attended. Other patients experienced mild colds, allergies, sinusitis. Children were given free vitamins and milk. Elderlies were also given free reading eyeglasses.",
      ],
    },
    events: {},
    id: 29,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F11.jpg?alt=media&token=2e7366d9-57b3-4ef4-bc4d-1a6c0cd1b08d",
      dialogues: [
        "Around 2 o’clock in the afternoon, Dr. Jely and her team were done giving medical check-up and consultations. Dr. Jely ended the activity by sharing and giving advice to the participants of the medical mission. She highlighted the ways on how to prevent diseases and gave some tips on how to treat some common diseases.",
      ],
    },
    events: {},
    id: 30,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F12.jpg?alt=media&token=73179ab3-bef5-4426-8b8d-37dba1dcd7e1",
      dialogues: [
        "It was indeed a successful medical mission. As a way of giving thanks to Dr. Jely’s medical team, the Brgy. officials together with their resident have prepared a surprise thanksgiving activity for the medical team. A variety of intermission numbers entertained the medical team throughout the thanksgiving program.",
      ],
    },
    events: {},
    id: 31,
  },
  {
    name: "StoryMainPage",
    props: {
      voiceover: "",
      background:
        "https://firebasestorage.googleapis.com/v0/b/letslearnmore-ce0b9.appspot.com/o/sm_3%2Fmedia%2Fmain%2Fbackground%2F13.jpg?alt=media&token=8c2a343d-2340-4714-aa5b-43f79f96deba",
      dialogues: [
        "Before the fun-filled activity ended, the farmers also gave freshly harvested fruits and vegetables to each member of the medical team. The medical team was indeed surprised by the generosity and kindness shown to them. Since it was already late in the afternoon when the activity ended, the Team decided to just spend the night in Brgy. Malaya as it was dangerous for them to travel.",
      ],
      dark_text: true,
    },
    events: {},
    id: 32,
  },
  {
    name: "StoryEnding",
    props: {},
    events: {},
    id: 33,
  },
  {
    name: "StoryReminder",
    props: {
      voiceover: "",
      background: "",
      dialogues: [],
    },
    events: {},
    id: 34,
  },
];
