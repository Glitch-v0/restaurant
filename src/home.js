import * as ec from "./elementCreation";

export function homeTab(){
    ec.makeElement("p", document.getElementById("body-container"), "home-text", "home-text-intro");
    const introText = "Finally, an amazing restaurant for all of your <b>artisan</b> grilled cheese needs!";
    ec.styleElementID("home-text-intro", "innerHTML", introText);
    ec.makeElement("p", document.getElementById("body-container"), "body-text", "home-body-text");
    const homeText = "Click on the tabs above to view some <b>definitely-real</b> potraits of our products!";
    ec.styleElementID("home-body-text", "innerHTML", homeText);
}
