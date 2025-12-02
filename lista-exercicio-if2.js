// Exercicio 2: Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.

const leia = require("readline-sync")

// entrada de dado, número digitado pelo usuário
let numero = leia.questionInt("Digite um numero: ")

if (numero % 2 == 0 && numero > 0){ // se o número NÃO TIVER RESTO (isso quem vê é o MÓDULO), é par e positivo
    console.log("O Número " + numero + " é par e positivo")
} else if (numero % 2 != 0 && numero < 0 ) { // se não, se o número é divisível por 3 e menor que 0, é ímpar e negativo
    console.log("O Número " + numero + " é ímpar e negativo")
} else if (numero % 2 == 0 && numero < 0){ // se não, se o número for divisível por 2 e menor que 0, é par e negativo
    console.log("O Número " + numero + " é par e negativo")
} else {
    console.log("O Número " + numero + " é ímpar e positivo") // se não for nenhuma das condições, é impar e positivo
}

// numero % 2 == 0 -> é um número par, se o número dividido por 2 não tiver resto (for igual a 0)
// numero % 2 != 0 -> é um número ímpar, se o número dividido por 2 tiver resto (diferente de 0)