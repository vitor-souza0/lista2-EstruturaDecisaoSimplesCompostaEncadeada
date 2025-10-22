//Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais.

let sexo = prompt("Digite seu sexo: Masculino(M) / Feminino(F)").toUpperCase()
let idade = Number(prompt("digite sua idade:"))
if (sexo == M && idade >=65){
    console.log("Você pode se aposentar!")
}else
    if(sexo == M && idade <65){
        console.log("Você não pode se aposentar!")
    }else
        if(sexo == F && idade >=60){
            console.log("Você pode se aposentar!")
        }else
            if(sexo == F && idade <60){
                console.log("Você não pode se aposentar!")
            }else{
                console.log("sexo/idade invalidos!")
            }