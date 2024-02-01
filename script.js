let blockSize = 20;

const grid = document.querySelector('.grid');
const slider = document.getElementById('slider-picker');
const sliderText = document.querySelector('.slidetext');
let block = document.querySelectorAll('.block');
let sliderValue = slider.value; 

getGrid(16); 
function getGrid(val)
{
    for(let i = 0; i < val * val; i++)
    {
        const grid = document.querySelector('.grid');
        const div = document.createElement('div'); 
        let math = 320/sliderValue
        div.style.height = math + 'px'; 
        div.style.width = math + 'px';
        div.className = 'block';
        grid.appendChild(div);
    }
    let block = document.querySelectorAll('.block');
    let colorButton = document.getElementById('color-picker');
    block.forEach(function (element) {element.addEventListener('mouseover', () => {
    let cB = colorButton.value; 
    element.style.backgroundColor = cB; 
    })
}); 
}

function clearGrid()
{
    grid.innerHTML = ''; 
}

slider.addEventListener('mousemove', () => 
{
    clearGrid(); 
    sliderValue = slider.value; 
    sliderText.textContent = sliderValue + " x " + sliderValue;
    getGrid(sliderValue); 
}); 

let clearButton = document.getElementById('button-clear'); 
clearButton.addEventListener('click', () => {
    let block = document.querySelectorAll('.block');
    block.forEach(function (e) {e.style.backgroundColor = 'white'})
}); 



