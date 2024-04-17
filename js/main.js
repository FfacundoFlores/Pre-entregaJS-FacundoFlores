let repetir="si";

function sumar (num1, num2) {
    alert ("El resultado es " + (num1+num2));

}

function restar (num1, num2) {
    alert ("El resultado es " + (num1-num2));
    
}

function multiplicar (num1, num2) {
    alert ("El resultado es " + (num1*num2));
    
}

function dividir (num1, num2) {
    alert ("El resultado es " + (num1/num2));
    
}

do {

let operacion=prompt ("¿Que operacion deseas realizar? Escribe (sumar, restar, multiplicar, dividir)");

let operador1=parseInt (prompt ("Introduce el primer n°"));

let operador2=parseInt (prompt("Introduce el segundo n°"));

if (operacion=="sumar") {

    sumar (operador1,operador2);

}

else if (operacion=="restar") {

    restar (operador1,operador2);

}

else if (operacion=="multiplicar") {

    multiplicar (operador1,operador2);

}

else if (operacion=="dividir") {

    dividir (operador1,operador2);

}

else{
    alert("Lo siento, operacion no contemplada");
}

repetir=prompt ("¿Deseas realizar otra operacion? Escribe (si/no)");
} while (repetir=="si");