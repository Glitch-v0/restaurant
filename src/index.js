import './styles.css';
import './reset.css';
import { homeTab } from './home';
import { meatTab } from './meat';
import {createNavAndBody, deleteElements } from './elementCreation';

createNavAndBody();
homeTab();
const homeButton = document.getElementById("nav-button-0");
const meatsButton = document.getElementById("nav-button-1");
const veggiesButton = document.getElementById("nav-button-2");
const dessertsButton = document.getElementById("nav-button-3");
homeButton.addEventListener("click", ()  => {
    console.log("Clicked home button!");
    deleteElements();
    homeTab();
})
meatsButton.addEventListener("click", ()  => 
    {console.log("Clicked meats button!");
    deleteElements();
    meatTab();
    })
veggiesButton.addEventListener("click", ()  => 
{console.log("Clicked veggies button!");
})
dessertsButton.addEventListener("click", ()  => 
{console.log("Clicked desserts button!");
})