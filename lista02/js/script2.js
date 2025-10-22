let idade = Number(prompt("digite sua idade expressa em anos : "));
if (idade < 0 || isNaN(idade)) {
    alert("isso não é uma idade valida");
} else if (idade < 16) {
    alert("você é uma criança");
} else if (idade >= 16 && idade < 18) {
    alert("você é um adolescente");
} else if (idade >= 18 && idade < 65) {
    alert("você é um adulto");
} else if (idade >= 65) {
    alert("você é um idoso");
}