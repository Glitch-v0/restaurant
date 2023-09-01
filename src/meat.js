import * as ec from "./elementCreation";

export function meatTab (){
    ec.makeElement("p", document.getElementById("body-container"), "intro-text", "meat-intro-text");
    const introText = "Nice to <b>meat</b> you! We have four mouth-watering, meaty, grilled cheese selections to choose from.";
    ec.styleElementID("meat-intro-text", "innerHTML", introText);
    ec.makeElement("div", document.getElementById("body-container"), "picture-container", "meat-picture-container");
    for (let i = 0; i < 4; i++) {
        ec.makeElement("div", document.querySelector(".picture-container"), "picture-card", "meat-picture"+i)
    }
}
