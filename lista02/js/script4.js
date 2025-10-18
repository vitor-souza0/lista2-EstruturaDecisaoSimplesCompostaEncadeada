let nota1 = Number(prompt("coloque a 1º nota:"));
let nota2 = Number(prompt("coloque a 2º nota:"));
let nota3 = Number(prompt("coloque a 3º nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}