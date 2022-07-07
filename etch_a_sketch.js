const screen = document.getElementById('screen');
const slider = document.getElementById('slide');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
const blackPen = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const colorShader = document.getElementById('shader');
const clearScreen = document.getElementById('clear');
const colorPicker = document.getElementById('pickColor');
let gridSize = 25;
let divs = screen.getElementsByTagName('div');
let currentPen = () => defaultPen();
sliderValueDisplay.innerHTML = slider.value;

// User range slider for creating the grid size
slider.oninput = function() {
    sliderValueDisplay.textContent = this.value;
    gridSize = this.value;
    createGrid();
    currentPen();

    
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
    currentPen();
    
}

// Button functions to allow user to choose pen color or clear the grid
function defaultPen(){
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', function() {this.style.backgroundColor = 'black'; });
       
    }
    
}

function userPen(){
    
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', function() {this.style.backgroundColor = colorPicker.value; });
    }
    currentPen = userPen;
}

// Button events
blackPen.addEventListener('click', defaultPen);

colorPicker.addEventListener('click', userPen);

clearScreen.addEventListener('click', createGrid);


window.onload = () => {
    createGrid();
    
};