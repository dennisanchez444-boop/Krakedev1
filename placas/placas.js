validarPlaca = function () {
    let valores = recuperarTexto("txtValor");
    variableErroresEStructura = validarEstructura(valores);
    if (variableErroresEStructura == "") {
        mostrarTexto("lblDatos", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblDatos", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblError", variableErroresEStructura);
    }
    let provincia = obtenerProvincia(valores)
    if (provincia == null) {
        mostrarTexto("lblProvincias", "Provincia incorrecta");
    } else {
        mostrarTexto("lblProvincias", "La placa pertenece a la provincia de: " + provincia);
    }
}