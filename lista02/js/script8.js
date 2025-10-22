//Crie um programa que leia três números inteiros e exiba-os em ordem crescente.
let num1 = Number(prompt("Digite o primeiro número inteiro:"));
let num2 = Number(prompt("Digite o segundo número inteiro:"));
let num3 = Number(prompt("Digite o terceiro número inteiro:"));
let primeiro, segundo, terceiro;

if (num1 <= num2 && num1 <= num3) {
    primeiro = num1
    if (num2 <= num3) {
        segundo = num2
        terceiro = num3
    } else {
        segundo = num3
        terceiro = num2
    }
}
else if (num2 <= num1 && num2 <= num3) {
    primeiro = num2
    if (num1 <= num3) {
        segundo = num1
        terceiro = num3
    } else {
        segundo = num3
        terceiro = num1
    }
}
else {
    primeiro = num3
    if (num1 <= num2) {
        segundo = num1
        terceiro = num2
    } else {
        segundo = num2
        terceiro = num1
    }
}
console.log("Números em ordem crescente: " + primeiro + ", " + segundo + ", " + terceiro);