let board = document.querySelector('.board');
const boardSize = document.querySelector('.board-size');
const btnSize = document.querySelector('.btn-size');




function renderBoard(){
    
    board.style.gridTemplateColumns = `repeat(32, 1fr)`;
    board.style.gridTemplateRows = `repeat(32, 1fr)`;

    for(let i = 0; i < (32 * 32); i++){
        let boardItem = document.createElement('div');
        boardItem.classList.add(`boardItem`);
        boardItem.style.height = `32px`;
        boardItem.style.backgroundColor = 'lightGray';
        board.appendChild(boardItem)
    }
}

renderBoard()
