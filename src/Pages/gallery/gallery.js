const imageArray= ['./images/gallery-images/gallery1.jpg', 
                   './images/gallery-images/gallery2.jpg',
                   './images/gallery-images/gallery3.jpg',
                   './images/gallery-images/gallery4.jpg'];


let loadGallery = function() {
    initializeGallery();
    setGalleryButtons(imageArray);
    initialLoadImages();
    
    
}


let displayPos= 1;






function initializeGallery() {
    let tempContent = document.querySelector('.temp-content');
    const imageContainer1 = setGalleryImageContainers(0);
    const imageContainer2 = setGalleryImageContainers(1);
    const imageContainer3 = setGalleryImageContainers(2);
    

    let galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container')


    tempContent.classList.add('gallery-formatting');
    galleryContainer.append(imageContainer1, imageContainer2, imageContainer3);
    

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('gallery-button-container')
    tempContent.append(galleryContainer, buttonContainer);
    


}

 function setGalleryImageContainers(val) {
     const imageContainer = document.createElement('div');
     imageContainer.classList.add('gallery-image-container')
     imageContainer.id = "container-" + val
     
     return imageContainer
 }




function setGalleryButtons(imageArray) {
    const buttonContainer = document.querySelector('.gallery-button-container');
    const tempContent = document.querySelector('.temp-content');
    


    imageArray.forEach(function(element, index) {
        let button = document.createElement('button');
        if (index == 0) {
            button.classList.add('shaded-button') };
        button.classList.add('gallery-button');
        button.id = "gallery-image-" + index; 
        button.addEventListener("click", function() {buttonUpdateGallery(button)});
        buttonContainer.appendChild(button);
    })
    tempContent.appendChild(buttonContainer);
}

let findArrayPos = function(button) {
    let str = button.id;
    let lastChar = str[(str.length-1)];
    return lastChar
    
}

let buttonUpdateGallery = function(button) {
    let imagePositions = setImagePositions(findArrayPos(button));
    setButtonFormatting(button);
    displayCurrentImages(imagePositions);
    
    
}

let setButtonFormatting = function(button) {
    let formattedButton = document.querySelector('.shaded-button');
    if (formattedButton !== button) {
        formattedButton.classList = "gallery-button";
        button.classList.add('shaded-button');
    }

}


let updateGallery = function(array) {
    let tempContent = document.querySelector('temp-content');
    if (displayPos != (array.length - 1 )) {
        displayPos++;
    } else {displayPos = 0}
    

    

    

    
}


function setImagePositions(displayPos) {
    let leftImageSrc;
    let centerImageSrc;
    let rightImageSrc;
    let leftVal;
    let rightVal;
    let centerVal;
    displayPos = parseInt(displayPos);
    if ((displayPos !== (imageArray.length - 1 )) && (parseInt(displayPos) !== 0) ) {
        leftVal = displayPos -1;
        rightVal = parseInt(displayPos) + 1;
        leftImageSrc   = imageArray[leftVal];
        centerImageSrc = imageArray[(displayPos)];
        rightImageSrc  = imageArray[rightVal]
    } else if (displayPos == 0) {
        leftVal = ((imageArray.length) -1)
        leftImageSrc   = imageArray[leftVal];
        centerImageSrc = imageArray[0];
        rightImageSrc  = imageArray[1]

    } else {
        leftVal = (imageArray.length -2 );
        centerVal = (imageArray.length -1);
        leftImageSrc   = imageArray[leftVal];
        centerImageSrc = imageArray[centerVal];
        rightImageSrc  = imageArray[0]
    }
    return [leftImageSrc, centerImageSrc, rightImageSrc]
}




    






function setImage(src) {
    let createImage = document.createElement('img');
    createImage.classList.add('gallery-image');
    createImage.src = src;
    return createImage;
}

function initialLoadImages() {
    let leftBox = document.getElementById('container-0');
    let middleBox = document.getElementById('container-1');
    let rightBox = document.getElementById('container-2');

    let leftImageVal = (imageArray.length -1);
    let leftImage   =  setImage(imageArray[leftImageVal]);
    let middleImage =  setImage(imageArray[0]);
    let rightImage  =  setImage(imageArray[1]);
    
    leftImage.id = "image-left";
    middleImage.id = "image-middle";
    rightImage.id = "image-right";
    
    leftBox.appendChild(leftImage);
    middleBox.appendChild(middleImage);
    rightBox.appendChild(rightImage);



}

function displayCurrentImages(arr) {
    let leftImage = document.getElementById('image-left');
    let middleImage = document.getElementById('image-middle');
    let rightImage = document.getElementById('image-right');

    
    leftImage.src = arr[0];
    middleImage.src = arr[1];
    rightImage.src = arr[2];


}
    







export {loadGallery};