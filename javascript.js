const board = document.querySelector('.board'); 
const range = document.querySelector('input');
const p = document.querySelector('p');
const reset = document.querySelector('.reset');

// board.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
// board.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;

const newBoard = function() {
    for (let r = 0; r < range.value * range.value; r++) {
        const square = document.createElement('div');
        board.appendChild(square);
        square.classList.add('square');

        board.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;

        if (range.value >= 44) {
            square.classList.add('smallSquare');
        }

        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    } //creates an initial 16x16 grid
}

newBoard();

range.oninput = () => {
    p.textContent = range.value + ' x ' + range.value;
    board.innerHTML = '';
    //resets the grid when user changes the range value

    newBoard();
} //allows for different grid sizes to be made by the user