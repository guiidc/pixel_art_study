const colorPalette = document.querySelector('#color-palette');
const black = 'rgb(0, 0, 0)';
const pixelBoard = document.querySelector('#pixel-board');
const btnclearBoard = document.querySelector('#clear-board')

function createPaletteColor() {
    for (let i = 0; i < 4; i++){
        const div = document.createElement('div');
        if (i === 0){
            div.classList.add('selected');
        }
        div.addEventListener('click', getBackgroundColor);
        div.classList.add('color');
        colorPalette.appendChild(div);
        div.style.background = generateRandomColor(i);
    }
}
createPaletteColor();

function generateRandomColor(index) {
    if (index === 0) {
        return black
    }
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r}, ${g}, ${b})`;
}

function createPixels() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.addEventListener('click', paint);
        div.classList.add('pixel');
        pixelBoard.appendChild(div);
    }
}
createPixels();

function getBackgroundColor(event) { 
    selectedColor = event.target.style.background
    const selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    event.target.classList.add('selected')
} 

let selectedColor = black;

function paint(event){
    event.target.style.background = selectedColor
}

const white = 'rgb(255, 255, 255)';

function pixelsWhite(){
    const allpixels = document.querySelectorAll('.pixel')
    for (let i = 0; i < allpixels.length; i++) {
        allpixels[i].style.background = white
    }
}

btnclearBoard.addEventListener('click', pixelsWhite)