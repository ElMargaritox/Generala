
let musica = document.getElementById("fondo");
let contador = 0;

function Winner() {
    let sound = document.getElementById("winner");
    sound.autoplay = "true";
    sound.volume = 0.2;
    sound.load();
}

function sound(){
    musica.volume = 0.1;
}

function nosound(){

    musica.volume = 0;
}



function ButtonClick() {
    let sound = document.getElementById("button_click");
    sound.autoplay = "true";
    sound.volume = 0.2;
    sound.load();
}
