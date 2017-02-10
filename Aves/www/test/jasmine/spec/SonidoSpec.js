describe("Funcionalidad Probar evaluar sonidos", function() {

	describe("Elegir respuesta correcta", function() {
	     	   var spyEvent;
		   beforeEach(function() {	   
      	                   			  
                           loadFixtures('sonido.html');
			   $('#Evaluar.tabcontent').trigger( "click" );
			   $("#respCorrecta").prop("checked", true);
			   
		   }); 

		  it ("should invoke the btnSon(Dar clic sobre el boton Aceptar, debe aparecer un modal con el mensaje de Correcto) click event.", function() {
		      spyEvent = spyOnEvent('#btnSon', 'click');
		      $('#btnSon').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnSon');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#resES').html()).toEqual('Correcto');
		    });



       });

describe("Elegir respuestas incorrectas", function() {
	     	   var spyEvent;
		   beforeEach(function() {	   
      	                    			  
                           loadFixtures('sonido0.html');
			$('#Evaluar.tabcontent').trigger( "click" );
      			$("#respCorrecta").prop("checked", false);
			
			   
		   }); 

		  it ("should invoke the btnSon(Dar clic sobre el boton Aceptar, debe aparecer un modal con el mensaje ¡Vuelva a intentarlo!) click event.", function() {
		      spyEvent = spyOnEvent('#btnSon', 'click');
		      $('#btnSon').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnSon');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#resES').html()).toEqual('¡Vuelva a intentarlo!');
		    });



       });







  
  
  
	   	   
	   
});

	
