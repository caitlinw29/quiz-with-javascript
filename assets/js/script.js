var startButton = document.getElementById("start-button");
var mainPage = document.getElementById("main-page");


startButton.addEventListener("click", buttonClick);

function buttonClick () {
    console.log("You clicked the button!");
    mainPage.textContent = "You clicked the button";
}



