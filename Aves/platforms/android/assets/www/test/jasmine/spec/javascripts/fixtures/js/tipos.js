var app={
    
  inicio: function(){
    this.iniciaBtnsEvaluar();
    this.iniciaBtnMHabtM();
    this.iniciaBtnMHabtV();
    this.iniciaBtnMHabtG();
    this.iniciaBtnMHabtGS();
    this.iniciaBtnMHabtH();
    this.iniciaBtnMHabtB();
    this.iniciaBtnMHabtP();
    this.iniciaBtnMHabtGL();
    this.iniciaFastClick();
  },

  /*Sección Evaluar */
  iniciaBtnsEvaluar: function(){
    var botonEMarinas = document.querySelector('#EvaMarinas');
    var botonEVadeadoras = document.querySelector('#EvaVadeadoras');
    var botonEGaviotas = document.querySelector('#EvaGaviotas');
    var botonEGansos = document.querySelector('#EvaGansos');
    var botonEHalcones = document.querySelector('#EvaHalcon');
    var botonEBuhos = document.querySelector('#EvaBuho');
    var botonEPalomas = document.querySelector('#EvaPaloma');
    var botonEGolondrinas = document.querySelector('#EvaGolondrina');

    botonEMarinas.addEventListener('click',this.evlrMarinas,false);
    botonEVadeadoras.addEventListener('click',this.evlrVadeadoras,false);
    botonEGaviotas.addEventListener('click',this.evlrGaviotas,false);
    botonEGansos.addEventListener('click',this.evlrGansos,false);
    botonEHalcones.addEventListener('click',this.evlrHalcones,false);
    botonEBuhos.addEventListener('click',this.evlrBuhos,false);
    botonEPalomas.addEventListener('click',this.evlrPalomas,false);
    botonEGolondrinas.addEventListener('click',this.evlrGolondrinas,false);
    
  },

  evlrMarinas: function(){
    location.href="marinasE.html";
  },

  evlrVadeadoras: function(){
    location.href="vadeadorasE.html";
  },

  evlrGaviotas: function(){
    location.href="gaviotasE.html";
  },

  evlrGansos: function(){
    location.href="gansosE.html";
  },

  evlrHalcones: function(){
    location.href="halconesE.html";
  },

  evlrBuhos: function(){
    location.href="buhosE.html";
  },

  evlrPalomas: function(){
    location.href="palomasE.html";
  },

  evlrGolondrinas: function(){
    location.href="golondrinasE.html";
  },

  /*Sección Aprender */
  iniciaBtnMHabtM: function(){
     var botonHome = document.querySelector('#imgHome');
      var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("AprMarinas");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    botonHome.addEventListener('click',this.nxtMnHome,false);

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },
 nxtMnHome: function(){
      location.href="menu.html";
    },
  ////////////////////////////////
  iniciaBtnMHabtV: function(){
      var modal = document.getElementById('myModal2');

    // Get the button that opens the modal
    var btn = document.getElementById("AprVadeadoras");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close2")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },

   ////////////////////////////////
  iniciaBtnMHabtG: function(){
      var modal = document.getElementById('myModal3');

    // Get the button that opens the modal
    var btn = document.getElementById("AprGaviotas");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close3")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },
   ////////////////////////////////
  iniciaBtnMHabtGS: function(){
      var modal = document.getElementById('myModal4');

    // Get the button that opens the modal
    var btn = document.getElementById("AprGansos");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close4")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },

   ////////////////////////////////
  iniciaBtnMHabtH: function(){
      var modal = document.getElementById('myModal5');

    // Get the button that opens the modal
    var btn = document.getElementById("AprHalcon");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close5")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },

   ////////////////////////////////
  iniciaBtnMHabtB: function(){
      var modal = document.getElementById('myModal6');

    // Get the button that opens the modal
    var btn = document.getElementById("AprBuho");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close6")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },

   ////////////////////////////////
  iniciaBtnMHabtP: function(){
      var modal = document.getElementById('myModal7');

    // Get the button that opens the modal
    var btn = document.getElementById("AprPaloma");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close7")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },
 
  ////////////////////////////////
  iniciaBtnMHabtGL: function(){
      var modal = document.getElementById('myModal8');

    // Get the button that opens the modal
    var btn = document.getElementById("AprGolondrina");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close8")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}
