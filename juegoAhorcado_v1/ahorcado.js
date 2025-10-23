//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula = function (caracter) {
    let validar = caracter.charCodeAt()
    if (validar >= 65 && validar <= 90)
        return true;
    else {
        return false;
    }
}

guardarPalabra = function () {
    let letras = recuperarTexto("txtSecreta");

    if (letras.length == 5) {
        let todasMayusculas = true;
        for (let i = 0; i < letras.length; i++) {
            if (!esMayuscula(letras[i])) {
                todasMayusculas = false;
                break;
            }
        }
        if (todasMayusculas) {
            console.log("Palabra guardada:", letras);
        } else {
            alert("Debe ingresar una palabra de 5 letras mayusculas");
        }
    } else {
        alert("La palabra debe tener exactamente 5 letras");
    }
    palabraSecreta = letras;
}

mostrarLetra = function (letra, posicion) {
    coincidencias++;
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    } else if (posicion == 1) {
        mostrarTexto("div1", letra);
    } else if (posicion == 2) {
        mostrarTexto("div2", letra);
    } else if (posicion == 3) {
        mostrarTexto("div3", letra);
    } else if (posicion == 4) {
        mostrarTexto("div4", letra);
    }
}

validar = function (letra) {
let letrasEncontradas=0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }

    if (letrasEncontradas == 0) {
        alert("NO SE ENCONTRO LA LETRA");
        errores++;
        mostrarAhorcado(errores);
    }
}

ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    let cor = esMayuscula(letra);
    intentos++;
    if (cor == true) {
        validar(letra);
        if (coincidencias == 5) {
            alert("HA GANADO");
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        } else if (intentos == 10) {
            alert("HA PERDIDO");
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        validar();
    }
}

mostrarAhorcado = function () {
    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    } else if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    } else if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    } else if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    } else if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    } else if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    } else if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    } else if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    } else if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
}