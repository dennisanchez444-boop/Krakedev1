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
    let elementosEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementosEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementosEmpleado.cedula + "</td>"
            + "<td>" + elementosEmpleado.nombre + "</td>"
            + "<td>" + elementosEmpleado.apellido + "</td>"
            + "<td>" + elementosEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

ejectutarNuevo = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }

}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let valido = false;
    //Cedula
    if (valorCedula.length == 10) {
        valido = true;
    } else {
        mostrarTexto("lblErrorCedula", "Debe tener 10 digitos");
    }
    let cedula = valorCedula.charCodeAt(0);
    if (cedula >= 48 && cedula <= 57) {
        valido = true
    } else {
        mostrarTexto("lblErrorCedula", "Debe ser un numero del 0 al 9")
    }
    //Nombre
    if (valorNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres");
    }
    let nombre = valorNombre.charCodeAt(0)
    if (nombre >= 65 && nombre <= 90) {
        valido = true;
    } else {
        mostrarTexto("lblErrorNombre", "Deben ser letras mayusculas");
    }
    //Apelido
    if (valorApellido.length < 3) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres");
    }
    let apellido = valorApellido.charCodeAt(0)
    if (apellido >= 65 && apellido <= 90) {
        valido = true;
    } else {
        mostrarTexto("lblErrorApellido", "Deben ser letras mayusculas");
    }
    //Saldo
    if (valorSueldo >= 400 && valorSueldo <= 5000) {
        valido = true;
    }

    let nuevoEmpleado = null;
    let empleado = {};
    empleado.cedula = valorCedula;
    empleado.nombre = valorNombre;
    empleado.apellido = valorApellido;
    empleado.sueldo = valorSueldo;
    console.log("hOLA", empleado);
    nuevoEmpleado = agregarEmpleado(empleado);
    if (nuevoEmpleado) {
        alert("EMPLEADO GUARDADO CORRECTAMENTE");
        mostrarEmpleado();
    } else {
        mostrarTexto("lblErrorBusqueda", "Ya existe un empleado con la cedula :" + cedula);
        let busquedas = buscarEmpleado();
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
    }
}

ejecutarBusqueda = function () {
    let datoBusqueda = recuperarTexto("txtBusquedaCedula");
    let cedulaBuscada = ejecutarBusqueda(datoBusqueda);
    if (cedulaBuscada == false) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTexto("lblErrorBusqueda", +empleados);
    }
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
}

limiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

buscarPorRol = function () {
    let empleadoRol = recuperarTexto("txtBusquedaCedulaRol");
    let siExiste = buscarEmpleado(empleadoRol);
    if (siExiste) {
        mostrarTexto("infoCedula", siExiste.cedula);
        mostrarTexto("infoSueldo", siExiste.sueldo);
        mostrarTexto("infoNombre", siExiste.nombre + " " + siExiste.apellido);
    }else{
        alert("EL EMPLEADO NO EXISTE");
    }
}
