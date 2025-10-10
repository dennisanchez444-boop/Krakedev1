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
}