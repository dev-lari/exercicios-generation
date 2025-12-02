// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e (ok)
// mostre na tela o total de pessoas cuja idade seja menor que 21 anos e 
// o total de pessoas cuja idade, seja maior que 50 anos. 
// A leitura dos dados deve ser finalizada ao digitar uma idade negativa.

const leia = require('readline-sync');
//Declarando variáveis: 
let idade = 0; 
let idade21 = 0 // variável de contagem do 21 anos
let idade50 = 0 // variável de contagem do 50

while(idade >= 0){ // enquanto idade for maior igual a 0
    idade = leia.questionInt("Digite a sua idade: ") // entrada pelo usuário;
    if(idade >= 0 && idade < 21){ //se idade for maior igual 0 E idade idade menor que 21
        idade21++ //incrementa +1 no contador
    } else if (idade > 50){ // se não, se idade for maior que 50
        idade50++
    }
}
//Mostrar os resultados:
console.log("Total de pessoas menores de 21 anos: " + idade21)
console.log("Total de pessoas maiores de 50 anos: " + idade50)