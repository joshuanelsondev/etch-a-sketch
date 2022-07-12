const screen = document.getElementById('screen');
const slider = document.getElementById('slide');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
const blackPen = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const colorShader = document.getElementById('shader');
const clearScreen = document.getElementById('clear');
const colorPicker = document.getElementById('pickColor');
const colorButton = document.getElementsByClassName('btn');
let gridSize = 25;
let gridElement = [];
let divs = screen.getElementsByTagName('div');
let activeGrid = false;
let activePen = 'default';
let userPenColor;



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
    screen.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize*gridSize; i++) {
        gridElement[i] = document.createElement('div');
        gridElement[i].classList.add('gridBox');
        gridElement[i].addEventListener('click', currentPen);
        screen.appendChild(gridElement[i]);
        
    }  
    activeGrid = false; 
}

function toggleGridPen(){
    if(!activeGrid) {
        gridElement.forEach(cell => {
            cell.addEventListener('mouseover', currentPen);
        });
        activeGrid = true;
    } else {
        gridElement.forEach(cell => {
            cell.removeEventListener('mouseover', currentPen);
        });
        activeGrid = false;
    }
}


function currentPen(e) {
    
    switch(activePen) {
        case 'pickColor':
            e.target.style.backgroundColor = colorPicker.value;
        break;
        case 'black':
            e.target.style.backgroundColor = 'black';
        break;
        case 'rainbow':
            e.target.style.backgroundColor = 'pink'; //Create a function for rainbow colors
        break;
        case 'shader':
            e.target.style.backgroundColor = 'gray'; //Create a function that shades the color
        break;
        default:    
            e.target.style.backgroundColor = 'black';
    }
    
    
}


// Button events
blackPen.addEventListener('click', activatePen);

colorPicker.addEventListener('click', activatePen);

clearScreen.addEventListener('click', createGrid);

rainbow.addEventListener('click', activatePen);

colorShader.addEventListener('click', activatePen);

function activatePen(e) {
    activePen = e.target.id;
    active = true;
   
}


screen.addEventListener('click', toggleGridPen);

window.onload = () => {
    createGrid();
    
};