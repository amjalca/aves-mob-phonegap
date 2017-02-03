var app={
    inicio: function(){
        this.iniciaBtnMEquipo();
        this.iniciaFastClick();
        this.iniciaBtnMBotella();
        this.iniciaBtnMSanduche();
        this.iniciaBtnMCamara();
        this.iniciaBtnMLibreta();
        this.iniciaBtnMLupa();
        this.iniciaBtnMPinza();
        this.iniciaBtnMLapiz();
    },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
  ////////////////////////////////
  iniciaBtnMEquipo: function(){
    var botonHome = document.querySelector('#imgHome');
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnEBclr");

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
  //////////////////////////////////
  iniciaBtnMBotella: function(){
    // Get the modal
    var modal = document.getElementById('myModal2');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnEBtll");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close2");

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

  //////////////////////////////////
  iniciaBtnMSanduche: function(){
    // Get the modal
    var modal = document.getElementById('myModal3');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnESndc");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close3");

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
  //////////////////////////////////
  iniciaBtnMCamara: function(){
    // Get the modal
    var modal = document.getElementById('myModal4');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnECmra");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close4");

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
  //////////////////////////////////
  iniciaBtnMLibreta: function(){
    // Get the modal
    var modal = document.getElementById('myModal5');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnELbrt");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close5");

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
  //////////////////////////////////
  iniciaBtnMLupa: function(){
    // Get the modal
    var modal = document.getElementById('myModal6');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnELupa");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close6");

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
  //////////////////////////////////
  iniciaBtnMPinza: function(){
    // Get the modal
    var modal = document.getElementById('myModal7');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnEPnza");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close7");

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
  //////////////////////////////////
  iniciaBtnMLapiz: function(){
    // Get the modal
    var modal = document.getElementById('myModal8');

    // Get the button that opens the modal
    var btn = document.getElementById("btnMnELpiz");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close8");

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


}
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}
