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

export const alert = {
  __html: `
  <h2>WE ARE OPEN 7 DAYS A WEEK!</h2>
  <p>OPEN DURING THE LOCKDOWN - NORMAL RATES APPLY!<br/>
  Our services are listed as essential during the national lockdown according to the Disaster Management Act, Annexure B - Categorisation of essential goods and services during lockdown, Regulation 11A, Section B.34 - Services, published in the Gazette 43240 on 20/04/20202.All our technicians have valid travel permits and implement all health and safety measures!
  For all official information and updates on COVID-19, please visit: <a target="_blank" href="https://sacoronavirus.co.za/" alt="SA COVID-19 Portal">SA COVID-19 Portal</a></p>`
};

const siteConfig = {
  title: "Engage Electronics",
  tagline: "On-site Appliance Repairs. Johannesburg and Pretoria",
  url: "https://www.engageelectronics.co.za",

  alert,
  services,

  navLinks,

  colors: {
    primaryColor: "#175ff8",
    secondaryColor: "#ffffff"
  },

  copyright: "Copyright © " + new Date().getFullYear()
};

export const locations = [
  { label: "", value: "" },
  { label: "Johannesburg", value: "Johannesburg" },
  { label: "Pretoria", value: "Pretoria" }
];

export default siteConfig;
