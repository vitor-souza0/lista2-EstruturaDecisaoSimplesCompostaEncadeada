//Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos.

let mes = prompt("Digite o nome de um mês:").toLowerCase();
let dias;

if (mes === "janeiro" || mes === "março" || mes === "maio" || mes === "julho" || mes === "agosto" || mes === "outubro" || mes === "dezembro") {
    dias = 31;
}else if (mes === "abril" || mes === "junho" || mes === "setembro" || mes === "novembro") {
    dias = 30;
}else if (mes === "fevereiro") {
    dias = 28;
} else {
    console.log("Mês inválido.");
}
console.log("O mês de " + mes + " possui " + dias + " dias.");