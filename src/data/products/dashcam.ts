import { Product } from "@/types/product";

export const dashcamProducts: Product[] = [
  {
    id: "2-channel-ai",

    name: "2 Channel AI Dashcam",

    slug: "2-channel-ai-dashcam",

    category: "dashcam",

    shortDescription:
      "Dual channel vehicle surveillance system.",

    description:
      "Complete description here.",

    images: [
      {
        id: "1",

        src: "/images/products/dashcam/2-channel/front.webp",

        alt: "2 Channel AI Dashcam",
      },
    ],

    specifications: [
      {
        label: "Channels",

        value: "2",
      },
    ],

    features: [
      "Loop Recording",

      "ADAS",

      "DMS",
    ],

    faq: [
      {
        question:
          "Does this dashcam work without internet?",

        answer:
          "Yes.",
      },
    ],

    featured: true,

    showOnHome: true,

    homeOrder: 1,
  },
];