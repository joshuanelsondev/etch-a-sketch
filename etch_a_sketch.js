const screen = document.getElementById('screen');
const slider = document.getElementById('slide');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
let gridSize = 25;
sliderValueDisplay.innerHTML = slider.value;

// User range slider for creating the grid size
slider.oninput = function() {
    sliderValueDisplay.textContent = this.value;
    gridSize = this.value;
    createGrid();
    
};

function createGrid() {
    screen.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        // const row = screen.appendChild(document.createElement('div'));
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('gridBox');
            screen.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
            screen.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
            screen.appendChild(column);

        }
    }
}

