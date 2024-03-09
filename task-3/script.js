// write a code to make a simple number guessing game.
let userGuess = +prompt("Guess a number");
while(userGuess != 12) {
    userGuess = +prompt("Wrong, Again guess a number");
}
alert("Congrats! You guess it right");

