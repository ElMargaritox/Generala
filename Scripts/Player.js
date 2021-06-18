

function ShowPuntos(){
    

    for (let index = 0; index < 5; index++) {
        Puntos += Dados[index];
     }
     


    var temp = document.getElementById('points');
    temp.innerText = `${Puntos} Puntos`;
    
   

}

function SavePuntos(){
    GuardarPuntos();
}

function PasarDeTurno(){

    var temp = document.getElementById('player');
    
        if(TurnoActual == 4)TurnoActual = 0;
        console.log(TurnoActual);
        temp.innerText = `Turno De: ${Nombres[TurnoActual]}`;
        JugadorActual = Nombres[TurnoActual];


        var temp2 = document.getElementById('playerturno'); // MUESTRA EL MODAL PARA CAMBIAR LOS TURNOS
        temp2.innerText = `Turno De: ${Nombres[TurnoActual]}`;
        var myModal = new bootstrap.Modal(document.getElementById('turnoplayer'), {
            keyboard: false
          })
          myModal.show();  

        TurnoActual++;  
}


function GuardarPuntos(){



    PuntosJugadores[TurnoActual - 1] += Puntos + PuntosBonos;
    BorrarPuntos();
    addPlayersToTable();
    RevisarPuntos();

}

function RevisarPuntos(){
    if(PuntosJugadores[TurnoActual -1] > ScoreMaximo){
        Ganador();
        console.log(JugadorActual);
        console.log(PuntosJugadores[TurnoActual -1]);
        console.log(ScoreMaximo);
    }
}

function BorrarPuntos(){
    Puntos = 0;
    PuntosBonos = 0;
}


function Ganador(){
    var temp = document.getElementById('winner2');
    temp.innerText = `Ha Ganado El Jugador (${JugadorActual})`;
    
    var temp2 = document.getElementById('winner3');
    temp2.innerText = `Una Apuesta De: (${Apuesta * 4})`;

    Winner();

    var myModal = new bootstrap.Modal(document.getElementById('ganaste'), {
        keyboard: false
      })
      myModal.show();  
}




function MostrarDadosDisponibles(){
    var temp = document.getElementById('BotonTirarDados');
    temp.innerText = `Lanzar Dados (${TiradasActuales})`;
}
