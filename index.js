let turn = "X";
var gameOver = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let textBox = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach((e) => {
        if ((textBox[e[0]].innerText !== "") && (textBox[e[0]].innerText === textBox[e[1]].innerText) && (textBox[e[2]].innerText === textBox[e[1]].innerText)) {
            document.getElementById('won').style.display = "block";
            gameOver = true;
            document.getElementById('won').innerText = textBox[e[1]].innerText + " WON 😎";
            document.getElementById('wonGif').style.width = "13rem";
        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    var boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementById("infoTurn").innerText = turn + "'s Turn"
            }
            else {
                document.getElementById("infoTurn").style.display = "none";
            }
        }
    }
    )

})