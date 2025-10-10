jugar=function(){
    let aleatorio;
    let res1="ES MAYOR A 3 GANASTE";
    let res2="ES MENOR A 3 PERDISTE";
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("txtTexto",res1);
    }else{
        cambiarTexto("txtTexto",res2);
    }
}

//Crear una funcion lanzarDado
//No recibe parametros
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    
    numeroEntero=parseInt(numeroMultiplicado); //Entre 0 y 5
    
    valorDado=numeroEntero+1;//Entre 1 y 6
    
    return valorDado;

}