


function loadAbout() {
    let tempContent = document.querySelector('.temp-content')
    let bodyContainer = document.querySelector('.body-container');
    
    bodyContainer.id = 'body-about';
    const aboutContainer1 = document.createElement('div');
    const aboutContainer2 = document.createElement('div');
    const aboutContainer3 = document.createElement('div');

    aboutContainer1.classList.add('about-container-1');
    aboutContainer2.classList.add('about-container-2');
    aboutContainer3.classList.add('about-container-3');



    const headingQuote = document.createElement('h1');
    headingQuote.classList.add('about-title');
    headingQuote.textContent = "The Shine is a place that makes you feel like home."



    
    const meleeDescription = document.createElement('p');
    meleeDescription.classList.add('melee-description');
    meleeDescription.textContent = `Super Smash Bros Melee, released over 20 years ago,
                                    remains popular among it's diehard fans to this day. 
                                    Though intially conceived as a party game, the game's
                                    hidden depth appealed to competitive gamers.`




    const meleeImage = document.createElement('img');
    meleeImage.classList.add('melee-image')
    let meleeContainer = document.createElement('div');
    meleeContainer.classList.add('melee-container');


    meleeImage.src = "./images/Super_Smash_Bros_Melee_box_art.png"
    meleeContainer.append(meleeDescription, meleeImage);
    aboutContainer1.append(headingQuote, meleeContainer);
    


    const whyBarHeading = document.createElement('h3');
    const whyBarContent = document.createElement('div');
    whyBarContent.classList.add('why-bar-container')

    whyBarHeading.textContent = "But Why a Bar?";
    whyBarHeading.classList.add('why-bar-heading');
    



    

    const whyBarPara    = document.createElement('p');
    whyBarPara.classList.add('why-bar-para');
    whyBarPara.textContent = `Melee players have grown up and entered the workforce. When they need a place
                              to blow off some steam and play some smash, we will be there for them.
   `

    const tourneyCrowdPic = document.createElement('img');
    tourneyCrowdPic.src = "./tournament-pic.jpg"
    tourneyCrowdPic.classList.add('container-2-pic')

    const socialDrinkingPic = document.createElement('img');
    socialDrinkingPic.src = "./social-drinking.jpg";
    socialDrinkingPic.classList.add('container-2-pic')
    whyBarContent.append(tourneyCrowdPic, whyBarPara, socialDrinkingPic);


    const quoteContainer = document.createElement('div');
    const barQuote = document.createElement('p');
    const barAttribution = document.createElement('p')
    barAttribution.textContent = "-Your friend reccomending The Shine";
    barQuote.textContent = ` I didn't know 
    that I needed the Shine Bar until I was blessed enough to have it in my life.`
    barQuote.classList.add('bar-quote');
    barAttribution.classList.add('bar-attribution')

    quoteContainer.append(barQuote, barAttribution);

    aboutContainer1.appendChild(meleeContainer);
    aboutContainer2.append(whyBarHeading, whyBarContent);
    aboutContainer3.appendChild(quoteContainer);

    

    
    tempContent.append(aboutContainer1, aboutContainer2, aboutContainer3)
     

     




}


export{loadAbout}