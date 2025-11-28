//Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.

//Declarar as variáveis de salario bruto, adicional noturno, horas extras e descontos;
let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00;
let descontos = 200.00

//Calcular o salário bruto + adicional noturno + as horas extras (uma operação entre parenteses para que seja feita primeiro) - o desconto

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos
console.log(salarioLiquido)