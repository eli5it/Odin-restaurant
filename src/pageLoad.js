// module that loads the initial page







const loadInitialPage = function() {
    // elements in header

    const base = document.querySelector('.body');

    


    const contentDiv = document.getElementById('content');
    

    


    const header  = document.createElement('div');
    header.id = "header";

    const title = document.createElement('div');
    title.classList.add('title');



    const titleFlex = document.createElement('div');
    titleFlex.classList.add("title-flex");


    const shineImage = document.createElement('img');

    shineImage.classList.add("shine-image");
    shineImage.src = "./images/shine.png";

    const shineImage2 = document.createElement('img');
    shineImage2.src = "./images/shine.png";
    shineImage.classList.add("shine-image");
    shineImage2.classList.add("shine-image");

    const titleHeading = document.createElement('h1');
    titleHeading.textContent = "The Shine";

    const titleSubheading = document.createElement('h2')
    titleSubheading.textContent = "The first Melee themed bar in the world";


    titleFlex.append(shineImage2, titleHeading, shineImage);
    title.append(titleFlex,titleSubheading);
    header.appendChild(title);
    
    




    const buttonContainer = document.createElement('div');
    buttonContainer.id = "button-container";

    const homeButton = setNavButton('Home');
    const drinksButton = setNavButton('Drinks')
    const eventsButton = setNavButton('Events');
    const galleryButton = setNavButton('Gallery');
    const aboutButton = setNavButton('About');
    const contactButton = setNavButton('Contact');

    


    buttonContainer.append(homeButton, drinksButton, eventsButton, galleryButton, aboutButton, contactButton)

    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add("body-container");

    const tempContent = document.createElement('div');
    tempContent.classList.add("temp-content");

    
    bodyContainer.appendChild(tempContent);
    // bodyContainer.appendChild(backgroundImage)




    
    const leftText = document.createElement('a');
    const rightText = document.createElement('a');
    leftText.classList.add('footer-left-text')
    const rightTextContainer = document.createElement('a');

    rightTextContainer.classList.add('footer-right-text')
    
    const footer = document.createElement('div');
    footer.id = "footer";
    const eli5it = document.createElement('p');
    eli5it.classList.add('footer-text');
    
    leftText.textContent = "Check me out on Github!"
    rightText.textContent = "eli5it" ;

    const gitLink = document.createElement('a')
    gitLink.href = "https://github.com/eli5it";

    const githubImage = document.createElement('img');
    githubImage.id = "github-logo";
    githubImage.src = "./images/GitHubLogo.png"


    gitLink.appendChild(githubImage);
    rightTextContainer.append(rightText, gitLink);
    eli5it.append(leftText, rightTextContainer);

    footer.appendChild(eli5it);
    
    
    contentDiv.append(header, buttonContainer, bodyContainer, footer);
    
    
}

function setNavButton(id) {
    const navButton = document.createElement('button');
    navButton.id = id;
    navButton.textContent = id
    navButton.classList.add("nav-buttons");
    return navButton;
}




export { loadInitialPage};

