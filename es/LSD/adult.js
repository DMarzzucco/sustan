
// tabla
function openTab(tabName){
    var tablas=document.querySelectorAll('.tab');
    tablas.forEach(function(tab){
        tab.classList.remove('active', 'scale-up-center');
    });

    document.getElementById(tabName).classList.add('active', 'scale-up-center');   
}

// red
function redireccionar (url){
    if (url && url !== '#') {
        window.location.href = url;
    }
}