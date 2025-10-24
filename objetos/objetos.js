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
    }else{
        console.log("Ambos productos tienes el mismo stock");
    }
}