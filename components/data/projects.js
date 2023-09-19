import solarcar2 from "../../public/pictures/solarcar/solarcar2.png";
import solarcar3 from "../../public/pictures/solarcar/solarcar3.png";
import uas1 from "../../public/pictures/uas/uas1.png";
import uas2 from "../../public/pictures/uas/uas2.png";
import robosub1 from "../../public/pictures/robosub/robosub1.png";
import robosub2 from "../../public/pictures/robosub/robosub2.png";
import micromouse1 from "../../public/pictures/micromouse/micromouse1.png";
import micromouse2 from "../../public/pictures/micromouse/micromouse3.png";
import UAS from "../../public/assets/UAS.webp";
import solacor from "../../public/assets/solarcar.svg";
import robosub from "../../public/assets/robosub.webp";
import Micromouse from "../../public/assets/Micromouse.svg";
export const projects = [
  {
    title: "Solar Car",
    detail: "solarcar",
    color: "bluePurple",
    logo: <img src={solacor.src} alt="solar car" />,
    links: {
      instagram: "https://www.instagram.com/ucrsolarcar/",
      facebook: "https://www.facebook.com/UCRSolarCar/",
      linkedIn: "https://www.linkedin.com/company/ucr-solar-car/about/",
      email: "solarcar@ieeeucr.org",
    },
    img1: solarcar2.src,
    img2: solarcar3.src,
    text: " The University of California Riverside Solar Car team consists of many talented, undergraduate students who aim to construct a full-scaled solar car to compete in the Formula Sun Grand Prix, and the American Solar Challenge: a national collegiate competition which requires teams and their solar-powered vehicles to finish a 2,000 mile cross-country journey.",
  },
  {
    title: "UAS",
    detail: "uas",
    color: "pinkPurple",
    logo: <img src={UAS.src} alt="UAS" />,
    links: {
      website: "https://ucr-uas.weebly.com",
      instagram: "https://www.instagram.com/ucruas/",
      facebook: "https://www.facebook.com/ucruas",
      linkedIn: "https://www.linkedin.com/company/ucruas/about/",
      email: "uas@ieeeucr.org",
    },
    img1: uas2.src,
    img2: uas1.src,
    text: " The University of California Riverside Solar Car team consists of many talented, undergraduate students who aim to construct a full-scaled solar car to compete in the Formula Sun Grand Prix, and the American Solar Challenge: a national collegiate competition which requires teams and their solar-powered vehicles to finish a 2,000 mile cross-country journey.",
  },
  {
    title: "RoboSub",
    color: "darkblue",
    detail: "robosub",
    logo: <img src={robosub.src} alt="robosub" />,
    links: {
      website: "https://robosubucr.weebly.com/",
      instagram: "https://www.instagram.com/robosubucr/?hl=en",
      linkedIn: "https://www.linkedin.com/company/robosubucr/about/",
      email: "robosub@ieee.edu",
    },
    img1: robosub2.src,
    img2: robosub1.src,
    text: "TWe are a diverse team of students from University of California, Riverside dedicated to exploring robotics of all applications. Drawing from across all STEM disciplines, we focus on advancing the art of autonomous technology and using systems engineering principles in a real project.",
  },
  {
    title: "Micromouse",
    detail: "micromouse",
    color: "pink",
    logo: <img src={Micromouse.src} alt="micromouse" />,
    links: { email: "robotics@ieeeucr.org" },
    img1: micromouse1.src,
    img2: micromouse2.src,
    text: "The goal of Micromouse is to build a small robot that can autonomously solve a 16x16 maze. It is a worldwide competition, and it is one of IEEE-UCR's biggest projects. Here at UCR, we host Micromouse workshops which teach Arduino, basic C programming, soldering, and how to use all the parts that are needed to build a Micromouse. Micromouse is a beginner project, so it is open to everyone, regardless of experience or major, and we encourage anyone who is interested to join!",
  },
];
