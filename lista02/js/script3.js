alert("digite dois numeros e descubra qual deles é maior")
let numero1 = Number(prompt("digite um numero :"))
let numero2 = Number(prompt("digite outro numero :"))

if (numero1>numero2){
    alert(`o numero ${numero1} é maior que o numero ${numero2}`)
}else 
    if(numero1<numero2){
        alert(`o ${numero2} é maior que o numero ${numero1}`)
    }else
        if(numero1==numero2){
            alert("Ambos os numeros são iguais")
        }else{
            alert("isso não é um numero valido")
        }