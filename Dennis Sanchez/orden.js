let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
];

let nuevaPersona = {};

agregarPersona = function () {
    let esValido = true;
    let cmpNombre = recuperarTexto("txtNombre");
    let cmpEdad = recuperarInt("txtEdad");
    if (cmpNombre.length < 3) {
        mostrarTexto("lblError1", "Debe tener al menos 3 caracteres");
        esValido = false;
    } else {
        mostrarTexto("lblError1", "");
    }
    if (cmpEdad >= 0 && cmpEdad <= 100) {
        mostrarTexto("lblError2", "");
    } else {
        mostrarTexto("lblError2", "Debe tener un numero del 0 al 100");
        esValido = false;
    }
    if (esValido) {
        nuevaPersona = {
            nombre: cmpNombre,
            edad: cmpEdad
        };
        alert("PERSONA AGREGADA CORRECTAMENTE");
    }
    personas.push(nuevaPersona);
    mostrarPersonas();
}

mostrarPersonas = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";;
    let elementos;
    for (let i = 0; i < personas.length; i++) {
        elementos = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementos.edad + "</td>"
            + "<td>" + elementos.nombre + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

buscarMayor = function () {
    let personaMayor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        if (personas[i].edad > personaMayor.edad) {
            let elementoPersonas = personas[i];
            console.log(elementoPersonas.edad, elementoPersonas.nombre);
            mostrarTexto("lblMayor", "El mayor es: " + elementoPersonas.nombre + " con la edad de " + elementoPersonas.edad);
        }
    }
    return personaMayor;
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        if (personas[i].edad < personaMenor.edad) {
            personaMenor = personas[i];
            mostrarTexto("lblMenor", "El menor es: " + personaMenor.nombre + " con la edad de " + personaMenor.edad);
        }
    }
    console.log(personaMenor.edad, personaMenor.nombre);
}

determinarMayor = function () {
    buscarMayor();
}

determinarMenor = function () {
    encontrarMenor();
}