let prompt = require('prompt-sync')();

let user_amswer = prompt("Enter a my favorite hero :");
let ans = "D boss";
let score = 10



if (user_amswer === ans) {
    console.log("Your Write 👍");
    console.log("Your current score :", score);
} else {
    console.log("Your wrong ⛔");
    score--
    console.log("Your current score :", score);
}

let animal = prompt("Enter a my favorite animal :");
let animal_ans = "Elephant";

if (animal === animal_ans) {
    console.log("Your Write 👍");
    console.log("Your current score :", score);
} else {
    console.log("Your wrong ⛔");
    score--
    console.log("Your current score :", score);
}
