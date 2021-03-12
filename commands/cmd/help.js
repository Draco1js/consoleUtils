const chalk = require('chalk');

module.exports = {
    name: "help",
    run: async () => {
        console.log(chalk.red('Help Menu!'))
        console.log(`1. Help     3.Info`)
        console.log(`2. Maths    4.Ping`)
    }
}