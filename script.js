var userInput = document.querySelector("#input-number")
var win = document.querySelector("#gg");
var lose = document.querySelector("#lose");
var triesLeft = document.querySelector("#tries-left");
var grammarCheck = document.querySelector("#grammar");
var secretNumber = Math.floor((Math.random() * 100) + 1); //random number generator from 1 to 100

console.log(win, lose, triesLeft, secretNumber);

// Try button's functionality
document.getElementById("try-button").addEventListener("click", function () {
    event.preventDefault();
    var userNumber = parseInt(userInput.value);

    //Error handligh
    if (isNaN(userNumber)) {
        alert("Please enter a valid number between 0 and 100");
    } else if (userNumber < 0 || userNumber > 100) {
        alert("Number must be between 0 and 100");
    }
        //If ethe input is okay do this:
    else {
        // Win message
        //I don't know how to reset it
        //without copying the code from the Reset Button
        if (userNumber == secretNumber) {
            alert(win.textContent);
            secretNumber = Math.floor((Math.random() * 100) + 1);
            triesLeft.textContent = "10";
            grammarCheck.textContent = "tries";
            console.log(win, lose, triesLeft, secretNumber);
        }
        //Less or more messages
        else if (userNumber > secretNumber) {
            alert("Less than that");
            triesLeft.innerText = parseInt(triesLeft.innerText) - 1;
        }
        else {
            alert("More than that");
            triesLeft.innerText = parseInt(triesLeft.innerText) - 1;
        }

        //Grammar check for "tries"
        if (triesLeft.textContent == 1) {
            grammarCheck.textContent = "try";
        }
        else if (triesLeft.textContent == 0) {
            alert(lose.textContent);
        }
        else {
            grammarCheck.textContent = "tries";
        }
    }
});
//Reset button's functionality
document.getElementById("reset-button").addEventListener("click", function () {
    secretNumber = Math.floor((Math.random() * 100) + 1);
    triesLeft.textContent = "10";
    grammarCheck.textContent = "tries";
    console.log(win, lose, triesLeft, secretNumber);
});
