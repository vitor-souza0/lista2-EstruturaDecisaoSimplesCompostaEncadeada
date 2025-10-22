// Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%.
let salario = Number(prompt("digite o salário do funcíonario :"))
let bonus;

if(salario > 2000){
    bonus = salario * 0.10;
}else{
    bonus = salario * 0.05;
}

console.log("o bônus do funcionário é de R$ " + bonus.toFixed(2));