const grid = document.querySelector('.grid'); 
for(let i = 0; i < 4096; i++)
{
    const div = document.createElement('div'); 
    div.style.height = '5px'; 
    div.style.width = '5px';
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

let clearButton = document.getElementById('button-clear'); 
clearButton.addEventListener('click', () => {
    block.forEach(function (e) {e.style.backgroundColor = 'white'})
}); 



