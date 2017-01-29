var app={
    
  inicio: function(){
    this.iniciaBtnMenu();
    this.FastClick();
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
  
  iniciaBtnMenu: function(){
    var botonMnEquipo = document.querySelector('#btnMnEqpo');
    var botonMnRecomendaciones = document.querySelector('#btnMnRcmd');
    var botonMnTipos = document.querySelector('#btnMnTpos');
    var botonMnMorfologia = document.querySelector('#btnMnMorf');
    var botonMnHabitats = document.querySelector('#btnMnHbit');
    var botonMnSonidos = document.querySelector('#btnMnSnds');
    
    botonMnEquipo.addEventListener('click',this.nxtMnEquipo,false);
    //botonMnRecomendaciones.addEventListener('click',this.nxtMenu,false);
    //botonMnTipos.addEventListener('click',this.nxtMenu,false);
    //botonMnMorfologia.addEventListener('click',this.nxtMenu,false);
    //botonMnHabitats.addEventListener('click',this.nxtMenu,false);
    //botonMnSonidos.addEventListener('click',this.nxtMenu,false);
    },

    nxtMnEquipo: function(){
      location.href="equipo.html";
    }
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}