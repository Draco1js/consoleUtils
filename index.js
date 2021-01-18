const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');
const db = require('quick.db');
// db.set(`runtime`, 0)
// db.set(`errors`, 0)
// const runtime = db.fetch(`runtime`)      //Uncomment When Testing/Debugging
// const errors = db.fetch(`errors`)
// console.log(runtime + ` ` + errors)
let d = db.fetch(`runtime`);


console.log(`${chalk.cyan('Welcome to The Custom Console Better That Dragon G4mr\'s Console.')}`);
console.log(`${chalk.cyan('Please Enter a Command Or Type help for Help! You can only use it until your trial version ends!')}`);


while (d < 20) {
    const message = prompt(chalk.green('> '));
    const args = message.trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        require(`./commands/${cmd}`)
    }
    catch (e) {
        db.add('errors', 1)
        console.log(`That\'s not a valid command, but we will count this as a use`)
    }
    db.add(`runtime`, 1);
    let b = db.fetch(`runtime`);
    let c = 20 - b;
    d = db.fetch(`runtime`);
    console.log(`${chalk.yellow(`You have ${c} more commands until your trial version ends (${d} commands ran in total)`)}`);
    console.log(`Errors till now: ${db.fetch(`errors`)}`)
    prompt(chalk.green('Press the Enter  key to continue'))
    console.clear()

}

console.log(chalk.red.underline.bold('Your Free Trial has ended, please purchase a new license from Draco#9899 on Discord!'));
