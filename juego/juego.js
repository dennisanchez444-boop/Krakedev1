let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
    let dato = generarElemento();
    let seleccionComputador = generarRuta(dato);
    cambiarImagen("imgImagen", seleccionComputador);

    let esGanador = determinarGanador(dato, seleccionado);
    if (esGanador == 0) {
        mostrarTexto("lblRespuesta", "EMPATE");
    } else if (esGanador == 1) {
        mostrarTexto("lblRespuesta", "PERDISTE LA PARTIDA");
        puntosComputador++;
        if (puntosComputador == 5) {
            mostrarTexto("lblRespuesta", "COMPUTADOR TE HA VENCIDO");
        }
    } else if (esGanador == 2) {
        mostrarTexto("lblRespuesta", "GANASTE LA PARTIDA");
        puntosUsuario++;
        if (puntosUsuario == 5) {
            mostrarTexto("lblRespuesta", "GANADO EL JUEGO");;
        }
    }
    mostrarTexto("lblPuntajeUs", puntosUsuario);
    mostrarTexto("lblPuntajeCom", puntosComputador);
}

nuevaPartida = function () {
    cambiarImagen("imgImagen", "");
    mostrarTexto("lblRespuesta", "");
    mostrarTexto("lblPuntajeUs", "");
    mostrarTexto("lblPuntajeCom", "");
}
