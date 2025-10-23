let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

provarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
}

arreglarPromedio=function() {
    let notaRecuperada = recuperarInt("txtNota");
    notas.push(notaRecuperada);
    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    let promedio = sumaNotas / notas.length;
    mostrarTexto("lblPromedio", promedio);
}
