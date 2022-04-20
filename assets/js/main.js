$(function() {

$("#valorinicial, #ipi, #st, #icms, #lucro").keyup(function(){


var total = 0;    	
var valorInicial = Number($("#valorinicial").val());
var ipi = Number($("#ipi").val());
var st = Number($("#st").val());
var icms = Number($("#icms").val());
var lucro = Number($("#lucro").val());

var ipiSoma = (valorInicial * (ipi / 100))
var stSoma = (valorInicial * (st / 100))
var icmsSoma = (valorInicial * (icms / 100))

var total = (valorInicial + ipiSoma + stSoma + icmsSoma) * lucro

$('#total').val(parseFloat((total.toFixed(2))));

});
});

