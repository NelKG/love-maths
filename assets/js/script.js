// get the button elements and add event listeners to them
// /wait for the DOM to finish load before running the game


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}
function checkAnswer() {

}
function calculateCorrectAnswer() {


}
function incrementScore() {


}
function incrementWrongAnswer() {

}
function displayAdditionalQuestion() {

}
function displaySubtractQuestion() {


}
function displayMultiplyQuestion() {




