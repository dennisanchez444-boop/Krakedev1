validarPlaca = function () {
    let valores = recuperarTexto("txtValor");
    variableErroresEStructura = validarEstructura(valores);
    if (variableErroresEStructura == "") {
        mostrarTexto("lblDatos", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblDatos", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblError", variableErroresEStructura);
    }
    let provincia = obtenerProvincia(valores);
    if (provincia == null) {
        mostrarTexto("lblProvincias", "Provincia incorrecta");
    } else {
        mostrarTexto("lblProvincias", "La placa pertenece a la provincia de: " + provincia);
    }
    let tipo = obtenerTidoDeVehiculo(valores);
    if (tipo == null) {
        mostrarTexto("lblTipo", "Tipo de vehiculo incorrecto");
    } else {
        mostrarTexto("lblTipo", "Tipo de vehiculo es: " + tipo);
    }
    let picoP = obtenerDiaPicoYPlaca(valores);
    if (picoP) {
        mostrarTexto("lblDiaPicoYPlaca", " EL dia de Pico Y Placa es: " + picoP);
    } else {
        mostrarTexto("lblDatos", " Estructura Incorrecta ");
        mostrarTexto("lblError", erroresEstructura);
        mostrarTexto("lblProvincias", "");
        mostrarTexto("lblTipo", "");
        mostrarTexto("lblDiaPicoYPlaca", "");
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtValor", "");
    mostrarTexto("lblDatos", "");
    mostrarTexto("lblError", "");
    mostrarTexto("lblProvincias", "");
    mostrarTexto("lblTipo", "");
    mostrarTexto("lblDiaPicoYPlaca", "");
}
