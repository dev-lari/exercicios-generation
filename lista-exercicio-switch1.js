// escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item. Mostre na tela o valor total da conta e o nome do produto que foi comprado.
const leia = require('readline-sync')
//declarando as variáveis
let item;
let preco;
let quantidade;
let valorTotal;

//construindo o menu
console.log("############ Menu ##############")
console.log(" 1: Cachorro Quente \n2: X- Salada \n3: X-Bacon \n4: Bauru \n5: Refrigerante \n6: Suco de laranja")

// entrada do item dada pelo usuário
item = leia.questionInt("\n Digite de 1 a 6 para escolher seu item: ")

//opções e o preço de cada item, não precisa declarar variável novamente pq já foi declarado lá em cima, só atribuir o valor. 
switch(item){
    case 1: 
        console.log("Cachorro Quente")
        preco = 10;
        break

    case 2: 
        console.log("X-Salada")
        preco = 15;
        break

    case 3: 
        console.log("X-Bacon")
        preco = 18;
        break

    case 4: 
        console.log("Bauru")
        preco = 12;
        break

    case 5: 
        console.log("Refrigerante")
        preco = 8;
        break

    case 6: 
        console.log("Suco de laranja")
        preco = 13;
        break

    default:
        console.log("Digite um numero válido!")
}

//entrada da quantidade pelo usuário
quantidade = leia.questionInt("Escolha a quantidade do item: ")
valorTotal = quantidade * preco;

console.log("Valor total: ", valorTotal)