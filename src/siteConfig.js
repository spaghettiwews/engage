import dishwasher from './images/dishwasher.svg';
import tumbledryer from './images/tumbledryer.svg';
import stove from './images/stove.svg';
import washingmachine from './images/washingmachine.svg';
import gasstove from './images/gasstove.svg';
import fridge from './images/fridge.svg';
import television from './images/television.svg';
import microwave from './images/microwave.svg';
import airconditioner from './images/airconditioner.svg';

const services = [
  {"icon": airconditioner, "label": "Air Conditioner","url":"/booking"},
  {"icon": dishwasher, "label": "Dishwasher","url":"/booking"}, 
  {"icon": fridge, "label": "Fridge/Freezer","url":"/booking"},
  {"icon": gasstove, "label": "Gas Stove","url":"/booking"},
  {"icon": microwave, "label": "Microwave","url":"/booking"},
  {"icon": stove, "label": "Stove/Hob/Oven","url":"/booking"},
  {"icon": television, "label": "Television","url":"/booking"},
  {"icon": tumbledryer, "label": "Tumble Dryer","url":"/booking"},
  {"icon": washingmachine, "label": "Washing Machine","url":"/booking"}, 
]

const navLinks = [
    {"label": "home", "url":"/"},
    {"label": "contact us", "url":"/"},
    {"label": "Google Play", "url":"/"},
    {"label": "App Store", "url":"/"},
]

const siteConfig = {
    title: 'Engage Electronics',
    tagline: 'On-site Appliance Repairs. Johannesburg and Pretoria',
    url: 'https://www.engageelectronics.co.za',
    
    services,

    navLinks,

    colors: {
        primaryColor: '#175ff8',
        secondaryColor: '#ffffff',
    },

    copyright:
    'Copyright © ' +
    new Date().getFullYear(),
}

export const locations = [
    "Johannesburg",
    "Pretoria"
]

export default siteConfig;