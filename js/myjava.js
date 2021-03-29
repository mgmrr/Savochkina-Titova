let width = 570;
let count = 1;
let list = document.querySelector('#slider');
let listElems = document.querySelectorAll('.slider_block');
let btnRight = document.querySelector('#btnRight');
let btnLeft = document.querySelector('#btnLeft');


let position = 0;
let current  = 0;


btnLeft.addEventListener('click', () => {
    if (current >= 1) {
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
        current--;
    }
});


btnRight.addEventListener('click', () => {
    if (current < listElems.length - 2) {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        current++;
    }
});