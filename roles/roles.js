let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1498654323", nombre: "Carlos", apellido: "Perez", sueldo: 700.0 }
];
let roles = [];
let rol = [];


// ======= Mostrar secciones =======
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

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// ======= Mostrar lista de empleados =======
mostrarEmpleado = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table border='1'><tr>" +
        "<th>CÉDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";

    for (let emp of empleados) {
        contenidoTabla += `<tr>
            <td>${emp.cedula}</td>
            <td>${emp.nombre}</td>
            <td>${emp.apellido}</td>
            <td>${emp.sueldo.toFixed(2)}</td>
        </tr>`;
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

// ======= Buscar y agregar empleados =======
buscarEmpleado = function (cedula) {
    return empleados.find(e => e.cedula === cedula) || null;
}

agregarEmpleado = function (empleado) {
    if (buscarEmpleado(empleado.cedula)) {
        return false;
    }
    empleados.push(empleado);
    return true;
}

// ======= Guardar empleado =======
guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let valido = true;

    // Validaciones
    if (valorCedula.length != 10 || isNaN(valorCedula)) {
        mostrarTexto("lblErrorCedula", "La cédula debe tener 10 dígitos numéricos");
        valido = false;
    }

    if (valorNombre.length < 3 || valorNombre[0] !== valorNombre[0].toUpperCase()) {
        mostrarTexto("lblErrorNombre", "El nombre debe empezar con mayúscula y tener al menos 3 letras");
        valido = false;
    }

    if (valorApellido.length < 3 || valorApellido[0] !== valorApellido[0].toUpperCase()) {
        mostrarTexto("lblErrorApellido", "El apellido debe empezar con mayúscula y tener al menos 3 letras");
        valido = false;
    }

    if (valorSueldo < 400 || valorSueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe estar entre 400 y 5000");
        valido = false;
    }

    if (!valido) return;

    let nuevoEmpleado = { cedula: valorCedula, nombre: valorNombre, apellido: valorApellido, sueldo: valorSueldo };

    if (agregarEmpleado(nuevoEmpleado)) {
        alert("Empleado guardado correctamente");
        mostrarEmpleado();
        limpiar();
    } else {
        mostrarTexto("lblErrorBusqueda", "Ya existe un empleado con esa cédula");
    }
}

// ======= Buscar empleado desde la interfaz =======
ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(cedula);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTexto("lblErrorBusqueda", "Empleado encontrado: " + empleado.nombre + " " + empleado.apellido);
    }
}

// ======= Buscar empleado para rol =======
buscarPorRol = function () {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);
    if (empleado) {
        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoSueldo", empleado.sueldo.toFixed(2));
        mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
    } else {
        alert("EL EMPLEADO NO EXISTE");
    }
}

// ======= Calcular rol =======
crearAporteEmpleado = function (sueldo) {
    return sueldo * 0.095;
}

calcularValorAPagar = function (sueldo, aporteIESS, descuento) {
    return sueldo - aporteIESS - descuento;
}

calcularRol = function () {
    let sueldo = parseFloat(recuperarTextoDiv("infoSueldo"));
    let descuento = recuperarFloat("txtDescuentos");
    let aporteIESS = crearAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporteIESS.toFixed(2));
    let totalPagar = calcularValorAPagar(sueldo, aporteIESS, descuento);
    mostrarTexto("infoPago", totalPagar.toFixed(2));
}

// ======= Limpiar y nuevo =======
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
}

buscarRol = function (cedula) {
    let cedulaRecuperada = recuperarTexto("txtBusquedaCedulaRol");
    if (cedulaRecuperada == cedula) {
        return cedulaRecuperada;
    } else {
        return null;
    }
}

agregarRol = function (rol) {
    if (rol != cedula) {
        mostrarTexto("lblErrorBusquedaRol", "Exito");
    } else {
        mostrarTexto("lblErrorBusquedaRol", "Error");
    }
}

calcularAporteEmpleador = function (sueldo) {
    let aporte = sueldo * 0.15;
    return aporte;
}

guardarRol = function () {
    recuperarFloat("infoPago");
    recuperarFloat("infoIESS");
    recuperarFloat("infoNombre");
    recuperarFloat("infoCedula");
    recuperarFloat("infoSueldo");

    let aporteEmpleador = calcularAporteEmpleador(sueldo);
    let rol = {};
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.agregarEmpleado=aporteEmpleador;

    roles.push(rol);
    mostrarTexto("lblErrorDescuentos","EXITO");
    deshabilitarComponente("btnGuardar");
}