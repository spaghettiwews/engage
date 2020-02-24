import dishwasher from "./images/dishwasher.svg";
import tumbledryer from "./images/tumbledryer.svg";
import stove from "./images/stove.svg";
import washingmachine from "./images/washingmachine.svg";
import gasstove from "./images/gasstove.svg";
import fridge from "./images/fridge.svg";
import television from "./images/television.svg";
import microwave from "./images/microwave.svg";
import airconditioner from "./images/airconditioner.svg";
import satafrika from "./images/satafrika.svg";

export const services = [
  {
    icon: airconditioner,
    label: "Air Conditioner",
    url: "/airconditioner"
  },
  { icon: dishwasher, label: "Dishwasher", url: "/dishwasher" },
  { icon: fridge, label: "Fridge/Freezer", url: "/fridge" },
  { icon: gasstove, label: "Gas Stove", url: "/gasstove" },
  { icon: microwave, label: "Microwave", url: "/microwave" },
  { icon: stove, label: "Stove/Hob/Oven", url: "/stove" },
  { icon: television, label: "Television", url: "/television" },
  { icon: tumbledryer, label: "Tumble Dryer", url: "/tumbledryer" },
  {
    icon: washingmachine,
    label: "Washing Machine",
    url: "/washingmachine"
  }
];

export const navLinks = [
  { label: "home", url: "/", icon: satafrika }
  //   { label: "contact us", url: "/" },
  //   { label: "Google Play", url: "/" },
  //   { label: "App Store", url: "/" }
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

  copyright: "Copyright © " + new Date().getFullYear()
};

export const locations = [
  { label: "Where is the faulty appliance?", value: "" },
  { label: "Johannesburg", value: "Johannesburg" },
  { label: "Pretoria", value: "Pretoria" }
];

export default siteConfig;
