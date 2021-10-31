const elementContainer = (() => {
    const div  = document.createElement('div');
    const button= document.createElement('button');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p  = document.createElement('p');
    const img = document.createElement('img');
    const a  = document.createElement('a');



    return {
      div, 
      button, 
      h1, 
      h2, 
      p, 
      img, 
      a, 
    };
  })();


  let tempContent = document.querySelector('.temp-content');

  export {tempContent};
