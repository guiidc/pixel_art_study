const colorPalette = document.querySelector('#color-palette')
const black = 'rgb(0, 0, 0)';

function createPaletteColor() {
    for (let i = 0; i < 4; i++){
        const div = document.createElement('div');
        div.classList.add('color');
        colorPalette.appendChild(div);
        div.style.background = generateRandomColor(i)
    }
}
createPaletteColor();

function generateRandomColor(index){
    if (index === 0) {
        return black
    }
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}