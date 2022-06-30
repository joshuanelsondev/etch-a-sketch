const screen = document.getElementById('screen');
const slider = document.getElementById('slide');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
let gridSize = 5;
sliderValueDisplay.innerHTML = slider.value;

slider.oninput = function() {
    sliderValueDisplay.textContent = this.value;
    gridSize = this.value;
    createGrid();
    
};

function createGrid() {
    screen.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        const row = screen.appendChild(document.createElement('div'));
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('gridBox');
            screen.appendChild(column);
        }
    }
}

