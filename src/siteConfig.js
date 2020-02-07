import dishwasher from "./images/dishwasher.svg";
import tumbledryer from "./images/tumbledryer.svg";
import stove from "./images/stove.svg";
import washingmachine from "./images/washingmachine.svg";
import gasstove from "./images/gasstove.svg";
import fridge from "./images/fridge.svg";
import television from "./images/television.svg";
import microwave from "./images/microwave.svg";
import airconditioner from "./images/airconditioner.svg";
import heroImage from "./images/hero-image.jpg";

export const services = [
  {
    icon: airconditioner,
    label: "Air Conditioner",
    url: "/booking/airconditioner"
  },
  { icon: dishwasher, label: "Dishwasher", url: "/booking/dishwasher" },
  { icon: fridge, label: "Fridge/Freezer", url: "/booking/fridge" },
  { icon: gasstove, label: "Gas Stove", url: "/booking/gasstove" },
  { icon: microwave, label: "Microwave", url: "/booking/microwave" },
  { icon: stove, label: "Stove/Hob/Oven", url: "/booking/stove" },
  { icon: television, label: "Television", url: "/booking/television" },
  { icon: tumbledryer, label: "Tumble Dryer", url: "/booking/tumbledryer" },
  {
    icon: washingmachine,
    label: "Washing Machine",
    url: "/booking/washingmachine"
  }
];

export const navLinks = [
  { label: "home", url: "/" }
  //   { label: "contact us", url: "/" },
  //   { label: "Google Play", url: "/" },
  //   { label: "App Store", url: "/" }
];

export const heroSlides = [
  {
    image: heroImage,
    caption: "On-site appliance repairs, anywhere in Johannesburg and Pretoria"
  }
];

const siteConfig = {
  title: "Engage Electronics",
  tagline: "On-site Appliance Repairs. Johannesburg and Pretoria",
  url: "https://www.engageelectronics.co.za",

  services,

  navLinks,

  colors: {
    primaryColor: "#175ff8",
    secondaryColor: "#ffffff"
  },

  heroSlides,

  copyright: "Copyright © " + new Date().getFullYear()
};

export const locations = ["Johannesburg", "Pretoria"];

export default siteConfig;
