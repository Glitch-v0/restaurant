import * as ec from "./elementCreation"

ec.makeElement("div", document.body, "", "home-container");
ec.styleElementID("home-container", "display", "grid");
ec.styleElementID("home-container", "background-color", "white");
ec.styleElementID("home-container", "grid-column", "auto");
ec.styleElementID("home-container", "grid-row", "auto");
ec.makeElement("p", document.getElementById("home-container"), "home-text", "home-text-intro");

const introText = "Finally, an amazing restaurant for all of your <b>artisan</b> grilled cheese needs!";
ec.styleElementID("home-text-intro", "innerHTML", introText);
ec.styleElementID("home-text-intro", "color", "black")