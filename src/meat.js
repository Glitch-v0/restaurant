import * as ec from "./elementCreation";
import bacon from './images/bacon.jpeg';
import chicken from './images/shredded-chicken.jpeg';
import turkey from './images/shredded-turkey.jpeg';
import steak from './images/steak-cheese.jpeg';

export function meatTab (){
    ec.makeElement("p", document.getElementById("body-container"), "intro-text", "meat-intro-text");
    const introText = "Nice to <b>meat</b> you! Take a look "+
    "at our selections.";
    ec.styleElementID("meat-intro-text", "innerHTML", introText);
    ec.makeElement("div", document.getElementById("body-container"),
    "picture-container", "meat-card-container");
    for (let i = 0; i < 4; i++) {
        ec.makeElement("div", document.querySelector(".picture-container"),
        "picture-card", "meat-card"+i)
    }
    const meat_array = [bacon, chicken, turkey, steak]
    const meat_description = ["The motherload of bacony goodness", "Chicken so tender you'll lay an egg",
    "Don't wait until Thanksgiving to enjoy this", "Be filled with this Philly"];
    const meat_ids = ["bacon", "chicken", "turkey", "steak"];
    for (let i = 0; i < 4; i++) {
        ec.makeImage(meat_array[i], document.querySelector("#meat-card"+i), "food-picture", meat_ids[i]);
        ec.styleElementID(meat_ids[i], "src", meat_array[i]);
        ec.makeElement("p", document.querySelector("#meat-card"+i), "picture-text", "meat-text"+i);
        ec.styleElementID("meat-text"+i, "innerHTML", meat_description[i]);
    }
}