const db = require('quick.db');
const chalk = require('chalk');

module.exports = {
    name: "info",
    run: async (message, args) => {
        let b = db.fetch(`runtime`);
        let c = 20 - b;
        d = db.fetch(`runtime`);
        console.log(`${chalk.yellow(`You have ${c} more commands until your trial version ends (${d} commands ran in total)`)}`);
    }
}