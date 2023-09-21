const gameBoard = document.querySelector("#gameboard");

function generateBoard() {
    for (y=0; y<10; y++) {
        // create row
        let gameBoardRow = document.createElement("div");
        gameBoardRow.classList.add("boardRow");
        for (x=0; x<10; x++) {
            let cell = document.createElement("div");
            cell.classList.add("boardCell");
            gameBoardRow.appendChild(cell);
        }
        gameBoard.appendChild(gameBoardRow);
    }
}

generateBoard();

boardCells = document.querySelectorAll(".boardCell");
boardCells.forEach(function(cell) {
    cell.addEventListener("mouseover", event => {
        cell.classList.add("filled");
    });
    cell.addEventListener("mouseout", event => {
        cell.classList.remove("filled");
    });
});