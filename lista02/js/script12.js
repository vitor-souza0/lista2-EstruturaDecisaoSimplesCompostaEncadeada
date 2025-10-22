//Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC
let peso = Number(prompt("digite seu peso em Kg"))
let autura = Number(prompt("digite sua altura em metros"))
let imc = peso / (autura * autura)
if (imc < 18.5){
    console.log("Seu IMC é " + imc.toFixed(2) + " você está abaixo do peso!")
}else
    if(imc >=18.5 && imc <=24.9){
        console.log("Seu IMC é " + imc.toFixed(2) + " você está com o peso normal!")
    }else
        if(imc >=25 && imc <=29.9){
            console.log("Seu IMC é " + imc.toFixed(2) + " você está com sobrepeso!")
        }