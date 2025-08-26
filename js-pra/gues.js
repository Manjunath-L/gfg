let prompt = require('prompt-sync')();

let random_number = Math.floor(Math.random() * 10 + 1); // random number 1–10
let user_guess_number = Number(prompt("Enter a number: "));

while (user_guess_number !== random_number) {
    if (user_guess_number < random_number) {
        console.log("Your guess is smaller.");
    } else if (user_guess_number > random_number) {
        console.log("Your guess is greater.");
    }
    user_guess_number = Number(prompt("Try again: "));
}

console.log("🎉 Correct! The number was:", random_number);
