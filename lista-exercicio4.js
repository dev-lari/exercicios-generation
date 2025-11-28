//Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4
const biblioteca = require('readline-sync')

let n1 = biblioteca.questionFloat("Digite o primeiro numero:")
let n2 = biblioteca.questionFloat("Digite o segundo numero:")
let n3 = biblioteca.questionFloat("Digite o terceiro numero:")
let n4 = biblioteca.questionFloat("Digite o quarto numero:")

let diferenca1 = (n1 * n2) - (n3 * n4)

console.log(diferenca1)