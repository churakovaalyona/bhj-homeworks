const image = document.querySelector('.clicker__cookie');
const clickCountSpan = document.getElementById('clicker__counter');

let isZoomed = false;
let clickCount = 0;

image.addEventListener('click', () => {
    isZoomed = !isZoomed;

    if (isZoomed) {
        image.style.width = '300px'; 
    } 
    else{
        image.style.width = '200px'; 
    }

    clickCount++;
    clickCountSpan.textContent = clickCount;
});

