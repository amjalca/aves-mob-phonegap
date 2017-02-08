describe("Funcionalidad Equipo", function() {

	describe("Probar clic sobre elementos", function() {
	     	   var spyEvent;
		   beforeEach(function() {	   
      	                   
			   loadFixtures('equipo.html'); 
		   }); 

		  it ("should invoke the btnMnEBclr(Opcion Binoculares) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnEBclr', 'click');
		      $('#btnMnEBclr').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnEBclr');
		      expect(spyEvent).toHaveBeenTriggered();
		    });
		  it ("should invoke the btnMnEBtll(Opcion Botella) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnEBtll', 'click');
		      $('#btnMnEBtll').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnEBtll');
		      expect(spyEvent).toHaveBeenTriggered();
		    });

                  it ("should invoke the btnMnESndc(Opcion Sanduche) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnESndc', 'click');
		      $('#btnMnESndc').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnESndc');
		      expect(spyEvent).toHaveBeenTriggered();
		    });

                 it ("should invoke the btnMnECmra(Opcion Cámara) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnECmra', 'click');
		      $('#btnMnECmra').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnECmra');
		      expect(spyEvent).toHaveBeenTriggered();
		    });

               it ("should invoke the btnMnELbrt(Opcion LIbreta) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnELbrt', 'click');
		      $('#btnMnELbrt').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnELbrt');
		      expect(spyEvent).toHaveBeenTriggered();
		    });

 it ("should invoke the btnMnELupa(Opcion Lupa) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnELupa', 'click');
		      $('#btnMnELupa').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnELupa');
		      expect(spyEvent).toHaveBeenTriggered();
		    });
 it ("should invoke the btnMnEPnza(Opcion Pinza) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnEPnza', 'click');
		      $('#btnMnEPnza').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnEPnza');
		      expect(spyEvent).toHaveBeenTriggered();
		    });

 it ("should invoke the btnMnELpiz(Opcion Lapiz) click event.", function() {
		      spyEvent = spyOnEvent('#btnMnELpiz', 'click');
		      $('#btnMnELpiz').trigger( "click" );
			   
		      expect('click').toHaveBeenTriggeredOn('#btnMnELpiz');
		      expect(spyEvent).toHaveBeenTriggered();
		    });




       });









  
  
  
	   	   
	   
});

	
