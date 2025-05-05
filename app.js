let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let winmsg = document.querySelector(".winmsg")

let turnO = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) =>{
    box.addEventListener("click",(evt) => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        winCheck();
    })
});



const resetGame = () => {
    turnO = true;
    enableBox();
    winmsg.classList.add("hide");
}

const boxDisable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ".";
    }
}

const winShow = (msg) => {
    winmsg.innerText = `Congratulations, winner is ${msg}`;
    winmsg.classList.remove("hide");
};
const winCheck = () => {
    for(let patterns of winPattern){
        val1 = boxes[patterns[0]].innerText;
        val2 = boxes[patterns[1]].innerText;
        val3 = boxes[patterns[2]].innerText;

        if(val1 != "." && val2 != "." && val3 != "." && val1 == val2 && val2 == val3){
            winShow(val1);
            boxDisable();
        }
    }
}

reset.addEventListener("click", resetGame)