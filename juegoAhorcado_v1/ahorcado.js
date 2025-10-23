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
    palabraSecreta=letras;
}



