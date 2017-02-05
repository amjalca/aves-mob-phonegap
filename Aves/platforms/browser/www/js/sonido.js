var app={
    
  inicio: function(){
    this.iniciaBtnMSonido();
    this.iniciaFastClick();
  },
  
  iniciaBtnMSonido: function(){
    var botonHome = document.querySelector('#imgHome');
    var botonEvaluar = document.querySelector('#btnSon');

    botonHome.addEventListener('click',this.nxtMnHome,false);
    botonEvaluar.addEventListener('click',this.btnEvaluarS,false);
    
  },

  nxtMnHome: function(){
    location.href="menu.html";
  },

  btnEvaluarS: function(){
    var avesSonido = document.getElementsByName('ave');
    var txt = "";
    var i;
    for (i = 0; i < avesSonido.length; i++) {
        if (avesSonido[i].checked) {
            txt = txt + avesSonido[i].value;
        }
    }
    if(txt=="Cacique Lomiamarillo"){
        //var botonHome = document.querySelector('#imgHome');
      // Get the modal
      var modal = document.getElementById('myModal');
      var im = document.getElementById('imgSon').src='resource/drawable/cacique_lomiamarillo.jpg';
      var res = document.getElementById('resES').innerHTML="Correcto";
      document.getElementById('resES').style='display: table;margin: 0 auto;';

      // Get the button that opens the modal
      //var btn = document.getElementById("btnMnEBclr");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      //botonHome.addEventListener('click',this.nxtMnHome,false);

      // When the user clicks the button, open the modal 
      //btn.onclick = function() {
          modal.style.display = "block";

      //}

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          //modal.style.display = "none";
          location.href="sonido.html";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              //modal.style.display = "none";
              location.href="sonido.html";
          }
      }
		}
		else{
			// Get the modal
      var modal = document.getElementById('myModal');
      var im = document.getElementById('imgSon').src='resource/drawable/incognito1.png';
      var res = document.getElementById('resES').innerHTML=" ¡Vuelva a intentarlo!";
      document.getElementById('resES').style='color:#E74C3C;display: table;margin: 0 auto;';

      //set checked to false
      var chOp = document.getElementsByName('ave');
      for (i = 0; i < chOp.length; i++) {
            avesSonido[i].checked = false;
    }
      // Get the button that opens the modal

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal 
      //btn.onclick = function() {
          modal.style.display = "block";

      //}

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
