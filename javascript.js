const grid = document.querySelector('.grid');

const square = document.createElement('div');
square.classList.add('square');

for (let i = 0; i < 16; i++) {
    grid.appendChild(square.cloneNode(true));
}