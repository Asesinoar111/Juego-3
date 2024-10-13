var nave = {
    left: 450,
    top: 620
};

var aliens = [
    {left: 350, top: 200},
    {left: 450, top: 175},
    {left: 150, top: 300},
    {left: 750, top: 175},
    {left:  50, top:  50},
    {left: 600, top: 400},
];

var disparos = [];

function dibujaNave(){
    contenido = "<div class='nave' style='left:"+nave.left+"px; top:"+nave.top+"px'></div>";
    document.getElementById("naves").innerHTML = contenido;
}

function dibujaAliens(){
    contenido = "";
    console.log(aliens);
    for(var x = 0; x <aliens.length; x ++){
            contenido += "<div class='alien' style='left:"+aliens[x].left+"px; top:"+aliens[x].top+"px'></div>";

    }
    document.getElementById("aliens").innerHTML = contenido;
}

function dibujaDisparos(){
    contenido = "";
    for(var x =0; x<disparos.length; x++){
        contenido+=                        "<div class = 'disparo' style='left: "+disparos[x].left+"px; top: "+disparos[x].top+"px'></div>"
    }
    document.getElementById("disparos").innerHTML = contenido;
}

function moverAliens(){
    for(var x = 0; x < aliens.length; x ++){
        if(aliens[x].top < 620) {
            aliens[x].top = aliens[x].top + 10; 
        }
       
    }
}

function moverDisparos(){
    for(var x = 0; x < disparos.length; x ++){
        disparos[x].top = disparos[x].top - 10; 
    }
}

document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode === 37 && nave.left > -10){ //Izquierda
        nave.left -= 10;
    }

    if(e.keyCode === 39 && nave.left < 800){ //Derecha
        nave.left += 10;
    }

    if(e.keyCode === 38 && nave.top > 450){ //Arriba
        nave.top -= 10;
    }
    
    if(e.keyCode === 40 && nave.top < 620){ //Abajo
        nave.top += 10;
        console.log(nave.top)
    }
    
    if(e.keyCode === 32){ //Disparo
        disparos.push({left: (nave.left+34), top: (nave.top-8)});
        dibujaDisparos();
    }


    dibujaNave();
}

function cicloJuego() {
    dibujaNave();

    moverAliens();
    dibujaAliens();

    moverDisparos();
    dibujaDisparos();

    setTimeout(cicloJuego, 500)
}

cicloJuego();