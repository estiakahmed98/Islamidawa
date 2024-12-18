export const moktobData_faysal = {
  title: "মক্তব বিষয়",
  data: [
    { label: "নতুন মক্তব চালু হয়েছে", value: 100, max: 150 },
    { label: "পুরাতন মক্তব চালু হয়েছে", value: 85, max: 120 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 105, max: 110 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 105, max: 130 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
      value: 70,
      max: 105,
    },
    { label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে", value: 50, max: 100 },
    {
      label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
      value: 60,
      max: 100,
    },
  ],
};

export const DayeBisoyData_faysal = {
  title: "দা’য়ী বিষয়",
  data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
};

export const DawatiBisoyData_faysal = {
  title: "দাওয়াতি বিষয়",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
      value: 160,
      max: 200,
    },
    { label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে", value: 70, max: 100 },
  ],
};

export const DawatiMoslishData_faysal = {
  title: "দাওয়াতি মজলিশ",
  data: [
    { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
      value: 80,
      max: 100,
    },
    {
      label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
      value: 75,
      max: 100,
    },
  ],
};

export const JamatBisoyData_faysal = {
  title: "জামাত বিষয়",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
  ],
};
export const DineFeraData_faysal = {
  title: "দ্বীনে ফিরে এসেছে",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
  ],
};

