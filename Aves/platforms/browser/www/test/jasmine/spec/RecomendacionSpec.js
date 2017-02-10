describe("Funcionalidad Evaluar", function() {
//Cuando un modal aparece, su atributo css "display" se 
	describe("Al seleccionar las imágenes correctas, un modal confirmando la respuesta correcta debe aparecer", function() {
	     	   var spyEvent;
		   beforeEach(function() {	   
      	                   //Es este caso de prueba, se escogen las respuestas correctas
			   loadFixtures('recomendacion.html'); 
			   $("#opt3").css('opacity','0.3');
			   $("#opt4").css('opacity','0.3');
		   }); 

		  it ("should invoke the botonEvaluarH(Al dar clic en Evaluar, debe aparecer el modal Respuesta correcta) click event.", function() {
		      spyEvent = spyOnEvent('#botonEvaluarH', 'click');
		      $('#botonEvaluarH').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#botonEvaluarH');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModalCorrecto').css('display')).toEqual('block');
		    });
		  



       });



describe("Al seleccionar imágenes incorrectas, un modal confirmando que la respuesta es incorrecta debe aparecer", function() {
	     	   var spyEvent;
		   beforeEach(function() {	   
      	                   //Es este caso de prueba, se escogen las respuestas correctas
			   loadFixtures('recomendacion.html');
			   $("#opt3").css('opacity','1');
			   $("#opt4").css('opacity','1');
		   }); 

		  it ("should invoke the botonEvaluarH(Al dar clic en Evaluar, debe aparecer el modal Respuesta Incorrecta) click event.", function() {
		      spyEvent = spyOnEvent('#botonEvaluarH', 'click');
		      $('#botonEvaluarH').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#botonEvaluarH');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModalIncorrecto').css('display')).toEqual('none');
		    });
		  



       });








  
  
  
	   	   
	   
});

	
