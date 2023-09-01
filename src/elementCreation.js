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
    makeElement("div", document.body, "page-container", "page-container-home");
    makeElement("div", document.getElementById("page-container-home"), "nav-bar-container", "nav-container");
    makeElement("div", document.getElementById("page-container-home"), "body-container", "body-container");
    // Make navbar a grid container for 4 buttons
    const buttonText = ["Home", "Meats", "Veggies", "Desserts"];
    for(let i = 0; i < 4; i++){
        makeElement("button", document.getElementById("nav-container"), "nav-button", `nav-button-${i}`);
        styleElementID(`nav-button-${i}`, "innerHTML", buttonText[i]);
    }
}

export function deleteElements (){
   var parent = document.querySelector(".body-container")
   parent.replaceChildren([]);
}
const styleVariable = document.body.style
styleVariable.flex