validarPlaca = function () {
    
    let valores = recuperarTexto("txtValor");
    variableErroresEStructura = validarEstructura(valores);
    if (variableErroresEStructura == "") {
        mostrarTexto("lblDatos", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblDatos", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblError", variableErroresEStructura);
    }
}