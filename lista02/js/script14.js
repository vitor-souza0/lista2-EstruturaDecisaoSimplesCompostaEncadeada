//Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.

let maca = Number(prompt("digite a quantidade de maçãs que quer comprar"))
let preco

if (maca < 12){
    preco = maca * 0.50
    console.log("O valor total a ser pago é R$ " + preco.toFixed(2))
}else{
    preco = maca * 0.40
    console.log("O valor total a ser pago é R$ " + preco.toFixed(2))
}