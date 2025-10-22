let nome1 = prompt("digite seu nome")
let idade1 = Number(prompt("digite sua idade expressa em anos :"))

let nome2 = prompt("digite outro nome")
let idade2 = Number(prompt("digite outra idade expressa em anos :"))

if (idade1>idade2) {
    alert("a primeira idade é maior que a segunda idade digitada")
    alert("O nome dessa pessoa é : "+nome1)
    alert("Essa pessoa possui: "+idade1+"anos")

}else {
    alert("a segunda idade é maior que a primeira idade digitada")
    alert("O nome dessa pessoa é : "+nome2)
    alert("Essa pessoa possui: "+idade2+"anos")
}