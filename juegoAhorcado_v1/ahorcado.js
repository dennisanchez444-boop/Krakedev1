//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
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
    if (posicion == 0) {
        mostrarTextoEnCaja("div0", letra);
    } else if (posicion == 1) {
        mostrarTextoEnCaja("div1", letra);
    } else if (posicion == 2) {
        mostrarTextoEnCaja("div2", letra);
    } else if (posicion == 3) {
        mostrarTextoEnCaja("div3", letra);
    } else if (posicion == 4) {
        mostrarTextoEnCaja("div4", letra);
    }
}

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) == letra) {
            mostrarLetra(letra,i);
            letrasEncontradas = letrasEncontradas;
        }
    }
}

ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    let cor = esMayuscula(letra);
    if (cor == true) {
        validar(letra);
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        validar();
    }
}

