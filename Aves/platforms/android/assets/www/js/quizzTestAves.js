var app={
    
  inicio: function(){
    this.iniciaFastClick();
    this.realizarEvaluacion();
    //this.registrarRespuesta();
    //this.evaluarTest();
   
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
  
  realizarEvaluacion: function(){

    
    var botonEvaluar = document.querySelector('#botonEvaluar');
    
    botonEvaluar.addEventListener('click',this.evaluarTest,false);

   //var imagenOpcion = document.querySelector('.img');
   //imagenOpcion.addEventListener('click',this.registrarRespuesta,false);

    /*$( ".img" ).click(function() {
  		respuestasEscogidas.push($( this ).attr('id'));
		alert(respuestasEscogidas);
    });*/


  }//,

  /*registrarRespuesta: function(){
	respuestasEscogidas.push($( this ).attr('id'));
	alert(respuestasEscogidas);
        
  },

  evaluarTest: function(){
	var respuestaCorrecta = true;
	var len = respuestasEscogidas.length;
	for (var i = 0; i < len; i++) {
		  if(!respuestasValidas.contains(respuestasEscogidas[i])){
			respuestaCorrecta = false;
		  }
	}
	if(respuestaCorrecta){
		alert("Correcto");
	}
	else{
		alert("Incorrecto");		
	}
        
  }*/

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
	var respuestasValidas = ['marina1','marina2','marina3','marina4','marina5','marina6'];
	var respuestasEscogidas = [];
        app.inicio();
	$(".img").click(function(event){
		if($( this ).css( "opacity") != 0.3){
			$( this ).css( "opacity", 0.3 );
		}
		else{
			$( this ).css( "opacity", 1.0 );
		}
        	respuestasEscogidas.push(String($( this ).attr('id')));
	        alert(respuestasEscogidas);
        });
	$("#botonEvaluar").click(function(event){
        	var respuestaCorrecta = true;
		var len = respuestasEscogidas.length;
		for (var i = 0; i < len; i++) {
				
			  if(respuestasValidas.indexOf(respuestasEscogidas[i]) < 0){
				respuestaCorrecta = false;
			  }
		}
		if(respuestaCorrecta){
			alert("Correcto");
		}
		else{
			alert("Incorrecto");		
		}
        });


    }, false);
}
