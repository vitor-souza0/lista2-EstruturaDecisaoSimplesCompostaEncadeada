// Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado".

let num1 = Number(prompt("Digite o primeiro número inteiro: "))
let num2 = Number(prompt("Digite o segundo número inteiro: "))
let num3 = Number(prompt("Digite o terceiro número inteiro: "))
let media = (num1 + num2 + num3) / 3

if (media >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}