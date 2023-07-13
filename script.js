let menuVisible = false;
//funcion q oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menun una vez q selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;


}
// funcion q aplica las animaciones de la habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("angular");
        habilidades[7].classList.add("mongoDB");
        habilidades[8].classList.add("golang");
        habilidades[9].classList.add("comunication");
        habilidades[10].classList.add("teamwork");
        habilidades[11].classList.add("creativity");
        habilidades[12].classList.add("dedication");
        habilidades[13].classList.add("dicipline");

    }
}
//detecto el scrolling para aplicar la aninmacion de la barra de habilidades

window.onscroll = function() {
    efectoHabilidades();
}