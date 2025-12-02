//Escreva um algoritmo, que leia números inteiros via teclado, 
//até que o número zero seja digitado. 
//Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

const leia = require('readline-sync');
let numero; //

let soma = 0;

do{
    numero = leia.questionInt("Digite um numero: ")
    if(numero > 0) soma += numero; //se numero for maior que 0, soma a variável de soma + o numero que foi digitado
} while(numero != 0) // enquanto o numero for diferente de 0;


console.log("A soma dos numeros positivos é: ", soma) //a soma dos numeros positivos é (o resultado da soma)