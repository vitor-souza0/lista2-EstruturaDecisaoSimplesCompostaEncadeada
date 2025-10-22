//Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno".

let nome = prompt("digite seu nome: ")
let turno = prompt("Digite seu turno (M para Matutino ou V para Vespertino): ").toUpperCase()

if (turno == "M"){
    console.log("Bom dia, " + nome + "!")
}else if (turno == "V"){
    console.log("Boa tarde, " + nome + "!")
}else{
    alert("Turno inválido. Por favor, digite M para Matutino ou V para Vespertino.")
}