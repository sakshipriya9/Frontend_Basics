document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false;
    let arr = Array(9).fill(undefined);
    let result = document.getElementById("result");
    
    outer.addEventListener('click', (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        if (cell.getAttribute("data-clicked")) {
            return;
        }
        cell.setAttribute("data-clicked", "true");
        if (chance == true) {
            cell.textContent = "X";
            arr[cellNumber] = "X";
            if (winningCombo("X")) {
                result.textContent = "X wins 🤩🤩!!";
                resetGame();
                return;
            }
        } else {
            cell.textContent = "O";
            arr[cellNumber] = "O";
            if (winningCombo("O")) {
                result.textContent = "O wins 🤩🤩!!";
                resetGame();
                return;
            }
        }
        chance = !chance;
    });

    function winningCombo(char) {
        if (
            (arr[0] == char && arr[1] == char && arr[2] == char) ||
            (arr[3] == char && arr[4] == char && arr[5] == char) ||
            (arr[6] == char && arr[7] == char && arr[8] == char) ||
            (arr[0] == char && arr[3] == char && arr[6] == char) ||
            (arr[1] == char && arr[4] == char && arr[7] == char) ||
            (arr[2] == char && arr[5] == char && arr[8] == char) ||
            (arr[0] == char && arr[4] == char && arr[8] == char) ||
            (arr[2] == char && arr[4] == char && arr[6] == char)
        ) {
            return true;
        }
        return false;
    }

    function resetGame() {
        arr = Array(9).fill(undefined);
        let cells = document.querySelectorAll('.inner');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.removeAttribute('data-clicked');
        });
    }
});