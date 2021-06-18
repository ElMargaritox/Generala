
function actualizarHora(i) {

    if (i<10) {i = "0" + i};  // Añadir el cero en números menores de 10

    return i;

}


function reloj() {

    
    var hoy=new Date(); var h=hoy.getHours(); var m=hoy.getMinutes(); var s=hoy.getSeconds();

    m = actualizarHora(m);    s = actualizarHora(s);

    document.getElementById('tiempo').innerHTML = h+":"+m+":"+s;

    var t = setTimeout(function(){reloj()},1000);

    if(Temporizador <= 0){
        alert("Ha Finalizado El TIempo");
    }

}