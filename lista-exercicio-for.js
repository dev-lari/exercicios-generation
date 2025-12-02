// Escreva um algoritmo, que leia 2 números inteiros via teclado, (ok)
// onde o primeiro número deve ser menor do que o segundo número. (ok)
// Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido (ok)
// e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. ( multiplos de 3 é numero%3 == 0, múltiplos de 5 é numero%5 == 0)

const leia = require('readline-sync')
let numero1, numero2

numero1 = leia.questionInt("Digite o primeiro número do intervalo: ")
numero2 = leia.questionInt("Digite o ultimo numero do intervalo: ")

// Validação se o número 1 é menor que o número 2
if (numero1 > numero2){
    console.log("Intervalo inválido")
}

for (i = numero1; i < numero2; i++){ //o contador vai correr do numero 1 até o numero 2; o contador é o i, então vai ser i = numero1; rodar até i ser menor que numero2, incrementar +1 cada vez q rodar
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i, "é multiplo de 3 e 5")
    }
}
