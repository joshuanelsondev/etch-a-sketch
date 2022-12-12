const screen = document.getElementById('screen');
const slider = document.getElementById('slide');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
const blackPen = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const gray = document.getElementById('gray');
const clearScreen = document.getElementById('clear');
const colorPickerIcon = document.getElementById('pickColorIcon');
const colorPickButton = document.getElementById('colorPickButton');
const penOnButton = document.getElementById('penOn');
const penOffButton = document.getElementById('penOff');
let gridSize = 25;
let gridElement = [];
let divs = screen.getElementsByTagName('div');
let activeGrid = false;
let activePen = null;
let userPenColor;



sliderValueDisplay.innerHTML = slider.value;

// User range slider for creating the grid size
slider.oninput = function() {
    sliderValueDisplay.textContent = this.value;
    gridSize = this.value;
    createGrid();


    
};

//Grid functions

function createGrid() {
    screen.replaceChildren();
    screen.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize*gridSize; i++) {
        gridElement[i] = document.createElement('div');
        gridElement[i].classList.add('gridBox');
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
        penOnButton.style.cssText = 'background: gold;';
        penOffButton.style.cssText = 'background: white;';
       

    } else {
        gridElement.forEach(cell => {
            cell.removeEventListener('mouseover', currentPen);
        });
        activeGrid = false;
        penOnButton.style.cssText = 'background: white;';
        penOffButton.style.cssText = 'background: gold;';
    }
}


function currentPen(e) {
    
    switch(activePen) {
        case 'pickColorIcon':
            e.target.style.backgroundColor = colorPickerIcon.value;

        break;
        case 'black':
            e.target.style.backgroundColor = 'black';
        break;
        case 'rainbow':
            const randomColor = Math.floor(Math.random() * 360);
            e.target.style.backgroundColor = `hsl(${randomColor}, 100%, 50%)`; 
        break;
        case 'gray':
            e.target.style.backgroundColor = `gray`; 
        break;
        default:    
            e.target.style.backgroundColor = 'black';
    } 
}

function activatePen(e) {
    activePen = e.target.id; 
    blackPen.style.backgroundColor = 'white';
    rainbow.style.backgroundColor = 'white';
    gray.style.backgroundColor = 'white';
    e.target.style.backgroundColor = 'gold';
    colorPickerIcon.style.backgroundColor = 'white';

    
    if(activeGrid) {
        toggleGridPen();
        
    }
    
}


// Button events
blackPen.addEventListener('click', activatePen);

colorPickerIcon.addEventListener('click', activatePen);

clearScreen.addEventListener('click', createGrid);

rainbow.addEventListener('click', activatePen);

gray.addEventListener('click', activatePen);




screen.addEventListener('click', toggleGridPen);
screen.addEventListener('mouseleave', () => {
    if(activeGrid) {
        toggleGridPen();
    }
} );

window.onload = () => {
    createGrid();
    penOffButton.style.backgroundColor = 'gold';
    
};