//Elabore um algoritmo que leia (precisa do readline-sync) o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.
const entrada = require('readline-sync')

let salarioBruto = entrada.questionFloat("Qual o valor do salario bruto?")
let adicionalNoturno = entrada.questionFloat("Qual o valor do adicional noturno?")
let horasExtras = entrada.questionFloat("Qual o valor das horas extras?")
let descontos = entrada.questionFloat("Qual o valor dos descontos?")

//Calcular o salário bruto + adicional noturno + as horas extras (uma operação entre parenteses para que seja feita primeiro) - o desconto

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos
console.log("O valor do seu salario liquido é: ",salarioLiquido)