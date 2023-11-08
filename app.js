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
        if(currentPlayer==="X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }
    }

    //winner combinations

    if (

        (div1.innerText === "X" && div2.innerText === "X" && div3.innerText === "X" ||
            div1.innerText === "O" && div2.innerText === "O" && div3.innerText === "O") ||

        (div4.innerText === "X" && div5.innerText === "X" && div6.innerText === "X" ||
            div4.innerText === "O" && div5.innerText === "O" && div6.innerText === "O") ||

        (div7.innerText === "X" && div8.innerText === "X" && div9.innerText === "X" ||
            div7.innerText === "O" && div8.innerText === "O" && div9.innerText === "O") ||

        (div1.innerText === "X" && div4.innerText === "X" && div7.innerText === "X" ||
            div1.innerText === "O" && div4.innerText === "O" && div7.innerText === "O") ||

        (div2.innerText === "X" && div5.innerText === "X" && div8.innerText === "X" ||
            div2.innerText === "O" && div5.innerText === "O" && div8.innerText === "O") ||

        (div3.innerText === "X" && div6.innerText === "X" && div9.innerText === "X" ||
            div3.innerText === "O" && div6.innerText === "O" && div9.innerText === "O") ||

        (div1.innerText === "X" && div5.innerText === "X" && div9.innerText === "X" ||
            div1.innerText === "O" && div5.innerText === "O" && div9.innerText === "O") ||

        (div3.innerText === "X" && div5.innerText === "X" && div7.innerText === "X" ||
            div3.innerText === "O" && div5.innerText === "O" && div7.innerText === "O")
    )

    {
        alert("Winner!");
    }

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