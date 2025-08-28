import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment","support","where to buy"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "4K 120 fps Dolby Vision.",
      "4 studio-quality mics.",
      "A Pro studio in your pocket.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "The first iPhone designed for Apple Intelligence.",
      "Personal, private, powerful",
    ],
    video: highlightSecondVideo,
    videoDuration: 3,
  
  },
  {
    id: 3,
    textLists: [
      "iPhone 16 Pro has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "So fast. So fluid.",
      "Get a feel for the all-new",
      "Camera Control.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 16 Pro in Desert Titanium",
    color: ["#BFA48F", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 16 Pro in Natural Titanium",
    color: ["#C2BCB2", "#C2BCB2", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 16 Pro in White Titanium",
    color: ["#F2F1ED", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 16 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];