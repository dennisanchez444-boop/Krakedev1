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
    return errores;
}

obtenerProvincia = function (placa) {
    let provincia;
    if (placa.charAt(0) == "A") {
        provincia = "Azuay";
    }
    else if (placa.charAt(0) == "B") {
        provincia = "Bolivar";
    }
    else if (placa.charAt(0) == "U") {
        provincia = "Canar";
    }
    else if (placa.charAt(0) == "C") {
        provincia = "Carchi";
    }
    else if (placa.charAt(0) == "X") {
        provincia = "Cotopaxi";
    }
    else if (placa.charAt(0) == "H") {
        provincia = "Chimborazo";
    }
    else if (placa.charAt(0) == "O") {
        provincia = "El Oro";
    }
    else if (placa.charAt(0) == "E") {
        provincia = "Esmeraldas";
    }
    else if (placa.charAt(0) == "W") {
        provincia = "Galapagos";
    }
    else if (placa.charAt(0) == "G") {
        provincia = "Guayas";
    }
    else if (placa.charAt(0) == "I") {
        provincia = "Imbabura"
    }
    else if (placa.charAt(0) == "L") {
        provincia = "Loja";
    }
    else if (placa.charAt(0) == "R") {
        provincia = "Los Rios";
    }
    else if (placa.charAt(0) == "M") {
        provincia = "Manabi";
    }
    else if (placa.charAt(0) == "V") {
        provincia = "Morona Santiago";
    }
    else if (placa.charAt(0) == "N") {
        provincia = "Napo";
    }
    else if (placa.charAt(0) == "S") {
        provincia = "Pastaza";
    }
    else if (placa.charAt(0) == "P") {
        provincia = "Pichincha";
    }
    else if (placa.charAt(0) == "K") {
        provincia = "Sucumbios";
    }
    else if (placa.charAt(0) == "Q") {
        provincia = "Orellana";
    }
    else if (placa.charAt(0) == "T") {
        provincia = "Tungurahua";
    }
    else if (placa.charAt(0) == "Z") {
        provincia = "Zamora Chinchipe";
    }
    else if (placa.charAt(0) == "Y") {
        provincia = "Santa Elena";
    }
    else if (placa.charAt(0) == "J") {
        provincia = "Santo Domingo de los Tsachilas";
    }
    else {
        provincia = null;
    }
    return provincia;

}



