const container = document.getElementById('container');
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
    container.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('gridBox');
            container.appendChild(column);
        }
    }
    
}

