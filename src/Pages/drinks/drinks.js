import { loadAbout } from "../about/about.js";
import {tempContent} from "../globals.js"

let image_Arrary = [];

function loadDrinks() {
    
    // append necessary classes to tempt content to make it work with whatever content is currently being used
    let tempContent = document.querySelector('.temp-content');
    let bodyContainer = document.querySelector('.body-container');
    bodyContainer.id = 'body-drinks';
    
    let gridContainer = document.createElement('div');
    gridContainer.classList.add('drink-formatting')
    tempContent.appendChild(gridContainer);
    tempContent.classList.add('temp-drinks');

    
    

    // each image is represented as an array
    // with it's source in position 0 
    // and it's name in position 1

    let image1 = ['./images/drinks/drink-image-1.jpg', "The Shine"];
    let image2 = ['./images/drinks/drink-image-2.jpg', "The Wavedash"] ;
    let image3 = ['./images/drinks/drink-image-3.jpg', "The Mang0"];
    let image4 = ['./images/drinks/drink-image-4.jpg', "Tech-Chase"];
    let image5 = ['./images/drinks/drink-image-5.jpg', "Firefox"];
    let image6 = ['./images/drinks/drink-image-6.jpg', "The Flub"];
    let image7 = ['./images/drinks/drink-image-7.jpg', "Firebird"];
    let image8 = ['./images/drinks/drink-image-8.jpg', "The Final Destination"];
    let imgArray = [image1, image2, image3, image4, image5, image6, image7, image8]

    loadImages(imgArray);
}





function loadImages(arr) {

   for (const element of arr) {
    let gridContainer = document.querySelector('.drink-formatting');
    let image = document.createElement('img');
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('image-container');
    image.src = element[0];
    image.classList.add('drink-image');
    containerDiv.id = element[1];
    containerDiv.addEventListener("mouseover", function() {toggleDrinkName(containerDiv)})
    containerDiv.addEventListener("mouseleave", function() {removeDrinkName(containerDiv)})
    containerDiv.appendChild(image);
    gridContainer.appendChild(containerDiv)
 }
}


function toggleDrinkName(containerDiv) {
    
    let nameAlreadyDisplayed = document.getElementById('current-image-name')
    if (!nameAlreadyDisplayed) {
        let contentbox = document.createElement('div');
        let textBox = document.createElement('a');
        contentbox.id = "current-image-name";
        textBox.textContent = containerDiv.id;
        contentbox.appendChild(textBox);
        containerDiv.appendChild(contentbox);
    }
    
}

function removeDrinkName() {
    console.log('trying to remove drink name');
    let drinkName = document.getElementById('current-image-name');
    drinkName.remove();

    
}


export{loadDrinks}

