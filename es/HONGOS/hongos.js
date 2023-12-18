function openTab(tabName){
    var tablas=document.querySelectorAll('.tab');
    tablas.forEach(function(tab){
        tab.classList.remove('active', 'escala-up');
    });

    document.getElementById(tabName).classList.add('active', 'escala-up');   
}
// precau
// contenid1
// document.getElementById('titulo1').addEventListener('click', function(){
//     var contenido= document.getElementById('conten1');
//     contenido.style.display=(
//         contenido.style.display === 'none'|| contenido.style.display === '' ) ? 'block' : 'none';
// });

// document.getElementById('titulo2').addEventListener('click', function(){
//     var contenido= document.getElementById('conten2');
//     contenido.style.display=(
//         contenido.style.display === 'none'|| contenido.style.display === '' ) ? 'block' : 'none';
// });


// document.getElementById('titulo3').addEventListener('click', function(){
//     var contenido= document.getElementById('conten3');
//     contenido.style.display=(
//         contenido.style.display === 'none'|| contenido.style.display === '' ) ? 'block' : 'none';
// });


// document.getElementById('titulo4').addEventListener('click', function(){
//     var contenido= document.getElementById('conten4');
//     contenido.style.display=(
//         contenido.style.display === 'none'|| contenido.style.display === '' ) ? 'block' : 'none';
// });


// document.getElementById('titulo5').addEventListener('click', function(){
//     var contenido= document.getElementById('conten5');
//     contenido.style.display=(
//         contenido.style.display === 'none'|| contenido.style.display === '' ) ? 'block' : 'none';
// });


// document.getElementById('titulo6').addEventListener('click', function(){
//     var contenido= document.getElementById('conten6');
//     contenido.style.display=(
//         contenido.style.display === 'none'|| contenido.style.display === '' ) ? 'block' : 'none';
// });
// Selecciona todos los elementos con clase "titulos"
var titulos = document.querySelectorAll('.titulos');

// Itera sobre los elementos y agrega un event listener a cada uno
titulos.forEach(function(titulo) {
    // Obtén el número del título y del contenido
    var num = titulo.id.replace('titulo', ''); // Extrae el número de id

    // Agrega evento de clic al título
    titulo.addEventListener('click', function() {
        var contenido = document.getElementById('conten' + num);
        contenido.style.display = (contenido.style.display === 'none' || contenido.style.display === '') ? 'block' : 'none';
    });

    // Agrega evento de clic al contenido para ocultarlo
    var contenido = document.getElementById('conten' + num);
    contenido.addEventListener('click', function(event) {
        // Evita que el clic en el contenido se propague al título
        event.stopPropagation();

        // Oculta el contenido
        contenido.style.display = 'none';
    });
});
