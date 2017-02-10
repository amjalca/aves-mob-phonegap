describe("Funcionalidad de aprendizaje. Para esta prueba se utilizó a Equipo", function() {
//Cuando un modal aparece, su atributo css "display" se setea a block
	describe("Probar que al hacer clic sobre los botones que representan elementos (en éste caso equipos para una observación), se muestra un modal con información del elemento escogido", function() {
	     	   var spyEvent;
		   beforeEach(function() {	   
      	                   
			   loadFixtures('equipo.html'); 
		   }); 

		  it ("should invoke the btnMnEBtll(Al dar clic en Binoculares, aparece un modal con información sobre binoculares) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnEBclr', 'click');
		      $('#btnMnEBclr').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnEBclr');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModal').css('display')).toEqual('block');
		    });
		  it ("should invoke the btnMnEBtll(Al dar clic en botella, aparece un modal con información sobre botella) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnEBtll', 'click');
		      $('#btnMnEBtll').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnEBtll');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModal2').css('display')).toEqual('block');
		    });

                  it ("should invoke the btnMnESndc(dar clic en Sanduche, aparece un modal con información sobre sanduche) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnESndc', 'click');
		      $('#btnMnESndc').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnESndc');
		      expect(spyEvent).toHaveBeenTriggered();
		     expect($('#myModal3').css('display')).toEqual('block');
		    });

                 it ("should invoke the btnMnECmra(dar clic en Cámara, aparece un modal con información sobre Cámara) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnECmra', 'click');
		      $('#btnMnECmra').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnECmra');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModal4').css('display')).toEqual('block');
		    });

               it ("should invoke the btnMnELbrt(dar clic en Libreta, aparece un modal con información sobre Libreta) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnELbrt', 'click');
		      $('#btnMnELbrt').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnELbrt');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModal5').css('display')).toEqual('block');
		    });

 it ("should invoke the btnMnELupa(dar clic en Lupa, aparece un modal con información sobre Lupa) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnELupa', 'click');
		      $('#btnMnELupa').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnELupa');
		      expect(spyEvent).toHaveBeenTriggered();
		      expect($('#myModal6').css('display')).toEqual('block');
		    });
 it ("should invoke the btnMnEPnza(dar clic en Pinza, aparece un modal con información sobre Pinza) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnEPnza', 'click');
		      $('#btnMnEPnza').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnEPnza');
		      expect(spyEvent).toHaveBeenTriggered();
		     expect($('#myModal7').css('display')).toEqual('block');
		    });

 it ("should invoke the btnMnELpiz(dar clic en Lapiz, aparece un modal con información sobre Lapiz) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnELpiz', 'click');
		      $('#btnMnELpiz').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnELpiz');
		      expect(spyEvent).toHaveBeenTriggered();
		     expect($('#myModal8').css('display')).toEqual('block');
		    });




       });









  
  
  
	   	   
	   
});

	
