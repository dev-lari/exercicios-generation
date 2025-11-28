//Elabore um algoritmo que leia 4 notas de um participante, exiba na tela a média final do participante.
const entrada = require('readline-sync')

//Lendo as notas:
let nota1 = entrada.questionInt("Digite sua primeira nota: ")
let nota2 = entrada.questionInt("Digite sua segunda nota: ")
let nota3 = entrada.questionInt("Digite sua terceira nota: ")
let nota4 = entrada.questionInt("Digite sua quarta nota: ")

//Calcular a média, primeiro soma (e para isso precisa colocar entre parentêses a operação) e depois divide pela quantidade de notas
let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("A sua média é: ",media)