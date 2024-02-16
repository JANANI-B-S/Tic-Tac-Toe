document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".board");
    const resetButton = document.getElementById("reset");

    let currentPlayer = "X";
    const cells = document.querySelectorAll(".board > span");

    cells.forEach((cell, index) => {
        cell.addEventListener("click", function () {
            if (!cell.textContent && !checkWinner()) {
                cell.textContent = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                if (checkWinner()) {
                    board.classList.add("win");
                }
            }
        });
    });

    resetButton.addEventListener("click", function () {
        cells.forEach((cell) => {
            cell.textContent = "";
        });
        board.classList.remove("win");
        currentPlayer = "X";
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent
            ) {
                return true;
            }
        }

        return false;
    }
});
