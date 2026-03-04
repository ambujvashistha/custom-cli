#!/usr/bin/env node
const cli_engine = require("./cliEngine/engine");
const greet_Command = require("./commands/greet");
const joke = require("./commands/joke");
const engine = new cli_engine();
engine.registerCommands([greet_Command, joke]);
engine.run();
// const {Command} = require("commander")
// const axios = require("axios")
// const program = new Command()
// program
// .command("greet <name>")
// .action((name)=>{console.log(`hello ${name}`)})
// program
// .command("hello")
// .action(()=>{console.log("hello ambuj how are we doing today..?")})
// program
// .command("add <n1> <n2>")
// .description("adding two numbers")
// .action(
//     (n1,n2)=>{
//     const result = Number(n1)+Number(n2)
//     console.log(`${result}`)
// })
// program
// .command("sub <n1> <n2>")
// .description("subtracting number2 from number1")
// .action(
//     (n1,n2)=>{
//     const result = Number(n1)-Number(n2)
//     console.log(`${result}`)
// })
// program
// .command("multiply <n1> <n2>")
// .description("multiplying two numbers")
// .action(
//     (n1,n2)=>{
//     const result = Number(n1)*Number(n2)
//     console.log(`${result}`)
// })
// program
// .command("div <n1> <n2>")
// .description("dividing number1 by number2")
// .action(
//     (n1,n2)=>{
//     if (n2!=0){
//     const result = Number(n1)/Number(n2)
//     console.log(`${result}`)
//     }else{
//     console.log(`Can't divide by 0`)
//     }
// })
// program
// .command("square <n1>")
// .description("gives the square of the number")
// .action(
//     (n1)=>{
//     const result = Number(n1)**2
//     console.log(`square of ${n1} is ${result}`)
// })
// program
// .command("exponent <n1> <n2>")
// .description("gives the exponent of the number with another number")
// .action(
//     (n1,n2)=>{
//     const result = Number(n1)**Number(n2)
//     console.log(`exponent of ${n1} with ${n2} is ${result}`)
// })
// program
// .command("joke")
// .description("lighten up your mood")
// .action(async ()=>{
//     try{
//         const res= await axios.get("https://official-joke-api.appspot.com/random_joke")
//         console.log(res.data.setup)
//         setTimeout(()=>{console.log(res.data.punchline)},3000)
//     }
//     catch(err){
//         console.log(err.data)
//     }
// })
// program.parse()
