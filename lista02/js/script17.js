// Faça um programa que leia a idade de uma pessoa e exiba se ela pode ou não votar. O voto é obrigatório para pessoas entre 18 e 70 anos, e facultativo para pessoas entre 16 e 18 anos e com mais de 70 anos.

let idade = Number9prompt("Digite sua idade: ")
if (idade <16){
    console.log("Você não pode votar.")
}else
    if (idade >=16 && idade <18 || idade >70){
        console.log("Seu voto é facultativo.")
    }else{
        console.log("Seu voto é obrigatório.")
    }