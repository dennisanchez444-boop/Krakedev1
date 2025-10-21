
calcularIva=function(monto){
    let iva=monto*0.12;
    return iva;
}
calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva;
    return total;
}
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let porcentajeDescuento=0;
    if(cantidad <3){
        porcentajeDescuento=0;
    }else if(cantidad>=3 && cantidad <=5){
        porcentajeDescuento=3;
    }else if(cantidad>=6 && cantidad <=11){
        porcentajeDescuento=4;
    }else if(cantidad>=12){
        porcentajeDescuento=5;
    }
    let valorDescuento=subtotal*porcentajeDescuento/100;
    return valorDescuento;   
}