calcularTasaInteres=function(ingresoAnual){
    if(ingresoAnual < 300000){
        return 16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        return 15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        return 14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        return 13;
    }else if(ingresoAnual>=2000000){
        return 12
    }
}

calcularCapacidadPag0=function(edad,ingresos,egresos){
    let sobra=ingresos-egresos;
    let capacidad;
    if(edad >50){
        capacidad=sobra*0.30;
    }else{
        capacidad=sobra*0.40;
    }
    return capacidad;
}

calcularDescuento=function(precio,cantidad){
    let descuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad <=5){
        descuento=0.02;
    }else if(cantidad>=6 && cantidad <=11){
        descuento=0.03;
    }else{
        descuento=0.04;
    }
    let total=precio*cantidad;
    let totalDescuento=total*1-descuento;
    return totalDescuento;
}

determinarCelesterolLDL=function(nivelColesterolLDL){
    if (nivelColesterolLDL < 110) {
    return "Cualquier persona de 19 años o menos:";
  } else if (nivelColesterolLDL <100) {
    return "Hombres de 20 años o mayores:";
  } else if (nivelColesterolLDL < 100) {
    return "Mujeres de 20 años o mayores:";
  }else {
    return "Valor no válido asegúrese de ingresar un número correcto";
  }
}

validarClave=function(clave){
    if(clave >=8 && clave<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    if(caracter >=65 && caracter <=90)
        return true;
    else{
        return false;
    }
}

esMinuscula=function(caracter){
    if(caracter >=97 && caracter <=122)
        return true;
    else{
        return false;
    }
}

esDigito=function(caracter){
    if(caracter >=48 && caracter<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica >90 || notaFisica >90 && notaGeometria >80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90 && notaFisica > notaMatematica){
        return true;
    }else{
        return false;
    }
}