export const SoforBisoyData_faysal = {
  title: "সফর বিষয়",
  data: [
    { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
    { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
  ],
};

//সজসিজফিদফজইদজফিজদিজফিপদজপফজপ্সদজপজফপিজদপইফগজদফপগজিজপিদজপি

export const AmoliChartData_faysal = [
  { name: "Closed", value: 90, color: "#28a745" }, // Green
  { name: "Remaining", value: 10, color: "#dc3545" }, // Red
];

export const TalimDonutChartData1_faysal = [
  { name: "Completed", value: 70, color: "#28a745" }, // Green
  { name: "Pending", value: 30, color: "#dc3545" }, // Red
];

export const TalimDonutChartData2_faysal = [
  { name: "Started", value: 80, color: "#007bff" }, // Blue
  { name: "Not Started", value: 20, color: "#ffc107" }, // Yellow
];

const rows = [
  {
    id: 1,
    name: "দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা নিয়ে মজলিস হয়েছে",
    data: Array(30).fill(0),
  },
  { id: 2, name: "মজলিসে মোট অংশগ্রহণ করেছে", data: Array(30).fill(0) },
  { id: 3, name: "প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে", data: Array(30).fill(0) },
  {
    id: 4,
    name: "প্রশিক্ষণ কর্মশালায় মোট অংশগ্রহণ করেছে",
    data: Array(30).fill(0),
  },
  { id: 5, name: "জুমার মসজিদে আলোচনা হয়েছে", data: Array(30).fill(0) },
];

// export const allData = {
//   "faysal@gmail.com": {
//     TallyData: [
//       {
//         title: "মক্তব বিষয়",
//         data: [
//           { label: "নতুন মক্তব চালু হয়েছে", value: 100, max: 150 },
//           { label: "পুরাতন মক্তব চালু হয়েছে", value: 85, max: 120 },
//           { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 105, max: 110 },
//           { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 105, max: 130 },
//           {
//             label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
//             value: 70,
//             max: 105,
//           },
//           {
//             label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
//             value: 50,
//             max: 100,
//           },
//           {
//             label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
//             value: 60,
//             max: 100,
//           },
//         ],
//       },
//       {
//         title: "দা’য়ী বিষয়",
//         data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
//       },
//       {
//         title: "দাওয়াতি বিষয়",
//         data: [
//           { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
//           { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
//           { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
//           { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
//           {
//             label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
//             value: 160,
//             max: 200,
//           },
//           {
//             label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
//             value: 70,
//             max: 100,
//           },
//         ],
//       },
//       {
//         title: "দাওয়াতি মজলিশ",
//         data: [
//           { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
//           { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
//           { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
//           { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
//           {
//             label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
//             value: 80,
//             max: 100,
//           },
//           {
//             label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
//             value: 75,
//             max: 100,
//           },
//         ],
//       },
//       {
//         title: "জামাত বিষয়",
//         data: [
//           { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
//           { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
//         ],
//       },
//       {
//         title: "দ্বীনে ফিরে এসেছে",
//         data: [
//           { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
//           { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
//         ],
//       },
//       {
//         title: "সফর বিষয়",
//         data: [
//           { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
//           { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
//         ],
//       },
//     ],

//     AmoliChartData: [
//       { name: "Closed", value: 90, color: "#28a745" }, // Green
//       { name: "Remaining", value: 10, color: "#dc3545" }, // Red
//     ],

//     TalimDonutChartData1: [
//       { name: "Completed", value: 70, color: "#28a745" }, // Green
//       { name: "Pending", value: 30, color: "#dc3545" }, // Red
//     ],

//     TalimDonutChartData2: [
//       { name: "Started", value: 80, color: "#007bff" }, // Blue
//       { name: "Not Started", value: 20, color: "#ffc107" }, // Yellow
//     ],
//   },

//   "jewel@gmail.com": {},
// };

export const allData = {
  "faysal@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 100, max: 150 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 85, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 105, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 105, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 70,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 50,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 60,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 90, color: "#28a745" }, // Green
      { name: "Remaining", value: 10, color: "#dc3545" }, // Red
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 70, color: "#28a745" },
      { name: "Pending", value: 30, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 80, color: "#007bff" },
      { name: "Not Started", value: 20, color: "#ffc107" },
    ],
  },
  "jewel@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 80, max: 150 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 100, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 90, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 40, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 70,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 50,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 60,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 70, color: "#28a745" }, // Green
      { name: "Remaining", value: 30, color: "#dc3545" }, // Red
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 80, color: "#28a745" },
      { name: "Pending", value: 20, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 90, color: "#007bff" },
      { name: "Not Started", value: 10, color: "#ffc107" },
    ],
  },
  "riyad@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 70, max: 150 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 85, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 60, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 105, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 70,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 50,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 60,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 85, color: "#28a745" },
      { name: "Remaining", value: 15, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 75, color: "#28a745" },
      { name: "Pending", value: 25, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 85, color: "#007bff" },
      { name: "Not Started", value: 15, color: "#ffc107" },
    ],
  },
  "nazmul@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 59, max: 150 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 30, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 70, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 40, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 70,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 50,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 60,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 75, color: "#28a745" },
      { name: "Remaining", value: 25, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 60, color: "#28a745" },
      { name: "Pending", value: 40, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 70, color: "#007bff" },
      { name: "Not Started", value: 30, color: "#ffc107" },
    ],
  },

  "zisan@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 180, max: 250 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 30, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 70, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 40, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 70,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 50,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 60,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 80, color: "#28a745" },
      { name: "Remaining", value: 20, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 70, color: "#28a745" },
      { name: "Pending", value: 30, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 90, color: "#007bff" },
      { name: "Not Started", value: 10, color: "#ffc107" },
    ],
  },
  "tauhid@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 180, max: 350 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 30, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 70, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 40, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 70,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 50,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 60,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 4, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 30, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 150, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 70, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 70, color: "#28a745" },
      { name: "Remaining", value: 30, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 80, color: "#28a745" },
      { name: "Pending", value: 20, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 85, color: "#007bff" },
      { name: "Not Started", value: 15, color: "#ffc107" },
    ],
  },

  "rifat@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 180, max: 250 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 80, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 90, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 100, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 80,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 90,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 8, max: 10 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 40, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 95, color: "#28a745" },
      { name: "Remaining", value: 5, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 85, color: "#28a745" },
      { name: "Pending", value: 15, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 90, color: "#007bff" },
      { name: "Not Started", value: 10, color: "#ffc107" },
    ],
  },

  "toyon@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 200, max: 250 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 100, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 100, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 120, max: 130 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 85,
            max: 105,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 76,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 95,
            max: 100,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 12, max: 15 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 40, max: 50 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 88, color: "#28a745" },
      { name: "Remaining", value: 12, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 87, color: "#28a745" },
      { name: "Pending", value: 13, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 85, color: "#007bff" },
      { name: "Not Started", value: 15, color: "#ffc107" },
    ],
  },

  "estiak@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 250, max: 300 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 150, max: 200 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 180, max: 210 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 170, max: 190 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 145,
            max: 155,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 140,
            max: 200,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 130,
            max: 140,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 12, max: 15 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 120, max: 140 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 85, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 86, color: "#28a745" },
      { name: "Remaining", value: 14, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 80, color: "#28a745" },
      { name: "Pending", value: 20, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 85, color: "#007bff" },
      { name: "Not Started", value: 15, color: "#ffc107" },
    ],
  },

  "moni@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 450, max: 500 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 250, max: 300 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 280, max: 310 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 270, max: 290 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 245,
            max: 355,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 240,
            max: 300,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 230,
            max: 300,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 20, max: 25 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 120, max: 140 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 85, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 82, color: "#28a745" },
      { name: "Remaining", value: 18, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 86, color: "#28a745" },
      { name: "Pending", value: 14, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 83, color: "#007bff" },
      { name: "Not Started", value: 17, color: "#ffc107" },
    ],
  },

  "zahid@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 250, max: 400 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 150, max: 200 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 180, max: 310 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 170, max: 290 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 145,
            max: 355,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 240,
            max: 300,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 230,
            max: 300,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 20, max: 25 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 120, max: 140 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 85, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 65, color: "#28a745" },
      { name: "Remaining", value: 35, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 76, color: "#28a745" },
      { name: "Pending", value: 24, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 73, color: "#007bff" },
      { name: "Not Started", value: 27, color: "#ffc107" },
    ],
  },
  "akash@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 150, max: 200 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 100, max: 150 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 80, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 100, max: 190 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 145,
            max: 255,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 140,
            max: 200,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 200,
            max: 300,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 20, max: 25 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 120, max: 140 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 85, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 75, color: "#28a745" },
      { name: "Remaining", value: 25, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 86, color: "#28a745" },
      { name: "Pending", value: 14, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 87, color: "#007bff" },
      { name: "Not Started", value: 13, color: "#ffc107" },
    ],
  },
  "morshed@gmail.com": {
    TallyData: [
      {
        title: "মক্তব বিষয়",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে", value: 50, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে", value: 60, max: 120 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 70, max: 110 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 150, max: 190 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 115,
            max: 155,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 140,
            max: 200,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
            value: 200,
            max: 300,
          },
        ],
      },
      {
        title: "দা’য়ী বিষয়",
        data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 20, max: 25 }],
      },
      {
        title: "দাওয়াতি বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 120, max: 140 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 85, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 80, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
            value: 160,
            max: 200,
          },
          {
            label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে",
            value: 70,
            max: 100,
          },
        ],
      },
      {
        title: "দাওয়াতি মজলিশ",
        data: [
          { label: "নতুন মক্তব চালু হয়েছে ", value: 74, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
          { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
          { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 75, max: 100 },
          {
            label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
            value: 80,
            max: 100,
          },
          {
            label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
            value: 75,
            max: 100,
          },
        ],
      },
      {
        title: "জামাত বিষয়",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 80, max: 100 },
        ],
      },
      {
        title: "দ্বীনে ফিরে এসেছে",
        data: [
          { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
          { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
        ],
      },
      {
        title: "সফর বিষয়",
        data: [
          { label: "মাদ্রাসা সফর করা হয়েছে", value: 70, max: 100 },
          { label: "চলমান মক্তব চালু হয়েছে", value: 80, max: 100 },
        ],
      },
    ],
    AmoliChartData: [
      { name: "Closed", value: 55, color: "#28a745" },
      { name: "Remaining", value: 45, color: "#dc3545" },
    ],
    TalimDonutChartData1: [
      { name: "Completed", value: 66, color: "#28a745" },
      { name: "Pending", value: 34, color: "#dc3545" },
    ],
    TalimDonutChartData2: [
      { name: "Started", value: 57, color: "#007bff" },
      { name: "Not Started", value: 43, color: "#ffc107" },
    ],
  },
};
