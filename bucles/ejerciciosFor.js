mostrarNumeros = function () {
    console.log("antes del for");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }

    console.log("despues del for");
}

mostrarNumeros2 = function () {
    console.log("antes del for");
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice);
    }

    console.log("despues del for");
}

mostrarPares = function () {
    console.log("antes del for");
    for (let x = 2; x <= 10; x += 2) {
        console.log(x);
    }
    console.log("despues del for");
}

mostrarInversa = function () {
    console.log("antes del for");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }

    console.log("despues del for");
}

hackearNasaPelis = function () {
    //hackeando nasa =% ......100%
    for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
        console.log("hackeando Nasa " + porcentaje + "%");
    }
    console.log("La nasa ha sido hackeada")
}

mostrarInpares = function () {
    console.log("antes del for");
    for (let x = 1; x <= 21; x += 2) {
        console.log(x);
    }
    console.log("despues del for");
}
