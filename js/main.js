let saldo = 1000; // Saldo inicial

// Función para consultar saldo
function consultarSaldo() {
    alert(`Tu saldo actual es: $${saldo}`);
}

// Función para depositar dinero
function depositarDinero() {
    let deposito = parseFloat(prompt("Ingrese la cantidad que desea depositar:"));
    if (isNaN(deposito) || deposito <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
    } else {
        saldo += deposito;
        alert(`Se han depositado $${deposito}. Saldo actual: $${saldo}`);
    }
}

// Función para retirar dinero
function retirarDinero() {
    let retiro = parseFloat(prompt("Ingrese la cantidad que desea retirar:"));
    if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
        alert("Fondos insuficientes o cantidad inválida.");
    } else {
        saldo -= retiro;
        alert(`Has retirado $${retiro}. Saldo actual: $${saldo}`);
    }
}

function ejecutarCajero() {
    let opcion;
    do {
        opcion = prompt(`Selecciona una opción:
        1. Consultar saldo
        2. Depositar dinero
        3. Retirar dinero
        4. Salir`);
        
        switch (opcion) {
            case "1":
                consultarSaldo();
                break;
            case "2":
                depositarDinero();
                break;
            case "3":
                retirarDinero();
                break;
            case "4":
                alert("Gracias por utilizar nuestro cajero automático.");
                break;
            default:
                alert("Opción inválida. Por favor, selecciona una opción válida.");
        }
    } while (opcion !== "4");
}

ejecutarCajero();