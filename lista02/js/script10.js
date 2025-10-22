let codigo = Number(prompt("Digite o código do produto:"));
alert("Produtos disponíveis:\n1 - Manteiga R$10,00\n2 - Arroz kg R$15,50\n3 - Feijão vermelho kg R$19,30\n4 - Leite R$5,00\n5 - Carne kg R$17,85");

let quantidade = Number(prompt("Digite a quantidade comprada:"));
let preco;

if (codigo === 1) {
    preco = 10.00;
} else if (codigo === 2) {
    preco = 15.50;
} else if (codigo === 3) {
    preco = 19.30;
} else if (codigo === 4) {
    preco = 5.00;
} else if (codigo === 5) {
    preco = 17.85;
} else {
    alert("Código inválido!");
    preco = 0;
}

let total = preco * quantidade;
console.log("O valor total a ser pago é R$ " + total.toFixed(2));
