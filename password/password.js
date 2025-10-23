validarPassword = function (password) {
    let errores = "";

    if (password.length < 8) {
        errores = errores + "El password debe tener al menos 8 caracteres";
    } else if (password.length > 16) {
        errores = errores + "El password no debe tener mas de 16 digitos";
    }

    let letra = password.charCodeAt(0);
    if (letra >= 65 && letra <= 90) {
        return true;
    } else {
        errores = errores + "Debe tener al menos una Mayuscula";
    }
    let codigo = password.charCodeAt(0);
    if (codigo >= 48 && codigo <= 57) {
        return true;
    } else {
        errores = errores + "Debe tener al menos un guion";
    }
    let caracter = password.charCodeAt(0);
    if (caracter == 42 || caracter == 45 || caracter == 95) {
        return true;
    } else {
        errores = errores + "Debe tener al menos un caracter especial";
    }
    return errores;
}


ejecutarValidacion = function () {
    let valor = recuperarTexto("txtValor");
    let errores = validarPassword(valor);

    if (errores == true) {
        mostrarTexto("lblError", " Password correcto");
    } else {
        mostrarTexto("lblError", errores);
    }
}