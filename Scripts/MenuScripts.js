

function MostrarNewGame(){Limpiar();
    document.getElementById('newgame').style.display = 'block';}



function MostrarOpciones(){Limpiar();
    document.getElementById('opciones').style.display = 'block';
}


function Limpiar(){
    document.getElementById('opciones').style.display = 'none';
    document.getElementById('newgame').style.display = 'none';
}


function MostrarWelcome(){
    var myModal = new bootstrap.Modal(document.getElementById('welcome'), {
        keyboard: false
      })
        myModal.show();  
}



