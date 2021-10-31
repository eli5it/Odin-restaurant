import './style.css';
import { loadInitialPage } from './pageLoad.js';
import {loadAbout} from "./Pages/about/about.js"
import {loadGallery} from "./Pages/gallery/gallery.js"
import {loadContact} from "./Pages/contact/contact.js"
import {loadEvents} from "./Pages/events/events.js"
import {loadDrinks} from "./Pages/drinks/drinks.js"
import {loadHome} from "./Pages/home/home.js"








function setButtonListeners() {
    let buttons= document.querySelectorAll('.nav-buttons');
    buttons.forEach(button => button.addEventListener("click", function() {switchPage(button)}))
}


function switchPage(button) {
    var page = button.id
    let tempContent = document.querySelector('.temp-content');
    let bodyContainer = document.querySelector('.body-container');
    bodyContainer.id = "";
    deleteChildNodes(tempContent);
    tempContent.className= 'temp-content'
    switch (page) {
        case 'Home':
            loadHome()
            break;
        case 'Drinks':
            loadDrinks();
            break;
        case 'Events':
            loadEvents()
            break;
        case 'Gallery':
            loadGallery()
            break;
        case 'About':
            loadAbout();
            break;
        case 'Contact':
            loadContact()
            break;
        default:
            break;
    }

}

function deleteChildNodes(parentNode) {
    // deletes legitimately everything
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild)
    }
}


loadInitialPage();
setButtonListeners();




