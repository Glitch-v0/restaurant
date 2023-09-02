import './styles.css';
import './reset.css';
import { homeTab } from './home';
import { meatTab } from './meat';
import { veggieTab } from './veggie';
import { dessertTab } from './dessert';
import {createNavAndBody, deleteElements } from './elementCreation';

(function () {
    createNavAndBody();
    homeTab();
    const homeButton = document.getElementById("nav-button-0");
    const meatsButton = document.getElementById("nav-button-1");
    const veggiesButton = document.getElementById("nav-button-2");
    const dessertsButton = document.getElementById("nav-button-3");
    function tabClick (button, tabFunction) {
        button.addEventListener("click", ()  => {
        deleteElements();
        tabFunction();
    })
    }
    tabClick(homeButton, homeTab);
    tabClick(meatsButton, meatTab);
    tabClick(veggiesButton, veggieTab);
    tabClick(dessertsButton, dessertTab);
})()