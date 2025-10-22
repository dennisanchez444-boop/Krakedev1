validarPlaca = function () {
    
    let valores = recuperarTexto("txtValor");
    variableErroresEStructura = validarEstructura(valores);
    if (variableErroresEStructura == "") {
        mostrarTexto("txtDatos", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblDatos", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblError", );
    }
}