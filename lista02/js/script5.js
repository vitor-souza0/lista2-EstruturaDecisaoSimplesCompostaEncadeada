//Escreva um programa que leia um número inteiro e exiba se ele é par ou ímpar.
let numero = Number(prompt("Digite um número:"));
let resultado = numero % 2;

if(resultado == 0){
    console.log("esse numero é par")
}else{
    console.log("esse numero é impar")
}
