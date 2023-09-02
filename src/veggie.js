import * as ec from "./elementCreation";
import celery from './images/celery-carrot.jpeg';
import lettuce from './images/lettuce-tomato-onion.jpeg';
import zucchini from './images/zucchini.jpeg';
import spinach from './images/spinach-avacado-mushroom.jpeg';

export function veggieTab (){
    ec.makeElement("p", document.getElementById("body-container"), "intro-text", "veggie-intro-text");
    const introText = "You're going to <b>vegetate</b> "+
    "after trying these.";
    ec.styleElementID("veggie-intro-text", "innerHTML", introText);
    ec.makeElement("div", document.getElementById("body-container"),
    "picture-container", "veggie-card-container");
    for (let i = 0; i < 4; i++) {
        ec.makeElement("div", document.querySelector(".picture-container"),
        "picture-card", "veggie-card"+i)
    }
    const veggie_array = [celery, lettuce, zucchini, spinach]
    const veggie_description = ["A unique combo to boost your fiber intake", "Who needs a BLT when you can have a CLTM?",
    "Zucchini and onions grilled to perfection", "For those obsessed with superfoods"];
    const veggie_ids = ["celery", "lettuce", "zucchini", "spinach"];
    for (let i = 0; i < 4; i++) {
        ec.makeImage(veggie_array[i], document.querySelector("#veggie-card"+i), "food-picture", veggie_ids[i]);
        ec.styleElementID(veggie_ids[i], "src", veggie_array[i]);
        ec.makeElement("p", document.querySelector("#veggie-card"+i), "picture-text", "veggie-text"+i);
        ec.styleElementID("veggie-text"+i, "innerHTML", veggie_description[i]);
    }
}