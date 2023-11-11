// variables for winner
var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");
var div4 = document.querySelector(".div4");
var div5 = document.querySelector(".div5");
var div6 = document.querySelector(".div6");
var div7 = document.querySelector(".div7");
var div8 = document.querySelector(".div8");
var div9 = document.querySelector(".div9");


var clearButton = document.querySelector(".btn-clear")
var divs = document.querySelectorAll(".div");
var currentPlayer = "X";

function check(event) {
    if (event.target.innerText === "") {
        event.target.innerText = currentPlayer;

        // Toggle between "X" and "O" for the next turn
        if (currentPlayer === "X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }
    }

    //winner combinations
    function winner(para1, para2, para3) {
        if (
            (para1.innerText === para2.innerText) &&
            (para2.innerText === para3.innerText) &&
            (para3.innerText === "X" || para3.innerText === "O")) {

            alert("You win!")
        }
    }

    winner(div1, div2, div3);
    winner(div4, div5, div6);
    winner(div7, div8, div9);
    winner(div1, div4, div7);
    winner(div2, div5, div8);
    winner(div3, div6, div9);
    winner(div1, div5, div9);
    winner(div3, div5, div7);

}

divs.forEach(function (div) {
    div.addEventListener("click", check);
});

function clearContent() {
    divs.forEach(function (div) {
        div.innerText = "";
    })
}

clearButton.addEventListener("click", clearContent);