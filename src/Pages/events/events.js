



let loadEvents = function() {
    let tempContent= document.querySelector('.temp-content');
    tempContent.classList.add('temp-events');
    
    let bodyContent = document.querySelector('.body-container');
    bodyContent.id = "body-events";


    const Calendar = document.createElement('iframe');
    Calendar.src = "https://calendar.google.com/calendar/embed?src=f3mmivlmjr62e8n64ophj2n4nk%40group.calendar.google.com&ctz=America%2FNew_York";
    Calendar.style="border: 0" 
    Calendar.width="1000" 
    Calendar.height="600" 
    Calendar.frameborder="0" 
    
    
    
    tempContent.appendChild(Calendar)
    
}



export {loadEvents};