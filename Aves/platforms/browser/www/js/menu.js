var app={
    
  inicio: function(){
    this.iniciaBtnMenu();
    this.iniciaFastClick();
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
  
  iniciaBtnMenu: function(){
    var botonHome = document.querySelector('#imgHome');
    var botonMnEquipo = document.querySelector('#btnMnEqpo');
    var botonMnRecomendaciones = document.querySelector('#btnMnRcmd');
    var botonMnTipos = document.querySelector('#btnMnTpos');
    var botonMnMorfologia = document.querySelector('#btnMnMorf');
    var botonMnHabitats = document.querySelector('#btnMnHbit');
    var botonMnSonidos = document.querySelector('#btnMnSnds');
    
    botonHome.addEventListener('click',this.nxtMnHome,false);
    botonMnEquipo.addEventListener('click',this.nxtMnEquipo,false);
    botonMnRecomendaciones.addEventListener('click',this.nxtRecomendacion,false);
    botonMnTipos.addEventListener('click',this.nxtTiposAves,false);
    //botonMnMorfologia.addEventListener('click',this.nxtMenu,false);
    botonMnHabitats.addEventListener('click',this.nxtMnHabitats,false);
    botonMnSonidos.addEventListener('click',this.nxtSonidos,false);
    },

    nxtMnHome: function(){
      location.href="index.html";
    },
    nxtMnEquipo: function(){
      location.href="equipo.html";
    },

    nxtRecomendacion: function(){
      location.href="recomendacion.html";
    },

    nxtMnHabitats: function(){
      location.href="habitats.html";
    },

    nxtTiposAves: function(){
      location.href="tipos.html";
    },

    nxtSonidos: function(){
      location.href="sonido.html";
    }

};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}
