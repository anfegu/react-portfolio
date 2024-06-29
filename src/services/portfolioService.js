import CrudApp from "../components/utils/CrudApp.jsx";
import CryptoInfoSearch from "../components/utils/CryptoInfoSearch.jsx";
import EmblaCarousel from "../components/utils/carousel/EmblaCarousel";

// For Carousel Props
const OPTIONS = {
  dragFree: true,
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT)).map((_, index) => index);

// Categories
export const categories = [
  {
    id: 1,
    title: "Blockchain",
    type: "Software Development",
    technologies: "Rust Solidity Web3 Hardhat",
    svg1: '<svg height="100%" width="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cld-cloud-computer-network</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="General" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="SLICES-64px" transform="translate(-720.000000, -200.000000)"> </g> <g id="ICONS" transform="translate(-715.000000, -195.000000)"> <g id="cld-cloud-computer-network" transform="translate(720.000000, 200.000000)"> <path d="M24,49 C24,50.657 22.657,52 21,52 L3,52 C1.343,52 0,50.657 0,49 L0,48 L24,48 L24,49 Z" id="Fill-439" fill="#C0CCDB"> </path> <polygon id="Fill-440" fill="#E9EFFA" points="2 48 22 48 22 36 2 36"> </polygon> <path d="M52,49 C52,50.657 50.657,52 49,52 L31,52 C29.343,52 28,50.657 28,49 L28,48 L52,48 L52,49 Z" id="Fill-441" fill="#C0CCDB"> </path> <polygon id="Fill-442" fill="#E9EFFA" points="30 48 50 48 50 36 30 36"> </polygon> <path d="M29.4346,2.9414 C28.5576,1.1974 26.7516,0.0004 24.6666,0.0004 C21.7206,0.0004 19.3326,2.3874 19.3326,5.3334 C16.3876,5.3334 13.9996,7.7204 13.9996,10.6674 C13.9996,13.6124 16.3876,16.0004 19.3326,16.0004 L31.3326,16.0004 C35.0156,16.0004 37.9996,13.0154 37.9996,9.3334 C37.9996,5.6514 35.0156,2.6674 31.3326,2.6674 C30.6736,2.6674 30.0366,2.7624 29.4336,2.9414 L29.4346,2.9414 Z" id="Fill-443" fill="#87D6CD"> </path> <polyline id="Stroke-444" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="2 48 2 36 22 36 22 48"> </polyline> <polyline id="Stroke-445" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="30 48 30 36 50 36 50 48"> </polyline> <path d="M24,49 C24,50.657 22.657,52 21,52 L3,52 C1.343,52 0,50.657 0,49 L0,48 L24,48 L24,49 Z" id="Stroke-446" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M52,49 C52,50.657 50.657,52 49,52 L31,52 C29.343,52 28,50.657 28,49 L28,48 L52,48 L52,49 Z" id="Stroke-447" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <polyline id="Stroke-448" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="12 32 12 26 40 26 40 32"> </polyline> <path d="M26,20 L26,26" id="Stroke-449" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M29.4346,2.9414 C28.5576,1.1974 26.7516,0.0004 24.6666,0.0004 C21.7206,0.0004 19.3326,2.3874 19.3326,5.3334 C16.3876,5.3334 13.9996,7.7204 13.9996,10.6674 C13.9996,13.6124 16.3876,16.0004 19.3326,16.0004 L31.3326,16.0004 C35.0156,16.0004 37.9996,13.0154 37.9996,9.3334 C37.9996,5.6514 35.0156,2.6674 31.3326,2.6674 C30.6736,2.6674 30.0366,2.7624 29.4336,2.9414 L29.4346,2.9414 Z" id="Stroke-450" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> </g> </g> </g> </g></svg>',
    projects: [
      {
        title: "Wallet Cross-Chain Module",
        srcScreen: require("../assets/SC_3_209.webm"),
      },
      {
        title: "Ecommerce NFT Mobile App",
        srcScreen: "",
        component: EmblaCarousel,
        componentProps: { slides: SLIDES, options: OPTIONS },
      },
      {
        title: "Crypto Market Analysis with Caching",
        srcScreen: "",
        component: CryptoInfoSearch,
      },
      {
        title: "Staking & Dex Module",
        srcScreen: "",
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    type: "Software Development",
    technologies: "Rust javascript nodejs expressjs",
    svg2: '<svg height="100%" width="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>db-network-2</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="General" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="SLICES-64px" transform="translate(-90.000000, -400.000000)"> </g> <g id="ICONS" transform="translate(-85.000000, -395.000000)"> <g id="db-network-2" transform="translate(90.000000, 402.000000)"> <polygon id="Fill-798" fill="#87D6CD" points="0 48 20 48 20 44 0 44"> </polygon> <polygon id="Fill-799" fill="#87D6CD" points="32 48 52 48 52 44 32 44"> </polygon> <path d="M26,34 C25.317,34 24.653,33.984 24,33.961 L24,42 L28,42 L28,33.961 C27.347,33.984 26.683,34 26,34" id="Fill-800" fill="#87D6CD"> </path> <polygon id="Fill-801" fill="#7BBDEC" points="20 50 32 50 32 42 20 42"> </polygon> <path d="M26,26 C16.743,26 10,23.822 10,21 L10,29 C10,31.822 16.743,34 26,34 C35.257,34 42,31.822 42,29 L42,21 C42,23.822 35.257,26 26,26" id="Fill-802" fill="#67C1B6"> </path> <path d="M26,18 C16.743,18 10,15.822 10,13 L10,21 C10,23.822 16.743,26 26,26 C35.257,26 42,23.822 42,21 L42,13 C42,15.822 35.257,18 26,18" id="Fill-803" fill="#67C1B6"> </path> <path d="M26,10 C16.743,10 10,7.822 10,5 L10,13 C10,15.822 16.743,18 26,18 C35.257,18 42,15.822 42,13 L42,5 C42,7.822 35.257,10 26,10" id="Fill-804" fill="#67C1B6"> </path> <path d="M42,5 C42,7.822 35.259,10 26,10 C16.743,10 10,7.822 10,5 C10,2.178 16.742,0 25.999,0 C35.258,0 42,2.178 42,5" id="Fill-805" fill="#87D6CD"> </path> <path d="M24,42 L24,34" id="Stroke-806" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M28,42 L28,34" id="Stroke-807" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M32,44 L52,44" id="Stroke-808" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M32,48 L52,48" id="Stroke-809" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M20,44 L0,44" id="Stroke-810" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M0,48 L20,48" id="Stroke-811" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <polygon id="Stroke-812" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="20 50 32 50 32 42 20 42"> </polygon> <path d="M42,5 C42,7.822 35.259,10 26,10 C16.743,10 10,7.822 10,5 C10,2.178 16.742,0 25.999,0 C35.258,0 42,2.178 42,5 Z" id="Stroke-813" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M42,5 L42,13 C42,15.822 35.259,18 26,18 C16.743,18 10,15.822 10,13 L10,5" id="Stroke-814" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M42,21 L42,29 C42,31.822 35.257,34 26,34 C16.743,34 10,31.822 10,29 L10,21" id="Stroke-815" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M42,13 L42,21 C42,23.823 35.259,26 26,26 C16.743,26 10,23.823 10,21 L10,13" id="Stroke-816" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> </g> </g> </g> </g></svg>',
    projects: [
      {
        title: "Rust Rocket WebServer",
        srcScreen: "",
        component: EmblaCarousel,
        componentProps: { slides: SLIDES, options: OPTIONS },
      },
      {
        title: "Axium & Diesel Rust",
        srcScreen: "",
      },
      {
        title: "Database Foundamentals Interactive",
        srcScreen: "",
        component: CrudApp,
      },
      {
        title: "Authentication with JWT",
        srcScreen: "",
      },
    ],
  },
  {
    id: 3,
    title: "Frontend",
    type: "Web Development",
    technologies: "HTML5 CSS3 Bootstrap ReactJS",
    svg3: '<svg height="100%" width="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>des-palette</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="General" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="SLICES-64px" transform="translate(-450.000000, -400.000000)"> </g> <g id="ICONS" transform="translate(-445.000000, -395.000000)"> <g id="des-palette" transform="translate(450.000000, 404.000000)"> <path d="M10,40 C7.791,40 6,38.209 6,36 C6,33.791 7.791,32 10,32 C12.209,32 14,33.791 14,36 C14,38.209 12.209,40 10,40 M24,0 C9,0 0,11 0,26 C0,38 4,48 13,48 C23,48 14,29 23,29 C32,29 31,43 45,43 C50,43 54,40 54,31 C54,12 40,0 24,0" id="Fill-1063" fill="#CCA972"> </path> <path d="M20,12 C20,14.209 18.657,16 17,16 C15.343,16 14,14.209 14,12 C14,9.791 15.343,8 17,8 C18.657,8 20,9.791 20,12" id="Fill-1064" fill="#7BBDEC"> </path> <path d="M31.5576,10.9297 C30.6936,13.0777 28.8466,14.4027 27.4336,13.8897 C26.0216,13.3767 25.5766,11.2177 26.4426,9.0707 C27.3066,6.9217 29.1536,5.5977 30.5666,6.1107 C31.9796,6.6247 32.4236,8.7827 31.5576,10.9297" id="Fill-1065" fill="#F16963"> </path> <path d="M47.9277,33.3213 C47.4187,35.4053 44.3527,36.5043 41.0767,35.7743 C37.8037,35.0453 35.5627,32.7633 36.0727,30.6793 C36.5807,28.5943 39.6477,27.4963 42.9227,28.2253 C46.1967,28.9553 48.4377,31.2363 47.9277,33.3213" id="Fill-1066" fill="#93C98D"> </path> <path d="M43.748,15.1992 C44.611,16.6792 43.186,19.2102 40.563,20.8492 C37.942,22.4882 35.116,22.6172 34.252,21.1362 C33.389,19.6562 34.814,17.1262 37.436,15.4862 C40.058,13.8472 42.884,13.7192 43.748,15.1992" id="Fill-1067" fill="#F3E777"> </path> <path d="M20,12 C20,14.209 18.657,16 17,16 C15.343,16 14,14.209 14,12 C14,9.791 15.343,8 17,8 C18.657,8 20,9.791 20,12 Z" id="Stroke-1068" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M14,36 C14,38.209 12.209,40 10,40 C7.791,40 6,38.209 6,36 C6,33.791 7.791,32 10,32 C12.209,32 14,33.791 14,36 Z" id="Stroke-1069" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M31.5576,10.9297 C30.6936,13.0777 28.8466,14.4027 27.4336,13.8897 C26.0216,13.3767 25.5766,11.2177 26.4426,9.0707 C27.3066,6.9217 29.1536,5.5977 30.5666,6.1107 C31.9796,6.6247 32.4236,8.7827 31.5576,10.9297 Z" id="Stroke-1070" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M47.9277,33.3213 C47.4187,35.4053 44.3527,36.5043 41.0767,35.7743 C37.8037,35.0453 35.5627,32.7633 36.0727,30.6793 C36.5807,28.5943 39.6477,27.4963 42.9227,28.2253 C46.1967,28.9553 48.4377,31.2363 47.9277,33.3213 Z" id="Stroke-1071" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M43.748,15.1992 C44.611,16.6792 43.186,19.2102 40.563,20.8492 C37.942,22.4882 35.116,22.6172 34.252,21.1362 C33.389,19.6562 34.814,17.1262 37.436,15.4862 C40.058,13.8472 42.884,13.7192 43.748,15.1992 Z" id="Stroke-1072" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M24,0 C9,0 0,11 0,26 C0,38 4,48 13,48 C23,48 14,29 23,29 C32,29 31,43 45,43 C50,43 54,40 54,31 C54,12 40,0 24,0 Z" id="Stroke-1073" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> </g> </g> </g> </g></svg>',
    projects: [
      {
        title: "Portfolio Website",
        srcScreen: "",
      },
      {
        title: "Task Management System",
        srcScreen: "",
        component: EmblaCarousel,
        componentProps: { slides: SLIDES, options: OPTIONS },
      },
      {
        title: "E-commerce Product Showcase",
        srcScreen: "",
      },
      {
        title: "Interactive Data Dashboard",
        srcScreen: "",
      },
    ],
  },
  {
    id: 4,
    title: "Financial",
    type: "Software Development",
    technologies: "IBM ApplePayAPI GooglePayAPI",
    svg4: '<svg height="100%" width="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>com-mac-old</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="General" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="SLICES-64px" transform="translate(-360.000000, -300.000000)"> </g> <g id="ICONS" transform="translate(-355.000000, -295.000000)"> <g id="com-mac-old" transform="translate(364.000000, 302.000000)"> <path d="M2,0 L42,0 C43.104,0 44,0.896 44,2 L44,28 C44,29.104 43.104,30 42,30 L2,30 C0.896,30 0,29.104 0,28 L0,2 C0,0.896 0.896,0 2,0 Z" id="Fill-1" fill="#E9EFFA"> </path> <polygon id="Fill-3" fill="#99A5B7" points="4 26 40 26 40 4 4 4"> </polygon> <path d="M24,34.124 L24,34.124 L24,36 C24,37.104 23.104,38 22,38 C20.896,38 20,37.104 20,36 L20,34.124 C12.107,35.108 6,41.841 6,50 L6,50.452 C6,51.307 6.693,52 7.548,52 L36.452,52 C37.307,52 38,51.307 38,50.452 L38,50 C38,41.841 31.893,35.108 24,34.124" id="Fill-5" fill="#E9EFFA"> </path> <path d="M20,30 L20,36 C20,37.104 20.896,38 22,38 C23.104,38 24,37.104 24,36 L24,30 L20,30 Z" id="Fill-6" fill="#E9EFFA"> </path> <path d="M2,0 L42,0 C43.104,0 44,0.896 44,2 L44,28 C44,29.104 43.104,30 42,30 L2,30 C0.896,30 0,29.104 0,28 L0,2 C0,0.896 0.896,0 2,0 Z" id="Stroke-7" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <polygon id="Stroke-8" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="4 26 40 26 40 4 4 4"> </polygon> <path d="M24,43 C24,43.553 23.104,44 22,44 C20.896,44 20,43.553 20,43 C20,42.447 20.896,42 22,42 C23.104,42 24,42.447 24,43 Z" id="Stroke-9" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M20,30 L20,36 C20,37.104 20.896,38 22,38 C23.104,38 24,37.104 24,36 L24,30" id="Stroke-10" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M20,34.124 C12.107,35.108 6,41.841 6,50 L6,50.452 C6,51.307 6.693,52 7.548,52 L36.452,52 C37.307,52 38,51.307 38,50.452 L38,50 C38,41.841 31.893,35.108 24,34.124" id="Stroke-11" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> </g> </g> </g> </g></svg>',
    projects: [
      {
        title: "Stride Credit Card Payment",
        srcScreen: require("../assets/Strider.webm"),
      },
      {
        title: "Google Pay Integration",
        srcScreen: "",
      },
      {
        title: "Integrated Transactional System",
        srcScreen: "",
        component: EmblaCarousel,
        componentProps: { slides: SLIDES, options: OPTIONS },
      },
      {
        title: "Apple Pay Integration",
        srcScreen: "",
      },
    ],
  },
  {
    id: 5,
    title: "General",
    type: "Software Development",
    technologies: "MERN ",
    svg5: '<svg height="100%" width="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>com-laptop-code</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="General" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="SLICES-64px" transform="translate(-90.000000, -300.000000)"> </g> <g id="ICONS" transform="translate(-85.000000, -295.000000)"> <g id="com-laptop-code" transform="translate(88.000000, 308.000000)"> <path d="M49,0 L7,0 C5.343,0 4,1.343 4,3 L4,32 L52,32 L52,3 C52,1.343 50.657,0 49,0" id="Fill-646" fill="#E9EFFA"> </path> <path d="M56,32 L56,35 C56,36.657 54.657,38 53,38 L3,38 C1.343,38 0,36.657 0,35 L0,32 L56,32 Z" id="Fill-647" fill="#C0CCDB"> </path> <polygon id="Fill-648" fill="#B6E0F2" points="8 28 48 28 48 4 8 4"> </polygon> <path d="M52,32 L52,3 C52,1.343 50.657,0 49,0 L7,0 C5.343,0 4,1.343 4,3 L4,32" id="Stroke-649" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <path d="M56,32 L56,35 C56,36.657 54.657,38 53,38 L3,38 C1.343,38 0,36.657 0,35 L0,32 L56,32 Z" id="Stroke-650" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> <polygon id="Stroke-651" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="8 28 48 28 48 4 8 4"> </polygon> <polyline id="Stroke-652" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="22 11 16 16 22 21"> </polyline> <polyline id="Stroke-653" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="34 11 40 16 34 21"> </polyline> <path d="M26,24 L30,8" id="Stroke-654" stroke="#414547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> </path> </g> </g> </g> </g></svg>',
    projects: [
      {
        title: "Full Stack Web Applications",
        srcScreen: "",
        component: EmblaCarousel,
        componentProps: { slides: SLIDES, options: OPTIONS },
      },
      {
        title: "Future of Work in a Software-Driven Economy",
        srcScreen: "",
      },
      {
        title:
          "Ethical Considerations in Software Procurement and Vendor Relationships",
        srcScreen: "",
      },
      {
        title: "ETF Market Trends Analysis",
        srcScreen: "",
      },
    ],
  },
];
