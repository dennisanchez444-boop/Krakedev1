saludar=function(){
    //recuperar el valor de la caja de texto txt Nombre
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    let mensajeBienvendida="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvendida);
    mostrarImagen("imgSaludo","./imagenes/saludos.gif");
    mostrarTextoEnCaja("txtNombre","");
}
