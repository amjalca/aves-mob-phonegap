var app={
    
  inicio: function(){  

this.iniciaBtnMHabtC();
    
    this.iniciaBtnMHabtD();
    this.iniciaBtnMHabtP();
    this.iniciaBtnMHabtB();
    this.iniciaBtnMHabtS();
    this.iniciaBtnMHabtL();
    this.iniciaFastClick();

     

    
  },
  
  iniciaBtnMHabtC: function(){
     var botonHome = document.querySelector('#imgHome');
      var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("prueba");

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
    var btn = document.getElementById("prueba2");

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
    var btn = document.getElementById("prueba3");

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
    var btn = document.getElementById("prueba4");

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
    var btn = document.getElementById("prueba5");

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
    var btn = document.getElementById("prueba6");

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

   $( "#aprenderTab" ).trigger( "click" );


        app.inicio();
    }, false);
}
