const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');
const db = require('quick.db');

let c;
let b = prompt('Please enter a number');
let a = prompt('Please enter a second number');

let choice = prompt('What do you want to do? (Options: Add, subtract, multiply, divide)');

if (choice.toLowerCase === 'add') {
    c = b + a
}
else if (choice.toLowerCase === 'subtract') {
    if (b > a) {
        c = a - b
    } else if (a >= b) {
        c = b - a
    }
}
else if (choice.toLowerCase() === 'multiply') {
    c = b * a
}
else if (choice.toLowerCase() === 'divide') {
    if (b >= a) {
        c = a / b
    }
    else if (a > b) {
        c = b / a
    }
}
console.log(`Result: ` + c)