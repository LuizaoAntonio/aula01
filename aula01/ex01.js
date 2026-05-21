const input = require("readline-sync");

let nome = input.question("Digite seu nome")
let  cidade = input.question("Digite sua cidade")
let idade = input.question("Digite sua idade")

console.log(`Olá, meu nome é ${nome}, tenho ${idade} e sou de ${cidade}.`)