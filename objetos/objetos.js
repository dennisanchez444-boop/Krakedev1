probarAtributos = function () {
    let persona = {
        nombre: "Dennis",
        apellido: "Sanchez",
        edad: 18,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No esta vivo");
    } else {
        console.log("Si esta vivo");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "Celular Nuevo",
        precio: 400.99,
        stock: 20
    }
    let producto2 = {
        nombre: "Pc Nueva",
        precio: 600.99,
        stock: 40
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else {
        console.log("Ambos productos tienes el mismo stock");
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "535453626",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "213212",
        nombre: "Juan"
    }
    let cliente1 = {};
    cliente1.nombre = "Ramon";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "232323";
}

probarIncrementoSaldo = function () {
    let cuenta = { numero: "2332", saldo: 34.0 };
    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

probarDeterminarMayor = function () {
    let per1 = { nombre: "Jose", edad: 57 };
    let per2 = { nombre: "Mateo", edad: 45 };
    let mayor;
    determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El Mayor es. " + mayor.nombre);
    } 
}
incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}