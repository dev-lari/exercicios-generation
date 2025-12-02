// leia o Nome do Colaborador (string), 
// o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
// A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const leia = require('readline-sync');
// Declarando as variáveis;
let codigo;
let reajuste;
let salario;
let novoSalario;
let cargo;

//leia o nome do colaborador:
nomeColaborador = leia.question("Qual o nome do colaborador? ")
console.log("\n 1: Gerente \n 2: Vendedor \n 3: Supervisor \n 4: Motorista \n 5: Estoquista \n 6: Técnico de TI")
codigo = leia.questionInt("Digite o numero correspondente ao cargo do colaborador: ")

switch(codigo){
    case 1: 
        console.log("Gerente");
        cargo = "Gerente";
        salario = leia.questionInt("Digite o salario: ");
        reajuste = 0.10;
        break

    case 2: 
        console.log("Vendedor");
        cargo = "Vendedor";
        salario = leia.questionInt("Digite o salario: ");
        reajuste = 0.07;
        break

    case 3: 
        console.log("Supervisor");
        cargo = "Supervisor";
        salario = leia.questionInt("Digite o salario: ");
        reajuste = 0.09;
        break

    case 4: 
        console.log("Motorista");
        cargo = "Motorista";
        salario = leia.questionInt("Digite o salario: ");
        reajuste = 0.06;
        break

    case 5: 
        console.log("Estoquista");
        cargo = "Estoquista";
        salario = leia.questionInt("Digite o salario: ");
        reajuste = 0.05;
        break

    case 6: 
        console.log("Técnico de TI");
        cargo = "Técnico de TI";
        salario = leia.questionInt("Digite o salario: ");
        reajuste = 0.08;
        break

    default:
        console.log("Digite um numero válido!")
}

novoSalario = salario + (reajuste * salario);
console.log("Nome do colaborador: "+nomeColaborador + "\n Cargo: "+ cargo + "\n Salário: " + novoSalario);