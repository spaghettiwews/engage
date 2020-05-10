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
  <h2>OPEN DURING LOCKDOWN - NORMAL RATES APPLY!</h2>
  <p>For all official information and updates on COVID-19, please visit: <a target="_blank" href="https://sacoronavirus.co.za/" alt="SA COVID-19 Portal">SA COVID-19 Portal</a></p>`
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
  {label:"Alberton", value:"Alberton"},
  {label:"Bedfordview", value:"Bedfordview"},
  {label:"Benoni", value:"Benoni"},
  {label:"Boksburg", value:"Boksburg"},
  {label:"Bryanston", value:"Bryanston"},
  {label:"Centurion", value:"Centurion"},
  {label:"Edenvale", value:"Edenvale"},
  {label:"Fourways", value:"Fourways"},
  {label:"Germiston", value:"Germiston"},
  {label:"Johannesburg", value:"Johannesburg"},
  {label:"Kempton Park", value:"Kempton Park"},
  {label:"Krugersdorp", value:"Krugersdorp"},
  {label:"Midrand", value:"Midrand"},
  {label:"Pretoria", value:"Pretoria"},
  {label:"Randburg", value:"Randburg"},
  {label:"Roodepoort", value:"Roodepoort"},
  {label:"Sandton", value:"Sandton"}
];

export const applianceTypes = [
  { label: "", value: "" },
  {label:"Beverage Cooler", value:"Beverage Cooler"},
  {label:"Cold Room", value:"Cold Room"},
  {label:"Cooker Hood/Extractor", value:"Cooker Hood/Extractor"},
  {label:"Dishwasher", value:"Dishwasher"},
  {label:"Freezer (Chest Type)", value:"Freezer (Chest Type)"},
  {label:"Freezer (Single Door)", value:"Freezer (Single Door)"},
  {label:"Freezer Room", value:"Freezer Room"},
  {label:"Fridge (Single Door)", value:"Fridge (Single Door)"},
  {label:"Fridge Freezer (not side by side)", value:"Fridge Freezer (not side by side)"},
  {label:"Fridge Freezer (side by side)", value:"Fridge Freezer (side by side)"},
  {label:"Fridge/Freezer", value:"Fridge/Freezer"},
  {label:"Microwave Oven", value:"Microwave Oven"},
  {label:"Oven (Electric, built-in)", value:"Oven (Electric, built-in)"},
  {label:"Oven (Gas, built-in)", value:"Oven (Gas, built-in)"},
  {label:"Oven/Stove", value:"Oven/Stove"},
  {label:"Stove (Electric, free-standing)", value:"Stove (Electric, free-standing)"},
  {label:"Stove (Gas, free-standing)", value:"Stove (Gas, free-standing)"},
  {label:"Stove Top/Hob (Electric, built-in)", value:"Stove Top/Hob (Electric, built-in)"},
  {label:"Stove Top/Hob (Gas, built-in)", value:"Stove Top/Hob (Gas, built-in)"},
  {label:"Tumble Dryer", value:"Tumble Dryer"},
  {label:"Under-bar Fridge", value:"Under-bar Fridge"},
  {label:"Washer Dryer Combo", value:"Washer Dryer Combo"},
  {label:"Washing Machine", value:"Washing Machine"},
  {label:"Wine Cooler", value:"Wine Cooler"}
];

export const applianceMakes = [
  { label: "", value: "" },
  {label:"AEG", value:"AEG"},
{label:"Bosch", value:"Bosch"},
{label:"Defy", value:"Defy"},
{label:"Electrolux", value:"Electrolux"},
{label:"Frigidaire", value:"Frigidaire"},
{label:"Fridge Master", value:"Fridge Master"},
{label:"Hisense", value:"Hisense"},
{label:"Hoover", value:"Hoover"},
{label:"Hotpoint", value:"Hotpoint"},
{label:"Indesit", value:"Indesit"},
{label:"Kelvinator", value:"Kelvinator"},
{label:"KIC", value:"KIC"},
{label:"LG", value:"LG"},
{label:"Mercury", value:"Mercury"},
{label:"Miele", value:"Miele"},
{label:"Samsung", value:"Samsung"},
{label:"Sharp", value:"Sharp"},
{label:"Siemens", value:"Siemens"},
{label:"SMEG", value:"SMEG"},
{label:"Speed Queen", value:"Speed Queen"},
{label:"Whirlpool", value:"Whirlpool"},
{label:"Zanussi", value:"Zanussi"}
]

export default siteConfig;
