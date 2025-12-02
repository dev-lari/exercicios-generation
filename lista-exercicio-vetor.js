//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, (ok)
//construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número 
//e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.
// PROBLEMAS:
// 1- ler o numero no terminal (ok)
// 2- descobrir se esse numero existe no vetor 
// 3- falar em qual posição ta esse numero

const leia = require('readline-sync')

let lista = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que você deseja encontrar: ")

let index = lista.indexOf(numero) // o indexOf tem que ser usado na lista, e guardado em uma variavel (index quer dizer indice)

// no if, a gente valida o index.. se ele for diferente de -1, é pq o numero existe, e a gente pede pra exibir no console.log, caso contrario, da a msg de numero não encontrado

if(index != -1){
    console.log("Numero está na posição: " + index)
} else {
    console.log("Numero não encontrado")
}