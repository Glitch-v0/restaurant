import './styles.css';
import './reset.css';
import { homeTab } from './home';
import { meatTab } from './meat';
import { veggieTab } from './veggie';
import { dessertTab } from './dessert';
import {createNavAndBody, deleteElements } from './elementCreation';

createNavAndBody();
homeTab();
const homeButton = document.getElementById("nav-button-0");
const meatsButton = document.getElementById("nav-button-1");
const veggiesButton = document.getElementById("nav-button-2");
const dessertsButton = document.getElementById("nav-button-3");
homeButton.addEventListener("click", ()  => {
    deleteElements();
    homeTab();
})
meatsButton.addEventListener("click", ()  => {
    deleteElements();
    meatTab();
    })
veggiesButton.addEventListener("click", ()  => {
    deleteElements();
    veggieTab();
})
dessertsButton.addEventListener("click", ()  => {
    deleteElements();
    dessertTab();
})