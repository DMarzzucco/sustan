// respon
let menuVisible = false;
function showAndHideM (){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function selecionar(){
    document.getElementById("nav").classList ="";
    menuVisible=false;
}


// tab
function openTab(tabName){
    var tablas=document.querySelectorAll('.tab');
    tablas.forEach(function(tab){
        tab.classList.remove('active', 'escala-up');
    });

    document.getElementById(tabName).classList.add('active', 'escala-up');   
}
// precau
var titulos = document.querySelectorAll('.titulos');

// Iterar
titulos.forEach(function(titulo) {
    //  numero del título - del contenido
    var num = titulo.id.replace('titulo', ''); // número de id

    //  event  click
    titulo.addEventListener('click', function() {
        var contenido = document.getElementById('conten' + num);
        
        // animatk
        if (contenido.style.display === 'none' || contenido.style.display === '') {
            contenido.style.display = 'block';
            contenido.classList.add('escala-up');
        } else {
            contenido.style.display = 'none';
        }
    });
    
    // event hide
    var contenido = document.getElementById('conten' + num);
    contenido.addEventListener('click', function(event) {
        // none title
        event.stopPropagation();

        // Oculta el contenido
        contenido.style.display = 'none';
        contenido.classList.remove='escala-up'
    });
});
// h & s
function hideShow(){
    var ifectSection= document.querySelector('.ifect');
    // block
    ifectSection.style.display ='block';
    //redireccion
    window.location.href = window.location.href.split('#')[0] + '#ifect';
};
//redir
function redireccionar(url) {
    if (url && url !== '#') {
        window.location.href = url;
    }
}
// ***