esMayuscula = function (caracter) {
    let validar = caracter.charAt()
    if (validar >= 65 && validar <= 90)
        return true;
    else {
        return false;
    }
}

esDigito = function (caracter) {
    let validar = caracter.charAt()
    if (validar >= 48 && validar <= 57) {
        return true;
    } else {
        return false;
    }
}

esGuion = function (caracter) {
    let validar = caracter.charAt()
    if (validar == 45) {
        return true;
    } else {
        return false;
    }
}

