//Faça um programa que leia o número de faltas de um aluno em uma disciplina e exiba sua situação. Se o número de faltas for maior que 15, ele é reprovado por falta.

let disciplina = prompt("Digite o nome da disciplina:")
let faltas = Number(prompt("digite o numero de faltas do aluno na disciplina de " + disciplina + ":"))

if (faltas > 15){
    console.log("O aluno está reprovado por falta na disciplina de " + disciplina + ", com " + faltas + " faltas.")
}else{
    console.log("O aluno está aprovado por falta na disciplina de " + disciplina + ", com " + faltas + " faltas.")
}