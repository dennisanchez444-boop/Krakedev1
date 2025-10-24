let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1498654323", nombre: "Carlos", apellido: "Perez", sueldo: 700.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleado = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>EDAD</th>" +
        "</tr>";;
    let elementosCliente;
    for (let i = 0; i < empleados.length; i++) {
        elementosCliente = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementosCliente.cedula + "</td>"
            + "<td>" + elementosCliente.nombre + "</td>"
            + "<td>" + elementosCliente.apellido + "</td>"
            + "<td>" + elementosCliente.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}