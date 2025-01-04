let board = document.querySelector('.board');
const boardSize = document.querySelector('#board-size');
const btnSize = document.querySelector('.btn-size');
const sizeError = document.querySelector('.size-error');




function renderBoard(size){
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++){
        let boardItem = document.createElement('div');
        boardItem.classList.add(`boardItem`);
        boardItem.style.height = `20px`;
        boardItem.style.backgroundColor = 'lightGray';
        board.appendChild(boardItem)
    }
}

renderBoard(32)

btnSize.addEventListener('click', ()=>{
    const size = boardSize.value;
    if(size >= 16 && size <= 100){  
        renderBoard(size);

    } else{
        sizeError.textContent = `The size should be at least 16 and not higher than 100`;

        size.sizeError.style.color = 'crimson'
    }
});



