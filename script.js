const colorPalette = document.querySelector('#color-palette')

function createPaletteColor() {
    for (let i = 0; i < 4; i++){
        const div = document.createElement('div');
        div.classList.add('color');
        colorPalette.appendChild(div);
        div.style.background = generateRandomColor(i)
    }
}
createPaletteColor();

function generateRandomColor(){
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}