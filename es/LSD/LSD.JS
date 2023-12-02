// tabla
function openTab(tabName){
    var tablas=document.querySelectorAll('.tab');
    tablas.forEach(function(tab){
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');   
}