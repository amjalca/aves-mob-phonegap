var app={
    
  inicio: function(){
    this.iniciaFastClick();
    this.iniciaBtnMEHabitats();
    //this.registrarRespuesta();
    //this.evaluarTest();
   
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
  
  iniciaBtnMEHabitats: function(){
    var botonHome = document.querySelector('#imgHome');
    //var botonHEvaluar = document.querySelector('#botonEvaluarH');

    botonHome.addEventListener('click',this.nxtMnHome,false);
    //botonHEvaluar.addEventListener('click',this.btnHEvaluar,false);
    
  },

  nxtMnHome: function(){
    location.href="tipos.html";
  },

  
};

if ('addEventListener' in document) {
document.addEventListener('DOMContentLoaded', function() {
    var respuestasValidas = ['marina1','marina2','marina3','marina4'];
	var respuestasEscogidas = [];
        app.inicio();
	$(".img").click(function(event){
		if($( this ).css( "opacity") != 0.3){
			$( this ).css( "opacity", 0.3 );
            $(this).css({"border-color": "#3498DB", 
             "border-width":"3px", 
             "border-style":"solid"});
            respuestasEscogidas.push(String($( this ).attr('id')));
		}
		else{
			$( this ).css( "opacity", 1.0 );
            $(this).css({"border-color": "#3498DB", 
             "border-width":"0px", 
             "border-style":"solid"});
            var i = respuestasEscogidas.indexOf(String($( this ).attr('id')));
            if(i != -1) {
                respuestasEscogidas.splice(i, 1);
            }
		}        
        
        //alert(respuestasEscogidas);
        	
        });
	$("#botonEvaluarH").click(function(event){
        var respuestaCorrecta = 0;
		var len1 = respuestasEscogidas.length;
        var len2 = respuestasValidas.length;

        for(var i = 0; i < len1; i++){
            for( var j = 0; j < len2; j++){
                if(respuestasValidas[i]==respuestasEscogidas[j]){
                    respuestaCorrecta ++;
                }
            }
        }
        
		if(respuestaCorrecta == len2){
			var modal = document.getElementById('myModal');
            //var im = document.getElementById('imgSon').src='resource/drawable/cacique_lomiamarillo.jpg';
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
                location.href="tipos.html";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    //modal.style.display = "none";
                    location.href="tipos.html";
                }
            }
		}
		else{
			var modal = document.getElementById('myModal');
            //var im = document.getElementById('imgSon').src='resource/drawable/incognito1_pregunta.png';
            var res = document.getElementById('resES').innerHTML=" ¡Vuelva a intentarlo!";
            document.getElementById('resES').style='color:#E74C3C;display: table;margin: 0 auto;';

            //set checked to false
            //var chOp = document.getElementsByName('ave');
            //for (i = 0; i < chOp.length; i++) {
            //        avesSonido[i].checked = false;
            //}
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
        });


    }, false);
}