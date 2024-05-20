let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let new_game = document.querySelector(".new-game-btn");
let msg = document.querySelector(".msg")
let msg_contains = document.querySelector(".msg-container");
let turnO = true;

let winarr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset_game = () => {
    turnO = true;
    enableboxes();
    msg_contains.classList.add("hide");
}

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("button was pressed");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwin();
    })
});

const displaywin = (winner) => {
    msg.innerHTML = `<p> Congratulations, Winner is ${winner} !!!!! <i style="color : #7B0323; margin-top : 15px;"class="fa-solid fa-heart"></i> </p>`;
    msg_contains.classList.remove("hide");
};

function checkwin() {
    for(let patterns of winarr) {
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;
        
        if(posval1 != "" && posval2 != "" && posval3 != "") {
            if(posval1 === posval2 && posval2 === posval3) {
                console.log("WINNER !" , posval1);
                displaywin(posval1);
            }
        }
    }
} 

reset_btn.addEventListener("click" , reset_game);
new_game.addEventListener("click" , reset_game);let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let new_game = document.querySelector(".new-game-btn");
let msg = document.querySelector(".msg")
let msg_contains = document.querySelector(".msg-container");
let turnO = true;

let winarr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset_game = () => {
    turnO = true;
    enableboxes();
    msg_contains.classList.add("hide");
}

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("button was pressed");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwin();
    })
});

const displaywin = (winner) => {
    msg.innerHTML = `<p> Congratulations, Winner is ${winner} !!!!! <i style="color : #7B0323; margin-top : 15px;"class="fa-solid fa-heart"></i> </p>`;
    msg_contains.classList.remove("hide");
};

function checkwin() {
    for(let patterns of winarr) {
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;
        
        if(posval1 != "" && posval2 != "" && posval3 != "") {
            if(posval1 === posval2 && posval2 === posval3) {
                console.log("WINNER !" , posval1);
                displaywin(posval1);
            }
        }
    }
} 

reset_btn.addEventListener("click" , reset_game);
new_game.addEventListener("click" , reset_game);
