const grid = document.querySelector('.grid'); 
const range = document.querySelector('input');
const p = document.querySelector('p');

for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.classList.add('active');
    });
}

range.oninput = () => {
    p.textContent = range.value + ' x ' + range.value;
}
