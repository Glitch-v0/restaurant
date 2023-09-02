import * as ec from "./elementCreation";
import sugar from './images/brown-sugar-butter.jpeg';
import honey from './images/honey.jpeg';
import smores from './images/smores.jpeg';
import pineapple from './images/pineapple.jpeg';

export function dessertTab (){
    ec.makeElement("p", document.getElementById("body-container"), "intro-text", "dessert-intro-text");
    const introText = "For those who can't <b>desert</b> a desssert.";
    ec.styleElementID("dessert-intro-text", "innerHTML", introText);
    ec.makeElement("div", document.getElementById("body-container"),
    "picture-container", "dessert-card-container");
    for (let i = 0; i < 4; i++) {
        ec.makeElement("div", document.querySelector(".picture-container"),
        "picture-card", "dessert-card"+i)
    }
    const dessert_array = [sugar, pineapple, smores, honey]
    const dessert_description = ["Hunks of butter and a generous lathering of brown sugar", "A fruity twist on this classic cheese",
    "Worthy of a campfire", "The bread itself imbues essence of honey"];
    const dessert_ids = ["sugar", "pineapple", "smores", "honey"];
    for (let i = 0; i < 4; i++) {
        ec.makeImage(dessert_array[i], document.querySelector("#dessert-card"+i), "food-picture", dessert_ids[i]);
        ec.styleElementID(dessert_ids[i], "src", dessert_array[i]);
        ec.makeElement("p", document.querySelector("#dessert-card"+i), "picture-text", "dessert-text"+i);
        ec.styleElementID("dessert-text"+i, "innerHTML", dessert_description[i]);
    }
}