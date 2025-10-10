calcularPromedioNotas=function(){
    let nota1=recuperarFloat("txtNota1");
    let nota2=recuperarFloat("txtNota2");
    let nota3=recuperarFloat("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);

    let resultado=promedio.toFixed(2);

    if(resultado>7){
        mostrarImagen("imgImagen","tenor.gif");
    }else{
        mostrarImagen("imgImagen","giphy.gif");
    }
}