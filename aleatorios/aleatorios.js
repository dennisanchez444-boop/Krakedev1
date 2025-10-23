aleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}
generarAleatorios = function () {
    let aleatorios = [];
    let cantidad = recuperarTexto("txtDato");
    let alt;
    // Validación
    if (cantidad < 5 || cantidad > 20) {
        alert("Ingresa un numero entre 5 y 20");
    }
    // Generar números aleatorios
    for (let i = 0; i < cantidad; i++) {
        console.log(i);
        alt = aleatorio();
    }
    mostrarResultados(alt);
}
mostrarResultados = function (arregloNumeros) {
    //Muestra el arreglo de pantalla
    let cmpTabla=arregloNumeros;
    mostrarTexto("divTabla",cmpTabla);
}
