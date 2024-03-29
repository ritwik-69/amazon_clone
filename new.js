let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let turn0 = true;
let count=0;
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");


}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.style.color="blue"
            box.innerText = "O";
            turn0 = false;
            count++;

        }
        else {
            box.style.color="#b0413e";
            box.innerText = "X"
            turn0 = true;
            count++;

        }
        box.disabled = true;

        checkwinner();
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}


const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos1val != "" && pos1val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }

    }

};

newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



