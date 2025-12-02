// Exercício 1: Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C
const leia = require('readline-sync');

//Algoritmo para ler 3 valores inteiros:
let valorA = leia.questionInt("Digite um valor para A: ")
let valorB = leia.questionInt("Digite um valor para B: ")
let valorC = leia.questionInt("Digite um valor para C: ")

if (valorA + valorB > valorC){ // se a soma do valor de A + B for maior que o valor C: dá essa mensagem
    console.log("A soma de A + B é maior que o valor C");
} else if (valorA + valorB < valorC) { // se não, se a soma de A + B for menor que o C, imrpime isso:
    console.log("A soma de A + B é menor que o valor C");
} else { // se não (nem é maior e nem menor, imprime isso:)
    console.log("A soma de A + B é igual ao valor de C")
}