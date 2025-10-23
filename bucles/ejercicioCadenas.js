ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejecutarPrueba2 = function () { 
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena1(mensaje);
}
recorrerCadena = function (cadena) {
    //0123456
    //Juanito
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }
}
recorrerCadena1 = function (cadena) {
    let caracter="";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter += cadena.charAt(posicion);
        mostrarTexto("lblRes", caracter);
    }
}

