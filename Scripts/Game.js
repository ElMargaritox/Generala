let Nombres = [];
let PuntosJugadores = [0, 0, 0, 0];
let Apuesta; // ESTA VARIABLE NO PUEDE SER - 0 NI MAYOR QUE 1000
let Temporizador = 600;
let ScoreMaximo = 200;
let TiradasActuales = 3;
let JugadorActual;
let Dados = [];
let TurnoActual = 0;
let Puntos = 0;
let PuntosBonos = 0;


 
var face0=new Image()
face0.src="Dados/dado1.png"
var face1=new Image()
face1.src="Dados/dado2.png"
var face2=new Image()
face2.src="Dados/dado3.png"
var face3=new Image()
face3.src="Dados/dado4.png"
var face4=new Image()
face4.src="Dados/dado5.png"
var face5=new Image()
face5.src="Dados/dado6.png"




function AjustesCambios(){


    Temporizador = document.getElementsByName('flexRadioDefault1');
    for (let index = 0; index < Temporizador.length; index++) {
        if(Temporizador[index].checked){
            Temporizador = Temporizador[index].value;
        }
    }
    ScoreMaximo = document.getElementsByName('flexRadioDefault2');
    for (let index = 0; index < ScoreMaximo.length; index++) {
        if(ScoreMaximo[index].checked){
            ScoreMaximo = ScoreMaximo[index].value;
        }
    }

    Limpiar();
}


function ReiniciarPartida(){
    location.reload();
}

function StartNewGame(){ 
    for (let index = 0; index < 4; index++) {Nombres[index] = document.getElementById('name'+index).value;}
    Apuesta = document.getElementById('apuesta').value;AjustesCambios();
    
    
    //validacion de errores//
    if (Apuesta > 0 & Apuesta < 1000){
        document.getElementById('newgame').style.display = 'none';
        $("#newgame").children().remove();

        console.log("SE HA INICIADO UNA NUEVA PARTIDA -- GENERALA");
        EmpezarJuego();
        addPlayersToTable();
    }
    else{

    var myModal = new bootstrap.Modal(document.getElementById('error0'), {
        keyboard: false
      })
        myModal.show();  
    }
    MostrarNewGame();


}   
function EmpezarJuego(){ 

    for (let index = 0; index < 4; index++) {
        Apuesta[index] = 0;     
    }

    document.getElementById('Juego').style.display = 'none';
    document.getElementById('mesa').style.display = 'block';
    PasarDeTurno();reloj();
}




function TirarDados(){

    ButtonClick();

    if(TiradasActuales < 1){

        var myModal = new bootstrap.Modal(document.getElementById('noturnos'), {
            keyboard: false
          })
            myModal.show();  
        
    }else{

        TiradasActuales--;
        PuntosBonos = 0;
        Puntos = 0;
        MostrarDadosDisponibles();
        
       for (let index = 1; index < 6; index++) {
        randomdice=Math.round(Math.random()*5);
        document.images["dado"+index].src=eval("face"+randomdice+".src");      
        Dados[index-1] = randomdice +1;
       }
       DetectarJuegos();
       ShowPuntos();
       


    } 
}

function DetectarJuegos(){


    var juegito = document.getElementById('cartas');
    var Bonos = document.getElementById('bono')
    Bonos.innerText = "";
    juegito.innerText = "";


    //GENERALA 
    /*
    for (let num = 0; num < 7; num++) {


      if((Dados[0] & Dados[1] & Dados[2] & Dados[3] & Dados[4]) == num){
            console.log("LOL");
        }
        
        
        if (Dados[0] == num & Dados[1] == num & Dados[2] == num & Dados[3] == num & Dados[4] == num) {
            juegito.innerText = `¡Generala!`; Ganador(); 
        }
        


    }
    */

    if(RepetidorNumeros() == 5){
        juegito.innerText = `¡Generala!`; Ganador();
    }
    // PIERNA

    if(RepetidorNumeros() == 3){
        juegito.innerText = `¡Pierna!`
        Bonos.innerText = "18 Puntos+";
        PuntosBonos = 18;
    }

    // PAR DOBLE

    if(RepetidorNumeros() == 2){

        juegito.innerText = `¡Par Doble!`
        Bonos.innerText = "12 Puntos+";
        PuntosBonos = 12;
    }

    // POKER
    if(RepetidorNumeros() == 4){

        juegito.innerText = `¡Poker!`
        Bonos.innerText = "30 Puntos+";
        PuntosBonos = 30;
    }

    // FULL
    if(RepetidorNumeros() == 3 & RepetidorNumeros == 2){
        juegito.innerText = `¡Full!`
        Bonos.innerText = "22 Puntos+";
        PuntosBonos = 22;
    }

}

function RepetidorNumeros(){
    var n, x = 0, q, repetidor = 0, numero = 0;
    for (let index = 0; index < 5; index++) {
        n = Dados[index];
        for (let e = 0; e < 7; e++) {
            if(n == Dados[e]){
                x++;
                q = Dados[index];
            }
        }

        if(x >= repetidor){
            numero = q;
            repetidor = x;
        }
        x = 0;
    }
    return repetidor;
}

function TerminarTurno(){
    if (TiradasActuales == 3)
            {
                var myModal = new bootstrap.Modal(document.getElementById('ningunturno'), {
                    keyboard: false
                  })
                    myModal.show();  
            }else{
                SavePuntos();
                PasarDeTurno();

                addPlayersToTable();
                TiradasActuales = 3; MostrarDadosDisponibles();
            }
}

function ResetGame(){
    Puntos = 0;
}







