let numero = Number(prompt("digite um numero para saber se ele é possitivo,negativo ou 0 :"))
if (numero>0) {
    alert("esse numero é positivo")
}else
    if(numero<0){
        alert("esse numero é negativo")
    }else if(numero==0){
        alert("esse numero é 0")
    }else {
        alert("isso não é um numero valido")
    }