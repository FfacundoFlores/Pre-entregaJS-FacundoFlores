// Juego de adivinar el numero
const juego = {
    numeroSecreto: Math.floor(Math.random() * 100) + 1,
    intentos: [],
    maxIntentos: 10,
    mensaje: ''
};


function iniciarJuego() {
    juego.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    juego.intentos = [];
    juego.mensaje = '¡Adivina un número entre 1 y 100! Tienes ' + juego.maxIntentos + ' intentos.';
    alert(juego.mensaje);
}


function adivinarNumero(numero) {
    if (numero < 1 || numero > 100) {
        juego.mensaje = 'Por favor, ingresa un número entre 1 y 100.';
        alert(juego.mensaje);
        return false;
    }


    if (juego.intentos.includes(numero)) {
        juego.mensaje = 'Ya has adivinado ese número. Intenta con otro.';
        alert(juego.mensaje);
        return false;
    }

    juego.intentos.push(numero);

    if (numero === juego.numeroSecreto) {
        juego.mensaje = '¡Felicidades! Adivinaste el número: ' + juego.numeroSecreto;
        alert(juego.mensaje);
        return true;
    }

    if (juego.intentos.length >= juego.maxIntentos) {
        juego.mensaje = 'Has agotado tus intentos. El número era: ' + juego.numeroSecreto;
        alert(juego.mensaje);
        return true;
    }


    if (numero < juego.numeroSecreto) {
        juego.mensaje = 'El número es más alto. Intentos restantes: ' + (juego.maxIntentos - juego.intentos.length);
    } else {
        juego.mensaje = 'El número es más bajo. Intentos restantes: ' + (juego.maxIntentos - juego.intentos.length);
    }

    alert(juego.mensaje);
    return false;
}

function jugar() {
    iniciarJuego();
    let adivinado = false;

    while (!adivinado && juego.intentos.length < juego.maxIntentos) {
        const numero = parseInt(prompt('Introduce tu adivinanza:'));
        if (!isNaN(numero)) {
            adivinado = adivinarNumero(numero);
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    }
}


jugar();