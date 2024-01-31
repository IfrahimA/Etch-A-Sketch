
blockLength = 256;
for(let i = 0; i < blockLength; i++)
{
    let div = document.createElement('div');
    let mainDiv = document.querySelector(".two");
    div.textContent = "B";
    div.classList.add('block'); 
    mainDiv.appendChild(div); 
}


const button = document.querySelectorAll('block'); 
button.addEventListener('mouseover', () => 
{
    button.style.backgroundColor = 'black'; 
});






