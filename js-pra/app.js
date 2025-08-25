let prompt = require('prompt-sync')();

let user_amswer = prompt("Enter a my favorite hero :");
let ans = "D boss";

if (user_amswer === ans) {
    console.log("Your Write 👍");
} else {
    console.log("Your wrong ⛔");
}