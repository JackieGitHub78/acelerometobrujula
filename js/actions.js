//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});
var ac = {
    success: function(a){
        $('#acelerometro h2').html('X: '+a.x+'<br>Y: '+a.y+'<br>Z: '+a.z);
    },
    error: function(e){
        alert(e.code);
    },
    iniciar: function(){
        if(!ac.watchID){
            ac.watchID = navigator.accelerometer.watchAcceleration(ac.success, ac.error, ac.options);
        }
    },
    datener: function(){
        if(ac.watchID){
            navigator.accelerometer.clearWatch(ac.watchID);
            ac.watchID = null;
            $('#acelerometro h2').text('Detenido');
        }
    },
    watchID: null,
    options: {frequency: 500}
};

var fn = {
    init: function(){
        $('#acIni').tap(ac.iniciar);
        $('#acDet').tap(ac.datener);
    },
    ready: function(){
        document.addEventListener("deviceready",fn.init,false);
    }
}
$(fn.ready);