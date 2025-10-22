//Faça um programa que leia o valor do salário mínimo e o salário de um funcionário, e exiba quantos salários mínimos ele recebe.
let salarioMinimo = 1518.00
let salarioFuncionario = Number(prompt("Digite o salário do funcionário: "))
let quantidadeSalariosMinimos = salarioFuncionario / salarioMinimo
alert("O funcionário recebe " + quantidadeSalariosMinimos.toFixed(2) + " salários mínimos.")