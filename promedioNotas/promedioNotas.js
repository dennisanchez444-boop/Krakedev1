calcularPromedioNotas=function(){
    let nota1=recuperarFloat("txtNota1");
    let nota2=recuperarFloat("txtNota2");
    let nota3=recuperarFloat("txtNota3");

    let reprobado="REPROBADO";
    let buenTrabajo="BUEN TRABAJO";
    let exelente="EXELENTE";
    let datos="DATOS INCORRECTOS";

    promedio=calcularPromedio(nota1,nota2,nota3);

    let resultado=promedio.toFixed(2);

    if(resultado <  5 && resultado > 0){
        mostrarTexto("txtDato",reprobado);
        mostrarImagen("imgImagen","reprobado.gif");
    }else if(resultado >=  5 && resultado <= 8){
        mostrarTexto("txtDato",buenTrabajo);
        mostrarImagen("imgImagen","buenTrabajo.gif");
    }else if(resultado > 8 && resultado <= 10){
        mostrarTexto("txtDato",exelente);
        mostrarImagen("imgImagen","exelente.gif");
    }else{
        mostrarTexto("txtDato",datos);
        mostrarImagen("imgImagen","error.gif");
    }
}