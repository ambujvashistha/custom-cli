const chalk = require("chalk");
class Greet_Command {
    constructor(name, program) {
        this.program = program;
        this.name = name;
    }
    register() {
        this.program
            .command("greet <name>")
            .action((name) => this.greet(name));
    }
    greet(name) {
        console.log(chalk.green(`Hello ${name}`));
    }
}
module.exports = Greet_Command;
