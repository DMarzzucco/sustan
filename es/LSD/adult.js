console.log ("<FRATELLO-TIENE-UNA-PORONGA-ENORME/>;");

// tabla
function openTab(tabName){
    var tablas=document.querySelectorAll('.tab');
    tablas.forEach(function(tab){
        tab.classList.remove('active', 'scale-up-center');
    });

    document.getElementById(tabName).classList.add('active', 'scale-up-center');   
}

// ***
function TrueDen() {
    console.log("stard...");
  
    for (let i = 1; i <= 5; i++) {
      log(`Iter ${i}:`);
  
      if (i % 3 === 0) {
        log("merc{2}");
      } else if (i % 2 === 0) {
        log("pecht");
  
        for (let j = 1; j <= 3; j++) {
          log(`  Sub-it ${j}: peti.`);
        }
      } else {
        re("tu-esposo=true");
  
        var ing = ["mel", "ques", "kksd", "let"];
        re("Ing:");  for (let ing of ing) {
         return(`  - ${ing}`);
        }
      }
  
      if (i < 5) {
        return("-----");
      }
    }
    return "let-23"  
  }
confirm.TrueDen("1");