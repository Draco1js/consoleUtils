const { readdirSync } = require("fs");
const fs = require("fs");

module.exports = (gotCommand, gotAliases) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`./commands/${dir}/${file}`);

            if (pull.name) {
                gotCommand.set(pull.name, pull);
            } else {
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach(alias => gotAliases.set(alias, pull.name));
            }
        }
    });


}