validarEstructura = function (placa) {
    let errores = "";
    if (placa.length == 7 || placa.length == 8) {
        if (esMayuscula(placa[0]) == false) {
            errores = errores + "La primera letra no es mayuscula";
        }
        if (esMayuscula(placa[1]) == false) {
            errores = errores + "La segunda letra no es mayuscula";
        }
        if (esMayuscula(placa[2]) == false) {
            errores = errores + "La tercera letra no es mayuscula";
        }
        if (esGuion(placa[3]) == false) {
            errores = errores + "La cuarto caracter no es un guion";
        }
        if (esDigito(placa[4]) == false) {
            errores = errores + "La quinto caracter no es un digito";
        }
        if (esDigito(placa[5]) == false) {
            errores = errores + "El sexto caracter no es un digito";
        }
        if (esDigito(placa[6]) == false) {
            errores = errores + "El septimo caracter no es un digito";
        }
        if (placa.length == 8) {
            if (esDigito(placa[7]) == false) {
                errores = errores + " El octavo caracter no es un digito";
            }
        }
    } else {
        errores = errores + "La cantidad de caracteres es incorrecta";
    }
    return errores;
}