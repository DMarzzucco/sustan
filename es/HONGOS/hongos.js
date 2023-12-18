function openTab(tabName){
    var tablas=document.querySelectorAll('.tab');
    tablas.forEach(function(tab){
        tab.classList.remove('active', 'escala-up');
    });

    document.getElementById(tabName).classList.add('active', 'escala-up');   
}
// precau
var titulos = document.querySelectorAll('.titulos');

// Itera sobre los elementos y agrega un event list a cada uno
titulos.forEach(function(titulo) {
    // Obtén el número del título y del contenido
    var num = titulo.id.replace('titulo', ''); // Extrae el número de id

    // Agrega evento de clic al título
    titulo.addEventListener('click', function() {
        var contenido = document.getElementById('conten' + num);
        
        // Agrega la clase de animación cuando se muestra el contenido
        if (contenido.style.display === 'none' || contenido.style.display === '') {
            contenido.style.display = 'block';
            contenido.classList.add('escala-up');
        } else {
            contenido.style.display = 'none';
        }
    });
    
    // Agrega evento de clic al contenido para ocultarlo
    var contenido = document.getElementById('conten' + num);
    contenido.addEventListener('click', function(event) {
        // Evita que el clic en el contenido se propague al título
        event.stopPropagation();

        // Oculta el contenido
        contenido.style.display = 'none';
        contenido.classList.remove='escala-up'
    });
});
