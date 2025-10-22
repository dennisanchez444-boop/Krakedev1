obtenerAleatorio = function () {
    return Math.floor(Math.random() * 3) + 1; // Genera 1, 2 o 3
}

generarElemento = function () {
    let numero = obtenerAleatorio();
    if (numero == 1) {
        return "piedra";
    } else if (numero == 2) {
        return "papel";
    } else if (numero == 3) {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let estado = 0;
    if (eleccionJugador1 == eleccionJugador2) {
        estado = 0;
    } else if (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") {
        estado = 1;
    } else if (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") {
        estado = 1;
    } else if (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel") {
        estado = 1;
    } else {
        estado = 2;
    }
    return estado;
}

generarRuta = function (nombre) {
    if (nombre == "piedra") {
        return "./imagenes/piedra.png";
    } else if (nombre == "papel") {
        return "./imagenes/papel.png";
    } else if (nombre == "tijera") {
        return "./imagenes/tijera.png";
    }
}
