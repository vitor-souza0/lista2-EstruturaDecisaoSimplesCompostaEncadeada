//Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.
alert("Bem vindo ao Boletim escolar")

let nome = prompt("Digite o nome do aluno:")
let disciplina = prompt("Digite a disciplina:")

let nota1 = Number(prompt("coloque a 1º nota:"))
let nota2 = Number(prompt("coloque a 2º nota:"))
let nota3 = Number(prompt("coloque a 3º nota:"))
let nota4 = Number(prompt("coloque a 4º nota:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log(`O aluno ${nome} está aprovado na disciplina de ${disciplina} com a média ${media.toFixed(2)}`)
} else {
    console.log(`O aluno ${nome} está em recuperação na disciplina de ${disciplina} com a média ${media.toFixed(2)}`)
}