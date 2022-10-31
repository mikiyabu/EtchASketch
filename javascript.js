const grid = document.querySelector('.grid'); 


for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.classList.add('active');
    });
}

