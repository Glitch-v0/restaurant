export function makeElement(element, parentElement, optionalClass, optionalID) {
    const newElement = document.createElement(element);
    if (typeof optionalClass !== "undefined") {
      newElement.className = optionalClass;
    }
    if (typeof optionalID !== "undefined") {
      newElement.id = optionalID;
    }
    parentElement.appendChild(newElement);
    console.log({newElement})
  }

export function styleElementID (elementID, styleAttribute, styleValue){
    const elementToStyle = document.getElementById(elementID)
    if(styleAttribute == "innerHTML"){
        elementToStyle.innerHTML = styleValue;
    } else {
        elementToStyle.style[styleAttribute] = styleValue;
    }
    console.log(`Styling ${elementToStyle} with ${styleAttribute} set to ${styleValue}`)
    console.log(elementToStyle.style[styleAttribute] = styleValue)
}

export function styleElementClass (elementClass, styleAttribute, styleValue){
    const elementToStyle = document.getElementByClassName(elementClass)
    elementToStyle.style[styleAttribute] = styleValue;
    console.log(`Styling ${elementToStyle} with ${styleAttribute} set to ${elementToStyle.style[styleAttribute]}`)
}

export function createNavAndBody (){
    // Grid Container to host nav bar and body
    makeElement("div", document.body, "", "page-container");
    styleElementID("page-container", "display", "grid");
    styleElementID("page-container", "grid-template-columns", "95vw");
    styleElementID("page-container", "grid-template-rows", "11vh 88vh");
    styleElementID("page-container", "padding-left", "2.5%");
    styleElementID("page-container", "padding-top", "1%");
    makeElement("div", document.getElementById("page-container"), "nav-bar-container", "home-nav-container");
    makeElement("div", document.getElementById("page-container"), "body-container", "home-body-container");
    // Make navbar a grid container for 4 buttons
    styleElementID("home-nav-container", "display", "flex");
    styleElementID("home-nav-container", "justify-content", "space-around");
    const buttonText = ["Home", "Meats", "Veggies", "Desserts"];
    for(let i = 0; i < 4; i++){
        makeElement("button", document.getElementById("home-nav-container"), "nav-button", `nav-button-${i}`);
        styleElementID(`nav-button-${i}`, "innerHTML", buttonText[i]);
    }
    // makeElement("p", document.getElementById("page-container"), "home-text", "home-text-intro");
    // const introText = "Finally, an amazing restaurant for all of your <b>artisan</b> grilled cheese needs!";
    // styleElementID("home-text-intro", "innerHTML", introText);
}

const styleVariable = document.body.style
styleVariable.flex