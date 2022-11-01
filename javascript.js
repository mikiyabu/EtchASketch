const grid = document.querySelector('.grid'); 
const range = document.querySelector('input');
const p = document.querySelector('p');

for (let r = 0; r < range.value; r++) {
    for (let c = 0; c < range.value; c++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    }
} //creates an initial 16x16 grid

range.oninput = () => {
    p.textContent = range.value + ' x ' + range.value;
    grid.innerHTML = '';
    //resets the grid when user changes the range value

    for (let r = 0; r < range.value; r++) {
        for (let c = 0; c < range.value; c++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            square.classList.add('square');
            square.addEventListener('mouseover', () => {
                square.classList.add('active');
            });
        }
    }
} //allows for different grid sizes to be made by the user