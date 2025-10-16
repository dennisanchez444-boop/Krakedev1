let puntos=0;
let lanzamientos=5;
let ganaste="GANASTE!!";
let perdiste="GAME OVER";

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("ldlPuntos", puntos);
    //Si el jugador obtiene mas de 20 puntos
    //Mostrar un mensaje GANASTE!!
    //Invocar a limpiar
    if(puntos>20){
        cambiarTexto("lblResultado",ganaste);
        limpiar();
    }    
}

//no recibe parametros
//resta 1 a la varable lanzamientos, guarda resultado en la misma variable
//y muestra en pantalla 
modificarLanzamientos=function(){
    //Si lanzamiento llega a 0
    //Mostrar el mensaje GAME OVER
    //Invocar a limpiar
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos==0){
        cambiarTexto("lblResultado",perdiste);
        limpiar();
    }    
}

limpiar=function(){
    //Colocar puntaje en 0 y lanzamiento en 5
    //En las variables y en pantalla
    //Quitar la imagen ""
    cambiarTexto("ldlPuntos","0");
    cambiarTexto("lblLanzamientos","5");
    cambiarImagen("imgDado","");
}

//funcion mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
mostrarCara=function(numero){
    if(numero == 1){ //con == compara, mientras que con = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}