
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
// let gameState = Array(9).fill(false);
let boxes = document.querySelectorAll(".box");
let player1 = true;
// let won=false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // box.innerText="hry";
        //dont add more para if already there is move...
        if (box.classList.contains('played')) {
            return;
        }
        let paragraph = document.createElement("p");
        // paragraph.innerText="hi";
        paragraph.innerText = addMoveToBoard();
        box.append(paragraph);

        // Mark the box as played by adding the 'played' class
        box.classList.add('played');

        let sign=checkIfPlayerWon();
        if(sign!=null){
            let player= sign=="O"?"Player 1": "Player 2";
            let resultBoard= document.createElement("h3");
            resultBoard.innerText=`${player} has won the match`;
            let resultDiv= document.querySelector("#result");
            resultDiv.append(resultBoard);
        }
    })
})
const addMoveToBoard = () => {
    if (player1) {
        player1 = false;
        return "O";
    } else {
        player1 = true;
        return "X";
    }
};
const checkIfPlayerWon = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let var1 = boxes[pattern[0]].innerText;
        let var2 = boxes[pattern[1]].innerText;
        let var3 = boxes[pattern[2]].innerText;
        if (var1 != "" && var2 != "" && var3 != "") {
            if ((var1 === var2) && (var2 === var3)) {
                console.log(`${var1} won the match`);
                // won=true;
                return var1;
            }
        }
    }
    return null;
    // console.log(boxes[2]);
}