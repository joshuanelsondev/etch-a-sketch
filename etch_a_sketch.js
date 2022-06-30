const slider = document.getElementById('slide');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
sliderValueDisplay.innerHTML = slider.value;

slider.oninput = function() {
    sliderValueDisplay.textContent = this.value;
};