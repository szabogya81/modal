const btn = document.querySelector('.showModal');
const overlayDiv = document.createElement('div');
overlayDiv.className = 'overlay';
const modalDiv = document.getElementById('modal');
window.addEventListener('click', outsideClick);

function closeModal() {
    fadeOut(modalDiv);
       setTimeout(()=>{
        modalDiv.classList.remove('modal--active');
        document.body.removeChild(overlayDiv);
       }, 1300)   
}

function showModal() {
    document.body.appendChild(overlayDiv);
    fadeIn(modalDiv);
    modal.classList.add('modal--active');
    modalDiv.focus();
}

function fadeIn(element) { 
    let opacity = 0;

    let intervalId = setInterval(function() {
        if (!element.style.opacity) { 
            element.style.opacity = 1; 
        }
        if(opacity <= 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalId); 
        }
    }, 100); 
}

function fadeOut(element) { 
    let opacity = 1;

    let intervalID = setInterval(function () {          
        if (!element.style.opacity) { 
            element.style.opacity = 1; 
        }
        if (element.style.opacity > 0) { 
            element.style.opacity -= 0.1; 
        } else { 
            clearInterval(intervalID); 
        }          
    }, 100);
} 

function outsideClick(e) {
    if(e.target === overlayDiv) {
      closeModal();
   }
}
