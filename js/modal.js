const btn = document.querySelector('.showModal');
const overlayDiv = document.createElement('div');
overlayDiv.className = 'overlay';

const modalDiv = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__closeButton');
const modalNo = document.querySelector('.footer__noButton');

btn.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);
modalNo.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function closeModal() {
    fadeOut(modalDiv);
       setTimeout(() => {
        modalDiv.classList.remove('modal--active');
        document.body.removeChild(overlayDiv);
       }, 300)   
}

function showModal() {
    document.body.appendChild(overlayDiv);
    fadeIn(modalDiv);
    modal.classList.add('modal--active');
    modalClose.focus();
}

function fadeIn(element) { 
    let opacity = 0;
    modalClose.focus();
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
    }, 30);

    modal.classList.add('modal--active');
    modal.focus();
    modalClose.focus();
}

function fadeOut(element) { 
    let intervalID = setInterval(function () {          
        if (!element.style.opacity) { 
            element.style.opacity = 1; 
        }
        if (element.style.opacity > 0) { 
            element.style.opacity -= 0.1; 
        } else { 
            clearInterval(intervalID); 
        }          
    }, 30);
} 

function outsideClick(e) {
    if(e.target === overlayDiv) {
      closeModal();
   }
}
