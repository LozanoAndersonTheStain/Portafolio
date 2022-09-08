let menuVisible = false 

// Aqui haremos el proceso de mostrar o ocultar el menu 

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById('nav').classList=''
        menuVisible = false
    } else {
        document.getElementById('nav').classList='responsive'
        menuVisible = true
    }
}



function seleccionar(){
    // Aqui haremos que cuando se seleccione un elemento el menu despararezca de la pantalla 

    document.getElementById('nav').classList = ''
    menuVisible = false
}

// Aqui le damos la animacion a las barras de las habilidades

function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skils = window.innerHeight - skills.getBoundingClientRect().top
    
    if(distancia_skils >= 300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('git');
        habilidades[1].classList.add('Html');
        habilidades[2].classList.add('Css');
        habilidades[3].classList.add('notejs');
        habilidades[4].classList.add('javascript');
        habilidades[5].classList.add('mysql');
        habilidades[6].classList.add('trabajoenequipo');
        habilidades[7].classList.add('comunicacionasertiva');
        habilidades[8].classList.add('escuchaactiva');
        habilidades[9].classList.add('paciencia');
        habilidades[10].classList.add('sociable');
        habilidades[11].classList.add('creatividad');
        habilidades[12].classList.add('dedicacion');
    }
}

// Se hace la deteccion del scrolling para poder aplicar la animacion a la barra

window.onscroll = function(){
    efectoHabilidades();
}
