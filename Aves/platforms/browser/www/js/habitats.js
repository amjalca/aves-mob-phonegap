var app={
    
  inicio: function(){
    this.iniciaBtnsEvaluar();
    this.iniciaBtnMHabtC();
    this.iniciaBtnMHabtD();
    this.iniciaBtnMHabtP();
    this.iniciaBtnMHabtB();
    this.iniciaBtnMHabtS();
    this.iniciaBtnMHabtL();
    this.iniciaFastClick();
  },

  /*Sección Evaluar */
  iniciaBtnsEvaluar: function(){
    var botonECostas = document.querySelector('#EvaCostas');
    var botonEDesierto = document.querySelector('#EvaDesierto');
    var botonEPastizal = document.querySelector('#EvaPastizal');
    var botonEBosques = document.querySelector('#EvaBosques');
    var botonESelvas = document.querySelector('#EvaSelvas');
    var botonELRL = document.querySelector('#EvaLRL');

    botonECostas.addEventListener('click',this.evlrCostas,false);
    botonEDesierto.addEventListener('click',this.evlrDesierto,false);
    botonEPastizal.addEventListener('click',this.evlrPastizal,false);
    botonEBosques.addEventListener('click',this.evlrBosques,false);
    botonESelvas.addEventListener('click',this.evlrSelvas,false);
    botonELRL.addEventListener('click',this.evlrLRL,false);
    
  },

  evlrCostas: function(){
    location.href="costasE.html";
  },

  evlrDesierto: function(){
    alert("Desierto");
  },

  evlrPastizal: function(){
    alert("Pastizal");
  },

  evlrBosques: function(){
    alert("Bosques");
  },

  evlrSelvas: function(){
    alert("Selvas");
  },

  evlrLRL: function(){
    alert("Lagos");
  },

  /*Sección Aprender */
  iniciaBtnMHabtC: function(){
     var botonHome = document.querySelector('#imgHome');
      var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("AprCostas");

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
  iniciaBtnMHabtD: function(){
      var modal = document.getElementById('myModal2');

    // Get the button that opens the modal
    var btn = document.getElementById("AprDesierto");

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
  iniciaBtnMHabtP: function(){
      var modal = document.getElementById('myModal3');

    // Get the button that opens the modal
    var btn = document.getElementById("AprPastizal");

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
  iniciaBtnMHabtB: function(){
      var modal = document.getElementById('myModal4');

    // Get the button that opens the modal
    var btn = document.getElementById("AprBosques");

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
  iniciaBtnMHabtS: function(){
      var modal = document.getElementById('myModal5');

    // Get the button that opens the modal
    var btn = document.getElementById("AprSelvas");

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
  iniciaBtnMHabtL: function(){
      var modal = document.getElementById('myModal6');

    // Get the button that opens the modal
    var btn = document.getElementById("AprLRL");

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
 
  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}
