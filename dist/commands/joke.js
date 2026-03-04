const axios = require("axios");
class Joke {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("joke")
            .action(() => this.joking(this.api));
    }
    async joking(api) {
        try {
            const res = await axios.get(api);
            console.log(res.data.setup);
            setTimeout(() => { console.log(res.data.punchline); }, 3000);
        }
        catch (err) {
            console.log(err.data);
        }
    }
}
module.exports = Joke;
