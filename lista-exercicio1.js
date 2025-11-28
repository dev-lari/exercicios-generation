// Inicio - Digite o salário - Leia o salário - Digite o abono - Leia o abono - Novo salario - Exibe novo salário
// Primeira coisa: npm init - y e npm install para baixar a biblioteca
const biblioteca = require('readline-sync');

// Digite o salário e leia o salário digitado pelo usuário
let salario = biblioteca.questionFloat("Qual o seu salario?")
console.log(salario)

// Digite o abono e leia o abono:
let abono = biblioteca.questionFloat("Qual o valor do abono?")
console.log(abono)

// Somar o salário e o abono para resultar no novo salário
let novoSalario = salario + abono
console.log("Seu novo salário é de:", novoSalario)