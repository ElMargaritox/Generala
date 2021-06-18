function addPlayersToTable(){

    borrar();
    for (let index = 0; index < 4; index++) {
        var fila="<tr><td>"+Nombres[index]+"</td><td>"+ PuntosJugadores[index] +"</td><td>"+ "---" +"</td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("tablita").appendChild(btn);
    } 
    
}

function borrar(){
    $("#tablita").children().remove();
}
